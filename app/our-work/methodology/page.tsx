import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Compass, ShieldAlert, Waves, Check } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Our Methodology — Hui Nehu',
  description: 'Integrating modern marine science with Indigenous Ecological Knowledge to target a 70% coral survival rate.',
}

export default function MethodologyPage() {
  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section (High Contrast Light Theme) */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <Link 
                  href="/our-work"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600 hover:text-teal-800 transition-colors mb-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Programs
                </Link>
                
                <span className="text-xs font-mono font-bold tracking-widest text-teal-600 block uppercase">
                  Core Methodology
                </span>
                
                <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Our Methodology
                </h1>
                
                <p className="mt-4 text-lg text-slate-650 font-light leading-relaxed max-w-2xl">
                  By integrating modern marine science with Indigenous Ecological Knowledge, our community-embedded conservation model targets a 70% coral survival rate in pilot sites.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/methodology_integration.png"
                    alt="Scientific and Native Hawaiian practitioner outplanting coral"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars of Methodology */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-20">
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <Reveal delay={100}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-600 block mb-2">Pillar 1</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Coral & Limu Propagation</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Rebuilding degraded reef ecosystems by combining traditional cultivation techniques with modern, asexual coral propagation methods. We select, fragment, and nurse heat-resilient coral micro-fragments to speed up calcification.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-teal-600 font-semibold">
                  Asexual fragmentation & native limu outplanting
                </div>
              </div>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal delay={200}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 block mb-2">Pillar 2</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Ahupuaʻa & Loko Iʻa Management</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Implementing holistic watershed management frameworks alongside the revitalization of ancestral fishpond networks to foster sustainable, balanced resource flow. Managing mountain forests prevents sediment runoffs from choking lower corals.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-amber-600 font-semibold">
                  Mauka-to-makai land flow stewardship
                </div>
              </div>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal delay={300}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm hover:border-teal-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-600 block mb-2">Pillar 3</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Citizen Science Rigor</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Engaging the community through highly standardized data collection procedures to generate robust scientific datasets. Every volunteer follows strict checklists verified by marine ecologist oversight.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 text-xs font-mono text-cyan-600 font-semibold">
                  Standardized monitoring & transparency
                </div>
              </div>
            </Reveal>
          </div>

          {/* Outcome highlight */}
          <Reveal>
            <div className="rounded-3xl border border-teal-100 bg-white p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4">Targeting 70% Coral Survival</h2>
              <p className="text-sm sm:text-base text-slate-650 font-light leading-relaxed max-w-2xl mx-auto mb-6">
                Most standard reef transplantations suffer high mortality rates under thermal stress events. By breeding tolerant strains, managing upland wastewater runoff, and planting protective native limu buffers, our pilot sites aim to secure a landmark 70% survival rate.
              </p>
              <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-teal-700">
                <Check className="h-4 w-4" /> Scientifically Monitored & Verified
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
