import Image from 'next/image'
import { Reveal } from './reveal'
import { GitFork, Compass, Coins } from 'lucide-react'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

interface ExtendedHomepageData extends HomepageData {
  crisisSecondaryBody?: string;
  problem1Title?: string;
  problem1Body?: string;
  problem2Title?: string;
  problem2Body?: string;
  problem3Title?: string;
  problem3Body?: string;
}

export function CrisisSection({ data }: { data?: ExtendedHomepageData | null }) {
  const label = data?.crisisLabel || ''
  
  const title = data?.crisisTitle ? (
    <span dangerouslySetInnerHTML={{ __html: data.crisisTitle.replace(/\n/g, '<br />') }} />
  ) : null

  const body = data?.crisisBody || ''
  const secondaryBody = data?.crisisSecondaryBody || ''
  const quote = data?.crisisQuote || ''
  const imgUrl = getStrapiMediaUrl(data?.crisisImage) || ''

  const problems = [
    {
      title: data?.problem1Title || '',
      body: data?.problem1Body || '',
      icon: GitFork,
    },
    {
      title: data?.problem2Title || '',
      body: data?.problem2Body || '',
      icon: Compass,
    },
    {
      title: data?.problem3Title || '',
      body: data?.problem3Body || '',
      icon: Coins,
    },
  ].filter(p => p.title || p.body);

  return (
    <section id="crisis" className="relative bg-[#FAF8F5] px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 max-w-3xl">
            <Reveal>
              {label && (
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-coral"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
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
                <p className="text-lg text-[#3A5652] leading-relaxed mb-6 font-light">
                  {body}
                </p>
              )}
            </Reveal>

            {secondaryBody && (
              <Reveal delay={100}>
                <div className="space-y-6 text-[#4F6E69] text-base leading-relaxed mb-6">
                  <p>{secondaryBody}</p>
                </div>
              </Reveal>
            )}

            {quote && quote.trim() !== '' && (
              <Reveal delay={150}>
                <div className="border-l-2 border-coral pl-6 py-1">
                  <p className="italic leading-relaxed text-teal-deep text-lg font-serif">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Image Showcase */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] flex items-center justify-center">
            {imgUrl && (
              <Reveal delay={200} className="relative w-full h-full">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                  <Image
                    src={imgUrl}
                    alt={data?.crisisImage?.alternativeText || "Crisis Image"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            )}
          </div>

        </div>

        {/* Problems Cards Section */}
        {problems.length > 0 && (
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="h-full rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon container */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-pale text-teal-mid mb-5">
                        <Icon className="w-5 h-5" />
                      </div>

                      {p.title && (
                        <h3 className="mb-2 font-serif text-lg font-bold text-teal-deep">
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
    </section>
  )
}
