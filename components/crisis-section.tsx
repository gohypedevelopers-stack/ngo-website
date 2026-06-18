import Image from 'next/image'
import { Reveal } from './reveal'

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
  const rawLabel = data?.crisisLabel || 'The Hook'
  const label = rawLabel === 'The Hook (Urgency Block)' ? 'The Hook' : rawLabel
  
  // Normalize title to match the spec exactly (without comma)
  const rawTitle = data?.crisisTitle || 'Hawaiʻi’s reefs are dying and the window to act is closing fast.'
  const normalizedTitle = rawTitle.replace(/,\s*and/gi, ' and').replace(/\n/g, ' ')
  const title = (
    <span>{normalizedTitle}</span>
  )

  const body = data?.crisisBody || '84% of the world’s coral reefs bleached this year. The nehu — Hawaiʻi’s tiny endemic anchovy — is the foundation of this entire food web. When it disappears, the whole system collapses.'
  const secondaryBody = data?.crisisSecondaryBody || ''
  // Quote is removed as it is not in the specified content
  const quote = ''
  const imgUrl = getStrapiMediaUrl(data?.crisisImage) || ''



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
                <div className="inline-flex mb-6">
                  <span className="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-coral bg-coral/10 border border-coral/20 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(240,113,103,0.08)]">
                    {label}
                  </span>
                </div>
              )}
              
              {title && (
                <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-teal-deep tracking-tight">
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
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-5 border border-slate-200">
                    ⚠️ Hidden Killer Stat
                  </span>
                  
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="font-serif text-2xl sm:text-3xl font-black text-teal-deep tracking-tight shrink-0">
                      53M
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Gallons of Sewage / Day
                    </span>
                  </div>
                  
                  <p className="text-base leading-relaxed text-slate-700 font-light">
                    enter Hawaiʻi’s ocean every single day — originating from <span className="font-semibold text-teal-deep">88,000 cesspools</span> statewide. <span className="italic text-slate-500 font-medium">Most people have no idea.</span>
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


      </div>
    </section>
  )
}
