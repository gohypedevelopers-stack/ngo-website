import Image from 'next/image'
import { 
  ArrowRight, 
  CircleDollarSign, 
  Calendar, 
  HeartHandshake, 
  Waves,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  Instagram
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Get Involved — Hui Nehu',
  description: 'Support Hui Nehu. Explore investment tiers, join community volunteer workdays, or partner with us.',
}

export default function GetInvolvedPage() {
  const investmentTiers = [
    {
      name: 'Koʻa Honu Founding Partner',
      amount: '$100K+',
      desc: 'Full year coral nursery operations.'
    },
    {
      name: 'Conservation Partner',
      amount: '$50K',
      desc: 'Full year debris removal, one island.'
    },
    {
      name: 'Mano Science Partner',
      amount: '$25K',
      desc: 'Community monitoring at 3 sites.'
    },
    {
      name: 'Nehu Community Partner',
      amount: '$10K',
      desc: 'Youth ocean science, one school year.'
    },
    {
      name: 'ʻOhana Supporter',
      amount: '$1K+',
      desc: 'Foundational community support.'
    }
  ]

  const fundingUse = [
    { percent: 40, label: 'Coral Restoration', amount: '$200K', color: 'bg-teal-500' },
    { percent: 30, label: 'Community Science', amount: '$150K', color: 'bg-emerald-500' },
    { percent: 20, label: 'Youth Education', amount: '$100K', color: 'bg-amber-500' },
    { percent: 10, label: 'Operations', amount: '$50K', color: 'bg-slate-700' }
  ]

  const volunteerActivities = [
    'Fish & limu surveys',
    'Water quality testing',
    'Marine debris removal',
    'Coral outplanting',
    'Youth education support',
    'Community workdays'
  ]

  const partnersWho = [
    'Grassroots conservation orgs',
    'Research institutions',
    'Government agencies',
    'Corporations seeking meaningful environmental partnerships'
  ]

  const partnerOffers = [
    'Data sharing + co-publication',
    'Joint grant applications',
    'Bio Cleaner technology access',
    'Coalition representation in state policy advocacy'
  ]

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Light Nav Background container */}
      <div className="bg-white border-b border-slate-100 w-full h-20" />
      <SiteNav theme="light" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 overflow-hidden border-b border-slate-200">
        {/* Ambient ocean glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.06)_0%,transparent_55%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.04)_0%,transparent_60%)]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-teal-500/5 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] animate-float-slow" style={{ animationDelay: '-4s' }} />
        
        {/* Subtle grid pattern for modern layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <HeartHandshake className="h-5 w-5 animate-pulse" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Join the Mission
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-slate-900">
                  Your Action Directly Protects Hawaiʻi’s Ocean
                </h1>
                
                <p className="mt-4 text-lg text-slate-650 font-light leading-relaxed">
                  Hui Nehu provides multiple pathways for individuals, communities, and institutions to invest capital, donate time, or build regional alliances to restore Maui’s waters.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a href="#invest" className="group flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50/50 px-5 py-2.5 text-xs font-semibold text-teal-950 hover:bg-teal-50 hover:border-teal-300 transition-all">
                    Invest Capital
                  </a>
                  <a href="#volunteer" className="group flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 px-5 py-2.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-50 hover:border-emerald-300 transition-all">
                    Volunteer Workdays
                  </a>
                  <a href="#partner" className="group flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/50 px-5 py-2.5 text-xs font-semibold text-amber-950 hover:bg-amber-50 hover:border-amber-300 transition-all">
                    Partner With Us
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  <Image
                    src="/get_involved_funding.png"
                    alt="Volunteers and clean septic jockey truck on Maui beach restoration site"
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

      {/* =========================================================================
          SECTION 1: INVEST (FUNDING TIERS)
         ========================================================================= */}
      <section id="invest" className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <CircleDollarSign className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Funding Tiers
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Join the Hui &mdash; Your Investment Directly Protects Hawaiʻi’s Ocean
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-slate-650 font-light">
                  Hui Nehu is raising <strong className="font-semibold text-slate-900">$500,000</strong> in seed funding to launch nonprofit conservation programs and scale the Bio Cleaner Septic Jockey commercial enterprise.
                </p>
              </Reveal>

              {/* Use of Seed Funds graphic */}
              <Reveal delay={100}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5 shadow-xs">
                  <h3 className="font-serif text-lg font-bold text-slate-900">Use of Seed Funds</h3>
                  <div className="space-y-4">
                    {fundingUse.map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium text-slate-700">
                          <span>{item.label} ({item.amount})</span>
                          <span>{item.percent}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Investment Tiers cards column */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-xl font-bold text-slate-900 px-1 mb-2">Seed Support Tiers</h3>
              {investmentTiers.map((tier, idx) => (
                <Reveal key={tier.name} delay={idx * 80}>
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-slate-950">{tier.name}</h4>
                      <p className="text-xs text-slate-500 font-light mt-0.5">{tier.desc}</p>
                    </div>
                    <span className="text-base font-serif font-bold text-teal-700 shrink-0">{tier.amount}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VOLUNTEER (COMMUNITY WORKDAYS)
         ========================================================================= */}
      <section id="volunteer" className="bg-gradient-to-b from-white to-emerald-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Activities List */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Community Workdays
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Join a Community Workday. Become a Kiaʻi Kai.
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-slate-650 font-light">
                  Volunteers are the backbone of the Nā Kiaʻi Kai Community Science program. From beach cleanups to fish surveys to coral outplanting, there is a role for every skill level.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {volunteerActivities.map((act) => (
                    <div key={act} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* CTA Box */}
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[320px]">
                  
                  {/* Decorative glowing gradient orbs */}
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none z-0" />
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none z-0" />
                  
                  <div className="relative z-10 space-y-4 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                      Ready to <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Mālama</span> the Coastline?
                    </h3>
                    <p className="text-sm font-light text-slate-300 leading-relaxed">
                      Register to secure a spot for our next community workday on Maui. We supply the gear, training, lunch, and reef-safe sunscreen.
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 w-full flex justify-center">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfB2e7x837p1vC0Q9G4-9vWJ156" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white hover:bg-slate-100 px-8 py-4 text-sm font-bold text-slate-950 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Sign up for the next community workday</span>
                      <ArrowRight className="h-4 w-4 text-slate-900 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PARTNER WITH US (ALLIANCES)
         ========================================================================= */}
      <section id="partner" className="bg-gradient-to-b from-white to-amber-50/20 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
            
            {/* Info and Who is this for */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                    Org & Institutional Partners
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Scale Your Impact. Join the Coalition.
                </h2>
              </Reveal>

              {/* Who this is for Grid */}
              <Reveal delay={100}>
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-slate-900">Who This Is For</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {partnersWho.map((item) => (
                      <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                        <span className="text-xs font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* What Partnership Offers & Contact details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Offers Box */}
              <Reveal delay={150}>
                <div className="rounded-2xl border border-amber-500/10 bg-amber-50/20 p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-amber-950">What Partnership Offers</h3>
                  <ul className="space-y-3">
                    {partnerOffers.map((item) => (
                      <li key={item} className="text-xs font-light text-amber-900/90 leading-relaxed flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Contact Box */}
              <Reveal delay={200}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
                  <h3 className="font-serif text-lg font-bold text-slate-950">Get in Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Mail className="h-4 w-4 text-teal-600 shrink-0" />
                      <a href="mailto:partnerships@huinehu.org" className="hover:underline font-semibold">partnerships@huinehu.org</a>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Phone className="h-4 w-4 text-teal-600 shrink-0" />
                      <span className="font-semibold">(808) 555-NEHU</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Instagram className="h-4 w-4 text-teal-600 shrink-0" />
                      <span className="font-semibold">@HuiNehu</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
