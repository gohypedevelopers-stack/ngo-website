import Image from 'next/image'
import { Check, Landmark, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Investment Tiers — Hui Nehu',
  description: 'Structured donor tiers and seed funding allocation targets for our $500,000 round.',
}

const allocations = [
  { percent: '40%', amount: '$200K', label: 'Coral Restoration', color: 'bg-cyan-500' },
  { percent: '30%', amount: '$150K', label: 'Community Science', color: 'bg-teal-500' },
  { percent: '20%', amount: '$100K', label: 'Youth Education', color: 'bg-amber-400' },
  { percent: '10%', amount: '$50K', label: 'Operations', color: 'bg-slate-500' },
]

const tiers = [
  {
    name: 'Koʻa Honu Founding Partner',
    price: '$100K+',
    desc: 'Full year coral nursery operations.',
    features: ['Named recognition at nurseries', 'Quarterly operations updates', 'Founding board advisory invitation'],
  },
  {
    name: 'Conservation Partner',
    price: '$50K',
    desc: 'Full year debris removal, one island.',
    features: ['Debris weight metric reports', 'Operational fleet recognition', 'Custom field workday access'],
  },
  {
    name: 'Mano Science Partner',
    price: '$25K',
    desc: 'Community monitoring at 3 sites.',
    features: ['Sponsor tag on Nā Kiaʻi Kai tools', 'Bi-annual testing results briefing', 'Logo on datasets'],
  },
  {
    name: 'Nehu Community Partner',
    price: '$10K',
    desc: 'Youth ocean science, one school year.',
    features: ['Adopt-a-Classroom project updates', 'Youth field trip updates', 'School materials recognition'],
  },
  {
    name: 'ʻOhana Supporter',
    price: '$1K+',
    desc: 'Foundational community support.',
    features: ['Annual coalition partner reports', 'Volunteer summit invitations', 'Hui Nehu gear package'],
  },
]

export default function InvestmentTiersPage() {
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
                    <Landmark className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Get Involved &mdash; Invest
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Join the Hui — Your Investment Directly Protects Hawaiʻi’s Ocean
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Raising $500,000 in seed funding to launch nonprofit conservation programs and the Bio Cleaner Septic Jockey commercial enterprise.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/ocean image.png"
                    alt="Pristine Hawaiian coastline and reef"
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

      {/* Use of Seed Funds Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-12">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-slate-900 text-center">Use of Seed Funds</h2>
            <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full mb-10" />
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

      {/* Investment Tiers List */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Investment Tiers</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 100}>
                <div className="border border-slate-200 bg-white rounded-2xl p-8 hover:shadow-md hover:border-teal-550/20 transition-all flex flex-col justify-between h-full shadow-xs">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-teal-650 mb-4">{tier.price}</div>
                    <p className="text-sm font-light text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-4">
                      {tier.desc}
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-500 font-light mb-8">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="mailto:partnerships@huinehu.org"
                    className="block text-center rounded-xl bg-slate-900 border border-slate-950 text-xs font-bold text-white py-3 hover:bg-teal-600 hover:border-teal-600 transition-all"
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
