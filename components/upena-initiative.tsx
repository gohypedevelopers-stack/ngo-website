import Image from 'next/image'
import { ArrowRight, MoveHorizontal, ArrowDownToLine, DollarSign } from 'lucide-react'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function UpenaInitiative({ data }: { data?: HomepageData | null }) {
  const label = data?.upenaLabel || ''
  const title = data?.upenaTitle || ''
  const body = data?.upenaBody || ''
  const btnText = data?.upenaBtnText || ''
  const btnLink = data?.upenaBtnLink || ''
  const imageUrl = getStrapiMediaUrl(data?.upenaImage) || ''

  const metrics = [
    {
      value: data?.upenaMetric1Value,
      unit: data?.upenaMetric1Unit || '',
      label: data?.upenaMetric1Label,
      icon: <MoveHorizontal className="h-6 w-6 text-teal-500 mb-4" />
    },
    {
      value: data?.upenaMetric2Value,
      unit: data?.upenaMetric2Unit || '',
      label: data?.upenaMetric2Label,
      icon: <ArrowDownToLine className="h-6 w-6 text-teal-500 mb-4" />
    },
    {
      value: data?.upenaMetric3Value,
      unit: data?.upenaMetric3Unit || '',
      label: data?.upenaMetric3Label,
      icon: <DollarSign className="h-6 w-6 text-teal-500 mb-4" />
    }
  ].filter(m => m.value || m.label)

  return (
    <section id="initiatives" className="relative bg-[#f8fafc] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className={imageUrl ? "" : "lg:col-span-2"}>
            <Reveal>
              {label && (
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-8 bg-teal-500"></span>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                    {label}
                  </span>
                </div>
              )}
              
              {title && (
                <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                  {title}
                </h2>
              )}
              
              {body && (
                <p className="mb-10 text-lg leading-relaxed text-slate-600">
                  {body}
                </p>
              )}

              {/* Data Callouts */}
              {metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                  {metrics.map((m, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                      {m.icon}
                      {m.value && (
                        <div className="text-2xl font-bold text-slate-900 mb-1">
                          {m.value}
                          {m.unit && <span className="text-base text-slate-500 font-normal">{m.unit}</span>}
                        </div>
                      )}
                      {m.label && (
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {m.label}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {btnText && (
                <a href={btnLink || '#'} className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg">
                  {btnText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </Reveal>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="relative">
              <Reveal delay={100}>
                <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src={imageUrl}
                    alt={title || "Upena Initiative Image"}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    unoptimized={imageUrl.startsWith('http')}
                  />
                </div>
                
                {/* Decorative accent behind image */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-teal-100 blur-3xl opacity-60" />
              </Reveal>
            </div>
          )}
          
        </div>
      </div>
    </section>
  )
}
