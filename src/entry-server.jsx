import { renderToPipeableStream } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { PassThrough } from 'node:stream'
import App from './App.jsx'

export function render(url) {
  return new Promise((resolve, reject) => {
    let didError = false
    const stream = new PassThrough()
    const chunks = []

    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    stream.on('end', () => {
      if (didError) reject(new Error('Server rendering completed with an error.'))
      else resolve(Buffer.concat(chunks).toString('utf8'))
    })
    stream.on('error', reject)

    const { pipe } = renderToPipeableStream(
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>,
      {
        onAllReady() {
          pipe(stream)
        },
        onError(error) {
          didError = true
          console.error(error)
        },
      },
    )
  })
}
