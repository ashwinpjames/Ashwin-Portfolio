import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
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
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
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
