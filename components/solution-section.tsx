import Image from 'next/image'
import { Reveal } from './reveal'

const programs = [
  {
    emoji: '🪸',
    title: 'Koʻa Restoration Initiative',
    body: 'Propagating heat-tolerant coral genotypes with HIMB to build reefs that can withstand future warming.',
  },
  {
    emoji: '🌊',
    title: 'Kai Maoli Debris Response',
    body: 'Systematic marine debris removal targeting the most critical nursery and feeding habitats across Hawaiʻi.',
  },
  {
    emoji: '🔬',
    title: 'Nā Kiaʻi Kai Science',
    body: 'Training community scientists to monitor reef health across all eight main Hawaiian Islands — data that informs state and federal policy.',
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-teal-bright"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                Our approach
              </span>
            </div>
            
            <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
              Whole-system restoration, rooted in ahupuaʻa
            </h2>
            
            <p className="text-lg leading-relaxed text-[#3A5652] font-light">
              We don&apos;t just restore coral — we restore the entire system, from land-based pollution sources to offshore nurseries, organized along traditional Hawaiian watershed units. Address pollution at its source, not just its symptoms.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Split: Image & Programs */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Image Showcase */}
          <Reveal className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
            <Image
              src="/ahupuaa_restoration.png"
              alt="Traditional Hawaiian ahupuaʻa watershed system from lush volcanic mountains to coastal taro patches and healthy marine coral reefs"
              fill
              className="object-cover"
              priority
            />
          </Reveal>

          {/* Right: Program Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {programs.map((p, i) => {
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="group flex gap-5 rounded-2xl border border-slate-50 bg-[#FAF8F5] p-6 transition-all duration-300 hover:bg-[#FAF6EE] hover:shadow-sm">
                    {/* Emoji circle container */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-2xl">
                      {p.emoji}
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-lg font-bold text-teal-deep">
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#5A7470]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
