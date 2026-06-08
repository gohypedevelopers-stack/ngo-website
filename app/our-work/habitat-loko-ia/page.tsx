import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Anchor, ChevronRight, HelpCircle } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Habitat & Loko Iʻa Restoration — Hui Nehu',
  description: 'Physical restoration of estuarine systems, traditional fishponds, and cultivation of heat-tolerant corals.',
}

export default function HabitatLokoIaPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Estuarine environments and traditional fishponds background"
            fill
            className="object-cover object-center opacity-25 select-none pointer-events-none"
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
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase block mb-2">Program 1</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Habitat & Loko Iʻa Restoration</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Targeting the physical interface of land and sea. We rebuild degraded coastal walls, re-establish stream estuaries, and plant resilient species.
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
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Estuarine Rebirth</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Estuaries represent the delicate nurseries where freshwater streams meet ocean environments. These brackish zones are the natural home of schooling nehu and juvenile fish species.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Our team works to remove invasive flora, restore natural freshwater flow vectors, and clear sediment blockages. This physical rehabilitation ensures cleaner, oxygen-rich waters reach coastal reef flats.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">Estuarine Core Targets</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full shrink-0" />
                    Re-establishing natural freshwater flow paths
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full shrink-0" />
                    Removing sediment blockages in coastal streams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full shrink-0" />
                    Creating safe nurseries for endemic forage fish
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:flex-row-reverse">
            <Reveal className="lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Revitalizing Loko Iʻa</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Loko iʻa (traditional Hawaiian fishponds) are marvels of ancient aquaculture engineering. By regulating coastal salinity and tides, they serve as natural crop generators and shelter zones for target species.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Hui Nehu partners directly with local community practitioners, families, and schools to reconstruct degraded rock walls (kuapā), repair sluice gates (mākāhā), and manage native species balances.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <h3 className="text-lg font-bold text-amber-300 mb-3">Loko Iʻa Milestones</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-300 rounded-full shrink-0" />
                    Kuapā wall physical dry-stack stone repair
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-300 rounded-full shrink-0" />
                    Re-integrating ancestral sluice gate mechanics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-amber-300 rounded-full shrink-0" />
                    Empowering local families to co-manage ponds
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 3 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Resilient Reef Cultivation</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Ocean temperatures are changing, demanding active evolutionary support. We propagate resilient, thermal-tolerant coral strains alongside native limu (seaweed) to anchor structural reef platforms.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                By restoring native limu stocks, we outcompete invasive algae strains and create feeding structures that shelter marine life from predators and tidal surges.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <h3 className="text-lg font-bold text-teal-400 mb-3">Reef Core Activities</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Cultivating thermal-tolerant coral strains
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Native limu distribution and planting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Stabilizing damaged reef framework matrices
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
