import Image from 'next/image'
import Link from 'next/link'
import { Droplets, ShieldAlert, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Bio-Cleaner & Pollution Response — Hui Nehu',
  description: 'Deploying advanced septic solutions and intercepting land-based pollution before it hits reefs.',
}

export default function BioCleanerPage() {
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
                    <Droplets className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 2: Bio-Cleaner & Pollution Response
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Bio Cleaner Septic Jockey:<br />An Act of Mālama ʼAīna
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Deploying advanced Bio Cleaner septic systems to replace cesspools. Removing marine debris from Maui’s coastline. Responding to acute pollution events.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/underwate.png"
                    alt="Bio-Cleaner operations"
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
          
          {/* Section: The Bigger Picture */}
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 text-cyan-600 mb-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900">The Bigger Picture</h3>
              </div>
              <p className="text-base text-slate-650 leading-relaxed font-light mb-6">
                Bio Cleaner Septic Jockey is the commercial arm that directly funds the nonprofit’s conservation mission while addressing the cesspool crisis at scale.
              </p>
              <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50/30 p-4 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <span className="text-amber-600 mt-0.5">⚑</span>
                <p className="font-light">
                  <strong className="font-semibold text-slate-900">Note:</strong> Decide whether Bio Cleaner gets its own subdomain for commercial/investor audiences.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Target Metric Segment */}
          <Reveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <Image
                src="/bio_cleaner_bg.png"
                alt="Restored coral reef"
                fill
                className="object-cover object-center"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/70" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
                <div className="flex items-center gap-5 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase mb-1">Target Metric</span>
                    <div className="flex items-baseline text-5xl font-serif font-bold text-white">
                      <AnimatedCounter value={10} suffix="+" />
                    </div>
                    <span className="mt-1 text-[10px] font-semibold tracking-widest uppercase text-slate-400">Tons of Marine Debris Removed</span>
                  </div>
                </div>

                <div className="h-12 w-px bg-white/15 hidden sm:block" />

                <p className="text-sm font-light text-slate-300 leading-relaxed">
                  Year 1 Target — deploying Bio Cleaner septic systems and coordinating coastline debris removal across Maui County.
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
