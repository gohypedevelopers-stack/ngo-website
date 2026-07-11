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

      {/* Coming Soon Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-dashed border-teal-200 bg-white px-8 py-16 text-center shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600 mb-4">
                Coming Soon
              </p>
              <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                Reports, datasets, and research updates are being prepared.
              </h2>
              <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-slate-600 max-w-2xl mx-auto">
                The Nā Kiaʻi Kai Dataset Console will house standardized environmental data, monitoring summaries, and publication-ready research material.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
