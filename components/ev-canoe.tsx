import Image from 'next/image'
import { ArrowRight, VolumeX, Leaf, Shield, Users } from 'lucide-react'
import { Reveal } from './reveal'

export function EvCanoe() {
  return (
    <section className="relative bg-teal-950 py-24 sm:py-32 overflow-hidden text-teal-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Image Content (Left) */}
          <div className="relative order-2 lg:order-1">
            <Reveal delay={100}>
              <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-teal-800/50">
                <Image
                  src="/ev_canoe.png"
                  alt="Modern Hawaiian fishing canoe floating on shallow turquoise ocean water"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative accent behind image */}
              <div className="absolute -top-12 -left-12 -z-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl opacity-60" />
            </Reveal>
          </div>
          
          {/* Text Content (Right) */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-teal-400"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
                  Innovation in Action
                </span>
              </div>
              
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                The ʻŌpelu EV Fishing Canoe
              </h2>
              
              <p className="mb-12 text-lg leading-relaxed text-teal-100/80">
                Honoring the past, powering the future. Inspired by traditional fishing villages like Miloliʻi and Hoʻokena, this modern vessel is built to protect Hawaiʻi&apos;s marine life while preserving local food sovereignty.
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900/50 border border-teal-700/50 text-teal-400">
                      <VolumeX className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white">Silent Operation</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-teal-100/70">
                    Zero engine noise ensures zero spooking of fish populations during selective harvesting.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900/50 border border-teal-700/50 text-teal-400">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white">Zero Emissions</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-teal-100/70">
                    Pure electric power entirely eliminates fuel spills to actively protect fragile coral reefs.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900/50 border border-teal-700/50 text-teal-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white">Unsinkable Design</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-teal-100/70">
                    Traditional wide-hull tracking for throw nets, built from advanced 3D-printed marine composite.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-900/50 border border-teal-700/50 text-teal-400">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-white">Mālama ʻĀina Pillars</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-teal-100/70">
                    Fleet deployment to traditional communities, inline marine sensors for real-time data collection, and youth Lawaiʻa ʻOhana Camps.
                  </p>
                </div>
              </div>

              <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-8 py-4 text-sm font-bold text-teal-950 transition-all hover:bg-teal-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                Learn About the Restoration Fleet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
