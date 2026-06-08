import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CircleDollarSign, Calendar, HeartHandshake } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Get Involved — Hui Nehu',
  description: 'Support Hui Nehu. Join our community workdays, explore investment tiers, or build partnerships.',
}

const subpages = [
  {
    slug: '/get-involved/investment-tiers',
    eyebrow: 'Funding Call',
    title: 'Investment Tiers',
    description: 'Direct your support to specific programs, from coral nursery propagation to youth science courses.',
    icon: CircleDollarSign,
  },
  {
    slug: '/get-involved/volunteer-workdays',
    eyebrow: 'Field Action',
    title: 'Community Workdays',
    description: 'Join hands-on restoration, restore loko iʻa walls, plant native limu, and clean Maui watersheds.',
    icon: Calendar,
  },
  {
    slug: '/get-involved/partner-with-us',
    eyebrow: 'Alliances',
    title: 'Partner With Us',
    description: 'Corporate alliances, landowner cesspool conversions, and academic marine research collaborations.',
    icon: HeartHandshake,
  },
]

export default function GetInvolvedPage() {
  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section (Light Theme with custom image) */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-600"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600">
                    Join the Mission
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  Support the Seed Round.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">
                    Build the Future.
                  </span>
                </h1>
                
                <p className="mt-4 text-base sm:text-lg text-slate-650 font-light leading-relaxed">
                  Hui Nehu is raising **$500,000** in seed funding to concurrently scale our non-profit conservation programs and operationalize the Bio Cleaner Septic Jockey commercial initiative.
                </p>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <Link 
                    href="/get-involved/investment-tiers" 
                    className="group flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-teal-700 hover:scale-105"
                  >
                    Explore Investment Tiers
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    href="/get-involved/volunteer-workdays" 
                    className="group flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100"
                  >
                    Volunteer Workdays
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
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

      {/* Navigation menu of options */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {subpages.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.slug} delay={index * 100}>
                  <Link 
                    href={item.slug}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 hover:border-teal-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
                  >
                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-teal-600 uppercase block mb-1">
                        {item.eyebrow}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 font-light mb-8">
                        {item.description}
                      </p>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 group-hover:text-teal-900 transition-colors">
                      Learn Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
