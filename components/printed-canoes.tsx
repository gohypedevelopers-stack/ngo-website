import Image from 'next/image'
import { ArrowRight, Settings, Feather, Tag, Info, Star, Shield } from 'lucide-react'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

const iconMap = {
  settings: Settings,
  feather: Feather,
  tag: Tag,
  info: Info,
  star: Star,
  shield: Shield,
}

interface PrintedCanoesProps {
  data: HomepageData | null
}

export function PrintedCanoes({ data }: PrintedCanoesProps) {
  const label = data?.printedCanoesLabel || "3D Printed Waʻa"
  const title = data?.printedCanoesTitle || "Revolutionizing Hawaiian Canoe Manufacturing"
  const body = data?.printedCanoesBody || "Traditional composite manufacturing takes months and generates significant environmental waste. Hui Nehu deploys industrial-grade, large-format additive manufacturing (LFAM) to produce full-size, custom outrigger canoes in just 72 to 96 hours. Using recycled PETG and bio-composites, our signature Opal Series delivers unmatched speed-to-water with near-zero material waste."
  
  const productTag = data?.printedCanoesProductTag || "Featured Product"
  const productTitle = data?.printedCanoesProductTitle || "The Opal OC-1"
  const imageUrl = getStrapiMediaUrl(data?.printedCanoesProductImage) || "/printed_canoe.png"
  
  const btnText = data?.printedCanoesBtnText || "Configure Your Waʻa"
  const btnLink = data?.printedCanoesBtnLink || "#"

  const defaultFeatures = [
    { id: 1, title: "Iridescent Finish", description: "Marine-grade proprietary coating", icon: "settings" as const },
    { id: 2, title: "Lightweight & Durable", description: "Recycled PETG bio-composites", icon: "feather" as const },
    { id: 3, title: "Price: $4,200", description: "Built to order in 72-96 hours", icon: "tag" as const }
  ]

  const features = data?.printedCanoesProductFeatures && data.printedCanoesProductFeatures.length > 0
    ? data.printedCanoesProductFeatures
    : defaultFeatures

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-8 bg-slate-300"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {label}
              </span>
              <span className="h-px w-8 bg-slate-300"></span>
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {body}
            </p>
          </Reveal>
        </div>

        {/* Product Showcase */}
        <div className="relative rounded-[2.5rem] bg-slate-50 border border-slate-100 p-6 sm:p-12 overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center relative z-10">
            
            {/* Image */}
            <Reveal delay={100} className="order-2 lg:order-1">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl bg-white">
                <Image
                  src={imageUrl}
                  alt={productTitle}
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Product Details */}
            <Reveal delay={200} className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-6 w-max">
                {productTag}
              </div>
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">
                {productTitle}
              </h3>

              <ul className="space-y-6 mb-10">
                {features.map((feat) => {
                  const IconComponent = iconMap[feat.icon as keyof typeof iconMap] || Settings
                  return (
                    <li key={feat.id} className="flex items-start gap-4">
                      <div className="mt-1 bg-white p-2 rounded-full shadow-sm">
                        <IconComponent className="h-5 w-5 text-slate-700" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{feat.title}</div>
                        <div className="text-sm text-slate-500 mt-1">{feat.description}</div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <a href={btnLink} className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto">
                {btnText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
            
          </div>
          
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-gradient-to-bl from-teal-50 to-transparent rounded-full opacity-60 pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
