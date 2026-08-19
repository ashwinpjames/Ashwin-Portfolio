import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const root = document.documentElement
    const move = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
      root.classList.add('cursor-active')
    }
    const leave = () => root.classList.remove('cursor-active')

    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
      root.classList.remove('cursor-active')
    }
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
