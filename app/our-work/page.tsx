import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Anchor, ShieldCheck, GraduationCap, ArrowUpRight, Waves } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { fetchOurWorkPageData, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'Our Work — Hui Nehu',
  description: "WE DON'T JUST RESTORE CORAL - WE RESTORE THE ENTIRE FOOD WEB. Discover Hui Nehu's three integrated conservation programs.",
}

export default async function OurWorkPage() {
  const data = await fetchOurWorkPageData()

  const heroEyebrow = data?.heroEyebrow || ''
  const heroTitle = data?.heroTitle || ''
  const heroDescription = data?.heroDescription || ''
  const heroImage = getStrapiMediaUrl(data?.heroImage) || ''

  const progs = [
    {
      slug: '/our-work/habitat-loko-ia',
      eyebrow: data?.prog1Eyebrow || '',
      title: data?.prog1Title || '',
      description: data?.prog1Description || '',
      icon: Anchor,
      color: 'from-cyan-600 to-teal-600',
    },
    {
      slug: '/our-work/bio-cleaner',
      eyebrow: data?.prog2Eyebrow || '',
      title: data?.prog2Title || '',
      description: data?.prog2Description || '',
      icon: ShieldCheck,
      color: 'from-teal-600 to-emerald-600',
    },
    {
      slug: '/our-work/community-science',
      eyebrow: data?.prog3Eyebrow || '',
      title: data?.prog3Title || '',
      description: data?.prog3Description || '',
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const trophicTitle = data?.trophicTitle || ''
  const trophicDescription = data?.trophicDescription || ''

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />
 
      {/* Split Hero Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-600"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600">
                    {heroEyebrow}
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  {heroTitle}
                </h1>
                
                <p className="mt-4 text-lg text-slate-650 font-light leading-relaxed max-w-2xl">
                  {heroDescription}
                </p>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <a 
                    href="#programs" 
                    className="group flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-teal-700 hover:scale-105"
                  >
                    Explore Programs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link 
                    href="/our-work/methodology" 
                    className="group flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100"
                  >
                    Our Methodology
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  {heroImage && (
                    <Image
                      src={heroImage}
                      alt={heroTitle || "Our Work Page image"}
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

      {/* Programs Grid */}
      <section id="programs" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {progs.map((prog, index) => {
              const Icon = prog.icon
              return (
                <Reveal key={prog.slug} delay={index * 100}>
                  <Link 
                    href={prog.slug}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 hover:border-teal-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${prog.color} text-white font-bold shadow-sm`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-teal-600 uppercase block mb-1">
                        {prog.eyebrow}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 font-light mb-8">
                        {prog.description}
                      </p>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 group-hover:text-teal-900 transition-colors">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trophic Cascade Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-50 text-teal-700 mb-6">
              <Waves className="h-6 w-6 animate-pulse" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {trophicTitle}
            </h2>
            <p className="text-lg sm:text-xl text-slate-650 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              {trophicDescription}
            </p>
            <Link 
              href="/our-work/methodology"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 text-white px-8 py-4 text-sm font-bold transition-all hover:bg-teal-600 hover:scale-105"
            >
              Understand Our Methodology
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
