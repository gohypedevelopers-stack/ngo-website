import Image from 'next/image'
import { Share2, Scale, BarChart3, Building } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Partners & Coalition — Hui Nehu',
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
                    <Share2 className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    The Hui &mdash; Coalition & Partnerships
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  A Collaborative Catalyst, Not a Competitor
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Coalition anchor — supporting, empowering, and partnering with existing grassroots organizations to accelerate marine conservation across Hawaiʻi. We do not operate in silos.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/coalition_partnerships.png"
                    alt="Coalition network partners"
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

      {/* Partnership Modes Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">3 Partnership Modes</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Mode 1 */}
            <Reveal delay={100}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-teal-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <Share2 className="h-8 w-8 text-teal-600 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Resource & Technology Sharing</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Technical expertise, marine science data, Bio Cleaner septic access.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mode 2 */}
            <Reveal delay={200}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-amber-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <Scale className="h-8 w-8 text-amber-600 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Joint Advocacy</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Unified coalition for state environmental policy + federal grants.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mode 3 */}
            <Reveal delay={300}>
              <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                <div>
                  <BarChart3 className="h-8 w-8 text-cyan-600 mb-6" />
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">Capacity Building</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Admin support + scientific validation for volunteer-led ahupuaʻa projects.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Target Partners Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Target Partners</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {targetPartners.map((partner, index) => (
              <Reveal key={partner} delay={index * 50}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex items-center justify-center text-center hover:shadow-md hover:border-teal-500/20 transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 leading-relaxed">
                    {partner}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
