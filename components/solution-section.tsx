import Image from 'next/image'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function SolutionSection({ data }: { data?: HomepageData | null }) {
  const label = data?.solutionLabel || ''
  
  const title = data?.solutionTitle ? (
    <span dangerouslySetInnerHTML={{ __html: data.solutionTitle.replace(/\n/g, '<br />') }} />
  ) : null

  const body =
    data?.solutionBody ||
    'Hui Nehu is the first community-led, ***whole-system*** marine conservation organization in Hawaiʻi, with the expressed mission to revitalize its forage fish, as well as nearshore and fisheries populations. Our daily goal is to collaborate. We don’t just restore coral — we restore the entire food web. Our model is the ahupuaʻa made operational.'
  const imgUrl = getStrapiMediaUrl(data?.solutionImage) || ''

  const rawPrograms = [
    {
      emoji: data?.solutionProg1Emoji,
      title: data?.solutionProg1Title,
      body: data?.solutionProg1Body,
      image: getStrapiMediaUrl(data?.solutionProg1Image) || '/HM3.jpg',
    },
    {
      emoji: data?.solutionProg2Emoji,
      title: data?.solutionProg2Title,
      body: data?.solutionProg2Body,
      image: getStrapiMediaUrl(data?.solutionProg2Image),
    },
    {
      emoji: data?.solutionProg3Emoji,
      title: data?.solutionProg3Title,
      body: data?.solutionProg3Body,
      image: getStrapiMediaUrl(data?.solutionProg3Image),
    },
  ].filter(p => p.title || p.body);

  const defaultPrograms = [
    {
      emoji: '🪸',
      title: "Habitat, Loko I'a Revitalization & Restoration, and Fishing Ko'a",
      body: "Restoring estuarine habitats, coral reefs, and traditional fishponds. Propagating thermal-tolerant coral and native limu.",
      image: '/HM3.jpg',
    },
    {
      emoji: '🔬',
      title: "Nā Kiaʻi Kai Community Science",
      body: "Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.",
      image: undefined,
    },
  ];

  const programs = rawPrograms.length > 0 ? rawPrograms : defaultPrograms;

  return (
    <section id="solution" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-7xl">
        
        {/* PART 1: Program Overview Cards */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                  Our Programs
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-teal-deep tracking-tight">
                Active Conservation, Revitalization & Restoration Programs
              </h2>
            </Reveal>
          </div>

          <div className={`grid gap-6 ${
            programs.length === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : programs.length === 1 
              ? 'grid-cols-1 max-w-2xl mx-auto' 
              : 'grid-cols-1 md:grid-cols-3'
          }`}>
            {programs.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative h-full flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-md overflow-hidden">
                  
                  {/* Card Background Image */}
                  {p.image && (
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <Image
                        src={p.image}
                        alt={p.title || "Program background image"}
                        fill
                        className="object-cover object-center opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-white/20" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Emoji/Number Circle Container */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50/90 border border-teal-100/60 text-teal-700 font-serif text-lg font-bold shadow-xs backdrop-blur-xs transition-all duration-350 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 group-hover:scale-110 mb-5">
                        {p.emoji}
                      </div>
                      {p.title && (
                        <h3 className="mb-2 font-serif text-lg font-bold text-teal-deep transition-colors duration-300 group-hover:text-teal-bright">
                          {p.title}
                        </h3>
                      )}
                      {p.body && (
                        <p className="text-sm leading-relaxed text-slate-700 font-light">
                          {p.body}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-slate-100" />

        {/* PART 2: Why We're Different */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Image Showcase */}
          {imgUrl && (
            <Reveal className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 group">
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

          {/* Right: Why We're Different Card */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              {label && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                    {label}
                  </span>
                </div>
              )}
              
              {title && (
                <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-bold leading-tight text-teal-deep tracking-tight">
                  {title}
                </h2>
              )}

              {body && (
                <div className="rounded-2xl border border-teal-500/15 bg-teal-50/25 p-6 sm:p-8 shadow-xs backdrop-blur-xs">
                  <p className="whitespace-pre-line text-base sm:text-lg font-normal not-italic leading-relaxed text-teal-deep/90">
                    {formatSolutionBody(body)}
                  </p>
                </div>
              )}
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}

function formatSolutionBody(body: string) {
  return body
    .split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .flatMap((part, partIndex) => {
      if (part.startsWith('***') && part.endsWith('***')) {
        return <strong key={partIndex}><em>{part.slice(3, -3)}</em></strong>
      }

      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={partIndex}>{part.slice(2, -2)}</strong>
      }

      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={partIndex}>{part.slice(1, -1)}</em>
      }

      return part.split(/(whole-system|Nehu)/g).map((text, textIndex) =>
        text === 'whole-system' ? (
          <span key={`${partIndex}-${textIndex}`} className="font-bold italic">
            {text}
          </span>
        ) : text === 'Nehu' ? (
          <em key={`${partIndex}-${textIndex}`}>{text}</em>
        ) : (
          text
        ),
      )
    })
}

