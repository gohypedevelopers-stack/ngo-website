'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  /** The numeric value to count up to */
  value: number
  prefix?: string
  suffix?: string
  /** Number of decimal places to show */
  decimals?: number
  durationMs?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1800,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const prefersReduced = window.matchMedia(
              '(prefers-reduced-motion: reduce)',
            ).matches
            if (prefersReduced) {
              setDisplay(value)
              return
            }

            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1)
              // easeOutExpo
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
              setDisplay(value * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setDisplay(value)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, durationMs])

  const parsedDecimals = typeof decimals === 'number' && !isNaN(decimals) ? Math.min(Math.max(0, decimals), 3) : 0;

  const formatted = parsedDecimals === 0 
    ? Math.round(display).toLocaleString('en-US')
    : display.toLocaleString('en-US', {
        minimumFractionDigits: parsedDecimals,
        maximumFractionDigits: parsedDecimals,
      });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
