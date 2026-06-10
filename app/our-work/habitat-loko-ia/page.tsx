import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Shield, Globe, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Habitat & Loko Iʻa Restoration — Hui Nehu',
  description: 'We don’t just restore coral — we restore the entire food web through traditional wisdom and marine science.',
}

export default function HabitatLokoIaPage() {
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
                    <Anchor className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 1: Habitat & Loko Iʻa
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  We Don’t Just Restore Coral —<br />We Restore the Entire Food Web
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Restoring estuarine habitats, coral reefs, and traditional fishponds (loko iʻa). Propagating thermal-tolerant coral and native limu using traditional cultivation and modern asexual propagation methods.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/reef_split.png"
                    alt="Habitat & Loko I'a Restoration"
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

      {/* Content Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
          
          {/* Section Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Keystone Focus */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-cyan-50 text-cyan-600 mb-5">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Keystone Focus</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Restoring foundational habitats triggers a trophic cascade that revitalizes the entire coastal ecosystem.
                </p>
              </div>
            </Reveal>

            {/* Ahupuaʻa Link */}
            <Reveal delay={150}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-amber-50 text-amber-600 mb-5">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Ahupuaʻa Link</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Ancient Hawaiians built 300+ fishponds (loko iʻa) and managed freshwater flow to protect downstream coral nurseries. We revive this 1,000-year-old wisdom.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Target Metric Segment */}
          <Reveal delay={200}>
            <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-8 sm:p-12 shadow-xs relative overflow-hidden">
              <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 flex flex-col items-start">
                  <span className="text-xs font-mono font-bold tracking-widest text-teal-600 uppercase mb-2">Target Metric</span>
                  <div className="flex items-baseline text-6xl sm:text-7xl font-serif font-bold text-teal-700">
                    <AnimatedCounter value={70} suffix="%" />
                  </div>
                  <span className="mt-2 text-xs font-semibold tracking-wider uppercase text-slate-500">Coral Survival Rate</span>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg font-light text-slate-700 leading-relaxed">
                    Target for pilot sites (integrating Indigenous Ecological Knowledge + modern marine science).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
