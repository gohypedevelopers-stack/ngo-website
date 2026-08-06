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
import { fetchGetInvolvedPageData, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'Get Involved — Hui Nehu',
  description: 'Support Hui Nehu. Explore investment tiers, join community volunteer workdays, or partner with us.',
}

export default async function GetInvolvedPage() {
  const pageData = await fetchGetInvolvedPageData()

  // Invest Section
  const investEyebrow = pageData?.investEyebrow
  const investTitle = pageData?.investTitle
  const investDescPrefix = pageData?.investDescPrefix
  const investDescBold = pageData?.investDescBold
  const investDescSuffix = pageData?.investDescSuffix
  const seedFundsTitle = pageData?.seedFundsTitle

  const fundingUse = [
    { percent: pageData?.fundUse1Percent, label: pageData?.fundUse1Label, amount: pageData?.fundUse1Amount, color: pageData?.fundUse1Color },
    { percent: pageData?.fundUse2Percent, label: pageData?.fundUse2Label, amount: pageData?.fundUse2Amount, color: pageData?.fundUse2Color },
    { percent: pageData?.fundUse3Percent, label: pageData?.fundUse3Label, amount: pageData?.fundUse3Amount, color: pageData?.fundUse3Color },
    { percent: pageData?.fundUse4Percent, label: pageData?.fundUse4Label, amount: pageData?.fundUse4Amount, color: pageData?.fundUse4Color }
  ]

  const investTiersTitle = pageData?.investTiersTitle
  const investmentTiers = [
    {
      name: pageData?.tier1Name,
      amount: pageData?.tier1Amount,
      desc: pageData?.tier1Desc
    },
    {
      name: pageData?.tier2Name,
      amount: pageData?.tier2Amount,
      desc: pageData?.tier2Desc
    },
    {
      name: pageData?.tier3Name,
      amount: pageData?.tier3Amount,
      desc: pageData?.tier3Desc
    },
    {
      name: pageData?.tier4Name,
      amount: pageData?.tier4Amount,
      desc: pageData?.tier4Desc
    },
    {
      name: 'ʻOhana Supporter',
      amount: '$1K+',
      desc: 'Foundational community support.'
    },
    {
      name: 'ʻOpae Supporter',
      amount: 'Under $999',
      desc: 'Foundational community support.'
    }
  ]

  // Volunteer Section
  const volEyebrow = pageData?.volEyebrow
  const volTitle = pageData?.volTitle
  const volDescription = pageData?.volDescription
  
  const volunteerActivities = [
    pageData?.volActivity1,
    pageData?.volActivity2,
    pageData?.volActivity3,
    pageData?.volActivity4,
    pageData?.volActivity5,
    pageData?.volActivity6
  ].filter(Boolean)

  const volCtaBgImage = getStrapiMediaUrl(pageData?.volCtaBgImage) || '/team_ocean_stewards.png'
  const volCtaTitle1 = pageData?.volCtaTitle1
  const volCtaTitleHighlight = pageData?.volCtaTitleHighlight
  const volCtaTitle2 = pageData?.volCtaTitle2
  const volCtaDesc = pageData?.volCtaDesc
  const volCtaBtnText = pageData?.volCtaBtnText

  // Partner Section
  const partnerEyebrow = pageData?.partnerEyebrow
  const partnerTitle = pageData?.partnerTitle
  const partnerWhoTitle = pageData?.partnerWhoTitle
  const partnersWho = [
    pageData?.partnerWho1,
    pageData?.partnerWho2,
    pageData?.partnerWho3,
    pageData?.partnerWho4
  ].filter(Boolean)

  const partnerOffersTitle = pageData?.partnerOffersTitle
  const partnerOffers = [
    pageData?.partnerOffer1,
    pageData?.partnerOffer2,
    pageData?.partnerOffer3,
    pageData?.partnerOffer4
  ].filter(Boolean)

  const partnerContactTitle = pageData?.partnerContactTitle
  const partnerEmail = pageData?.partnerEmail
  const partnerPhone = pageData?.partnerPhone
  const partnerIg = pageData?.partnerIg

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="dark" />

      {/* =========================================================================
          SECTION 1: INVEST (FUNDING TIERS)
         ========================================================================= */}
      <section id="invest" className="bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-950/50 text-teal-300 border border-teal-900/30">
                    <CircleDollarSign className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    {investEyebrow}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl tracking-tight">
                  {investTitle}
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-300 font-light max-w-2xl">
                  {investDescPrefix}<strong className="font-semibold text-white">{investDescBold}</strong>{investDescSuffix}
                </p>
              </Reveal>

              {/* Use of Seed Funds graphic */}
              <Reveal delay={100}>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 space-y-5 shadow-xs">
                  <h3 className="font-serif text-lg font-bold text-white">{seedFundsTitle}</h3>
                  <div className="space-y-4">
                    {fundingUse.map((item, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium text-slate-200">
                          <span>{item.label} ({item.amount})</span>
                          <span>{item.percent}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
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
              <h3 className="font-serif text-xl font-bold text-white px-1 mb-2">{investTiersTitle}</h3>
              {investmentTiers.map((tier, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4 shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">
                        {tier.name?.split(/(nehu)/gi).map((part, i) =>
                          /^nehu$/i.test(part) ? <em key={i}>{part}</em> : part
                        )}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{tier.desc}</p>
                    </div>
                    <span className="text-base font-serif font-bold text-teal-400 shrink-0">{tier.amount}</span>
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
      <section id="volunteer" className="bg-white py-24 border-b border-slate-200">
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
                    {volEyebrow}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  {volTitle}
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  {volDescription}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {volunteerActivities.map((act, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
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
                    src={volCtaBgImage} 
                    alt="Volunteer background" 
                    fill 
                    className="object-cover opacity-30 pointer-events-none z-0" 
                  />
                  
                  {/* Decorative glowing gradient orbs */}
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none z-0" />
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none z-0" />
                  
                  <div className="relative z-10 space-y-4 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                      {volCtaTitle1}<span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">{volCtaTitleHighlight}</span>{volCtaTitle2}
                    </h3>
                    <p className="text-sm font-light text-slate-350 leading-relaxed">
                      {volCtaDesc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 w-full flex justify-center">
                    <a 
                      href="/contact"
                      className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white hover:bg-slate-100 px-8 py-4 text-sm font-bold text-slate-950 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{volCtaBtnText}</span>
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
      <section id="partner" className="bg-slate-50 py-24">
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
                    {partnerEyebrow}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  {partnerTitle}
                </h2>
              </Reveal>

              {/* Who this is for Grid */}
              <Reveal delay={100}>
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-slate-900">{partnerWhoTitle}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {partnersWho.map((item, i) => (
                      <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex items-center gap-3">
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
                  <h3 className="font-serif text-lg font-bold text-teal-950">{partnerOffersTitle}</h3>
                  <ul className="space-y-3">
                    {partnerOffers.map((item, i) => (
                      <li key={i} className="text-xs font-light text-teal-900/90 leading-relaxed flex items-start gap-2.5">
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
                  <h3 className="font-serif text-lg font-bold text-slate-950">{partnerContactTitle}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Mail className="h-4 w-4 text-teal-600 shrink-0" />
                      <a href={`mailto:${partnerEmail}`} className="hover:underline font-semibold">{partnerEmail}</a>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Phone className="h-4 w-4 text-teal-600 shrink-0" />
                      <a href="tel:8086330336" className="hover:underline font-semibold">{partnerPhone}</a>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Instagram className="h-4 w-4 text-teal-600 shrink-0" />
                      <span className="font-semibold">{partnerIg}</span>
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
