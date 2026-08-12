import Image from 'next/image'
import { ArrowRight, BookOpen, Heart } from 'lucide-react'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function HeroBanner({ data }: { data?: HomepageData | null }) {
  const rawSubtitle = data?.heroSubtitle || "Mālama ʼAīna. Mālama Wai. Mālama Kai. Care for the Land.<br />Care for the Water. Care for the Sea."
  let formattedSubtitle = rawSubtitle
  if (formattedSubtitle.includes("Care for the Land.") && !formattedSubtitle.includes("<br") && !formattedSubtitle.includes("\n")) {
    formattedSubtitle = formattedSubtitle.replace("Care for the Land.", "Care for the Land.<br />")
  }

  const rawTitle = data?.heroTitle || "Protecting Hawaiʻi’s Ocean,<br />From the Ground Up"
  
  let formattedTitleString = rawTitle
  if (formattedTitleString.includes("Ocean,") && !formattedTitleString.includes("<br") && !formattedTitleString.includes("\n")) {
    formattedTitleString = formattedTitleString.replace("Ocean,", "Ocean,<br />")
  }

  const title = formattedTitleString ? (
    <span dangerouslySetInnerHTML={{ __html: formattedTitleString.replace(/\n/g, '<br />') }} />
  ) : null

  const rawDescription = data?.heroDescription || "A Maui-Based 501(c)(3) Marine Conservation Nonprofit — Est. 2023"
  let formattedDesc = rawDescription
  if (formattedDesc.includes("Care for the Land.") && !formattedDesc.includes("<br") && !formattedDesc.includes("\n")) {
    formattedDesc = formattedDesc.replace("Care for the Land.", "Care for the Land.<br />")
  }

  const description = formattedDesc ? (
    <span dangerouslySetInnerHTML={{ __html: formattedDesc.replace(/\n/g, '<br />') }} />
  ) : null
  const missionStatement = 'To protect, restore, and perpetuate native forage fish populations and their ecosystems through the integration of Native Hawaiian traditional ecological knowledge (TEK) and contemporary marine science.'
  
  const primaryBtnText = data?.heroPrimaryBtnText
  const primaryBtnLink = data?.heroPrimaryBtnLink
  
  const secondaryBtnText = data?.heroSecondaryBtnText
  const secondaryBtnLink = data?.heroSecondaryBtnLink

  const tertiaryBtnText = data?.heroTertiaryBtnText
  const tertiaryBtnLink = data?.heroTertiaryBtnLink

  const bannerImgUrl = getStrapiMediaUrl(data?.heroBannerImage) || '/banner.png'
  const scubaDiverImgUrl = getStrapiMediaUrl(data?.heroScubaDiverImage) || '/underwate.png'
  const manufacturingImgUrl = getStrapiMediaUrl(data?.heroManufacturingImage) || '/ahupuaa_restoration.png'

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {bannerImgUrl && (
          <Image
            src={bannerImgUrl}
            alt={data?.heroBannerImage?.alternativeText || "Banner Image"}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center w-full h-full min-w-full min-h-full"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 max-w-3xl">
            <div className="animate-hero-text">
              {formattedSubtitle && (
                <div className="inline-flex max-w-full mb-8">
                  <span 
                    className="text-[9.5px] sm:text-xs font-mono font-semibold tracking-normal sm:tracking-[0.1em] uppercase text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-[0_0_15px_rgba(20,184,166,0.1)] leading-relaxed inline-block max-w-full text-center"
                    dangerouslySetInnerHTML={{ __html: formattedSubtitle.replace(/\n/g, '<br />') }}
                  />
                </div>
              )}
              
              {title && (
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] tracking-tight mb-8 drop-shadow-lg">
                  {title}
                </h1>
              )}
              
              {description && (
                <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-7 max-w-xl">
                  {description}
                </p>
              )}
              
              <div className="mb-10 max-w-2xl border-l-2 border-teal-400/80 bg-slate-950/35 py-3 pl-4 pr-5 backdrop-blur-sm sm:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Hui Nehu Mission Statement
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {missionStatement}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {primaryBtnText && (
                  <a href={primaryBtnLink} className="group flex items-center justify-center gap-2.5 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.4)]">
                    {primaryBtnText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {secondaryBtnText && (
                  <a href={secondaryBtnLink} className="group flex items-center justify-center gap-2.5 rounded-full border border-slate-500/40 bg-slate-900/40 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-slate-800/60 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(45,212,191,0.15)]">
                    {secondaryBtnText}
                    <BookOpen className="h-4 w-4 text-teal-400" />
                  </a>
                )}
                {tertiaryBtnText && (
                  <a href={tertiaryBtnLink} className="group flex items-center justify-center gap-2.5 rounded-full border border-slate-500/40 bg-slate-900/40 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-slate-800/60 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(45,212,191,0.15)]">
                    {tertiaryBtnText}
                    <Heart className="h-4 w-4 text-teal-400 transition-transform group-hover:scale-110" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative hidden lg:block h-[600px] w-full lg:col-span-5">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 blur-[100px] rounded-full z-0" />
            
            {/* Top Right Image (Scuba Diver) */}
            {scubaDiverImgUrl && (
              <div className="absolute top-4 right-4 w-[60%] h-[60%] z-10 animate-hero-image-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105 hover:z-30">
                  <Image
                    src={scubaDiverImgUrl}
                    alt={data?.heroScubaDiverImage?.alternativeText || "Scuba Diver"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Bottom Left Image (3D Printed) */}
            {manufacturingImgUrl && (
              <div className="absolute bottom-4 left-4 w-[65%] h-[55%] z-20 animate-hero-image-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-slate-950/50 transition-transform duration-700 hover:scale-105 hover:z-30">
                  <Image
                    src={manufacturingImgUrl}
                    alt={data?.heroManufacturingImage?.alternativeText || "Manufacturing"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}


