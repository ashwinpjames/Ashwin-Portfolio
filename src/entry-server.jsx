import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = ''
    let didError = false

    const stream = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          const writable = {
            write(chunk) {
              html += Buffer.from(chunk).toString('utf8')
            },
            end() {
              if (didError) reject(new Error('SSR rendering failed'))
              else resolve(html)
            },
            on() {},
            destroy(error) {
              if (error) reject(error)
            },
          }
          stream.pipe(writable)
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
