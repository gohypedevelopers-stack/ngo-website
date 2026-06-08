import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Database, LineChart, Users } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Nā Kiaʻi Kai Community Science — Hui Nehu',
  description: 'Training local community members in standardized marine ecological survey methodologies.',
}

export default function CommunitySciencePage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/team_stewards.png"
            alt="Local community members researching marine biology background"
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
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Program 3</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Nā Kiaʻi Kai Community Science</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Stewardship powered by the community. We train local residents, fishers, and youth to gather peer-review grade ecological data.
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
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Community Empowerment</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                We believe that the people who live along the shoreline are its most natural protectors. By shifting the role of monitoring from visiting researchers to permanent residents, we build long-term regional capacity.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Our education and training programs are fully funded and open to youth, working fishers, and community leaders. We provide professional gear, dive training, and data logging devices to all participants.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <div className="flex items-center gap-2 text-amber-300 mb-4">
                  <Users className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">Stewardship Cohort</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Training Features</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    Standardized scientific methodology instruction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    Dive safety and ecological survey certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-400 shrink-0" />
                    Generations-deep local ecosystem observations
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 2 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:flex-row-reverse">
            <Reveal className="lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Scientific Disciplines</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Volunteer groups are trained to carry out rigorous data collection across three specific scientific fields of study to maintain comprehensive water and habitat assessments.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                This covers Visual fish and biomass population surveys, Native and invasive limu (seaweed) distribution mapping, and Water quality/bacterial testing (measuring nutrient levels and algal bloom cycles).
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                  <LineChart className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">Field Work scope</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Core Disciplines</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Visual fish counts and biomass estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Limu distribution and species tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    Physical, chemical, and biological water assays
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Pillar 3 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Data Sovereignty</h2>
              <p className="text-slate-300 leading-relaxed font-light mb-4">
                Data generated by communities belongs to communities. We convert local logs into publication-quality datasets, ensuring local stewards hold primary authority over regional ecological findings.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                By standardizing collection parameters, our community science results are accepted and verified by university marine science departments and state conservation regulators.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm hover:border-cyan-500/20 transition-all">
                <div className="flex items-center gap-2 text-teal-400 mb-4">
                  <Database className="h-5 w-5" />
                  <span className="text-xs font-bold tracking-wider uppercase">Information Autonomy</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Sovereignty Protocols</h3>
                <ul className="space-y-3 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Community ownership over geographic databanks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Transparent digital ledgers for data integrity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-teal-400 rounded-full shrink-0" />
                    Direct access for policy and legislative lobbying
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
