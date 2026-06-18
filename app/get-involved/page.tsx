import Image from 'next/image'
import { 
  ArrowRight, 
  CircleDollarSign, 
  Calendar, 
  HeartHandshake, 
  CheckCircle2,
  Mail,
  Phone,
  Instagram
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

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
    { percent: 40, label: 'Coral Restoration', amount: '$200K', color: 'bg-teal-650' },
    { percent: 30, label: 'Community Science', amount: '$150K', color: 'bg-teal-500' },
    { percent: 20, label: 'Youth Education', amount: '$100K', color: 'bg-teal-350' },
    { percent: 10, label: 'Operations', amount: '$50K', color: 'bg-slate-500' }
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

      {/* =========================================================================
          SECTION 1: INVEST (FUNDING TIERS)
         ========================================================================= */}
      <section id="invest" className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <CircleDollarSign className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Invest · Funding tiers
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  Join the Hui &mdash; Your Investment Directly Protects Hawaiʻi’s Ocean
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  Raising <strong className="font-semibold text-slate-900">$500,000</strong> in seed funding to launch nonprofit conservation programs and the Bio Cleaner Septic Jockey commercial enterprise.
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
              <h3 className="font-serif text-xl font-bold text-slate-900 px-1 mb-2">Investment Tiers</h3>
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
      <section id="volunteer" className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Activities List */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Volunteer · Community workdays
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  Join a Community Workday. Become a Kiaʻi Kai.
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  Volunteers are the backbone of the Nā Kiaʻi Kai Community Science program. From beach cleanups to fish surveys to coral outplanting, there is a role for every skill level.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {volunteerActivities.map((act) => (
                    <div key={act} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                      <div className="h-2 w-2 rounded-full bg-teal-550 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* CTA Box */}
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="rounded-3xl border border-slate-800 bg-slate-950 text-white p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[320px]">
                  {/* Background Image */}
                  <Image 
                    src="/volunteer_card_bg.png" 
                    alt="Volunteer background" 
                    fill 
                    className="object-cover opacity-30 pointer-events-none z-0" 
                  />
                  
                  {/* Decorative glowing gradient orbs */}
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none z-0" />
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none z-0" />
                  
                  <div className="relative z-10 space-y-4 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                      Ready to <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Mālama</span> the Coastline?
                    </h3>
                    <p className="text-sm font-light text-slate-350 leading-relaxed">
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
      <section id="partner" className="bg-gradient-to-b from-white to-teal-50/20 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
            
            {/* Info and Who is this for */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Partner With Us · Org & institutional partners
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
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
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
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
                <div className="rounded-2xl border border-teal-500/10 bg-teal-50/20 p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-teal-950">What Partnership Offers</h3>
                  <ul className="space-y-3">
                    {partnerOffers.map((item) => (
                      <li key={item} className="text-xs font-light text-teal-900/90 leading-relaxed flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
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
