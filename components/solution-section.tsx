import Image from 'next/image'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function SolutionSection({ data }: { data?: HomepageData | null }) {
  const label = data?.solutionLabel || ''
  
  const title = data?.solutionTitle ? (
    <span dangerouslySetInnerHTML={{ __html: data.solutionTitle.replace(/\n/g, '<br />') }} />
  ) : null

  const body = data?.solutionBody || ''
  const imgUrl = getStrapiMediaUrl(data?.solutionImage) || ''

  const programs = [
    {
      emoji: data?.solutionProg1Emoji || '🪸',
      title: data?.problem1Title || data?.solutionProg1Title || '',
      body: data?.problem1Body || data?.solutionProg1Body || '',
    },
    {
      emoji: data?.solutionProg2Emoji || '🌊',
      title: data?.problem2Title || data?.solutionProg2Title || '',
      body: data?.problem2Body || data?.solutionProg2Body || '',
    },
    {
      emoji: data?.solutionProg3Emoji || '🔬',
      title: data?.problem3Title || data?.solutionProg3Title || '',
      body: data?.problem3Body || data?.solutionProg3Body || '',
    },
  ].filter(p => p.title || p.body);

  return (
    <section id="solution" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-5xl mb-16">
          <Reveal>
            {label && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                  {label}
                </span>
              </div>
            )}
            
            {title && (
              <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep tracking-tight">
                {title}
              </h2>
            )}
            
            {body && (
              <p className="text-lg sm:text-xl text-[#3A5652] font-light leading-relaxed max-w-2xl">
                {body}
              </p>
            )}
          </Reveal>
        </div>

        {/* 2-Column Split: Image & Programs */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Image Showcase */}
          {imgUrl && (
            <Reveal className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 group">
              <Image
                src={imgUrl}
                alt={data?.solutionImage?.alternativeText || "Solution Image"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </Reveal>
          )}

          {/* Right: Program Cards */}
          {programs.length > 0 && (
            <div className="lg:col-span-6 flex flex-col gap-6">
              {programs.map((p, i) => {
                return (
                  <Reveal key={i} delay={i * 100}>
                    <div className="group flex gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-md hover:bg-gradient-to-r hover:from-white hover:to-teal-50/10">
                      {/* Emoji/Number Circle Container */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-100/40 text-teal-700 font-serif text-lg font-bold shadow-sm transition-all duration-350 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 group-hover:scale-110">
                        {p.emoji}
                      </div>
                      <div>
                        {p.title && (
                          <h3 className="mb-1.5 font-serif text-lg font-bold text-teal-deep transition-colors duration-300 group-hover:text-teal-bright">
                            {p.title}
                          </h3>
                        )}
                        {p.body && (
                          <p className="text-sm leading-relaxed text-[#5A7470] font-light">
                            {p.body}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  )
}

