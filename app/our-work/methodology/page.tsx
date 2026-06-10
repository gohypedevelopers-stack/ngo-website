import Image from 'next/image'
import { Compass, Network, Award, ShieldAlert } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Our Methodology — Hui Nehu',
  description: 'Integrating modern marine science with Indigenous Ecological Knowledge to target a 70% coral survival rate.',
}

export default function MethodologyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Compass className="h-5 w-5 animate-spin-slow" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Our Methodology &mdash; The science behind the work
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Indigenous Knowledge + Modern Science:<br />The Most Effective Conservation
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  The most resilient conservation integrates the deep observational knowledge of Indigenous Hawaiian practitioners with peer-reviewed marine biology.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/methodology_integration.png"
                    alt="Scientific and Native Hawaiian practitioner outplanting coral"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Three Pillars of Action</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Pillar 01 */}
            <Reveal delay={100}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-teal-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-600 block mb-2">Pillar 01</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Coral & Limu Propagation</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Combining traditional cultivation with modern asexual propagation methods to rebuild foundational nearshore habitats.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-teal-600 font-semibold">
                  Cultivation + asexual propagation
                </div>
              </div>
            </Reveal>

            {/* Pillar 02 */}
            <Reveal delay={200}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-amber-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 block mb-2">Pillar 02</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Ahupuaʻa & Loko Iʻa Management</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Fostering holistic watershed protection alongside ancestral fishpond revival to balance coastal ecosystems.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-amber-600 font-semibold">
                  Holistic watershed + fishponds
                </div>
              </div>
            </Reveal>

            {/* Pillar 03 */}
            <Reveal delay={300}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-600 block mb-2">Pillar 03</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Citizen Science Rigor</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Translating standardized community observations and data logs into robust scientific datasets accepted by policy makers.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-cyan-600 font-semibold">
                  Community data → robust science
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Ahupuaʻa Model & Core Metric */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
          
          {/* The Ahupua'a Model Card */}
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 text-cyan-600 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50">
                  <Network className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900">The Ahupuaʻa Model</h3>
              </div>
              <p className="text-base text-slate-650 leading-relaxed font-light">
                Traditional Hawaiian land system from mountain peak (mauka) to ocean (makai). Kānāwai — “the equal sharing of water” — was the source of all wealth. Hui Nehu makes this operational in the 21st century.
              </p>
            </div>
          </Reveal>

          {/* Core Metric Segment */}
          <Reveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <Image
                src="/coral_survival_bg.png"
                alt="Coral nursery restoration"
                fill
                className="object-cover object-center"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/70" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
                <div className="flex items-center gap-5 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase mb-1">Core Metric</span>
                    <div className="flex items-baseline text-5xl font-serif font-bold text-white">
                      <AnimatedCounter value={70} suffix="%" />
                    </div>
                    <span className="mt-1 text-[10px] font-semibold tracking-widest uppercase text-slate-400">Coral Survival Rate</span>
                  </div>
                </div>

                <div className="h-12 w-px bg-white/15 hidden sm:block" />

                <p className="text-sm font-light text-slate-300 leading-relaxed">
                  Targeting 70% coral survival rate at pilot sites — above national average.
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
