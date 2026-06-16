import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Shield, Globe, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Habitat & Loko Iʻa Restoration — Hui Nehu',
  description: 'We don’t just restore coral — we restore the entire food web through traditional wisdom and marine science.',
}

import { fetchOurWorkSubPages, getStrapiMediaUrl } from '@/lib/strapi'

export default async function HabitatLokoIaPage() {
  const subPages = await fetchOurWorkSubPages()
  const page = subPages.find(p => p.slug === 'habitat-loko-ia')

  const eyebrow = page?.eyebrow || 'Program 1: Habitat & Loko Iʻa'
  const title = page?.title || 'We Don’t Just Restore Coral — We Restore the Entire Food Web'
  const description = page?.description || 'Restoring estuarine habitats, coral reefs, and traditional fishponds (loko iʻa). Propagating thermal-tolerant coral and native limu using traditional cultivation and modern asexual propagation methods.'
  const image = getStrapiMediaUrl(page?.image) || '/coral_limu_restoration.png'

  const card1Title = page?.card1Title || 'Keystone Focus'
  const card1Body = page?.card1Body || 'Restoring foundational habitats triggers a trophic cascade that revitalizes the entire coastal ecosystem.'

  const card2Title = page?.card2Title || 'Ahupuaʻa Link'
  const card2Body = page?.card2Body || 'Ancient Hawaiians built 300+ fishponds (loko iʻa) and managed freshwater flow to protect downstream coral nurseries. We revive this 1,000-year-old wisdom.'

  const metricLabel = page?.metricLabel || 'Target Metric'
  const metricValue = page?.metricValue !== undefined && page.metricValue !== null ? page.metricValue : 70
  const metricSuffix = page?.metricSuffix || '%'
  const metricDesc = page?.metricDesc || 'Coral Survival Rate'
  const metricDetail = page?.metricDetail || 'Target for pilot sites — integrating Indigenous Ecological Knowledge with modern marine science to achieve unprecedented restoration outcomes.'
  const metricBgImage = getStrapiMediaUrl(page?.metricBgImage) || '/contact_ocean.png'

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Anchor className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    {eyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
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
                      alt={title || "Restoration image"}
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

      {/* Content Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
          
          {/* Section Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Keystone Focus */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-cyan-50 text-cyan-600 mb-5">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{card1Title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {card1Body}
                </p>
              </div>
            </Reveal>

            {/* Ahupuaʻa Link */}
            <Reveal delay={150}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-amber-50 text-amber-600 mb-5">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{card2Title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {card2Body}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Target Metric Segment */}
          <Reveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              {metricBgImage && (
                <Image
                  src={metricBgImage}
                  alt="Ocean reef background"
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
