import Image from 'next/image'
import { ArrowRight, Compass, Shield, Cpu, Anchor, Leaf, Users, GraduationCap, ChevronRight, BarChart } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Our Mission — Hui Nehu',
  description: 'Preserving Hawaiian ocean culture while building the future of sustainable marine technology. Discover how Hui Nehu combines ancestral wisdom with modern engineering.',
}

export default function MissionPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Deep dark blue cinematic ocean water background"
            fill
            priority
            className="object-cover object-center opacity-40 select-none pointer-events-none"
          />
          {/* Cyan/teal glows and dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-teal-500/10 blur-[120px] rounded-full z-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-400"></span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                  Mālama Kai · Cultural Stewardship
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight mb-6">
                Reviving Ocean Tradition.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300">
                  Building the Future.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                Hui Nehu exists to preserve Hawaiian culture, restore sustainable fisheries, and pioneer ocean technologies rooted in aloha ʻāina.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="/products" 
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:opacity-95 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="/ecosystem" 
                  className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
                >
                  See the Ecosystem
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Mission Statement Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-600 uppercase">Our Core</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg leading-relaxed text-slate-600 font-light">
                We combine Native Hawaiian knowledge, modern manufacturing, and sustainable ocean innovation to create tools, vessels, and systems that support communities, protect reefs, and strengthen Hawaiʻi’s blue economy.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={100}>
              <div className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 hover:border-amber-500/30 transition-all hover:-translate-y-1 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-amber-600 transition-colors">Preserve Culture</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Keeping indigenous marine stewardship, language, and ancestral voyaging traditions alive through practical community integration.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 border border-cyan-500/20">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-cyan-600 transition-colors">Protect the Ocean</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Actively restoring coral reefs, implementing sustainable selective net fisheries, and eliminating marine plastics.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-8 hover:border-teal-500/30 transition-all hover:-translate-y-1 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 border border-teal-500/20">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-teal-600 transition-colors">Build Local Industry</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Creating clean, highly-skilled jobs in additive composite manufacturing, aquaculture, and marine research locally in Hawaiʻi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Cultural Legacy Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-950">
        {/* Decorative subtle wave pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-400"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">ʻIke Kupuna</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Rooted in Hawaiian Knowledge
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed font-light">
                <p>
                  For generations, Hawaiian marine relationship was governed by the *ahupuaʻa* system—a holistic land-to-sea resource management model that prioritized environmental balance over maximum extraction. Traditional tools like the precision-engineered <strong>ʻupena ʻōpelu</strong> hoop net and the design of the <strong>waʻa</strong> outrigger canoe carry centuries of ecological and aerodynamic intelligence.
                </p>
                <p>
                  Hui Nehu does not aim to replace these traditions, but to honor them. By blending ancestral methods with state-of-the-art additive manufacturing and material sciences, we keep traditional practices alive and functional. We facilitate direct cultural apprenticeships and community knowledge transfer to ensure the wisdom of the ocean remains active and vital.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900">
                <Image
                  src="/upena_net.png"
                  alt="Ancient Hawaiian fishing wisdom being taught on the ocean"
                  fill
                  className="object-cover brightness-90 hover:scale-105 transition-transform duration-750"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">Traditional Apprenticeship</p>
                  <p className="text-sm font-bold text-white">Transferring ecological intelligence across generations</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Sustainability Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-600 uppercase">Methodology</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Aloha ʻĀina in Action</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Stewardship of the land and sea is our operational blueprint. Every product we build and initiative we launch conforms to strict ecological criteria.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/20 transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-cyan-600 group-hover:scale-110 transition-transform origin-left">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-950 mb-2 text-base">Reef-Safe Practices</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Designing non-intrusive selective nets and restoration grids that support, rather than disturb, native marine flora and fauna.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/20 transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-cyan-600 group-hover:scale-110 transition-transform origin-left">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-950 mb-2 text-base">Low-Waste Production</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Employing advanced additive manufacturing with recycled ocean polymers to reduce manufacturing waste to near-zero.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/20 transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-cyan-600 group-hover:scale-110 transition-transform origin-left">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-950 mb-2 text-base">Local Employment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Securing dignified, technical jobs in advanced engineering and marine sciences directly within coastal communities.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/20 transition-all shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-cyan-600 group-hover:scale-110 transition-transform origin-left">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-950 mb-2 text-base">Youth Education</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Mentoring Hawaiian youth through hand-on workshops that combine sailing history with modern digital modeling.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Impact Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-amber-400 uppercase">Our Targets</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">What We Are Building Toward</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                By investing in restorative ocean models today, we set structural cornerstones for a resilient blue economy.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="group relative flex items-start gap-5 rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all hover:bg-slate-900/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-900/50">
                  <Anchor className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">Fisheries Restoration</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Transitioning local fishing communities from destructive extraction to selective, heritage-guided reef harvesting practices.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative flex items-start gap-5 rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all hover:bg-slate-900/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-900/50">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">Hawaiian-Made Ocean Products</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Building a global reputation for locally built, premium performance maritime vessels and scientific gear.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative flex items-start gap-5 rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-amber-500/30 transition-all hover:bg-slate-900/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-950 text-amber-400 border border-amber-900/50">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">Cultural Training Programs</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Providing funded programs to ensure ancestral canoe construction (<em>Kalai Waʻa</em>) lives on with digital innovation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group relative flex items-start gap-5 rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-amber-500/30 transition-all hover:bg-slate-900/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-950 text-amber-400 border border-amber-900/50">
                  <BarChart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">Community-Owned Ocean Economy</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Routing transaction commissions transparently to localized trusts and decentralizing regional economic control.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Join Us in Restoring the Ocean Economy
            </h2>
            <p className="mb-10 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Partner with Hui Nehu to back advanced indigenous ocean technology and protect the marine systems of Hawaiʻi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/products" 
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                View Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="mailto:partner@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
              >
                Partner With Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
