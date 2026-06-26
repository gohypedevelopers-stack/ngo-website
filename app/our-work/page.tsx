import Image from 'next/image'
import { 
  Anchor, 
  Shield, 
  Globe, 
  Award, 
  GraduationCap, 
  Waves, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'
import { fetchOurWorkPageData, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'Our Work — Hui Nehu',
  description: "WE DON'T JUST RESTORE CORAL - WE RESTORE THE ENTIRE FOOD WEB. Discover Hui Nehu's three integrated conservation programs.",
}

export default async function OurWorkPage() {
  const pageData = await fetchOurWorkPageData()

  // Fetch Program 1 Data (Habitat & Loko Iʻa Restoration)
  const prog1Title = pageData?.prog1Title
  const prog1Headline = pageData?.prog1Eyebrow
  const prog1Desc = pageData?.prog1Description
  const prog1Image = getStrapiMediaUrl(pageData?.prog1Image)
  const prog1Card1Title = pageData?.prog1Card1Title
  const prog1Card1Body = pageData?.prog1Card1Body
  const prog1Card2Title = pageData?.prog1Card2Title
  const prog1Card2Body = pageData?.prog1Card2Body
  const prog1MetricLabel = pageData?.prog1MetricLabel
  const prog1MetricValue = pageData?.prog1MetricValue !== undefined && pageData.prog1MetricValue !== null ? pageData.prog1MetricValue : undefined
  const prog1MetricSuffix = pageData?.prog1MetricSuffix
  const prog1MetricDesc = pageData?.prog1MetricDesc
  const prog1MetricDetail = pageData?.prog1MetricDetail
  const prog1MetricBg = getStrapiMediaUrl(pageData?.prog1MetricBg)

  // Fetch Program 2 Data (Bio-Cleaner & Pollution Response)
  const prog2Title = pageData?.prog2Title
  const prog2Desc = pageData?.prog2Description
  const prog2Image = getStrapiMediaUrl(pageData?.prog2Image)
  const prog2Card1Title = pageData?.prog2Card1Title
  const prog2Card1Body = pageData?.prog2Card1Body
  const prog2MetricLabel = pageData?.prog2MetricLabel
  const prog2MetricValue = pageData?.prog2MetricValue !== undefined && pageData.prog2MetricValue !== null ? pageData.prog2MetricValue : undefined
  const prog2MetricSuffix = pageData?.prog2MetricSuffix
  const prog2MetricDesc = pageData?.prog2MetricDesc
  const prog2MetricDetail = pageData?.prog2MetricDetail

  // Fetch Program 3 Data (Nā Kiaʻi Kai Community Science)
  const prog3Title = pageData?.prog3Title
  const prog3Desc = pageData?.prog3Description
  const prog3Image = getStrapiMediaUrl(pageData?.prog3Image)
  const prog3Card1Title = pageData?.prog3Card1Title
  const prog3Card1Body = pageData?.prog3Card1Body
  const prog3Activities = [
    pageData?.prog3Activity1,
    pageData?.prog3Activity2,
    pageData?.prog3Activity3,
    pageData?.prog3Activity4,
    pageData?.prog3Activity5,
    pageData?.prog3Activity6,
  ].filter(Boolean)

  // Fetch Methodology Data
  const methodTitle = pageData?.methodTitle
  const methodDesc = pageData?.methodDescription
  const methodImage = getStrapiMediaUrl(pageData?.methodImage)
  const methodCard1Title = pageData?.methodCard1Title
  const methodCard1Body = pageData?.methodCard1Body
  
  const methodPillars = [
    {
      num: '01',
      title: pageData?.methodPillar1Title,
      body: pageData?.methodPillar1Body
    },
    {
      num: '02',
      title: pageData?.methodPillar2Title,
      body: pageData?.methodPillar2Body
    },
    {
      num: '03',
      title: pageData?.methodPillar3Title,
      body: pageData?.methodPillar3Body
    }
  ]
  const methodMetricLabel = pageData?.methodMetricLabel
  const methodMetricValue = pageData?.methodMetricValue !== undefined && pageData.methodMetricValue !== null ? pageData.methodMetricValue : undefined
  const methodMetricSuffix = pageData?.methodMetricSuffix
  const methodMetricDesc = pageData?.methodMetricDesc
  const methodMetricDetail = pageData?.methodMetricDetail

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="dark" />

      {/* =========================================================================
          SECTION 1: HABITAT & LOKO IʻA RESTORATION (PROGRAM 1)
         ========================================================================= */}
      <section id="program-1" className="bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-8">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-950/50 text-teal-300 border border-teal-900/30">
                    <Anchor className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    Program 1 · {prog1Title}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl tracking-tight">
                  {prog1Headline}
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-slate-300 font-light max-w-2xl">
                  {prog1Desc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
                  {prog1Image && (
                    <Image
                      src={prog1Image}
                      alt={prog1Title}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Cards & Metric Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Keystone Focus Card */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-950/50 text-teal-300 mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{prog1Card1Title}</h3>
                <p className="text-sm text-slate-350 leading-relaxed font-light">{prog1Card1Body}</p>
              </div>
            </Reveal>

            {/* Ahupuaʻa Link Card */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-950/50 text-teal-300 mb-4">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{prog1Card2Title}</h3>
                <p className="text-sm text-slate-350 leading-relaxed font-light">{prog1Card2Body}</p>
              </div>
            </Reveal>

            {/* Metric Segment */}
            <Reveal delay={200}>
              <div className="relative h-full rounded-2xl overflow-hidden border border-teal-900/30 bg-teal-950/25 p-6 text-white flex flex-col justify-center">
                {prog1MetricBg && (
                  <Image src={prog1MetricBg} alt="Background" fill className="object-cover opacity-10 mix-blend-multiply" />
                )}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase">{prog1MetricLabel}</span>
                  <div className="flex items-baseline text-4xl font-serif font-bold text-teal-400">
                    <AnimatedCounter value={prog1MetricValue} suffix={prog1MetricSuffix} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block">{prog1MetricDesc}</span>
                  <p className="text-xs font-light text-slate-300 leading-relaxed mt-2">{prog1MetricDetail}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BIO-CLEANER & POLLUTION RESPONSE (PROGRAM 2)
         ========================================================================= */}
      <section id="program-2" className="bg-white py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-5 lg:order-2">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {prog2Image && (
                    <Image
                      src={prog2Image}
                      alt={prog2Title}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6 lg:order-1">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 2
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  {prog2Title}
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  {prog2Desc}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Cards & Metric Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* The Bigger Picture Card */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-teal-50 text-teal-700 mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{prog2Card1Title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{prog2Card1Body}</p>
              </div>
            </Reveal>

            {/* Metric Segment */}
            <Reveal delay={150}>
              <div className="relative h-full rounded-2xl overflow-hidden border border-teal-100 bg-teal-50/30 p-8 text-slate-900 flex flex-col justify-center">
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-600 uppercase">{prog2MetricLabel}</span>
                  <div className="flex items-baseline text-5xl font-serif font-bold text-teal-600">
                    <AnimatedCounter value={prog2MetricValue} suffix={prog2MetricSuffix} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block">{prog2MetricDesc}</span>
                  <p className="text-sm font-light text-slate-650 leading-relaxed mt-2">{prog2MetricDetail}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: NĀ KIAʻI KAI COMMUNITY SCIENCE (PROGRAM 3)
         ========================================================================= */}
      <section id="program-3" className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 3
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  {prog3Title}
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  {prog3Desc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {prog3Image && (
                    <Image
                      src={prog3Image}
                      alt={prog3Title}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Activities List & Impact Segment */}
          <div className="grid gap-8 md:grid-cols-12">
            {/* Activities List */}
            <div className="md:col-span-7 space-y-6">
              <Reveal>
                <h3 className="font-serif text-xl font-bold text-slate-900">Program Activities</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {prog3Activities.map((act) => (
                    <div key={act} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                      <div className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                      <span className="text-xs font-medium text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Data Impact Metric Card */}
            <div className="md:col-span-5">
              <Reveal delay={150}>
                <div className="h-full rounded-2xl border border-teal-500/10 bg-teal-50/20 p-6 flex flex-col justify-center">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-teal-950 mb-2">{prog3Card1Title}</h3>
                    <p className="text-sm text-teal-900/80 leading-relaxed font-light">{prog3Card1Body}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR METHODOLOGY
         ========================================================================= */}
      <section id="methodology" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                    <Waves className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Our Methodology · The science behind the work
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                  {methodTitle}
                </h2>
                
                <p className="mt-6 text-sm leading-relaxed text-slate-650 font-light max-w-2xl">
                  {methodDesc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {methodImage && (
                    <Image
                      src={methodImage}
                      alt={methodTitle}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Pillars & Ahupuaʻa Grid */}
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* The Three Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900">Three Pillars of Ecosystem Care</h3>
              <div className="space-y-4">
                {methodPillars.map((pillar) => (
                  <Reveal key={pillar.num}>
                    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:border-slate-300">
                      <span className="font-mono text-xs font-bold text-slate-400 mt-0.5">{pillar.num}</span>
                      <div>
                        <h4 className="font-serif text-base font-bold text-slate-950 mb-1">{pillar.title}</h4>
                        <p className="text-sm text-slate-500 font-light">{pillar.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Ahupuaʻa Model & Core Metric */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={150}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{methodCard1Title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{methodCard1Body}</p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-6 text-slate-900 relative overflow-hidden flex flex-col justify-center">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-600 uppercase mb-1">{methodMetricLabel}</span>
                  <div className="flex items-baseline text-4xl font-serif font-bold text-teal-600">
                    <AnimatedCounter value={methodMetricValue} suffix={methodMetricSuffix} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block">{methodMetricDesc}</span>
                  <p className="text-xs font-light text-slate-600 leading-relaxed mt-2">{methodMetricDetail}</p>
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
