import Image from 'next/image'
import { ArrowRight, AlertCircle, Waves, CheckCircle2, TrendingUp, DollarSign, Activity, Users, Compass, Cpu, Zap, Shield, HelpCircle } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Reef Futures — Hui Nehu',
  description: 'Learn about Hui Nehus vision for Hawaiʻis blue economy, reef restoration, captive breeding, and long-term sustainable marine technology leadership.',
}

export default function FuturesPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/reef_split.png"
            alt="Futuristic glowing coral reef environment underwater background"
            fill
            priority
            className="object-cover object-center opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full z-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-400"></span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                  Blue Economy Vision
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight mb-6">
                Hawaiʻi’s Blue Future<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                A future where reefs are protected, communities are empowered, and ocean technology serves culture, ecology, and economic resilience.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#problem" 
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                >
                  Explore the Vision
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="mailto:partner@huinehu.org" 
                  className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
                >
                  Partner With Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. The Future Problem Section */}
      <section id="problem" className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-red-500"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Current Crisis</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                The Old Ocean Economy Is Breaking
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                For decades, resource extraction and linear economic models have compromised the integrity of Pacific marine networks. We are facing compounding ecosystem fractures that require immediate structural transformation.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-950 block text-sm">Rapid Coral Reef Degradation</span>
                    <span className="text-xs text-slate-600">Ocean warming and human activity are bleaching essential reef architectures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-950 block text-sm">Extractive Aquarium Fish Harvesting</span>
                    <span className="text-xs text-slate-600">Wild ornamental capture strips reefs of natural herbivores like the Yellow Tang.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-950 block text-sm">Loss of Traditional Knowledge</span>
                    <span className="text-xs text-slate-600">Centuries of sustainable native resource wisdom are fading without active practice.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-950 block text-sm">Offshore Composite Manufacturing</span>
                    <span className="text-xs text-slate-600">Maritime production is outsourced, creating environmental waste and domestic job loss.</span>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-square w-full rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-center overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <span className="text-6xl font-black text-red-500/25 font-mono">CRITICAL</span>
                  </div>
                  <div className="border border-slate-200 bg-white rounded-xl p-5 space-y-3 shadow-sm">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-400">THREAT MATRIX</span>
                      <span className="text-red-500 font-bold">ACTIVE</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-105 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-red-500 to-amber-500 animate-pulse" />
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">
                      Reef ecosystems are approaching tipping points. Extractive practices cannot sustain the economic and ecological demands of the coming generation.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Four Future Pathways Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-900/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">Strategic Pillars</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">Four Future Pathways</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                By investing in restorative marine paradigms, we build long-term value that aligns technology, culture, and nature.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <div className="group relative rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                <div className="mb-4 text-cyan-400">
                  <Waves className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Marine Aquaculture</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Scaling commercial captive breeding of ornamental species (like Yellow Tangs) to eliminate wild reef extraction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                <div className="mb-4 text-cyan-400">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Reef Ecotourism</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Maintaining healthy, vibrant reef systems that secure long-term travel economic value and coastal jobs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                <div className="mb-4 text-cyan-400">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Coral Restoration Jobs</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Transitioning local workforces into high-skilled, federally supported blue economy careers in reef construction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group relative rounded-2xl border border-white/5 bg-slate-900/40 p-6 hover:border-cyan-500/30 transition-all backdrop-blur-sm">
                <div className="mb-4 text-cyan-400">
                  <Compass className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Loko Iʻa Fishponds</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Modernizing 800-year-old indigenous aquaculture models using IoT sensor networks for regional food sovereignty.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Blue Economy Opportunity Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-600 uppercase">Valuation</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">From Extraction to Regeneration</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                By investing in restorative, tech-enabled regional models, we unlock latent value in the Pacific food and leisure markets.
              </p>
            </Reveal>
          </div>

          {/* Model Comparison */}
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8 space-y-4 shadow-sm text-red-950">
                <h4 className="text-lg font-bold text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" /> The Old Model
                </h4>
                <ul className="space-y-2.5 text-sm text-red-800 leading-relaxed font-light">
                  <li>• Extractive harvesting depleting local populations</li>
                  <li>• Volatile, high-waste global supply networks</li>
                  <li>• Short-term gains at the expense of coastal resilience</li>
                  <li>• Profits exported out of Hawaiian communities</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-8 space-y-4 relative overflow-hidden shadow-sm text-teal-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent pointer-events-none" />
                <h4 className="text-lg font-bold text-teal-700 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> The New Model (Hui Nehu)
                </h4>
                <ul className="space-y-2.5 text-sm text-teal-800 leading-relaxed font-light">
                  <li>• Captive breeding replacing wild collection</li>
                  <li>• 3D printed composites reducing manufacturing emissions</li>
                  <li>• Dignified restoration careers anchored in community trusts</li>
                  <li>• Transformed local food production via traditional aquaculture</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-2">$800M</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Annual Reef Value</div>
                <div className="text-[10px] text-slate-600 font-light">Ecotourism revenue supported by Hawaiian reefs</div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold font-display text-amber-600 mb-2">$33.57B</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">US Reef Asset Value</div>
                <div className="text-[10px] text-slate-600 font-light">Overall asset value of healthy coral ecosystems</div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-2">$330M</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Ornamental Market</div>
                <div className="text-[10px] text-slate-600 font-light">Global aquarium fish supply sector potential</div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold font-display text-teal-600 mb-2">$18M+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Federal Restoration</div>
                <div className="text-[10px] text-slate-600 font-light">Investment opportunities in coral workforce</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Future Roadmap Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-900/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">Chronology</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">Our Future Roadmap</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                A phased operational rollout designed to establish and scale sustainable maritime solutions globally.
              </p>
            </Reveal>
          </div>

          <div className="relative border-l border-cyan-500/20 max-w-3xl mx-auto pl-8 space-y-12">
            <Reveal delay={100} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">PHASE 1</span>
                <h4 className="text-lg font-bold text-white">Maui Launch & Community Alignment</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Deploy selective hoop nets with local Maui fishing families. Open composite production hubs for waʻa canoes, establishing initial community metrics.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-teal-400">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              </span>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-teal-400 tracking-wider">PHASE 2</span>
                <h4 className="text-lg font-bold text-white">Statewide Expansion across Hawaiʻi</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Establish production facilities on Oahu, Kauai, and Hawaii Island. Launch commercial scale aquaculture breeding programs and deploy coastal sensor networks.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">PHASE 3</span>
                <h4 className="text-lg font-bold text-white">Global Reach & Licensing</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Export 3D printed composite vessels and aquaculture protocols to Pacific island networks, licensing indigenous tech solutions internationally.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">PHASE 4</span>
                <h4 className="text-lg font-bold text-white">Integrated Digital Ocean Economy</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Standardize the KOINA blockchain utility currency to handle multi-island trade, vessel registrations, staking, and resource telemetry reporting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Innovation Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-650 uppercase">Synergy</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Where Tradition Meets Future Technology</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                By synthesizing ancient practices and advanced engineering, we construct resilient, localized infrastructure.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={100}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <Cpu className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">3D Printed Vessels</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Using large-format additive manufacturing (LFAM) and bio-composites to produce outrigger canoes in under 96 hours.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">EV Fishing Canoes</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Zero-emission outrigger vessels designed for silent, non-intrusive operations in fragile nearshore reef systems.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">Reef-Safe Materials</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Production pathways using non-leaching recycled polymers that eliminate chemical shedding in marine environments.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">Digital Authenticity</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Registering every physical canoe on the KOINA blockchain, proving origin, craftsmanship heritage, and material integrity.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <Activity className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">Telemetry Integration</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Gathering localized ocean telemetry (salinity, temperature, reef audio) directly via sensory equipment inside active tools.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex gap-4 items-start p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1.5 text-base">Decentralized Trust</h4>
                  <p className="text-xs text-slate-600 leading-normal font-light">
                    Enabling fishermen and community members to vote on active conservation campaigns through the ʻŌpelu DAO structure.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Help Build Hawaiʻi’s Regenerative Ocean Economy
            </h2>
            <p className="mb-10 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Support sustainable aquaculture, local advanced manufacturing, and community marine stewardship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="mailto:invest@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Invest in the Future
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="/ecosystem" 
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
              >
                Join the Ecosystem
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
