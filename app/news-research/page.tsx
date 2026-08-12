import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'News & Research — Hui Nehu',
  description: 'Standardized environmental datasets, coral survival monitoring, water quality testing, and regulatory milestones.',
}

export default function NewsResearchPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="dark" />

      {/* Split Hero Section */}
      <section className="relative bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-12 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-400"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400">
                    Nā Kiaʻi Kai Dataset Console
                  </span>
                </div>

                <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                  News & Research
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-4xl">
                  Showcasing publication-quality, standardized environmental datasets generated directly by our Nā Kiaʻi Kai Community Science program volunteers.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section with HM4 Image in Background */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-teal-200/60 bg-white py-24 px-8 sm:py-36 sm:px-16 text-center shadow-xl group min-h-[480px] flex flex-col justify-center items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/HM4.jpg"
                  alt="News and Research - HM4"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center opacity-95 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 max-w-3xl mx-auto space-y-5">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-teal-700 font-mono">
                  Coming Soon
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Reports, datasets, and research updates are being prepared.
                </h2>
                <p className="text-base sm:text-lg font-light leading-relaxed text-slate-800 max-w-2xl mx-auto">
                  The Nā Kiaʻi Kai Dataset Console will house standardized environmental data, monitoring summaries, and publication-ready research material.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
