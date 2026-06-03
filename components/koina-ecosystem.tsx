import Image from 'next/image'
import { ArrowRight, Coins, Users, Fingerprint, Zap } from 'lucide-react'
import { Reveal } from './reveal'

export function KoinaEcosystem() {
  return (
    <section className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden text-slate-300">
      {/* Tech-inspired background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-8 bg-cyan-500"></span>
              <span className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-cyan-400">
                The Hui Nehu Blockchain
              </span>
              <span className="h-px w-8 bg-cyan-500"></span>
            </div>
            
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Bridging Indigenous Values with Decentralized Finance
            </h2>
            
            <p className="text-lg leading-relaxed text-slate-400">
              KOINA is a cultural digital currency built to power a sustainable ocean economy, transparently routing capital directly back to marine conservation and community sovereignty.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Ecosystem */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-6xl mx-auto mb-20">
          
          {/* Left Column (Items 1 & 2) */}
          <div className="flex flex-col gap-8">
            <Reveal delay={100} className="relative group rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-800/30 group-hover:text-cyan-900/30 transition-colors pointer-events-none">01</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Coins className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Fisheries Funding</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Every transaction fee automatically routes funding directly to the ʻŌpelu DAO for local reef restoration initiatives.
              </p>
            </Reveal>

            <Reveal delay={200} className="relative group rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-800/30 group-hover:text-amber-900/30 transition-colors pointer-events-none">02</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Community Staking</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Earn active ecosystem rewards while voting on crucial community-led conservation projects.
              </p>
            </Reveal>
          </div>

          {/* Center Column (Coin Image) */}
          <Reveal delay={300} className="flex justify-center relative hidden lg:flex">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Glowing ring effects */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-amber-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full" />
              
              <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                <Image
                  src="/koina_coin.png"
                  alt="High-end 3D metallic KOINA coin medallion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Column (Items 3 & 4) */}
          <div className="flex flex-col gap-8">
            <Reveal delay={400} className="relative group rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-800/30 group-hover:text-cyan-900/30 transition-colors pointer-events-none">03</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Fingerprint className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Canoe NFTs</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Digital twins minted for every physical 3D-printed canoe, serving as immutable proof of authenticity and provenance.
              </p>
            </Reveal>

            <Reveal delay={500} className="relative group rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-amber-500/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-800/30 group-hover:text-amber-900/30 transition-colors pointer-events-none">04</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">EV Charging Network</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Use KOINA credits directly to power up your vessel across our solar-powered coastal EV charging grid.
              </p>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Reveal delay={600}>
            <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-8 py-4 text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Discover the KOINA Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
