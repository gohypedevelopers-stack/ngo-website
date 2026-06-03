import Image from 'next/image'
import { ArrowRight, MoveHorizontal, ArrowDownToLine, DollarSign } from 'lucide-react'
import { Reveal } from './reveal'

export function UpenaInitiative() {
  return (
    <section id="initiatives" className="relative bg-[#f8fafc] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-teal-500"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                  The ʻUpena ʻŌpelu Initiative
                </span>
              </div>
              
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Reviving the Sacred Net of the Hawaiian Ocean
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                For over a thousand years, the ʻupena ʻōpelu was the primary tool for sustainable deep-water fishing. Today, we are bringing this precision engineering marvel back to life. By partnering with world-class manufacturers, we provide commercial fishermen with authentic, sustainable hoop nets—replacing damaging cast and gill nets to protect our declining ʻōpelu populations.
              </p>

              {/* Data Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <MoveHorizontal className="h-6 w-6 text-teal-500 mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">10-12<span className="text-base text-slate-500">ft</span></div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Hoop Diameter</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <ArrowDownToLine className="h-6 w-6 text-teal-500 mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">15-20<span className="text-base text-slate-500">ft</span></div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bag Depth</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <DollarSign className="h-6 w-6 text-teal-500 mb-4" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">650<span className="text-base text-slate-500">k</span></div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Seed Round</div>
                </div>
              </div>

              <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg">
                View the Net Product Line
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Image */}
          <div className="relative">
            <Reveal delay={100}>
              <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/upena_net.png"
                  alt="Massive 12-foot hoop net underwater with silver fish"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Decorative accent behind image */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-teal-100 blur-3xl opacity-60" />
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}
