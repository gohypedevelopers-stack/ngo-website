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
      title: data?.solutionProg1Title || '',
      body: data?.solutionProg1Body || '',
    },
    {
      emoji: data?.solutionProg2Emoji || '🌊',
      title: data?.solutionProg2Title || '',
      body: data?.solutionProg2Body || '',
    },
    {
      emoji: data?.solutionProg3Emoji || '🔬',
      title: data?.solutionProg3Title || '',
      body: data?.solutionProg3Body || '',
    },
  ].filter(p => p.title || p.body);

  return (
    <section id="solution" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            {label && (
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-teal-bright"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                  {label}
                </span>
              </div>
            )}
            
            {title && (
              <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
                {title}
              </h2>
            )}
            
            {body && (
              <p className="text-lg leading-relaxed text-[#3A5652] font-light">
                {body}
              </p>
            )}
          </Reveal>
        </div>

        {/* 2-Column Split: Image & Programs */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Image Showcase */}
          {imgUrl && (
            <Reveal className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
              <Image
                src={imgUrl}
                alt={data?.solutionImage?.alternativeText || "Solution Image"}
                fill
                className="object-cover"
                priority
              />
            </Reveal>
          )}

          {/* Right: Program Cards */}
          {programs.length > 0 && (
            <div className="lg:col-span-6 flex flex-col gap-6">
              {programs.map((p, i) => {
                return (
                  <Reveal key={i} delay={i * 100}>
                    <div className="group flex gap-5 rounded-2xl border border-slate-50 bg-[#FAF8F5] p-6 transition-all duration-300 hover:bg-[#FAF6EE] hover:shadow-sm">
                      {/* Emoji circle container */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-2xl">
                        {p.emoji}
                      </div>
                      <div>
                        {p.title && (
                          <h3 className="mb-1 font-serif text-lg font-bold text-teal-deep">
                            {p.title}
                          </h3>
                        )}
                        {p.body && (
                          <p className="text-sm leading-relaxed text-[#5A7470]">
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

