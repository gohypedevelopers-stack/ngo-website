import Image from 'next/image'
import { Users, GraduationCap, Database, Eye, Activity, Droplets, Trash2, Heart, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'
import { fetchOurWorkSubPages, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'Nā Kiaʻi Kai Community Science — Hui Nehu',
  description: 'Training local volunteers in fish surveys, limu monitoring, and water quality testing.',
}

export default async function CommunitySciencePage() {
  const subPages = await fetchOurWorkSubPages()
  const page = subPages.find(p => p.slug === 'community-science')

  const eyebrow = page?.eyebrow || ''
  const title = page?.title || ''
  const description = page?.description || ''
  const image = getStrapiMediaUrl(page?.image) || ''

  const metricLabel = page?.metricLabel || ''
  const metricValue = page?.metricValue !== undefined && page.metricValue !== null ? page.metricValue : 0
  const metricSuffix = page?.metricSuffix || ''
  const metricDesc = page?.metricDesc || ''
  const metricDetail = page?.metricDetail || ''
  const metricBgImage = getStrapiMediaUrl(page?.metricBgImage) || ''

  const activities = [
    {
      title: page?.activity1Title || '',
      desc: page?.activity1Body || '',
      icon: Eye,
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      title: page?.activity2Title || '',
      desc: page?.activity2Body || '',
      icon: Activity,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: page?.activity3Title || '',
      desc: page?.activity3Body || '',
      icon: Droplets,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: page?.activity4Title || '',
      desc: page?.activity4Body || '',
      icon: Trash2,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      title: page?.activity5Title || '',
      desc: page?.activity5Body || '',
      icon: Heart,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: page?.activity6Title || '',
      desc: page?.activity6Body || '',
      icon: GraduationCap,
      color: 'text-amber-600 bg-amber-50'
    }
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Hero / What We Do Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl whitespace-pre-line">
                  {title}
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  {description}
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  {image && (
                    <Image
                      src={image}
                      alt={title || "Community science monitoring team"}
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

      {/* Activities Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-50 text-teal-700 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Program Activities</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((act, idx) => {
              const IconComp = act.icon
              return (
                <Reveal key={act.title} delay={idx * 50}>
                  <div className="h-full rounded-2xl border border-slate-200/60 bg-slate-50/50 p-6 hover:border-teal-500/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className={`inline-flex items-center justify-center h-9 w-9 rounded-xl ${act.color} mb-4`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-slate-950 mb-2">{act.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{act.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Impact Section */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              {metricBgImage && (
                <Image
                  src={metricBgImage}
                  alt={metricDesc || "Hawaiian volunteers conducting marine science research"}
                  fill
                  className="object-cover object-center"
                />
              )}
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/70" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
                <div className="flex items-center gap-5 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase mb-1">{metricLabel}</span>
                    <div className="flex items-baseline text-5xl font-serif font-bold text-white">
                      <AnimatedCounter value={metricValue} suffix={metricSuffix} />
                    </div>
                    <span className="mt-1 text-[10px] font-semibold tracking-widest uppercase text-slate-400">{metricDesc}</span>
                  </div>
                </div>

                <div className="h-12 w-px bg-white/15 hidden sm:block" />

                <p className="text-sm font-light text-slate-300 leading-relaxed">
                  {metricDetail}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
