import Image from 'next/image'
import { Compass, Users, Network } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Our Story & Model — Hui Nehu',
  description: 'Ancient Wisdom for a Modern Crisis. Hui Nehu marine conservation nonprofit model and story.',
}

export default function StoryAhupuaaPage() {
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
                    <Compass className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    The Hui &mdash; Our Story & Origin
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Ancient Wisdom for a Modern Crisis
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Hui Nehu means &ldquo;The Community of the Anchovy.&rdquo; We believe true restoration starts at the very foundation of the food chain.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/ahupuaa_restoration.png"
                    alt="Traditional Hawaiian Ahupuaa system layout"
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

      {/* Details Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-12">
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Who We Are */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-50 text-teal-600 mb-5">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Who We Are</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  A Maui-based 501(c)(3) marine conservation nonprofit, established 2023. The first community-led, whole-system marine conservation organization in Hawaiʻi.
                </p>
              </div>
            </Reveal>

            {/* Our Model */}
            <Reveal delay={150}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-cyan-50 text-cyan-600 mb-5">
                  <Network className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">Our Model</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  The ahupuaʻa made operational &mdash; organizing conservation work from land-based pollution sources to offshore nurseries, addressing issues at source not just symptoms in the ocean.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Proverb Banner */}
      <section className="bg-teal-50/40 py-14 text-center relative overflow-hidden border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-5xl px-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4 block">
            ʻŌlelo Noʻeau · Hawaiian Proverb
          </span>
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-teal-950 leading-relaxed font-light">
            &ldquo;He aliʻi ka ʼaina, he kauwā ke kanaka.&rdquo;
          </blockquote>
          <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
          <cite className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-500 not-italic font-semibold">
            The land is chief; the people are its servants.
          </cite>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
