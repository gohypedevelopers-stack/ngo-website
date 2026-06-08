import Image from 'next/image'
import { ArrowRight, Coins, Users, Fingerprint, Zap, Shield, Cpu, Network, Compass, Landmark, Activity, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Hui Nehu Ecosystem',
  description: 'Explore the connected ocean economy of Hui Nehu. From 3D printed canoes and sustainable nets to KOINA digital currency, EV charging, and community education.',
}

const mapNodes = [
  { label: 'ʻUpena Nets', category: 'Products', description: 'Sustainable selective hoop nets' },
  { label: '3D Printed Canoes', category: 'Products', description: 'Bio-composite outriggers (OC-1/OC-6)' },
  { label: 'ʻOpelu EV Canoe', category: 'Products', description: 'Zero-emission solar-charged fishing vessel' },
  { label: 'Fisheries Restoration', category: 'Ecology', description: 'Restoring local ʻōpelu fish populations' },
  { label: 'KOINA Currency', category: 'Digital', description: 'Ecosystem currency and restoration routing' },
  { label: 'Canoe NFTs', category: 'Digital', description: 'Digital twins for craft authenticity' },
  { label: 'Community Staking', category: 'Economy', description: 'Staking pool directing local funding' },
  { label: 'EV Charging Network', category: 'Infrastructure', description: 'Coastal solar microgrid' },
  { label: 'Youth Education', category: 'Culture', description: 'Apprenticeships in navigation & LFAM' },
  { label: 'Reef Restoration', category: 'Ecology', description: 'Partner-led coral nursery growth' }
]

const koinaFeatures = [
  { title: 'Fisheries Funding', icon: Coins, text: 'Routes transaction fees directly to the ʻŌpelu DAO to seed selective net production.' },
  { title: 'Community Staking', icon: Users, text: 'Earn ecosystem participation rewards while anchoring native financial sovereignty.' },
  { title: 'Conservation Voting', icon: Network, text: 'Cast votes to allocate community grants to local reef and fishpond restoration.' },
  { title: 'Product Authentication', icon: Shield, text: 'Verify physical outrigger canoes and specialized nets via cryptographic registry.' },
  { title: 'Canoe NFT Ownership', icon: Fingerprint, text: 'Register digital twin tokens representing physical vessel provenance and specifications.' }
]

const communityCards = [
  { title: 'Apprenticeship Programs', text: 'Funded paths for local apprentices to study traditional canoe building (Kālai Waʻa) and digital engineering.' },
  { title: 'Youth Ocean Education', text: 'On-water workshops teaching traditional celestial navigation alongside modern marine conservation science.' },
  { title: 'Local Job Creation', text: 'Skilled employment in advanced LFAM manufacturing, aquaculture laboratories, and solar microgrids.' },
  { title: 'Cultural Transfer', text: 'Documenting and implementing ancestral resource management principles within active business protocols.' }
]

const flowSteps = [
  { title: 'Product Purchase', text: 'A selective ʻupena net or a 3D-printed bio-composite canoe is ordered.', index: '01' },
  { title: 'Capital Routing', text: 'A percentage of product revenue or transaction fees is routed directly to the community trust.', index: '02' },
  { title: 'Community Action', text: 'DAO members vote to deploy resources to local youth programs and reef restoration projects.', index: '03' },
  { title: 'Telemetry Tracking', text: 'Vessels collect reef health metrics and log cultural provenance data on-chain.', index: '04' },
  { title: 'Regenerative Return', text: 'Hawaiʻi’s nearshore ecosystems recover, supporting sustainable harvesting and local jobs.', index: '05' }
]

const partnerCategories = [
  'Canoe Clubs', 'Coastal Resorts', 'Commercial Fishermen', 'Marine Biologists',
  'Cultural Practitioners', 'Aquaculture Facilities', 'Restoration Nonprofits', 'Ecosystem Investors'
]

export default function EcosystemPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full z-0" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full z-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-20">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-amber-400"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                Connected Ocean Economy
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight mb-6">
              A Connected<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300">
                Ocean Economy
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
              The Hui Nehu ecosystem connects culture, products, communities, restoration, and digital tools into one regenerative blue economy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#map" 
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                Explore Ecosystem
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="mailto:partner@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
              >
                Become a Partner
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      </section>
      
      {/* 2. Ecosystem Map Section */}
      <section id="map" className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">Ecosystem Map</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">The Connected Network</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Hui Nehu coordinates these integrated segments, forming a robust cycle of material, financial, and ecological sustainability.
              </p>
            </Reveal>
          </div>

          {/* Connected Grid Map */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {mapNodes.map((node, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="group relative h-full rounded-2xl border border-white/5 bg-slate-900/40 p-5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm">
                  {/* Subtle hover glow lines inside card */}
                  <div className="absolute top-0 left-0 w-px h-0 bg-gradient-to-b from-cyan-400 to-transparent group-hover:h-full transition-all duration-500" />
                  
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-2">
                      {node.category}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {node.label}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal font-light">
                      {node.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Centralized Hub Graphic Placeholder */}
          <div className="mt-16 relative p-8 rounded-3xl border border-cyan-500/10 bg-cyan-950/5 text-center max-w-2xl mx-auto overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/10 blur-[60px] rounded-full" />
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase">Core Synthesizer</span>
              <h4 className="text-xl font-serif font-bold text-white">Hui Nehu Infrastructure</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Every node loops telemetry, hardware components, or transactional commission directly back into community sovereignty, eliminating single points of extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KOINA Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-650 uppercase">Currency</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                KOINA: A Cultural Digital Currency for the Ocean Economy
              </h2>
              <p className="text-slate-600 font-light leading-relaxed">
                KOINA powers participation, rewards, restoration funding, product ownership, and community governance across the Hui Nehu ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {koinaFeatures.map((feat, i) => {
              const IconComp = feat.icon
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-amber-500/30 transition-all shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="mb-4 text-amber-600 group-hover:scale-105 transition-transform origin-left">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-slate-950 mb-2 text-sm group-hover:text-amber-600 transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {feat.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Community Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-cyan-400"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Community First</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Community at the Center
              </h2>
              <p className="text-slate-400 font-light leading-relaxed">
                The Hui Nehu ecosystem actively supports Native Hawaiian communities, fishermen, paddlers, resorts, youth programs, reef restoration workers, and local manufacturers. We build structural sovereignty instead of reliance.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {communityCards.map((card, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="rounded-xl border border-white/5 bg-slate-900/30 p-5 space-y-2">
                    <h4 className="font-bold text-white text-sm">{card.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal font-light">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product-to-Impact Flow Section */}
      <section className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-600 uppercase">Process</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Product-to-Impact Flow</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Trace how hardware deployment translates directly to ecological balance and cultural restoration in Hawaiʻi.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 relative">
            {flowSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col justify-between h-full hover:border-teal-500/20 transition-all duration-300 shadow-sm">
                  <div className="text-3xl font-black text-teal-650/20 font-mono mb-4">{step.index}</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-normal font-light">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Network Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-amber-400 uppercase">Alliance</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">Our Partner Network</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Restoring the marine environment is a collaborative task. We coordinate with specialists across multiple sectors.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partnerCategories.map((partner, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4 text-center text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/20 transition-all">
                  {partner}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Join the Hui Nehu Ecosystem
            </h2>
            <p className="mb-10 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Connect with our networks, utilize our digital tokens, or deploy sustainable vessels along your resort waterfronts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="mailto:partner@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="mailto:contact@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
              >
                Contact Hui Nehu
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
