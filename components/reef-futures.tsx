import Image from 'next/image'
import { ArrowRight, Fish, Sun, Shield } from 'lucide-react'
import { Reveal } from './reveal'

export function ReefFutures() {
  return (
    <section className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          
          {/* Text Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-teal-500"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
                  Hawaii Reef Futures
                </span>
              </div>
              
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Healing the Reef, Scaling the Blue Economy
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-slate-400">
                Hawaiʻi&apos;s coral reefs generate $800 million annually through ecotourism, yet they are threatened by the extractive wild aquarium trade. We are building a $33.6 billion sustainable alternative. From scaling commercial captive breeding of Yellow Tangs to restoring 800-year-old Loko Iʻa (fishponds), we are creating dignified marine restoration jobs that align economic growth with ecological health.
              </p>

              {/* Key Pillars */}
              <div className="space-y-6 mb-12 border-l border-slate-800 pl-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Fish className="h-4 w-4 text-teal-500" />
                    Marine Aquaculture
                  </div>
                  <p className="text-slate-400 text-sm">Captive-bred species replacing wild extraction.</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Sun className="h-4 w-4 text-teal-500" />
                    Reef Ecotourism
                  </div>
                  <p className="text-slate-400 text-sm">Protecting our $800M reef-based tourism industry.</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Shield className="h-4 w-4 text-teal-500" />
                    Workforce Transition
                  </div>
                  <p className="text-slate-400 text-sm">$18M in federal investments for coral restoration jobs.</p>
                </div>
              </div>

              <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-full border border-teal-500/50 bg-teal-500/10 px-8 py-4 text-sm font-bold text-teal-400 transition-all hover:bg-teal-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                Read the Policy Guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Split Screen Image (Dashboard aesthetic) */}
          <div className="relative">
            <Reveal delay={100}>
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl bg-slate-900 group">
                <Image
                  src="/reef_split.png"
                  alt="Split screen comparison of a thriving coral reef vs a degraded reef"
                  fill
                  className="object-cover"
                />
                
                {/* Dashboard Overlay UI */}
                <div className="absolute inset-0 border-[8px] border-slate-950/20 mix-blend-overlay pointer-events-none rounded-[2rem]" />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 rounded bg-slate-950/80 px-3 py-1 text-xs font-mono font-bold tracking-widest text-teal-400 backdrop-blur-md uppercase">
                  Target Condition
                </div>
                <div className="absolute top-4 right-4 rounded bg-slate-950/80 px-3 py-1 text-xs font-mono font-bold tracking-widest text-red-400 backdrop-blur-md uppercase">
                  Current Threat
                </div>
                
                {/* Center dividing line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20 backdrop-blur-sm -translate-x-1/2">
                  <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 bg-slate-950/80 flex items-center justify-center backdrop-blur-md">
                    <div className="h-1 w-1 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
