import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { LineChart, Waves, AlertTriangle, Database, Calendar } from 'lucide-react'

export const metadata = {
  title: 'News & Research — Hui Nehu',
  description: 'Standardized environmental datasets, coral survival monitoring, water quality testing, and regulatory milestones.',
}

export default function NewsResearchPage() {
  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section (Light Theme with high contrast) */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-600"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600">
                    Nā Kiaʻi Kai Dataset Console
                  </span>
                </div>
                
                <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  News & Research
                </h1>
                
                <p className="mt-4 text-base sm:text-lg text-slate-650 font-light leading-relaxed">
                  Showcasing publication-quality, standardized environmental datasets generated directly by our Nā Kiaʻi Kai Community Science program volunteers.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/news_research_dataset.png"
                    alt="Volunteers logging community science water quality datasets"
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

      {/* Dashboard Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Card 1: Coral Survival Monitoring */}
            <Reveal>
              <div className="border border-slate-200 bg-white rounded-3xl p-8 hover:border-teal-500/20 transition-all space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-105">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Ecosystem Monitoring</h3>
                    <p className="text-[10px] font-mono text-teal-605 uppercase font-semibold">Coral Survival Rates</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    Tracking transplant survival across our active pilot restoration sites. Our comprehensive cultivation methodology targets a **70% survival rate** under thermal pressure.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Current Average Survival (Pilot Sites)</span>
                      <span className="text-teal-650 font-bold">62%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500" style={{ width: '62%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Target Pilot Survival Rate</span>
                      <span className="text-amber-600 font-bold">70%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Water Quality Testing */}
            <Reveal delay={100}>
              <div className="border border-slate-200 bg-white rounded-3xl p-8 hover:border-teal-500/20 transition-all space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-105">
                    <Waves className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Water Quality Assay</h3>
                    <p className="text-[10px] font-mono text-teal-605 uppercase font-semibold">Coastal Nutrient Loading</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    Ongoing, community-sourced data mapping localized bacterial testing, nutrient loading metrics, and coastal algal bloom tracking.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3">
                      <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase font-bold">Enterococcus</div>
                      <div className="text-sm font-bold text-emerald-600 font-mono">Safe</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3">
                      <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase font-bold">Nitrate level</div>
                      <div className="text-sm font-bold text-amber-600 font-mono font-bold">Elevated</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3">
                      <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase font-bold">Chlorophyll-a</div>
                      <div className="text-sm font-bold text-cyan-600 font-mono">Normal</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Card 3: Regulatory Milestones */}
            <Reveal>
              <div className="border border-slate-200 bg-white rounded-3xl p-8 hover:border-teal-500/20 transition-all space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-105">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Regulatory Milestones</h3>
                    <p className="text-[10px] font-mono text-amber-605 uppercase font-semibold">Cesspool Conversion Rates</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-light text-slate-600 leading-relaxed">
                    Progress updates tracking the acceleration of regional cesspool conversions toward state-mandated environmental deadlines (Hawaiʻi Act 125).
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Current Conversion Pace</span>
                      <span className="text-red-650 font-bold">300 / year</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '10%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Pace Required to Meet Legal Mandate</span>
                      <span className="text-emerald-650 font-bold">3,000 / year (10x Acceleration)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Recent Research Releases */}
            <Reveal delay={100}>
              <div className="border border-slate-200 bg-white rounded-3xl p-8 hover:border-teal-500/20 transition-all space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-105">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">Publication Archives</h3>
                    <p className="text-[10px] font-mono text-teal-605 uppercase font-semibold">Open-Source Reports</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-teal-600" />
                      <span className="font-semibold text-slate-800">May 2026 Forage Census</span>
                    </div>
                    <span className="text-teal-700 font-mono font-bold text-[10px] uppercase">PDF</span>
                  </div>
                  <div className="flex justify-between items-center text-xs bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-teal-600" />
                      <span className="font-semibold text-slate-800">Wastewater Plume Mapping Report</span>
                    </div>
                    <span className="text-teal-700 font-mono font-bold text-[10px] uppercase">GeoJSON</span>
                  </div>
                  <div className="flex justify-between items-center text-xs bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-teal-600" />
                      <span className="font-semibold text-slate-800">Cesspool Conversion Cost Audit</span>
                    </div>
                    <span className="text-teal-700 font-mono font-bold text-[10px] uppercase">CSV</span>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
