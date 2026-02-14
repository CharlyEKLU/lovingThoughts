import { useEffect, useState } from 'react'

type UseTypewriterOptions = {
  startDelayMs?: number
  stepMs?: number
  enabled?: boolean
}

export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { startDelayMs = 650, stepMs = 42, enabled = true } = options

  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!enabled) return

    setTyped('')
    setDone(false)

    let isCancelled = false
    let intervalId: number | null = null

    const startDelayId = window.setTimeout(() => {
      if (isCancelled) return

      let i = 0
      intervalId = window.setInterval(() => {
        if (isCancelled) return

        i += 1
        setTyped(text.slice(0, i))

        if (i >= text.length) {
          setDone(true)
          if (intervalId !== null) window.clearInterval(intervalId)
          intervalId = null
        }
      }, stepMs)
    }, startDelayMs)

    return () => {
      isCancelled = true
      window.clearTimeout(startDelayId)
      if (intervalId !== null) window.clearInterval(intervalId)
    }
  }, [enabled, startDelayMs, stepMs, text])

  return { typed, done }
}
