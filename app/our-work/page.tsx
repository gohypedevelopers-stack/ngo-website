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
import { fetchOurWorkPageData, fetchOurWorkSubPages, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'Our Work — Hui Nehu',
  description: "WE DON'T JUST RESTORE CORAL - WE RESTORE THE ENTIRE FOOD WEB. Discover Hui Nehu's three integrated conservation programs.",
}

export default async function OurWorkPage() {
  const [pageData, subPages] = await Promise.all([
    fetchOurWorkPageData(),
    fetchOurWorkSubPages()
  ])

  const heroEyebrow = pageData?.heroEyebrow || 'Our Core Philosophy'
  const heroTitle = pageData?.heroTitle || "WE DON'T JUST RESTORE CORAL — WE RESTORE THE ENTIRE FOOD WEB."
  const heroDescription = pageData?.heroDescription || "Hui Nehu implements three tightly integrated programs that directly target the full ecological chain, from mountain watersheds to the open sea."
  const heroImage = getStrapiMediaUrl(pageData?.heroImage) || '/cesspool_split.png'

  // Fetch Program 1 Data (Habitat & Loko Iʻa Restoration)
  const prog1Data = subPages.find(p => p.slug === 'habitat-loko-ia')
  const prog1Title = prog1Data?.title || 'We Don’t Just Restore Coral — We Restore the Entire Food Web'
  const prog1Desc = prog1Data?.description || 'Restoring estuarine habitats, coral reefs, and traditional fishponds (loko iʻa). Propagating thermal-tolerant coral and native limu using traditional cultivation and modern asexual propagation methods.'
  const prog1Image = getStrapiMediaUrl(prog1Data?.image) || '/contact_ocean.png'
  const prog1Card1Title = prog1Data?.card1Title || 'Keystone Focus'
  const prog1Card1Body = prog1Data?.card1Body || 'Restoring foundational habitats triggers a trophic cascade that revitalizes the entire coastal ecosystem.'
  const prog1Card2Title = prog1Data?.card2Title || 'Ahupuaʻa Link'
  const prog1Card2Body = prog1Data?.card2Body || 'Ancient Hawaiians built 300+ fishponds (loko iʻa) and managed freshwater flow to protect downstream coral nurseries. We revive this 1,000-year-old wisdom.'
  const prog1MetricLabel = prog1Data?.metricLabel || 'Target Metric'
  const prog1MetricValue = prog1Data?.metricValue !== undefined ? prog1Data.metricValue : 70
  const prog1MetricSuffix = prog1Data?.metricSuffix || '%'
  const prog1MetricDesc = prog1Data?.metricDesc || 'Coral Survival Rate'
  const prog1MetricDetail = prog1Data?.metricDetail || '70% coral survival rate — target for pilot sites (integrating Indigenous Ecological Knowledge + modern marine science).'
  const prog1MetricBg = getStrapiMediaUrl(prog1Data?.metricBgImage) || '/ocean_aerial.png'

  // Fetch Program 2 Data (Bio-Cleaner & Pollution Response)
  const prog2Data = subPages.find(p => p.slug === 'bio-cleaner')
  const prog2Title = prog2Data?.title || 'Bio Cleaner Septic Jockey: An Act of Mālama ʼAīna'
  const prog2Desc = prog2Data?.description || 'Deploying advanced Bio Cleaner septic systems to replace cesspools. Removing marine debris from Maui’s coastline. Responding to acute pollution events.'
  const prog2Image = getStrapiMediaUrl(prog2Data?.image) || '/cesspool_split.png'
  const prog2Card1Title = prog2Data?.card1Title || 'The Bigger Picture'
  const prog2Card1Body = prog2Data?.card1Body || 'Bio Cleaner Septic Jockey is the commercial arm that directly funds the nonprofit’s conservation mission while addressing the cesspool crisis at scale.'
  const prog2MetricLabel = prog2Data?.metricLabel || 'Year 1 Target'
  const prog2MetricValue = prog2Data?.metricValue !== undefined ? prog2Data.metricValue : 10
  const prog2MetricSuffix = prog2Data?.metricSuffix || '+'
  const prog2MetricDesc = prog2Data?.metricDesc || 'Tons of Debris Removed'
  const prog2MetricDetail = prog2Data?.metricDetail || '10+ tons of marine debris removed.'

  // Fetch Program 3 Data (Nā Kiaʻi Kai Community Science)
  const prog3Data = subPages.find(p => p.slug === 'community-science')
  const prog3Title = prog3Data?.title || 'Training Hawaiʻi’s Next Generation of Ocean Guardians'
  const prog3Desc = prog3Data?.description || 'Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.'
  const prog3Image = getStrapiMediaUrl(prog3Data?.image) || '/ahupuaa_aerial.png'
  const prog3Card1Title = prog3Data?.card1Title || 'Data Impact'
  const prog3Card1Body = prog3Data?.card1Body || 'Standardized community data collection informing state and federal policy. Publication-quality scientific output from volunteer-led monitoring.'
  const prog3Activities = [
    'Fish surveys',
    'Limu monitoring',
    'Water quality testing',
    'Marine debris removal',
    'Coral outplanting',
    'Youth ocean science education'
  ]

  // Fetch Methodology Data
  const methodData = subPages.find(p => p.slug === 'methodology')
  const methodTitle = methodData?.title || 'Indigenous Knowledge + Modern Science: The Most Effective Conservation'
  const methodDesc = methodData?.description || 'The most resilient conservation integrates the deep observational knowledge of Indigenous Hawaiian practitioners with peer-reviewed marine biology.'
  const methodImage = getStrapiMediaUrl(methodData?.image) || '/ahupuaa_aerial.png'
  const methodCard1Title = methodData?.card1Title || 'The Ahupuaʻa Model'
  const methodCard1Body = methodData?.card1Body || 'Traditional Hawaiian land system from mountain peak (mauka) to ocean (makai). Kānāwai — “the equal sharing of water” — was the source of all wealth. Hui Nehu makes this operational in the 21st century.'
  
  const methodPillars = [
    {
      num: '01',
      title: methodData?.activity1Title || 'Coral & Limu Propagation',
      body: methodData?.activity1Body || 'traditional cultivation + modern asexual propagation'
    },
    {
      num: '02',
      title: methodData?.activity2Title || 'Ahupuaʻa & Loko Iʻa Management',
      body: methodData?.activity2Body || 'holistic watershed + ancestral fishpond revival'
    },
    {
      num: '03',
      title: methodData?.activity3Title || 'Citizen Science Rigor',
      body: methodData?.activity3Body || 'standardized community data → robust scientific datasets'
    }
  ]
  const methodMetricLabel = methodData?.metricLabel || 'Core Metric'
  const methodMetricValue = methodData?.metricValue !== undefined ? methodData.metricValue : 70
  const methodMetricSuffix = methodData?.metricSuffix || '%'
  const methodMetricDesc = methodData?.metricDesc || 'Coral Survival Rate'
  const methodMetricDetail = methodData?.metricDetail || 'Targeting 70% coral survival rate at pilot sites — above national average.'

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
                    <Waves className="h-5 w-5 animate-pulse" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {heroEyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-slate-900 capitalize-first-letter">
                  {heroTitle.toLowerCase().replace(/(^\w{1})|(\s+\w{1})|(\—\s+\w{1})/g, letter => letter.toUpperCase())}
                </h1>
                
                <p className="mt-4 text-lg text-slate-650 font-light leading-relaxed">
                  {heroDescription}
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a href="#program-1" className="group flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50/50 px-5 py-2.5 text-xs font-semibold text-teal-950 hover:bg-teal-50 hover:border-teal-300 transition-all">
                    Program 1: Habitat & Loko Iʻa
                  </a>
                  <a href="#program-2" className="group flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 px-5 py-2.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-50 hover:border-emerald-300 transition-all">
                    Program 2: Bio-Cleaner
                  </a>
                  <a href="#program-3" className="group flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/50 px-5 py-2.5 text-xs font-semibold text-amber-950 hover:bg-amber-50 hover:border-amber-300 transition-all">
                    Program 3: Science
                  </a>
                  <a href="#methodology" className="group flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 hover:border-slate-350 transition-all">
                    Our Methodology
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  {heroImage && (
                    <Image
                      src={heroImage}
                      alt={heroTitle}
                      fill
                      priority
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: HABITAT & LOKO IʻA RESTORATION (PROGRAM 1)
         ========================================================================= */}
      <section id="program-1" className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Anchor className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 1 · Habitat & Loko Iʻa
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {prog1Title}
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600 font-light">
                  {prog1Desc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
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
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-50 text-teal-700 mb-4">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{prog1Card1Title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{prog1Card1Body}</p>
              </div>
            </Reveal>

            {/* Ahupuaʻa Link Card */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-50 text-teal-700 mb-4">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{prog1Card2Title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{prog1Card2Body}</p>
              </div>
            </Reveal>

            {/* Metric Segment */}
            <Reveal delay={200}>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xs border border-teal-500/10 bg-teal-950 p-6 text-white flex flex-col justify-center">
                {prog1MetricBg && (
                  <Image src={prog1MetricBg} alt="Background" fill className="object-cover opacity-15" />
                )}
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase">{prog1MetricLabel}</span>
                  <div className="flex items-baseline text-4xl font-serif font-bold text-teal-300">
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
      <section id="program-2" className="bg-gradient-to-b from-white to-emerald-50/20 py-24 border-b border-slate-200">
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
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Program 2 · Bio-Cleaner & Debris
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {prog2Title}
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600 font-light">
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
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{prog2Card1Title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{prog2Card1Body}</p>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500 font-mono">
                  ⚑ Note: Deciding whether Bio Cleaner gets its own subdomain for commercial/investor audiences.
                </div>
              </div>
            </Reveal>

            {/* Metric Segment */}
            <Reveal delay={150}>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xs border border-emerald-500/10 bg-emerald-950 p-8 text-white flex flex-col justify-center">
                <div className="relative z-10 space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">{prog2MetricLabel}</span>
                  <div className="flex items-baseline text-5xl font-serif font-bold text-emerald-300">
                    <AnimatedCounter value={prog2MetricValue} suffix={prog2MetricSuffix} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block">{prog2MetricDesc}</span>
                  <p className="text-sm font-light text-slate-350 leading-relaxed mt-2">{prog2MetricDetail}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: NĀ KIAʻI KAI COMMUNITY SCIENCE (PROGRAM 3)
         ========================================================================= */}
      <section id="program-3" className="bg-gradient-to-b from-white to-amber-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                    Program 3 · Community Science
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {prog3Title}
                </h2>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600 font-light">
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
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span className="text-xs font-medium text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Data Impact Metric Card */}
            <div className="md:col-span-5">
              <Reveal delay={150}>
                <div className="h-full rounded-2xl border border-amber-500/10 bg-amber-50/20 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-amber-950 mb-2">{prog3Card1Title}</h3>
                    <p className="text-sm text-amber-900/80 leading-relaxed font-light">{prog3Card1Body}</p>
                  </div>
                  <div className="mt-6 border-t border-amber-500/20 pt-4">
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1">Impact Level</span>
                    <div className="text-2xl font-serif font-bold text-amber-900">Standardized & Policy-Approved</div>
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
      <section id="methodology" className="bg-gradient-to-b from-white to-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700">
                    <Waves className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Our Methodology · The Science
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {methodTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-slate-700">
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
                <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white relative overflow-hidden flex flex-col justify-center">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase mb-1">{methodMetricLabel}</span>
                  <div className="flex items-baseline text-4xl font-serif font-bold text-teal-300">
                    <AnimatedCounter value={methodMetricValue} suffix={methodMetricSuffix} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block">{methodMetricDesc}</span>
                  <p className="text-xs font-light text-slate-300 leading-relaxed mt-2">{methodMetricDetail}</p>
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
