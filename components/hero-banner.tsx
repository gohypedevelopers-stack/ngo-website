import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function HeroBanner({ data }: { data?: HomepageData | null }) {
  const subtitle = data?.heroSubtitle || ''
  
  const title = data?.heroTitle ? (
    <span dangerouslySetInnerHTML={{ __html: data.heroTitle.replace(/\n/g, '<br />') }} />
  ) : null

  const description = data?.heroDescription || ''
  
  const primaryBtnText = data?.heroPrimaryBtnText || ''
  const primaryBtnLink = data?.heroPrimaryBtnLink || '#'
  
  const secondaryBtnText = data?.heroSecondaryBtnText || ''
  const secondaryBtnLink = data?.heroSecondaryBtnLink || '#'

  const bannerImgUrl = getStrapiMediaUrl(data?.heroBannerImage) || ''
  const scubaDiverImgUrl = getStrapiMediaUrl(data?.heroScubaDiverImage) || ''
  const manufacturingImgUrl = getStrapiMediaUrl(data?.heroManufacturingImage) || ''

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        {bannerImgUrl && (
          <Image
            src={bannerImgUrl}
            alt={data?.heroBannerImage?.alternativeText || "Banner Image"}
            fill
            priority
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <Reveal>
              {subtitle && (
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="h-px w-12 bg-teal-400"></span>
                  <span className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-400">
                    {subtitle}
                  </span>
                </div>
              )}
              
              {title && (
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                  {title}
                </h1>
              )}
              
              {description && (
                <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-xl">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4">
                {primaryBtnText && (
                  <a href={primaryBtnLink} className="group flex items-center justify-center gap-3 rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.4)]">
                    {primaryBtnText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {secondaryBtnText && (
                  <a href={secondaryBtnLink} className="group flex items-center justify-center gap-3 rounded-full border border-slate-500/40 bg-slate-900/40 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-slate-800/60">
                    {secondaryBtnText}
                    <BookOpen className="h-4 w-4 text-teal-400" />
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative hidden lg:block h-[600px] w-full">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 blur-[100px] rounded-full z-0" />
            
            {/* Top Right Image (Scuba Diver) */}
            {scubaDiverImgUrl && (
              <Reveal delay={200} className="absolute top-4 right-4 w-[60%] h-[60%] z-10">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105 hover:z-30">
                  <Image
                    src={scubaDiverImgUrl}
                    alt={data?.heroScubaDiverImage?.alternativeText || "Scuba Diver"}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}

            {/* Bottom Left Image (3D Printed) */}
            {manufacturingImgUrl && (
              <Reveal delay={400} className="absolute bottom-4 left-4 w-[65%] h-[55%] z-20">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-slate-950/50 transition-transform duration-700 hover:scale-105 hover:z-30">
                  <Image
                    src={manufacturingImgUrl}
                    alt={data?.heroManufacturingImage?.alternativeText || "Manufacturing"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
                </div>
              </Reveal>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}


