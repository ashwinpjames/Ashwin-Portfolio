import test from 'node:test'
import assert from 'node:assert/strict'
import { JSDOM } from 'jsdom'
import { getPageMeta } from '../src/seo.js'

const dom = new JSDOM('<!doctype html><html><head></head><body><div id="app"></div></body></html>', { url: 'http://localhost/' })
globalThis.window = dom.window
globalThis.document = dom.window.document
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} })
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true })
globalThis.IS_REACT_ACT_ENVIRONMENT = true
const { act } = await import('react')
const { mount, delivery } = await import('../.test-build/ui-fixture.js')
let root
await act(async () => { root = mount(document.getElementById('app')) })
const click = async (text) => {
  const link = [...document.querySelectorAll('a')].find((link) => link.textContent === text)
  await act(async () => { link.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true, button: 0 })) })
}
const submit = async (form) => act(async () => { form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true })) })

// The fixture replaces the email transport at bundle time. No enquiry is transmitted.
test('extra article routes and trailing-slash navigation retain authoritative metadata', async () => {
  for (const [text, path] of [['ROAS article', '/blog/roas-vs-roi'], ['Attribution article', '/blog/why-attribution-matters-performance-marketing'], ['About with slash', '/about']]) {
    await click(text)
    const [title, description] = getPageMeta(path)
    assert.equal(document.title, title)
    assert.equal(document.querySelector('meta[name="description"]').content, description)
    assert.equal(document.querySelector('meta[property="og:title"]').content, title)
    assert.equal(document.querySelector('meta[property="og:type"]').content, path.startsWith('/blog/') ? 'article' : 'website')
    assert.equal(document.querySelector('link[rel="canonical"]').href, `https://www.ashwinjames.com${path}`)
  }
  await click('Unknown page')
  assert.equal(document.querySelector('meta[name="robots"]').content, 'noindex,follow')
  assert.equal(document.title, 'Page not found | Ashwin James')
})

test('only successful enquiry delivery produces one lead event; duplicate submits are locked', async () => {
  window.history.replaceState(null, '', '/contact')
  delivery.reset(); window.dataLayer = []
  const form = document.querySelector('.contact-form')
  await submit(form); await submit(form)
  assert.equal(delivery.calls.length, 1)
  assert.equal(window.dataLayer.length, 0)
  await act(async () => { delivery.pending.resolve({ status: 200 }) })
  assert.deepEqual(window.dataLayer, [{ event: 'generate_lead', form_id: 'contact', page_path: '/contact' }])
  assert.match(form.textContent, /sent successfully/)
})

test('failed delivery remains retryable and produces no lead event', async () => {
  delivery.reset(); window.dataLayer = []
  const form = document.querySelector('.contact-form')
  await submit(form)
  const originalError = console.error
  console.error = () => {}
  try { await act(async () => { delivery.pending.reject(new Error('Simulated delivery failure')) }) }
  finally { console.error = originalError }
  assert.equal(window.dataLayer.length, 0)
  assert.match(form.textContent, /Something went wrong/)
  assert.equal(form.querySelector('button[type="submit"]').disabled, false)
  await submit(form)
  assert.equal(delivery.calls.length, 2)
  await act(async () => { delivery.pending.resolve({ status: 200 }) })
  assert.equal(window.dataLayer.length, 1)
})

test('case study form success is distinct and analytics failure cannot break delivery', async () => {
  delivery.reset(); window.dataLayer = []
  const form = document.querySelector('.case-study-lead-form form')
  await submit(form)
  await act(async () => { delivery.pending.resolve({ status: 200 }) })
  assert.equal(window.dataLayer[0].form_id, 'case_study')
  delivery.reset(); window.dataLayer = { push() { throw new Error('Unavailable measurement') } }
  await submit(form)
  await act(async () => { delivery.pending.resolve({ status: 200 }) })
  assert.doesNotMatch(form.textContent, /Something went wrong/)
})

test('checklist request is not a client lead and retains an online access path', async () => {
  delivery.reset(); window.dataLayer = []
  const input = document.querySelector('#resource-email')
  await act(async () => {
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(input, 'test@example.com')
    input.dispatchEvent(new window.Event('input', { bubbles: true }))
  })
  const form = input.closest('form')
  await submit(form)
  assert.equal(delivery.calls.length, 1)
  assert.equal(window.dataLayer.length, 0)
  await act(async () => { delivery.pending.resolve({ status: 200 }) })
  assert.deepEqual(window.dataLayer, [{ event: 'resource_request', form_id: 'homepage_checklist', page_path: '/contact' }])
  assert.ok(document.querySelector('a[href="/resources/meta-ads-launch-checklist"]'))
  assert.ok(!JSON.stringify(window.dataLayer).includes('test@example.com'))
})

test('contact clicks are not successful leads and do not include destination or message', async () => {
  window.dataLayer = []
  const anchor = [...document.querySelectorAll('a')].find((link) => link.textContent === 'Test WhatsApp')
  // Stop navigation while allowing the delegated document listener to inspect the click.
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
  await click('Test WhatsApp')
  assert.deepEqual(window.dataLayer, [{ event: 'contact_click', form_id: 'whatsapp', page_path: '/contact' }])
  assert.ok(!JSON.stringify(window.dataLayer).includes('private'))
})

test('chat enquiry is counted only after delivery, with no personal answers in analytics', async () => {
  delivery.reset(); window.dataLayer = []
  const press = async (label) => {
    const button = [...document.querySelectorAll('button')].find((el) => el.textContent === label || el.getAttribute('aria-label') === label)
    assert.ok(button, label)
    await act(async () => button.click())
  }
  const answer = async (value) => {
    const field = document.querySelector('#ai-chat-input')
    await act(async () => {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(field, value)
      field.dispatchEvent(new window.Event('input', { bubbles: true }))
    })
    await submit(field.closest('form'))
  }
  await press('Start a website enquiry')
  await answer('Example Tester')
  await press('Lead generation')
  await answer('501234567')
  await press('Skip website')
  await press('Below AED 3,000')
  await answer('test@example.com')
  await press('Skip this question')
  await press('Skip this question')
  assert.equal(delivery.calls.length, 1)
  assert.equal(window.dataLayer.length, 0)
  const restart = [...document.querySelectorAll('button')].find((el) => el.textContent === 'Ask more / Start again')
  assert.equal(restart.disabled, true)
  await act(async () => delivery.pending.resolve({ status: 200 }))
  assert.deepEqual(window.dataLayer, [{ event: 'generate_lead', form_id: 'chatbot', page_path: '/contact' }])
  assert.equal(restart.disabled, false)
  assert.ok(!JSON.stringify(window.dataLayer).includes('test@example.com'))
})

test.after(async () => { await act(async () => root.unmount()); dom.window.close() })
