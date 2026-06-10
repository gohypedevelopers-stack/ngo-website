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
                    src="/contact_ocean.png"
                    alt="Traditional Hawaiian coastal ocean view"
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
              <div className="relative h-full min-h-[220px] rounded-2xl overflow-hidden shadow-lg p-8 group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <Image
                  src="/who_we_are_bg.png"
                  alt="Maui coastline and mountains"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-teal-500/15 text-teal-300 mb-5 border border-teal-500/20">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Who We Are</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      A Maui-based 501(c)(3) marine conservation nonprofit, established 2023. The first community-led, whole-system marine conservation organization in Hawaiʻi.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Our Model */}
            <Reveal delay={150}>
              <div className="relative h-full min-h-[220px] rounded-2xl overflow-hidden shadow-lg p-8 group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <Image
                  src="/our_model_bg.png"
                  alt="Hawaiian ahupuaa system"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-cyan-500/15 text-cyan-300 mb-5 border border-cyan-500/20">
                      <Network className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">Our Model</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      The ahupuaʻa made operational &mdash; organizing conservation work from land-based pollution sources to offshore nurseries, addressing issues at source not just symptoms in the ocean.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Proverb Banner */}
      <section className="bg-gradient-to-r from-slate-50 via-teal-50/70 to-slate-50 py-6 text-center relative overflow-hidden border-b border-slate-200/80">
        {/* Radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Stylized background quotes */}
        <div className="absolute left-1/2 top-1/2 -translate-x-[280px] -translate-y-[100px] text-teal-600/5 text-9xl font-serif select-none pointer-events-none hidden md:block">
          &ldquo;
        </div>
        <div className="absolute left-1/2 top-1/2 translate-x-[200px] translate-y-[-10px] text-teal-600/5 text-9xl font-serif select-none pointer-events-none hidden md:block">
          &rdquo;
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-teal-600 mb-2 block">
            ʻŌlelo Noʻeau · Hawaiian Proverb
          </span>
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-slate-800 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
            &ldquo;He aliʻi ka ʼaina, he kauwā ke kanaka.&rdquo;
          </blockquote>
          <div className="mx-auto my-3 h-px w-32 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
          <cite className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-slate-500 not-italic font-medium">
            The land is chief; the people are its servants.
          </cite>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
