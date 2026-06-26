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




export function CrisisLandingPage({
  data,
}: {
  data?: CrisisPageData | null
}) {
  // Data driven purely from Strapi
  const nehuTitle = data?.sec1Title
  const nehuSubtitle = data?.sec1Subtitle
  const nehuDesc = data?.sec1Description
  const nehuImage = getStrapiMediaUrl(data?.sec1Image)
  const nehuEyebrow = data?.sec1Eyebrow

  const cesspoolTitle = data?.sec2Title
  const cesspoolSubtitle = data?.sec2Subtitle
  const cesspoolDesc = data?.sec2Description
  const cesspoolImage = getStrapiMediaUrl(data?.sec2Image)
  const cesspoolEyebrow = data?.sec2Eyebrow
  
  const fragmentedTitle = data?.sec3Title
  const fragmentedSubtitle = data?.sec3Subtitle
  const fragmentedDesc = data?.sec3Description
  const fragmentedImage = getStrapiMediaUrl(data?.sec3Image)
  const fragmentedEyebrow = data?.sec3Eyebrow

  const sec1GridTitle = data?.sec1GridTitle
  const sec2GridTitle = data?.sec2GridTitle
  const sec3GridTitle = data?.sec3GridTitle

  const sec1Sections = [
    { title: data?.sec1Card1Title, body: data?.sec1Card1Body },
    { title: data?.sec1Card2Title, body: data?.sec1Card2Body },
    { title: data?.sec1Card3Title, body: data?.sec1Card3Body },
    { title: data?.sec1Card4Title, body: data?.sec1Card4Body },
  ].filter(s => s.title || s.body)
  const sec1Proverb = data?.sec1Proverb

  const sec2Sections = [
    { title: data?.sec2Card1Title, body: data?.sec2Card1Body },
    { title: data?.sec2Card2Title, body: data?.sec2Card2Body },
    { title: data?.sec2Card3Title, body: data?.sec2Card3Body },
    { title: data?.sec2Card4Title, body: data?.sec2Card4Body },
    { title: data?.sec2Card5Title, body: data?.sec2Card5Body },
  ].filter(s => s.title || s.body)
  const sec2LawBanner = data?.sec2LawBannerBody

  const sec3Sections = [
    { title: data?.sec3Card1Title, body: data?.sec3Card1Body },
    { title: data?.sec3Card2Title, body: data?.sec3Card2Body },
    { title: data?.sec3Card3Title, body: data?.sec3Card3Body },
  ].filter(s => s.title || s.body)
  const sec3Proverb = data?.sec3Proverb

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800">
      <SiteNav theme="dark" />
      {/* =========================================================================
          SECTION 1: THE NEHU (KEYSTONE SPECIES)
         ========================================================================= */}
      <section className="bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-8">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 block">
                  {nehuEyebrow}
                </span>
                
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {nehuTitle}
                </h2>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-200/80">
                  {nehuSubtitle}
                </p>
                
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-teal-400">
                  What It Is
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-300">
                  {nehuDesc}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                Significance
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                {sec1GridTitle}
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sec1Sections.map((section, idx) => (
                <Reveal key={section.title} delay={idx * 100}>
                  <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/30 hover:shadow-md">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-950/50 text-teal-300 font-mono text-xs font-bold transition-all group-hover:bg-teal-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="mb-2 font-serif text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {section.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Proverb Banner */}
          {sec1Proverb && (
            <div className="mt-10 bg-teal-950/20 rounded-2xl py-8 px-6 text-center border border-teal-500/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-400 mb-4 block">
                ʻŌlelo Noʻeau · Hawaiian Proverb
              </span>
              <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-teal-100 leading-relaxed max-w-4xl mx-auto font-light">
                {sec1Proverb.split(' — ')[0]}
              </blockquote>
              {sec1Proverb.includes(' — ') && (
                <>
                  <div className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
                  <cite className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 not-italic font-semibold">
                    {sec1Proverb.split(' — ')[1]}
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
      <section className="bg-white py-20 text-slate-800 border-b border-slate-200">
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
                {sec2GridTitle}
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {sec2Sections.map((section, idx) => (
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
                      {sec2LawBanner}
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
      <section className="bg-slate-50 py-20">
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
                {sec3GridTitle}
              </h3>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {sec3Sections.map((section, idx) => (
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
          {sec3Proverb && (
            <div className="mt-10 bg-teal-50/30 rounded-2xl py-8 px-6 text-center border border-teal-500/10 relative overflow-hidden">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-teal-950 leading-relaxed max-w-4xl mx-auto font-light">
                {sec3Proverb.split(' — ')[0]}
              </p>
              {sec3Proverb.includes(' — ') && (
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {sec3Proverb.split(' — ')[1]}
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
