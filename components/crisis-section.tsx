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
      {/* Ambient background decoration (very soft) */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-coral/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/12 w-[500px] h-[500px] bg-teal-light/20 blur-[120px] rounded-full pointer-events-none" />

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
                <h2 className="mb-6 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-teal-deep tracking-tight">
                  {title}
                </h2>
              )}
              
              {body && (
                <p className="text-lg sm:text-xl text-[#3A5652] leading-relaxed mb-8 font-light max-w-2xl">
                  {body}
                </p>
              )}
            </Reveal>

            {secondaryBody && (
              <Reveal delay={100}>
                <div className="space-y-6 text-[#4F6E69] text-base leading-relaxed mb-8 font-light">
                  <p>{secondaryBody}</p>
                </div>
              </Reveal>
            )}

            {quote && quote.trim() !== '' && (
              <Reveal delay={150}>
                <div className="border-l-4 border-coral pl-6 py-3 bg-white rounded-r-xl pr-4 shadow-sm border-y border-r border-slate-100/50">
                  <p className="italic leading-relaxed text-teal-deep text-lg font-serif">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Stat Card + Image */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={200}>
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 text-slate-800 shadow-md">
                {/* Background glowing orb */}
                <div className="absolute -right-8 -top-8 w-36 h-36 bg-coral/5 blur-3xl rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-[10px] font-bold text-coral border border-coral/20 mb-6 uppercase tracking-wider">
                    ⚠️ Hidden Killer Stat
                  </span>
                  
                  <div className="mb-4">
                    <span className="font-serif text-6xl sm:text-7xl font-black text-coral tracking-tight block">
                      53M
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                      Gallons of Sewage / Day
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-[#5A7470] font-light">
                    enter Hawaiʻi’s ocean every single day — originating from <span className="font-semibold text-teal-deep">88,000 cesspools</span> statewide. <span className="italic text-slate-400 font-normal">Most people have no idea.</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {imgUrl && (
              <Reveal delay={300} className="relative w-full h-[180px] sm:h-[200px]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-md group">
                  <Image
                    src={imgUrl}
                    alt={data?.crisisImage?.alternativeText || "Crisis Image"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>
              </Reveal>
            )}
          </div>

        </div>

        {/* Problems Cards Section */}
        {problems.length > 0 && (
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="h-full rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-500 hover:border-coral/30 hover:-translate-y-1 group hover:shadow-md">
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon container */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-coral/10 text-coral border border-coral/20 mb-5 group-hover:bg-coral group-hover:text-white transition-all duration-500">
                        <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                      </div>

                      {p.title && (
                        <h3 className="mb-3 font-serif text-xl font-bold text-teal-deep transition-colors duration-300 group-hover:text-coral">
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
    </section>
  )
}
