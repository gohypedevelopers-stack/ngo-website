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
import { CrisisPageData, getStrapiMediaUrl } from '@/lib/strapi'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CrisisStats } from '@/components/crisis-stats'

export const crisisPages = [
  {
    slug: '/the-crisis/the-nehu',
    eyebrow: 'Keystone species',
    title: 'The Nehu',
    subtitle: 'The Most Important Fish You’ve Never Heard Of',
    description: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands. The foundational forage fish of the Hawaiian marine food web.',
    image: '/contact_ocean.png',
    icon: Fish,
    stats: [
      { value: 'Endemic', label: 'Only in the Hawaiian Islands' },
      { value: 'Forage Base', label: 'Foundational fish of the food web' },
      { value: 'Vulnerable', label: 'Nearshore pollution threat' },
    ],
    sections: [
      {
        title: 'Traditional Aku Fishery',
        body: 'Primary live bait for traditional aku (skipjack tuna) pole-and-line fishery.',
      },
      {
        title: 'Apex Food Web',
        body: 'Critical food for ahi, ʻopelu, akule, dolphins, and seabirds.',
      },
      {
        title: 'Estuarine Habitats',
        body: 'Lives only in semi-enclosed bays — extremely vulnerable to nearshore pollution.',
      },
      {
        title: 'Food Sovereignty',
        body: 'No nehu = no aku fishery = no food sovereignty.',
      },
    ],
    proverb: '“He aliʻi ka ʼaina, he kauwā ke kanaka.” — The land is chief; the people are its servants.',
  },
  {
    slug: '/the-crisis/cesspool-problem',
    eyebrow: 'The hidden killer',
    title: 'The Cesspool Crisis',
    subtitle: '53 Million Gallons of Sewage Enter Hawaiʻi’s Ocean Every Single Day',
    description: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats.',
    image: '/cesspool_split.png',
    icon: Droplets,
    stats: [
      { value: '88,000', label: 'Cesspools statewide (12,000+ on Maui alone)' },
      { value: '53 Million', label: 'Gallons of sewage discharged daily' },
      { value: '10x Acceleration', label: 'Required conversion rate of 3,000+/year vs 300 current rate' },
    ],
    sections: [
      {
        title: 'Cesspool Density',
        body: '88,000 cesspools statewide; 12,000+ on Maui alone.',
      },
      {
        title: 'Pathogen Contamination',
        body: 'Effluent carries nitrogen, phosphorus, bacteria, viruses.',
      },
      {
        title: 'Coral Reef Suffocation',
        body: 'Nutrient loading causes algal blooms killing coral reefs.',
      },
      {
        title: 'Water Supply Threat',
        body: '50% of private drinking water wells near cesspools test positive for fecal bacteria.',
      },
      {
        title: 'Public Health Impact',
        body: 'Hawaiʻi has the highest MRSA rates in the nation.',
      },
    ],
  },
  {
    slug: '/the-crisis/fragmented-response',
    eyebrow: 'The gap in current efforts',
    title: 'A Fragmented Response',
    subtitle: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
    description: '',
    image: '/ahupuaa_aerial.png',
    icon: Network,
    stats: [
      { value: 'Silos', label: 'Organizations working in separation' },
      { value: 'Disconnect', label: 'Lacking Native Hawaiian ecological knowledge' },
      { value: '-23%', label: 'Conservation funding declined since 2019' },
    ],
    sections: [
      {
        title: '1. Fragmentation',
        body: 'Organizations work in silos, leaving critical gaps.',
      },
      {
        title: '2. Cultural Disconnect',
        body: 'Programs lack Native Hawaiian ecological knowledge.',
      },
      {
        title: '3. Funding Gap',
        body: 'Conservation funding declined 23% since 2019.',
      },
    ],
    proverb: 'No single organization has ever attempted to address the full system. Until now.',
  },
]

export const crisisLanding = {
  eyebrow: 'Why Hui Nehu exists — 3 sub-pages',
  title: 'The Crisis',
  subtitle:
    'Hawaiʻi’s nearshore ecosystems are facing a critical turning point, driven by three interconnected challenges.',
  description:
    'Explore the keystone role of the nehu, the devastating impact of the cesspool crisis, and the fragmentation of current conservation efforts.',
  image: '/cesspool_split.png',
}

export function CrisisLandingPage({
  data,
}: {
  data?: CrisisPageData | null
}) {
  const eyebrow = data?.eyebrow || crisisLanding.eyebrow
  const title = data?.title || crisisLanding.title
  const subtitle = data?.subtitle || crisisLanding.subtitle
  const description = data?.description || crisisLanding.description
  const image = getStrapiMediaUrl(data?.image) || crisisLanding.image

  // Dynamic overrides from Strapi if present
  const nehuTitle = crisisPages[0].title
  const nehuSubtitle = crisisPages[0].subtitle
  const nehuDesc = crisisPages[0].description
  const nehuImage = getStrapiMediaUrl(data?.sec1Image) || crisisPages[0].image
  const nehuEyebrow = crisisPages[0].eyebrow

  const cesspoolTitle = crisisPages[1].title
  const cesspoolSubtitle = crisisPages[1].subtitle
  const cesspoolDesc = crisisPages[1].description
  const cesspoolImage = getStrapiMediaUrl(data?.sec2Image) || crisisPages[1].image
  const cesspoolEyebrow = crisisPages[1].eyebrow
  const fragmentedTitle = crisisPages[2].title
  const fragmentedSubtitle = crisisPages[2].subtitle
  const fragmentedDesc = crisisPages[2].description
  const fragmentedImage = getStrapiMediaUrl(data?.sec3Image) || crisisPages[2].image
  const fragmentedEyebrow = crisisPages[2].eyebrow

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800">
      {/* Dark Nav Background container */}
      <div className="bg-slate-900 w-full h-20" />
      <SiteNav theme="dark" />
      {/* =========================================================================
          SECTION 1: THE NEHU (KEYSTONE SPECIES)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-white to-teal-50/20 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-8">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 block">
                  {nehuEyebrow}
                </span>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {nehuTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/80">
                  {nehuSubtitle}
                </p>
                
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-teal-600">
                  What It Is
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {nehuDesc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {nehuImage && (
                    <Image
                      src={nehuImage}
                      alt={nehuTitle}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>



          {/* Significance Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Significance
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                Why the Nehu Matters
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {crisisPages[0].sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold transition-all group-hover:bg-teal-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proverb Banner */}
          {crisisPages[0].proverb && (
            <div className="mt-10 bg-teal-50/30 rounded-2xl py-8 px-6 text-center border border-teal-500/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4 block">
                ʻŌlelo Noʻeau · Hawaiian Proverb
              </span>
              <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-teal-950 leading-relaxed max-w-4xl mx-auto font-light">
                {crisisPages[0].proverb.split(' — ')[0]}
              </blockquote>
              {crisisPages[0].proverb.includes(' — ') && (
                <>
                  <div className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
                  <cite className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 not-italic font-semibold">
                    {crisisPages[0].proverb.split(' — ')[1]}
                  </cite>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE CESSPOOL CRISIS (THE HIDDEN KILLER)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-white to-teal-50/20 py-12 text-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-8">
            <div className="lg:col-span-7 space-y-6 lg:order-2">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 block">
                  {cesspoolEyebrow}
                </span>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {cesspoolTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/80">
                  {cesspoolSubtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {cesspoolDesc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:order-1">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {cesspoolImage && (
                    <Image
                      src={cesspoolImage}
                      alt={cesspoolTitle}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>



          {/* Grid of issues */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                The Impact
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                How Waste Destroys Nearshore Life
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {crisisPages[1].sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold transition-all group-hover:bg-teal-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* The Law (Act 125) Callout Banner */}
            <Reveal delay={200}>
              <div className="mt-12 border border-teal-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300 bg-teal-50/10">
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image
                    src="/law_banner_bg.png"
                    alt="Law Banner Background"
                    fill
                    className="object-cover opacity-35 mix-blend-multiply"
                  />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 border border-teal-500/20">
                      ⚖️ The Law (Act 125)
                    </span>
                    <p className="text-base sm:text-lg text-slate-800 font-light leading-relaxed max-w-4xl">
                      Act 125 (2017) mandates all 88,000 cesspools converted by 2050. Current rate: <span className="font-semibold text-teal-900">~300/year</span>. Required rate: <span className="font-semibold text-teal-900">3,000+/year</span> — a <span className="font-semibold text-teal-700 bg-teal-500/10 px-1.5 py-0.5 rounded font-mono">10x acceleration needed</span>.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: A FRAGMENTED RESPONSE (GAPS IN CURRENT EFFORTS)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-white to-teal-50/20 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-6">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 block">
                  {fragmentedEyebrow}
                </span>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {fragmentedTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/80">
                  {fragmentedSubtitle}
                </p>
                

                
                {fragmentedDesc && (
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {fragmentedDesc}
                  </p>
                )}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {fragmentedImage && (
                    <Image
                      src={fragmentedImage}
                      alt={fragmentedTitle}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                </div>
              </Reveal>
            </div>
          </div>



          {/* Grid of Gaps */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                The Structural Failures
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                Why Traditional Conservation Falls Short
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {crisisPages[2].sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold transition-all group-hover:bg-teal-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {section.title.replace(/^\d+\.\s+/, '')}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Closing Line Banner */}
          {crisisPages[2].proverb && (
            <div className="mt-10 bg-teal-50/30 rounded-2xl py-8 px-6 text-center border border-teal-500/10 relative overflow-hidden">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-teal-950 leading-relaxed max-w-4xl mx-auto font-light">
                {crisisPages[2].proverb.split(' — ')[0]}
              </p>
              {crisisPages[2].proverb.includes(' — ') && (
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {crisisPages[2].proverb.split(' — ')[1]}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
