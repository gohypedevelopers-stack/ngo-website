'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'The Crisis', href: '/the-crisis' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'The Hui', href: '/the-hui' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'News & Research', href: '/news-research' },
]

export function SiteNav({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? theme === 'light'
            ? 'border-b border-slate-200 bg-white/80 py-3 backdrop-blur-md shadow-sm'
            : 'border-b border-white/10 bg-slate-950/80 py-3 backdrop-blur-md shadow-lg'
          : 'border-b border-transparent bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Hui Nehu Logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain bg-white rounded-lg p-0.5 shadow-sm"
            priority
          />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "group relative whitespace-nowrap text-xs font-semibold tracking-wide transition-colors lg:text-sm",
                  theme === 'light' && !scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  theme === 'light' && !scrolled ? "bg-teal-600" : "bg-teal-400"
                )} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/get-involved/investment-tiers"
            className={cn(
              "hidden whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all xl:inline-block xl:px-5 xl:text-sm backdrop-blur-sm",
              theme === 'light' && !scrolled
                ? "border-slate-900/20 bg-slate-900/5 text-slate-900 hover:bg-slate-900 hover:text-white"
                : "border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-950"
            )}
          >
            Invest now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden",
              theme === 'light' && !scrolled
                ? "text-slate-900 hover:bg-slate-900/10"
                : "text-white hover:bg-white/10"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t backdrop-blur-xl transition-all duration-300 lg:hidden',
          theme === 'light'
            ? 'border-slate-200 bg-white/95'
            : 'border-white/10 bg-slate-950/95',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  theme === 'light'
                    ? "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/get-involved/investment-tiers"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-2 block rounded-full px-3 py-2.5 text-center text-sm font-bold transition-colors",
                theme === 'light'
                  ? "bg-slate-900 text-white hover:bg-teal-600"
                  : "bg-white text-slate-950 hover:bg-teal-400"
              )}
            >
              Invest now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
