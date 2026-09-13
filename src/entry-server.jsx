import React from 'react'
import { PassThrough } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export function render(url) {
  return new Promise((resolve, reject) => {
    let didError = false
    const output = new PassThrough()
    const chunks = []

    output.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
    output.on('end', () => {
      if (didError) reject(new Error('SSR rendering failed'))
      else resolve(Buffer.concat(chunks).toString('utf8'))
    })
    output.on('error', reject)

    const stream = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          stream.pipe(output)
        },
        onShellError(error) {
          reject(error)
        },
        onError(error) {
          didError = true
          console.error(error)
        },
      },
    )
  })
}
