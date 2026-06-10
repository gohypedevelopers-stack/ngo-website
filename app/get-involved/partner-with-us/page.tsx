import Image from 'next/image'
import { Share2, Scale, BarChart3, Mail, Phone, Info, Globe, Compass } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Partner With Us — Hui Nehu',
  description: 'Scale Your Impact. Join the Coalition as an organizational or institutional partner.',
}

const audience = [
  'Grassroots conservation orgs',
  'Research institutions',
  'Government agencies',
  'Corporations'
]

const offers = [
  {
    title: 'Data sharing + co-publication',
    desc: 'Access and contribute to community-sourced scientific databases and joint peer-reviewed publications.',
    icon: Share2,
    color: 'text-cyan-600 bg-cyan-50'
  },
  {
    title: 'Joint grant applications',
    desc: 'Resourcing major conservation efforts together through combined state, federal, and private grant writing.',
    icon: Scale,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Bio Cleaner technology access',
    desc: 'Deploying wastewater interception assets and septic conversions to target areas under your care.',
    icon: Compass,
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Coalition representation in state policy advocacy',
    desc: 'Unifying grassroots voices to drive legislative reform and environmental protections across the islands.',
    icon: BarChart3,
    color: 'text-blue-600 bg-blue-50'
  }
]

export default function PartnerWithUsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Globe className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Get Involved &mdash; Partner With Us
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Scale Your Impact.<br />Join the Coalition.
                </h1>
                
                <div className="pt-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase block mb-3">Who This Is For</span>
                  <div className="flex flex-wrap gap-2">
                    {audience.map((item) => (
                      <span key={item} className="inline-block px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/banner.png"
                    alt="Coalition partner resources"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">What Partnership Offers</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer, index) => {
              const IconComp = offer.icon
              return (
                <Reveal key={offer.title} delay={index * 50}>
                  <div className="h-full rounded-2xl border border-slate-200/60 bg-slate-50/50 p-6 hover:border-teal-500/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className={`inline-flex items-center justify-center h-9 w-9 rounded-xl ${offer.color} mb-4`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-950 mb-2 leading-snug">{offer.title}</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{offer.desc}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-xl text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold">Connect With Us</h3>
                <p className="text-lg font-light text-slate-450 leading-relaxed max-w-2xl mx-auto">
                  Let’s collaborate. Our teams respond to coordination calls and partnership opportunities across Maui County.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-3 text-sm font-mono tracking-wide">
                <a href="mailto:partnerships@huinehu.org" className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/35 transition-colors">
                  <Mail className="h-5 w-5 text-teal-400 mb-2" />
                  <span>partnerships@huinehu.org</span>
                </a>
                <a href="tel:8085556348" className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/35 transition-colors">
                  <Phone className="h-5 w-5 text-teal-400 mb-2" />
                  <span>(808) 555-NEHU</span>
                </a>
                <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <Info className="h-5 w-5 text-teal-400 mb-2" />
                  <span>@HuiNehu</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
