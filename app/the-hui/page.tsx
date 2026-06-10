import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Users, Network, Heart } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'The Hui — Hui Nehu',
  description: "He ali'i ka 'āina, he kauwā ke kanaka. Learn about our leadership team, our ahupua'a model, and our coalition network.",
}

const subpages = [
  {
    slug: '/the-hui/story-ahupuaa',
    eyebrow: 'Legacy',
    title: 'Our Story & The Ahupuaʻa Model',
    description: 'Applying a 1,000-year-old Hawaiian ecological resource management design to 21st-century conservation.',
    icon: Compass,
  },
  {
    slug: '/the-hui/team',
    eyebrow: 'Leadership',
    title: 'Team & Leadership',
    description: 'Meet our leadership team combining Indigenous cultural authority, PhD science, and operations expertise.',
    icon: Users,
  },
  {
    slug: '/the-hui/advisory-board',
    eyebrow: 'Oversight',
    title: 'Advisory Board',
    description: 'Our standing board ensures technical, political, and cultural alignment across regional networks.',
    icon: Heart,
  },
  {
    slug: '/the-hui/coalition-partners',
    eyebrow: 'Network',
    title: 'Coalition & Partners',
    description: 'Operating as a non-competitive catalyst to support, fund, and empower grassroot community groups.',
    icon: Network,
  },
]

export default function TheHuiPage() {
  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Split Hero Section (High Contrast Light Theme) */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-600"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600">
                    ʻŌlelo Noʻeau · Foundational Proverb
                  </span>
                  <span className="h-px w-8 bg-teal-600"></span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl italic font-bold text-slate-900 leading-tight">
                  &ldquo;He aliʻi ka ʻāina, he kauwā ke kanaka.&rdquo;
                </h1>
                
                <p className="text-lg text-teal-700 font-light leading-relaxed">
                  &mdash; The land is chief; the people are its servants.
                </p>
                
                <p className="text-base text-slate-650 font-light leading-relaxed max-w-2xl">
                  Hui Nehu builds unified coalitions to share resources, empower community-led restoration projects, and drive collective advocacy based on historical self-sustaining ahupuaʻa frameworks.
                </p>

                <div className="pt-6">
                  <a 
                    href="#navigation" 
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-teal-700 hover:scale-105"
                  >
                    Meet The Hui
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/ahupuaa_stewardship.png"
                    alt="Traditional community stewardship of the ahupuaʻa"
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

      {/* Grid Menu of Subpages */}
      <section id="navigation" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {subpages.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.slug} delay={index * 100}>
                  <Link 
                    href={item.slug}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 hover:border-teal-500/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full"
                  >
                    <div>
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-teal-600 uppercase block mb-1">
                        {item.eyebrow}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-slate-905 mb-3 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-600 font-light mb-6">
                        {item.description}
                      </p>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 group-hover:text-teal-900 transition-colors">
                      Explore Section
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
