import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Landmark, Users, GraduationCap, Waves } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Advisory Board — Hui Nehu',
  description: 'Technical, political, and cultural oversight for Hui Nehu.',
}

const advisoryPillars = [
  {
    title: 'DLNR Division of Aquatic Resources',
    desc: 'Aligning active propagation and estuary works with state regulations and conservation benchmarks.',
    icon: Landmark,
  },
  {
    title: 'University of Hawaiʻi Marine Programs',
    desc: 'Validating our citizen science water quality and biological monitoring with peer-reviewed methodologies.',
    icon: GraduationCap,
  },
  {
    title: 'Maui County Environmental Offices',
    desc: 'Coordinating wastewater septic transitions and regional zoning actions with public utility infrastructure.',
    icon: Waves,
  },
  {
    title: 'Traditional Fishing Communities',
    desc: 'Securing multi-generational heritage guidelines around selective harvesting and traditional loko i\u02BBa pond rules.',
    icon: Users,
  },
]

export default function AdvisoryBoardPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Ocean environment background"
            fill
            className="object-cover object-center opacity-20 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/the-hui"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to The Hui
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Governance</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Advisory Board</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Our standing Advisory Board ensures deep technical, political, and cultural alignment across state agencies, academia, and local coastal practitioners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Board Pillars Grid */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={index * 100}>
                  <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-450 border border-cyan-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 font-serif">
                        {pillar.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-300 font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
