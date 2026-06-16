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
    title: 'The Most Important Fish You’ve Never Heard Of',
    subtitle: 'What It Is',
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
    title: '53 Million Gallons of Sewage Enter Hawaiʻi’s Ocean Every Single Day',
    subtitle: 'The Problem',
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
        title: 'Pathogen Contamination',
        body: 'Effluent carries nitrogen, phosphorus, bacteria, and viruses. 50% of private drinking water wells near cesspools test positive for fecal bacteria.',
      },
      {
        title: 'Nutrient Loading & Coral Death',
        body: 'Nutrient loading causes algal blooms that suffocate and kill nearshore coral reefs.',
      },
      {
        title: 'Public Health Crisis',
        body: 'Hawaiʻi has the highest MRSA rates in the nation due to pathogen-laden runoff in recreational waters.',
      },
      {
        title: 'The Law (Act 125)',
        body: 'Act 125 (2017) mandates all 88,000 cesspools converted by 2050. Current rate: ~300/year. Required rate: 3,000+/year — a 10x acceleration needed.',
      },
    ],
  },
  {
    slug: '/the-crisis/fragmented-response',
    eyebrow: 'The gap in current efforts',
    title: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
    subtitle: 'Three Failures',
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
  const nehuTitle = data?.sec1Title || crisisPages[0].title
  const nehuSubtitle = data?.sec1Subtitle || crisisPages[0].subtitle
  const nehuDesc = data?.sec1Description || crisisPages[0].description
  const nehuImage = getStrapiMediaUrl(data?.sec1Image) || crisisPages[0].image
  const nehuEyebrow = data?.sec1Eyebrow || crisisPages[0].eyebrow

  const cesspoolTitle = data?.sec2Title || crisisPages[1].title
  const cesspoolSubtitle = data?.sec2Subtitle || crisisPages[1].subtitle
  const cesspoolDesc = data?.sec2Description || crisisPages[1].description
  const cesspoolImage = getStrapiMediaUrl(data?.sec2Image) || crisisPages[1].image
  const cesspoolEyebrow = data?.sec2Eyebrow || crisisPages[1].eyebrow
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
      {/* Main Crisis Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Ambient ocean glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.12)_0%,transparent_55%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] animate-float-slow" style={{ animationDelay: '-4s' }} />
        
        {/* Subtle grid pattern for modern layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column info */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400">
                    <Waves className="h-5 w-5 animate-pulse" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    {eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
                  {title}
                </h1>
                
                <p className="mt-4 text-xl font-light leading-relaxed text-teal-200/90">
                  {subtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
                  {description}
                </p>
              </Reveal>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl">
                  {image && (
                    <Image
                      src={image}
                      alt={title || "Crisis landing image"}
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
      </section>      {/* =========================================================================
          SECTION 1: THE NEHU (KEYSTONE SPECIES)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Fish className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {nehuEyebrow}
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {nehuTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/80">
                  {nehuSubtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600">
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

          {/* Stats Bar */}
          <div className="mb-20 rounded-2xl bg-teal-50/30 border border-teal-500/10 p-6">
            <CrisisStats stats={crisisPages[0].stats} variant="teal" />
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
            <div className="mt-20 bg-teal-50/30 rounded-2xl py-12 px-6 text-center border border-teal-500/10">
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
      <section className="bg-gradient-to-b from-white to-rose-50/20 py-24 border-b border-slate-200 text-slate-800">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6 lg:order-2">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-700">
                    <Droplets className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
                    {cesspoolEyebrow}
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {cesspoolTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-rose-900/80">
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

          {/* Stats Bar */}
          <div className="mb-20 rounded-2xl bg-rose-50/30 border border-rose-500/10 p-6">
            <CrisisStats stats={crisisPages[1].stats} variant="rose" />
          </div>

          {/* Grid of issues */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
                The Impact
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                How Waste Destroys Nearshore Life
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-rose-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {crisisPages[1].sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-700 font-mono text-xs font-bold transition-all group-hover:bg-rose-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
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
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: A FRAGMENTED RESPONSE (GAPS IN CURRENT EFFORTS)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-white to-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-10">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700">
                    <Network className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                    {fragmentedEyebrow}
                  </span>
                </div>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  {fragmentedTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-amber-900/80">
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

          {/* Stats Bar */}
          <div className="mb-12 rounded-2xl bg-amber-50/20 border border-amber-500/10 p-6">
            <CrisisStats stats={crisisPages[2].stats} variant="amber" />
          </div>

          {/* Grid of Gaps */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                The Structural Failures
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900">
                Why Traditional Conservation Falls Short
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-amber-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {crisisPages[2].sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold transition-all group-hover:bg-amber-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
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
            <div className="mt-20 bg-amber-50/30 rounded-2xl py-12 px-6 text-center border border-amber-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="h-24 w-24 text-amber-700" />
              </div>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-amber-950 leading-relaxed max-w-4xl mx-auto font-light">
                {crisisPages[2].proverb.split(' — ')[0]}
              </p>
              {crisisPages[2].proverb.includes(' — ') && (
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
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
