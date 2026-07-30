import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 */
export function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}
