import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Droplets,
  Fish,
  Network,
  Waves,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CrisisStats } from '@/components/crisis-stats'

export const crisisPages = [
  {
    slug: '/the-crisis/the-nehu',
    eyebrow: 'Section 1: Keystone Species',
    title: 'The Most Important Fish You’ve Never Heard Of',
    subtitle: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands.',
    description: 'The foundational forage fish of the Hawaiian marine food web.',
    image: '/contact_ocean.png',
    icon: Fish,
    stats: [
      { value: 'Endemic', label: 'Encrasicholina purpurea — found exclusively in the Hawaiian Islands' },
      { value: 'Forage Base', label: 'Foundational forage fish of the Hawaiian food web' },
      { value: 'Vulnerable', label: 'Extremely vulnerable to nearshore pollution' },
    ],
    sections: [
      {
        title: 'Traditional Aku Fishery',
        body: 'Primary live bait for traditional aku (skipjack tuna) pole-and-line fishery. A vital link connecting local fishing heritage with marine resources.',
      },
      {
        title: 'Apex Food Web',
        body: 'Critical food for ahi, ʻopelu, akule, dolphins, and seabirds. The biological heartbeat of our nearshore marine ecosystems.',
      },
      {
        title: 'Estuarine Habitats',
        body: 'Lives only in semi-enclosed bays — extremely vulnerable to nearshore pollution, sedimentation, and coastal runoff.',
      },
      {
        title: 'Food Sovereignty',
        body: 'No nehu = no aku fishery = no food sovereignty. The collapse of this keystone species directly threatens local community food independence.',
      },
    ],
    proverb: '“He aliʻi ka ʼaina, he kauwā ke kanaka.” — The land is chief; the people are its servants.',
  },
  {
    slug: '/the-crisis/cesspool-problem',
    eyebrow: 'Section 2: The Hidden Killer',
    title: '53 Million Gallons of Sewage Enter Hawaiʻi’s Ocean Every Single Day',
    subtitle: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats.',
    description: 'Act 125 (2017) mandates all 88,000 cesspools converted by 2050. Current rate: ~300/year. Required rate: 3,000+/year — a 10x acceleration needed.',
    image: '/cesspool_split.png',
    icon: Droplets,
    stats: [
      { value: '88,000', label: 'Cesspools statewide (12,000+ on Maui alone)' },
      { value: '53 Million', label: 'Gallons of untreated human waste discharged daily' },
      { value: '10x Acceleration', label: 'Required conversion rate of 3,000+/year vs 300 current rate' },
    ],
    sections: [
      {
        title: 'Nutrient Loading & Coral Death',
        body: 'Cesspool effluent introduces catastrophic levels of nitrogen and phosphorus. This nutrient loading triggers devastating algal blooms that suffocate and kill nearshore coral reefs.',
      },
      {
        title: 'Pathogen Contamination',
        body: 'Effluent discharges bacteria, viruses, and raw waste directly into aquifers. 50% of private drinking water wells near cesspools test positive for fecal bacteria contamination.',
      },
      {
        title: 'Public Health (MRSA)',
        body: 'Runoff in recreational waters directly impacts human safety, contributing to Hawaiʻi having the highest rates of community-acquired MRSA infections in the entire nation.',
      },
      {
        title: 'Legislative Mandate (Act 125)',
        body: 'Hawaiʻi State Act 125 (2017) legally mandates all 88,000 residential cesspools must be fully converted by 2050. Meeting this requires an immediate 10x acceleration.',
      },
    ],
  },
  {
    slug: '/the-crisis/fragmented-response',
    eyebrow: 'Section 3: Gaps in Conservation',
    title: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
    subtitle: 'Traditional conservation efforts are currently isolated and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist.',
    description: 'No single organization has ever attempted to address the full system. Until now.',
    image: '/ahupuaa_aerial.png',
    icon: Network,
    stats: [
      { value: '-23%', label: 'Decline in marine conservation funding since 2019' },
      { value: 'Isolated Silos', label: 'Organizations working in isolated silos' },
      { value: 'Cultural Gap', label: 'Detached from Native Hawaiian ecological knowledge' },
    ],
    sections: [
      {
        title: '1. Fragmentation',
        body: 'Environmental organizations work inside isolated silos, leaving massive, unaddressed gaps in the coastal ecosystem chain.',
      },
      {
        title: '2. Cultural Disconnect',
        body: 'Conservation programs lack integration with Native Hawaiian ecological knowledge and traditional practices.',
      },
      {
        title: '3. Funding Gap',
        body: 'Available marine conservation funding across the islands has suffered a severe 23% decline since 2019.',
      },
    ],
    proverb: 'No single organization has ever attempted to address the full system. — Until now.',
  },
]

export const crisisLanding = {
  eyebrow: 'Ecosystem Emergency',
  title: 'The Connected Crisis',
  subtitle:
    'Conservation funding in Hawaiʻi has experienced a sharp 23% decline since 2019, compounding an already severe ecological emergency.',
  description:
    'Our nearshore waters face three interlocking threats: the collapse of the foundational nehu food web, devastating nutrient pollution from cesspools, and a fragmented conservation response that remains detached from traditional practices.',
  image: '/cesspool_split.png',
}

export function CrisisPageTemplate({
  page,
}: {
  page: (typeof crisisPages)[number]
}) {
  const Icon = page.icon
  const hasProverb = 'proverb' in page && typeof page.proverb === 'string' && page.proverb

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {page.eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  {page.title}
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/80">
                  {page.subtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {page.description}
                </p>
              </Reveal>
            </div>

            {/* Right Image (Split Screen) */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src={page.image}
                    alt={page.title}
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

      {/* Stats Bar */}
      <section className="bg-teal-50/20 py-8 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CrisisStats stats={page.stats} />
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Significance
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900">
            Why It Matters
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full animate-pulse-soft" />
        </div>
        <div className={`mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 grid-cols-1 md:grid-cols-2 ${page.sections.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {page.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-md hover:shadow-teal-100/10 hover:bg-gradient-to-b hover:from-white hover:to-teal-50/10">
                {/* Numbered Badge */}
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-teal-50/40 border border-teal-100/40 text-teal-700 font-mono text-xs font-bold shadow-xs transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 group-hover:scale-105">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2.5 font-serif text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                  {section.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-500 font-light">
                  {section.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing Proverb Banner */}
      {hasProverb && (
        <section className="bg-teal-50/40 py-14 text-center relative overflow-hidden border-y border-teal-500/10">
          <div className="relative z-10 mx-auto max-w-5xl px-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4 block">
              ʻŌlelo Noʻeau · Hawaiian Proverb
            </span>
            <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-teal-950 leading-relaxed font-light">
              {page.proverb.split(' — ')[0]}
            </blockquote>
            <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
            <cite className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-500 not-italic font-semibold">
              {page.proverb.split(' — ')[1]}
            </cite>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  )
}

export function CrisisLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Landing Hero */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Waves className="h-5 w-5 animate-pulse" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {crisisLanding.eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  {crisisLanding.title}
                </h1>
                
                <p className="mt-4 text-xl font-light leading-relaxed text-teal-900">
                  {crisisLanding.subtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {crisisLanding.description}
                </p>
              </Reveal>
            </div>

            {/* Right Image Column (Split Screen) */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  <Image
                    src={crisisLanding.image}
                    alt={crisisLanding.title}
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

      {/* Deep-Dive Expand Sections directly on Landing Page */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-32">
          
          {/* Section 1: The Nehu */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  <Fish className="h-4 w-4" /> Section 1: Forage Base
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  The Nehu: The Most Important Fish You’ve Never Heard Of
                </h2>
                <p className="text-base leading-relaxed text-slate-600 font-light">
                  Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands. The foundational forage fish of the Hawaiian marine food web. Lives only in semi-enclosed bays, making nehu populations extremely vulnerable to nearshore pollution.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/the-crisis/the-nehu"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-slate-950"
                  >
                    Read full species profile <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/contact_ocean.png"
                    alt="Endemic Nehu species details"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Section 2: The Cesspool Problem */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  <Droplets className="h-4 w-4 text-teal-500" /> Section 2: Sewage & Reefs
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  The Cesspool Crisis: The Hidden Killer
                </h2>
                <p className="text-base leading-relaxed text-slate-600 font-light">
                  Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats. Act 125 (2017) mandates all 88,000 cesspools converted by 2050, requiring a 10x acceleration to convert 3,000+ per year instead of the current 300.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/the-crisis/cesspool-problem"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-slate-950"
                  >
                    Read about septic mandates <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <Reveal delay={100}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/cesspool_split.png"
                    alt="Split view of wastewater pollution"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Section 3: A Fragmented Response */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                  <Network className="h-4 w-4" /> Section 3: Governance Gaps
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  A Fragmented Response: Siloed & Underfunded
                </h2>
                <p className="text-base leading-relaxed text-slate-600 font-light">
                  Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist. No single organization has ever attempted to address the full system. Until now.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/the-crisis/fragmented-response"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-slate-950"
                  >
                    Read structural fails & solutions <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/ahupuaa_aerial.png"
                    alt="Ahupuaa restoration loop details"
                    fill
                    className="object-cover"
                  />
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
