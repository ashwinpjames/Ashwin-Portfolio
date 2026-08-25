import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const root = document.documentElement
    let frame = 0
    let pending = null

    const move = (event) => {
      pending = { x: event.clientX, y: event.clientY }
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        if (pending) {
          root.style.setProperty('--cursor-x', `${pending.x}px`)
          root.style.setProperty('--cursor-y', `${pending.y}px`)
          root.classList.add('cursor-active')
        }
        pending = null
        frame = 0
      })
    }

    const leave = () => root.classList.remove('cursor-active')

    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
      root.classList.remove('cursor-active')
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
