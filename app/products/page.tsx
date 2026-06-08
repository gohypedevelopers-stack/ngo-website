import Image from 'next/image'
import { ArrowRight, Waves, Anchor, Ship, ShieldCheck, Tag, Info, Zap, Award, Compass, RefreshCw, Feather, Cpu, DollarSign, ChevronRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Our Products — Hui Nehu',
  description: 'Premium ocean-tech catalog for Hui Nehu. Explore our sustainable hoop nets, 3D printed outrigger canoes, EV fishing vessels, and digital ownership products.',
}

type ProductProps = {
  title: string
  price: string
  target?: string
  features: string[]
  imageSrc: string
  badge?: string
  light?: boolean
}

function ProductCard({ title, price, target, features, imageSrc, badge, light }: ProductProps) {
  return (
    <div className={cn(
      "group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 hover:-translate-y-1 backdrop-blur-md overflow-hidden p-6",
      light 
        ? "border-slate-200 bg-slate-50/80 text-slate-900 hover:border-teal-500/30 shadow-sm" 
        : "border-white/5 bg-slate-900/40 text-slate-100 hover:border-cyan-500/30"
    )}>
      {/* Glow on hover */}
      <div className={cn(
        "absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
        light 
          ? "bg-gradient-to-r from-teal-500/5 to-cyan-500/5" 
          : "bg-gradient-to-r from-cyan-500/10 to-teal-500/10"
      )} />
      
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-950 mb-6">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {badge && (
            <span className="absolute top-3 left-3 rounded-full bg-cyan-500/90 text-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
          {target && (
            <span className={cn(
              "absolute bottom-3 right-3 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider backdrop-blur-sm border",
              light
                ? "bg-white/80 text-teal-700 border-slate-200"
                : "bg-slate-950/80 text-teal-400 border-white/10"
            )}>
              {target}
            </span>
          )}
        </div>

        <h4 className={cn(
          "text-xl font-bold mb-2 transition-colors",
          light ? "text-slate-950 group-hover:text-teal-600" : "text-white group-hover:text-cyan-300"
        )}>
          {title}
        </h4>
        
        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-sm font-mono text-slate-500 uppercase">MSRP</span>
          <span className="text-2xl font-bold text-amber-500 font-display">{price}</span>
        </div>

        <ul className={cn(
          "space-y-2 mb-6 border-t pt-4",
          light ? "border-slate-200" : "border-white/5"
        )}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs leading-normal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
              <span className={light ? "text-slate-600" : "text-slate-400"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a 
        href="mailto:orders@huinehu.org" 
        className={cn(
          "group/btn mt-auto flex items-center justify-center gap-2 w-full rounded-xl py-3 text-xs font-bold transition-all",
          light
            ? "bg-slate-950 text-white hover:bg-teal-500 hover:text-slate-950"
            : "bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-slate-950 hover:border-transparent"
        )}
      >
        Inquire Now
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/3dprinted.png"
            alt="LFAM large format 3D manufacturing background"
            fill
            priority
            className="object-cover object-center opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
          <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full z-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-cyan-400"></span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
                  Ocean-Tech Catalog
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight mb-6">
                Products Built for Culture,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-amber-300">
                  Performance & Ocean Health
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                From traditional fishing nets to 3D printed Hawaiian vessels, Hui Nehu creates products that honor the past and power the future.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#catalog" 
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                >
                  Explore Product Line
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="mailto:sales@huinehu.org" 
                  className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
                >
                  Request Quote
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Product Category Overview */}
      <section id="catalog" className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="mb-4 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Innovation Categories</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Explore our core focus areas connecting modern additive technology and native Hawaiian resource management.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <div>
                  <div className="mb-4 text-cyan-600">
                    <Waves className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-teal-600 transition-colors">ʻUpena ʻŌpelu Nets</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Traditional-inspired hoop nets for sustainable ʻopelu fishing, cultural practitioners, and commercial use.
                  </p>
                </div>
                <a href="#upena" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-slate-950 transition-colors">
                  View Models <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <div>
                  <div className="mb-4 text-cyan-600">
                    <Ship className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-teal-600 transition-colors">Opal Canoes & Boats</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Large-format 3D printed Hawaiian vessels with iridescent finish, fast production, and custom designs.
                  </p>
                </div>
                <a href="#canoes" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-slate-950 transition-colors">
                  View Models <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <div>
                  <div className="mb-4 text-cyan-600">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-teal-600 transition-colors">ʻŌpelu EV Fishing Canoe</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Quiet, zero-emission fishing canoe designed specifically for reef-safe traditional commercial fishing.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600">
                  Launching Q3 2026
                </span>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                <div>
                  <div className="mb-4 text-cyan-600">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-teal-600 transition-colors">Digital & KOINA</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Digital authenticity certificates, canoe NFTs, ownership verification, and blue-economy utility.
                  </p>
                </div>
                <a href="/ecosystem" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-slate-950 transition-colors">
                  Learn More <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ʻUpena Product Line Section */}
      <section id="upena" className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-amber-400"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">ʻUpena ʻŌpelu Series</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Hoop Net Systems</h2>
              <p className="text-slate-400 font-light text-sm max-w-xl mt-2">
                Precision engineering that updates traditional Hawaiian selective netting mechanisms for modern durability.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={100}>
              <ProductCard
                title="ʻUpena Aloha — Heritage Edition"
                price="$1,200"
                badge="Limited Stock"
                target="Practitioners"
                imageSrc="/upena_net.png"
                features={[
                  "Premium custom weave finish",
                  "Heavy-duty marine HDPE twine",
                  "Hand-polished stainless steel hoop",
                  "Cultural provenance certificate",
                  "Traditional cord wrapping styles"
                ]}
              />
            </Reveal>

            <Reveal delay={200}>
              <ProductCard
                title="ʻUpena Nui — Commercial"
                price="$480"
                badge="Bestseller"
                target="Fishermen"
                imageSrc="/upena_net.png"
                features={[
                  "Standard high-strength nylon mesh",
                  "Flexible fiberglass hoop frame",
                  "Optimized bag depth (18ft)",
                  "Engineered for daily working conditions",
                  "UV resistant quick-dry polymer coating"
                ]}
              />
            </Reveal>

            <Reveal delay={300}>
              <ProductCard
                title="ʻUpena Mini — Youth Edition"
                price="$180"
                target="Education"
                imageSrc="/upena_net.png"
                features={[
                  "Compact 25-inch hoop diameter",
                  "Lightweight easy-haul nylon mesh",
                  "Perfect for school programs",
                  "Includes cultural education booklet",
                  "Designed for shallow safe waters"
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Canoe Product Line Section */}
      <section id="canoes" className="relative py-24 border-y border-slate-200 bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-teal-600"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">Additive Waʻa Series</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">3D Printed Canoes</h2>
              <p className="text-slate-600 font-light text-sm max-w-xl mt-2">
                Large-format bio-composites engineered for speed, durability, and minimal environmental footprint.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <ProductCard
                title="Opal OC-1"
                price="$4,200"
                target="Racers"
                light
                imageSrc="/printed_canoe.png"
                features={[
                  "Lightweight bio-composite shell",
                  "Proprietary iridescent finish",
                  "Perfect for competitive paddlers",
                  "72-96hr speed production time",
                  "Includes carbon-fiber ama & iakos"
                ]}
              />
            </Reveal>

            <Reveal delay={200}>
              <ProductCard
                title="Nalu OC-6"
                price="$12,500"
                target="Clubs"
                light
                imageSrc="/printed_canoe.png"
                features={[
                  "Designed for 6-person team racing",
                  "Ultra lightweight core construction",
                  "Deep ocean blue custom finish",
                  "Includes adjustable heavy-load ama",
                  "Built-in GPS telemetry brackets"
                ]}
              />
            </Reveal>

            <Reveal delay={300}>
              <ProductCard
                title="Kai Kayak"
                price="$1,800"
                target="Tourism"
                light
                imageSrc="/printed_canoe.png"
                features={[
                  "Stable wide-beam hull geometry",
                  "Perfect for recreational rental lines",
                  "Pearlescent white UV coat finish",
                  "Highly damage-resistant shell",
                  "Comfort-molded built-in seats"
                ]}
              />
            </Reveal>

            <Reveal delay={400}>
              <ProductCard
                title="Custom Fleet Build"
                price="Quote"
                target="Resorts"
                light
                imageSrc="/printed_canoe.png"
                features={[
                  "Custom logo branding options",
                  "Tailored hydrodynamic geometry",
                  "Bulk shipping discounts available",
                  "Dedicated ongoing support plan",
                  "Integrate custom IoT sensors"
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Product Benefits Section */}
      <section className="relative py-24 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-teal-400 uppercase">Values</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold text-white">The Hui Nehu Standard</h2>
              <p className="text-slate-400 font-light leading-relaxed">
                By selecting our products, you directly invest in regional economic strength and high-tech conservation systems.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={100}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <Compass className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Hawaiʻi-Made</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Manufactured and calibrated locally in our advanced production facilities inside the Hawaiian islands.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <RefreshCw className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Fast Production</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Industrial LFAM processes cut production cycles from months down to a matter of days.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <Feather className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Custom Design</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Digitally customize hull shapes and structural finishes to optimize for specific coastal terrains.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <Cpu className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Sustainable Materials</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Using high-quality recycled PETG bio-composites that minimize petrochemical consumption.
                </p>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <Award className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Cultural Authenticity</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Every product is crafted under the supervision of cultural practitioners to preserve sacred configurations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="group rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:border-cyan-500/20 transition-all duration-300">
                <Waves className="h-6 w-6 text-cyan-400 mb-4" />
                <h4 className="font-bold text-white mb-2 text-base">Reef-Safe Innovation</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Selective net dimensions ensure juvenile marine species escape safely back to coral nurseries.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="relative py-24 overflow-hidden border-t border-slate-900 bg-slate-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Build With Hui Nehu?
            </h2>
            <p className="mb-10 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Contact our engineering and sales teams to configure custom orders or obtain local partner rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="mailto:sales@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="mailto:contact@huinehu.org" 
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60"
              >
                Contact Sales
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
