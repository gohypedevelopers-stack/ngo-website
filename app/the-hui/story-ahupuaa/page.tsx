import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Compass, Check } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Our Story & The Ahupuaʻa Model — Hui Nehu',
  description: 'Bringing 1,000-year-old Hawaiian watershed engineering forward into the 21st century.',
}

export default function StoryAhupuaaPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/ahupuaa_restoration.png"
            alt="Traditional Hawaiian Ahupuaa system layout background"
            fill
            className="object-cover object-center opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/the-hui"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to The Hui
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Ahupuaʻa Framework</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Our Story & The Ahupuaʻa Model</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Applying time-tested land and ocean stewardship engineering rules to protect the coastal fisheries of today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
          
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Ancestral Innovation</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                Over 1,000 years ago, Hawaiʻiʻs ancestors successfully solved coastal resource crises by managing the landscape through the **ahupuaʻa** system. This framework split regions into wedge-like sections that extended from mountain peaks (mauka) to coral reefs (makai).
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                By treating the watershed as a singular, connected, living entity, downstream areas were guaranteed clean water and nutrient flows, preventing soil blockages from choking coastal ecosystems.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">The Concept of Kānāwai</h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                The historical Hawaiian word for law is **kānāwai**, translating directly to &ldquo;the equal sharing of water.&rdquo; In ancient Hawaiʻi, freshwater (**wai**) was recognized as the foundational source of all wealth (**waiwai**).
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                This semantic link shows that ancient Hawaiian society built its legal and economic framework directly around water stewardship and downstream safety rather than speculative resource hoarding.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="border border-white/5 bg-slate-900/40 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Ancient Engineering Mastered</h2>
              <div className="grid gap-6 md:grid-cols-3 text-sm font-light text-slate-300">
                <div className="space-y-2">
                  <div className="font-bold text-amber-350">300+ Fishponds</div>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    Ancestral practitioners engineered over 300 highly productive fishponds (loko iʻa) along island coastlines to cultivate protein without depleting ocean stocks.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-cyan-350">Stewardship of Koʻa</div>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    Maintained delicate offshore fishing grounds (koʻa) through constant observation, ensuring target populations were never over-harvested.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-teal-350">Runoff Regulation</div>
                  <p className="text-xs text-slate-450 leading-relaxed">
                    Deliberately regulated upland mountain freshwater runoff to shelter downstream coral nurseries and maintain ideal brackish nehu habitats.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white">Our 21st Century Model</h2>
              <p className="text-sm text-slate-355 font-light leading-relaxed">
                Hui Nehu brings this historical 1,000-year-old operational design forward into the 21st century. By merging the ahupuaʻa system principles with digital IoT sensors and modern septic engineering, we prove that cultural alignment builds stronger ecological recovery.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
