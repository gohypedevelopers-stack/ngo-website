'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  {
    label: 'The Crisis',
    href: '/the-crisis',
    dropdown: [
      { label: 'The Nehu (Keystone)', href: '/the-crisis/the-nehu' },
      { label: 'The Cesspool Crisis', href: '/the-crisis/cesspool-problem' },
      { label: 'Fragmented Response', href: '/the-crisis/fragmented-response' },
    ],
  },
  {
    label: 'Our Work',
    href: '/our-work',
    dropdown: [
      { label: 'Habitat & Loko Iʻa', href: '/our-work/habitat-loko-ia' },
      { label: 'Bio-Cleaner & Pollution', href: '/our-work/bio-cleaner' },
      { label: 'Community Science', href: '/our-work/community-science' },
      { label: 'Methodology', href: '/our-work/methodology' },
    ],
  },
  {
    label: 'The Hui',
    href: '/the-hui',
    dropdown: [
      { label: 'Our Story', href: '/the-hui/story-ahupuaa' },
      { label: 'Team & Leadership', href: '/the-hui/team' },
      { label: 'Partners & Coalition', href: '/the-hui/coalition-partners' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    dropdown: [
      { label: 'Invest', href: '/get-involved/investment-tiers' },
      { label: 'Volunteer', href: '/get-involved/volunteer-workdays' },
      { label: 'Partner', href: '/get-involved/partner-with-us' },
    ],
  },
  { label: 'News & Research', href: '/news-research' },
  { label: 'Contact', href: '/contact' },
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
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className={cn(
                  "group relative whitespace-nowrap text-xs font-semibold tracking-wide transition-colors lg:text-sm flex items-center gap-1 py-2",
                  theme === 'light' && !scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className={cn(
                  "absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  theme === 'light' && !scrolled ? "bg-teal-600" : "bg-teal-400"
                )} />
              </a>

              {link.dropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-56 pt-2">
                  <ul className={cn(
                    "rounded-xl border p-2 shadow-lg backdrop-blur-md",
                    theme === 'light'
                      ? "border-slate-200 bg-white/95 text-slate-800"
                      : "border-white/10 bg-slate-950/95 text-slate-200"
                  )}>
                    {link.dropdown.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          className={cn(
                            "block rounded-lg px-4 py-2.5 text-xs font-medium transition-colors",
                            theme === 'light'
                              ? "hover:bg-slate-100 hover:text-teal-600"
                              : "hover:bg-white/10 hover:text-teal-400"
                          )}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
            Donate now
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
          open ? 'max-h-[550px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href} className="flex flex-col">
              {link.dropdown ? (
                <>
                  <span className={cn(
                    "px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-wider",
                    theme === 'light' ? "text-slate-400" : "text-slate-500"
                  )}>
                    {link.label}
                  </span>
                  <div className="flex flex-col gap-0.5 pl-3 border-l border-teal-500/20 ml-3 mb-2">
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          theme === 'light'
                            ? "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
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
              )}
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
              Donate now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
