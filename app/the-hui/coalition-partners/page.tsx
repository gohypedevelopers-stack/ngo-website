import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Share2, Scale, BarChart3, Building } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Coalition & Partners — Hui Nehu',
  description: 'Operating explicitly as a collaborative catalyst rather than a competitor. Discover our partnerships.',
}

const targetPartners = [
  'Hawaiʻi Community Foundation',
  'National Fish and Wildlife Foundation',
  'NOAA Pacific Islands Region',
  'DLNR Division of Aquatic Resources',
  'University of Hawaiʻi Marine Programs',
  '1% for the Planet',
]

export default function CoalitionPartnersPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Collaboration partners background"
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
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Our Network</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Coalition & Partners</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Operating explicitly as a collaborative catalyst rather than a competitor, Hui Nehu actively builds unified coalitions to empower community-led projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-24">
          
          {/* Pillars of Coalition */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <Reveal delay={100}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all">
                <div>
                  <Share2 className="h-8 w-8 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Resource & Technology Sharing</h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-light">
                    Providing local community associations with open-source marine science data, technical expertise, and direct access to advanced Bio Cleaner septic equipment. We share tools so communities don&apos;t have to double-purchase expensive machinery.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal delay={200}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all">
                <div>
                  <Scale className="h-8 w-8 text-amber-300 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Joint Advocacy</h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-light">
                    Linking smaller, isolated organizations into a unified political coalition to reshape state-level environmental policy, streamline restoration permissions, and unlock substantial federal funding grants.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal delay={300}>
              <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full hover:border-cyan-500/20 transition-all">
                <div>
                  <BarChart3 className="h-8 w-8 text-teal-400 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Capacity Building</h3>
                  <p className="text-xs text-slate-355 leading-relaxed font-light">
                    Elevating volunteer-led ahupuaʻa and loko iʻa projects by providing them with institutional administrative backbones, scientific logging validation, and professional safety gear.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Target Partners List */}
          <Reveal>
            <div className="border border-white/5 bg-slate-900/40 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">Target Institutional Partners</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {targetPartners.map((partner) => (
                  <div key={partner} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4">
                    <Building className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
