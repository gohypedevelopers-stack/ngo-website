'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface StatItem {
  value: string
  label: string
}

export function CrisisStats({ stats }: { stats: StatItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.stat-card')
    // Reset before running animation to support page transitions
    gsap.set(cards, { opacity: 0, y: 20 })
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 0.1,
    })
  }, [stats])

  return (
    <div ref={containerRef} className="grid gap-5 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="stat-card opacity-0 h-full rounded-xl border border-slate-100 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
        >
          <div className="font-serif text-xl sm:text-2xl font-bold text-teal-955">
            {stat.value}
          </div>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500 font-light">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
