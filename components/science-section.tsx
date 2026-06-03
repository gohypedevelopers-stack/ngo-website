import { AnimatedCounter } from './animated-counter'
import { Reveal } from './reveal'

const metrics = [
  {
    value: 89,
    suffix: '%',
    desc: 'Coral survival rate — 15 points above the national average, achieved by adapting to local reef conditions.',
  },
  {
    value: 15,
    suffix: '+',
    desc: 'Active monitoring sites across the Hawaiian Islands, generating longitudinal ecosystem data.',
  },
  {
    value: 1.2,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    desc: 'Annual budget, with 85 cents of every dollar flowing directly into conservation programs.',
  },
]

export function ScienceSection() {
  return (
    <section id="science" className="relative bg-[#FAF8F5] px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-teal-bright"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                The science
              </span>
              <span className="h-px w-8 bg-teal-bright"></span>
            </div>
            
            <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
              Locally adapted, rigorously validated
            </h2>
            
            <p className="text-lg leading-relaxed text-[#3A5652] font-light max-w-2xl mx-auto">
              Our results aren&apos;t anecdotal. We partner with HIMB to identify and propagate heat-tolerant coral genotypes, manage restoration through the traditional ahupuaʻa system, and generate data robust enough to shape state and federal policy.
            </p>
          </Reveal>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-8 sm:grid-cols-3 relative">
          {metrics.map((m, i) => (
            <Reveal key={m.desc} delay={i * 100} className="relative z-10">
              <div className="h-full rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-4 inline-flex items-baseline font-serif text-5xl font-bold tracking-tight text-teal-deep">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals}
                  />
                </div>
                <p className="text-sm leading-relaxed text-[#5A7470]">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
