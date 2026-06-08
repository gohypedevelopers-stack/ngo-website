import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, ShieldAlert, Zap } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Bio-Cleaner & Pollution Response — Hui Nehu',
  description: 'Deploying advanced septic solutions and intercepting land-based pollution before it hits reefs.',
}

export default function BioCleanerPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/scuba_diver.png"
            alt="Diver inspecting reef environment background"
            fill
            className="object-cover object-center opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/our-work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Programs
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-teal-400 block mb-2 uppercase">Program 2</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Bio-Cleaner & Pollution Response</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Mitigating land-based nutrient pollution directly at the source. We coordinate septic conversions and physical debris extraction campaigns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-24">
          
          {/* Pillar 1 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Source Interception</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Wastewater discharging from 88,000 statewide cesspools is the primary silent killer of Hawaiʻi coral systems. By intercepting these discharges, we cut off the flow of harmful nitrates and phosphates before they enter the shoreline water table.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Hui Nehu facilitates the design, funding, and deployment of advanced individual wastewater treatment systems (IWS). These eco-friendly containment systems treat waste to secondary levels, protecting groundwater channels.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all">
                <div className="flex items-center gap-2 text-teal-400 mb-4">
                  <ShieldAlert className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">Preventative Defense</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Interception Metrics</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-400 shrink-0" />
                    Targeted regional cesspool replacements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-400 shrink-0" />
                    90%+ reduction in coastal nutrient loading metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-teal-400 shrink-0" />
                    Long-term soil absorption and bio-filter checks
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:flex-row-reverse">
            <Reveal className="lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Commercial Synergy</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                To fund and scale wastewater operations, we coordinate with the commercial waste utility startup, the **Bio Cleaner Septic Jockey** service truck fleet.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                This commercial integration allows corporate, private-sector logistics and utility profits to cross-fund community-focused non-profit restoration programs and cesspool changeouts for low-income families.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all">
                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                  <Zap className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">Operational Engine</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Septic Jockey Utility</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Utility truck operations funding cleanups
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Bridging public service with sustainable margins
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Accelerating conversion capacity beyond municipal limits
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 3 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Debris Mitigation</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Micro-plastics and heavy ghost nets actively shred reefs and trap marine life. Direct physical removal is critical to clear space for restoration sites.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Hui Nehu has established a targeted field target to extract **10+ tons of marine debris** during our first year of active field operations, focusing on estuaries, local fishponds, and nearshore reefs.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all">
                <h3 className="text-lg font-bold text-teal-400 mb-3">Year 1 Cleanup Strategy</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Removing derelict fishing gear (ghost nets)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Targeting 10+ tons of plastic & debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Sorting and recycling polymers for 3D printed products
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
