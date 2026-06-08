import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Compass, Landmark, Layout, Shield } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Investment Tiers — Hui Nehu',
  description: 'Structured donor tiers and seed funding allocation targets for our $500,000 round.',
}

const allocations = [
  { percent: '40%', amount: '$200,000', label: 'Coral Restoration Operations', color: 'bg-cyan-500' },
  { percent: '30%', amount: '$150,000', label: 'Community Science Programs', color: 'bg-teal-500' },
  { percent: '20%', amount: '$100,000', label: 'Youth Education & School Outreach', color: 'bg-amber-400' },
  { percent: '10%', amount: '$50,000', label: 'Core Administrative Operations', color: 'bg-slate-500' },
]

const tiers = [
  {
    name: 'Koʻa Honu Founding Partner',
    price: '$100,000+',
    desc: 'Directs funding to fully sponsor an entire year of coral nursery development and propagation operations.',
    features: ['Named recognition at propagation hubs', 'Quarterly data integrity reports', 'Founding board advisory invitation'],
  },
  {
    name: 'Conservation Partner',
    price: '$50,000',
    desc: 'Fully funds a full year of continuous marine debris extraction and pollution mitigation across an entire island.',
    features: ['Direct tracking of debris weight metrics', 'Public recognition across operations fleet', 'Custom field workday opportunities'],
  },
  {
    name: 'Mano Science Partner',
    price: '$25,000',
    desc: 'Funds a full year of community monitoring, equipment, and water testing across 3 active pilot sites.',
    features: ['Sponsor tag on Nā Kiaʻi Kai data tools', 'Bi-annual testing results briefing', 'Logo on open-source datasets'],
  },
  {
    name: 'Nehu Community Partner',
    price: '$10,000',
    desc: 'Sponsoring a dedicated, comprehensive youth ocean science educational program for an entire school year.',
    features: ['Adopt-a-Classroom project updates', 'Youth field trip participation', 'Featured recognition in school materials'],
  },
  {
    name: 'ʻOhana Supporter',
    price: '$1,000+',
    desc: 'Forms the foundational community support network keeping our field teams deployed.',
    features: ['Annual coalition partner report', 'Invitation to volunteer summits', 'Hui Nehu gear package'],
  },
]

export default function InvestmentTiersPage() {
  return (
    <main className="bg-white text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="light" />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-50 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Funding restoration background"
            fill
            className="object-cover object-center opacity-10 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/get-involved"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600 hover:text-teal-800 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Get Involved
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 block mb-2 uppercase">Seed Round Details</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900">Investment Tiers</h1>
            <p className="mt-4 text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
              Funding allocation targets and donor frameworks supporting our $500,000 seed round.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Allocation breakdown */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">Funding Allocation Plan</h2>
            <p className="text-sm font-light text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Our $500,000 seed funding goal is strictly distributed across these critical operational paths to maximize field efficiency and target clear ecological results.
            </p>
            <div className="space-y-6">
              {allocations.map((alloc) => (
                <div key={alloc.label} className="space-y-2">
                  <div className="flex justify-between items-end text-sm">
                    <span className="font-semibold text-slate-800">{alloc.label}</span>
                    <span className="font-mono text-teal-600 font-bold">{alloc.percent} ({alloc.amount})</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${alloc.color}`} style={{ width: alloc.percent }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tiers List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 100}>
                <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-8 hover:border-teal-500/20 transition-all flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold font-display text-amber-600 mb-4">{tier.price}</div>
                    <p className="text-xs font-light text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-4">
                      {tier.desc}
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-600 font-light mb-8">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-teal-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="mailto:partnerships@huinehu.org"
                    className="block text-center rounded-xl bg-slate-900 border border-slate-950 text-xs font-bold text-white py-3 hover:bg-slate-800 transition-all"
                  >
                    Inquire for Partner Agreement
                  </a>
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
