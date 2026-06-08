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

export const crisisPages = [
  {
    slug: '/the-crisis/the-nehu',
    eyebrow: 'Section 1: The Forgotten Keystone',
    title: 'The Nehu (The Forgotten Keystone)',
    subtitle: 'The foundational forage fish of Hawaiʻi nearshore marine systems.',
    description:
      'The nehu is an endemic silver anchovy that acts as the foundational forage fish for the entire nearshore ecosystem. Without it, the marine food web collapses.',
    image: '/nehu_forage_fish.png',
    icon: Fish,
    stats: [
      { value: 'Endemic', label: 'Found exclusively in the Hawaiian Islands' },
      { value: 'Keystone', label: 'Foundational food for ahi, \u02B5\u014Dpelu, akule, dolphins, and seabirds' },
      { value: 'Traditional', label: 'Primary live bait for traditional aku pole-and-line fishery' },
    ],
    sections: [
      {
        title: 'Species Profile & Ecological Impact',
        body: 'The nehu (Encrasicholina purpurea) is a critical food source for apex marine life. Without this endemic anchovy, the nearshore marine food web collapses. It acts as the key link transferring energy from plankton to larger predators.',
      },
      {
        title: 'Economic & Cultural Value',
        body: 'For centuries, the nehu has been the primary live bait utilized for the traditional Hawaiian aku (skipjack tuna) pole-and-line fishery. This practice represents a direct connection between local fishermen, ancestral knowledge, and marine resource harvest.',
      },
      {
        title: 'The Vulnerability Threat',
        body: 'Because nehu populations are restricted to semi-enclosed bays and coastal estuaries, they are acutely vulnerable to nearshore human pollution. The systemic equation is clear: No nehu = no aku fishery = no food sovereignty for Hawaiian communities.',
      },
    ],
  },
  {
    slug: '/the-crisis/cesspool-problem',
    eyebrow: 'Section 2: The Hidden Killer',
    title: 'The Cesspool Problem (The Hidden Killer)',
    subtitle: 'Wastewater pollution undermining coastal coral reef systems.',
    description:
      'With the highest number of cesspools per capita in the nation, Hawaiʻi discharges catastrophic levels of untreated human waste directly into groundwater and coastal coral reefs every day.',
    image: '/cesspool_pollution.png',
    icon: Droplets,
    stats: [
      { value: '88,000', label: 'Cesspools statewide (12,000+ on Maui alone)' },
      { value: '53 Million', label: 'Gallons of untreated human waste discharged daily' },
      { value: '10x Gap', label: 'Need 3,000+ annual conversions vs 300 current rate' },
    ],
    sections: [
      {
        title: 'The Environmental Cost',
        body: 'Daily effluent introducing severe nitrogen and phosphorus nutrient loading sparks devastating algal blooms. These blooms suffocate and kill coral reefs, destroying the nursery habitats nehu and other reef species rely on.',
      },
      {
        title: 'Public Health Risks',
        body: '50% of private drinking water wells located near high-cesspool zones test positive for fecal bacteria contamination, directly contributing to Hawai\u02BBi having the highest rates of MRSA infections in the nation.',
      },
      {
        title: 'The Legislative Mandate & The Acceleration Gap',
        body: 'Hawai\u02BBi State Act 125 (2017) legally mandates all 88,000 residential cesspools must be fully converted by 2050. However, the current conversion rate of 300/year must be accelerated by 10x to 3,000+/year to meet the legal deadline.',
      },
    ],
  },
  {
    slug: '/the-crisis/fragmented-response',
    eyebrow: 'Section 3: Gaps in Conservation',
    title: 'A Fragmented Response',
    subtitle: 'Why traditional conservation efforts are currently isolated and underfunded.',
    description:
      'Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist.',
    image: '/ahupuaa_watershed.png',
    icon: Network,
    stats: [
      { value: '-23%', label: 'Decline in marine conservation funding since 2019' },
      { value: 'Isolated Silos', label: 'Organizations working separately' },
      { value: 'Cultural Gap', label: 'Detached from local, Indigenous ecological practices' },
    ],
    sections: [
      {
        title: 'Structural Failure: Fragmentation',
        body: 'Existing regional environmental organizations work inside isolated silos, leaving massive, unaddressed gaps in the coastal ecosystem chain. Efforts are disconnected between watershed management, marine cleanup, and community involvement.',
      },
      {
        title: 'Structural Failure: Cultural Disconnect',
        body: 'Modern conservation programs regularly lack integration with Native Hawaiian ecological knowledge and traditional practices (like the ahupua\u02BBa framework), missing out on centuries of tested ecosystem balance.',
      },
      {
        title: 'The Funding Gap & Solution',
        body: 'Available marine conservation funding across the islands has suffered a severe 23% decline since 2019. Prior to Hui Nehu, no singular organization had attempted to construct an operational model addressing this full ecosystem loop simultaneously.',
      },
    ],
  },
]

export const crisisLanding = {
  eyebrow: 'Ecosystem Emergency',
  title: 'The Connected Crisis',
  subtitle:
    'Conservation funding in Hawai\u02BBi has experienced a sharp 23% decline since 2019, compounding an already severe ecological emergency.',
  description:
    'Our nearshore waters face three interlocking threats: the collapse of the foundational nehu food web, devastating nutrient pollution from cesspools, and a fragmented conservation response that remains detached from traditional practices.',
  image: '/cesspool_pollution.png',
}

export function CrisisPageTemplate({
  page,
}: {
  page: (typeof crisisPages)[number]
}) {
  const Icon = page.icon

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
                <Link
                  href="/the-crisis"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600 transition-colors hover:text-teal-800"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  Back to Crisis Overview
                </Link>
                
                <div className="mt-4 flex items-center gap-3">
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
                
                <p className="mt-4 text-base leading-relaxed text-slate-650">
                  {page.description}
                </p>
              </Reveal>
            </div>

            {/* Right Image (Split Screen) */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-lg">
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
      <section className="bg-teal-50/50 py-16 text-slate-950 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {page.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <div className="h-full rounded-2xl border border-teal-100 bg-white p-8 shadow-sm">
                  <div className="mb-2 font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-600">
                    {stat.value}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-606 font-light">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 100}>
              <article className="h-full rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm hover:border-teal-500/20 transition-all">
                <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-605 font-light">
                  {section.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cross-Link section */}
      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-teal-100 bg-white p-8 md:p-12 relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3 text-amber-600">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Connected Crisis Threat Matrix
                  </span>
                </div>
                <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900">
                  A whole-system problem requires a whole-system response.
                </h2>
                <p className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-605 sm:text-base font-light">
                  Hui Nehu targets the full loop of nearshore conservation. Explore how the other dimensions of this ecological emergency connect.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {crisisPages
                    .filter((item) => item.slug !== page.slug)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={item.slug}
                        className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-6 transition-all hover:border-teal-500/40 hover:bg-teal-50/20"
                      >
                        <div>
                          <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                            {item.eyebrow}
                          </div>
                          <div className="font-serif text-lg font-bold text-slate-905 group-hover:text-teal-700 transition-colors">
                            {item.title.split(' (')[0]}
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-655">
                    {crisisLanding.eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  {crisisLanding.title}
                </h1>
                
                <p className="mt-4 text-xl font-light leading-relaxed text-teal-900">
                  {crisisLanding.subtitle}
                </p>
                
                <p className="mt-4 text-base leading-relaxed text-slate-650">
                  {crisisLanding.description}
                </p>
              </Reveal>
            </div>

            {/* Right Image Column (Split Screen) */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
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

      {/* Core Crisis Sections List */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {crisisPages.map((page, index) => {
              const Icon = page.icon
              return (
                <Reveal key={page.slug} delay={index * 100}>
                  <Link
                    href={page.slug}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                      {page.eyebrow.split(':')[0]}
                    </div>
                    <h2 className="mb-3 font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {page.title}
                    </h2>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 font-light">
                      {page.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 group-hover:text-teal-900 transition-colors">
                      Explore Sub-Page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
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
                  The Nehu: The Forgotten Keystone
                </h2>
                <p className="text-base leading-relaxed text-slate-650 font-light">
                  The nehu (Encrasicholina purpurea) is an endemic silver anchovy that acts as the foundational forage fish for the entire nearshore ecosystem. Without it, the marine food web collapses. It links primary plankton production directly to larger pelagic predators and reef life.
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
                    src="/nehu_forage_fish.png"
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
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-655">
                  <Droplets className="h-4 w-4 text-red-500" /> Section 2: Sewage & Reefs
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  The Cesspool Problem: The Hidden Killer
                </h2>
                <p className="text-base leading-relaxed text-slate-655 font-light">
                  With the highest number of cesspools per capita in the nation, Hawaiʻi discharges catastrophic levels of untreated human waste directly into groundwater and coastal coral reefs every day. This causes extreme nutrient overloading, suffocating coral nurseries and triggering toxic algal bloom outbreaks.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/the-crisis/cesspool-problem"
                    className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-slate-950"
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
                    src="/cesspool_pollution.png"
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
                  A Fragmented Response
                </h2>
                <p className="text-base leading-relaxed text-slate-655 font-light">
                  Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist. Solving this requires a unified mountain-to-sea framework that connects science, policy, and community action.
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
                    src="/ahupuaa_watershed.png"
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
