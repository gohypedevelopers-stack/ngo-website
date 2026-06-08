import { AnimatedCounter } from './animated-counter'
import { Reveal } from './reveal'
import { HomepageData } from '@/lib/strapi'

export function ScienceSection({ data }: { data?: HomepageData | null }) {
  const label = data?.scienceLabel || ''
  
  const title = data?.scienceTitle ? (
    <span dangerouslySetInnerHTML={{ __html: data.scienceTitle.replace(/\n/g, '<br />') }} />
  ) : null

  const body = data?.scienceBody || ''

  const metrics = [
    {
      value: data?.scienceMetric1Value !== undefined ? data.scienceMetric1Value : null,
      prefix: data?.scienceMetric1Prefix || '',
      suffix: data?.scienceMetric1Suffix || '',
      decimals: data?.scienceMetric1Decimals ?? 0,
      desc: data?.scienceMetric1Desc || '',
    },
    {
      value: data?.scienceMetric2Value !== undefined ? data.scienceMetric2Value : null,
      prefix: data?.scienceMetric2Prefix || '',
      suffix: data?.scienceMetric2Suffix || '',
      decimals: data?.scienceMetric2Decimals ?? 0,
      desc: data?.scienceMetric2Desc || '',
    },
    {
      value: data?.scienceMetric3Value !== undefined ? data.scienceMetric3Value : null,
      prefix: data?.scienceMetric3Prefix || '',
      suffix: data?.scienceMetric3Suffix || '',
      decimals: data?.scienceMetric3Decimals ?? 0,
      desc: data?.scienceMetric3Desc || '',
    },
  ].filter(m => m.value !== null || m.desc);

  return (
    <section id="science" className="relative bg-[#FAF8F5] px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            {label && (
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-teal-bright"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                  {label}
                </span>
                <span className="h-px w-8 bg-teal-bright"></span>
              </div>
            )}
            
            {title && (
              <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
                {title}
              </h2>
            )}
            
            {body && (
              <p className="text-lg leading-relaxed text-[#3A5652] font-light max-w-2xl mx-auto">
                {body}
              </p>
            )}
          </Reveal>
        </div>

        {/* Metrics Grid */}
        {metrics.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-3 relative">
            {metrics.map((m, i) => (
              <Reveal key={i} delay={i * 100} className="relative z-10">
                <div className="h-full rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  {m.value !== null && (
                    <div className="mb-4 flex flex-wrap items-baseline font-serif text-4xl sm:text-5xl font-bold tracking-tight text-teal-deep max-w-full overflow-hidden break-words">
                      <AnimatedCounter
                        value={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        decimals={m.decimals}
                      />
                    </div>
                  )}
                  {m.desc && (
                    <p className="text-sm leading-relaxed text-[#5A7470]">
                      {m.desc}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

