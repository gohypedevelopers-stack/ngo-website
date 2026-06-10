import Image from 'next/image'
import { Users, GraduationCap, Database, Eye, Activity, Droplets, Trash2, Heart, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata = {
  title: 'Nā Kiaʻi Kai Community Science — Hui Nehu',
  description: 'Training local volunteers in fish surveys, limu monitoring, and water quality testing.',
}

const detailedActivities = [
  {
    title: 'Fish surveys',
    desc: 'Standardized visual censuses of nearshore reef fish species diversity and biomass tracking.',
    icon: Eye,
    color: 'text-cyan-600 bg-cyan-50'
  },
  {
    title: 'Limu monitoring',
    desc: 'Tracking native and invasive seaweed distribution across shallow reef flats.',
    icon: Activity,
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Water quality testing',
    desc: 'Conducting regular chemical assays to monitor nutrient loading, pathogens, and runoff cycles.',
    icon: Droplets,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Marine debris removal',
    desc: 'Removing ghost nets, microplastics, and derelict gear from marine nurseries.',
    icon: Trash2,
    color: 'text-rose-600 bg-rose-50'
  },
  {
    title: 'Coral outplanting',
    desc: 'Assisting in asexual propagation and transplanting of thermal-tolerant coral colonies.',
    icon: Heart,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Youth ocean science education',
    desc: 'Empowering future ocean guardians through field excursions and school partnerships.',
    icon: GraduationCap,
    color: 'text-amber-600 bg-amber-50'
  }
]

export default function CommunitySciencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 flex flex-col justify-between">
      {/* Dark Nav Background container */}
      <div className="bg-slate-950 w-full h-20" />
      <SiteNav />

      {/* Hero / What We Do Section */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Program 3: Nā Kiaʻi Kai Community Science
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Training Hawaiʻi’s Next<br className="hidden sm:inline" /> Generation of Ocean Guardians
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <Image
                    src="/traning.png"
                    alt="Community science monitoring team"
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

      {/* Activities Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-50 text-teal-700 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Program Activities</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailedActivities.map((act, idx) => {
              const IconComp = act.icon
              return (
                <Reveal key={act.title} delay={idx * 50}>
                  <div className="h-full rounded-2xl border border-slate-200/60 bg-slate-50/50 p-6 hover:border-teal-500/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className={`inline-flex items-center justify-center h-9 w-9 rounded-xl ${act.color} mb-4`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-slate-950 mb-2">{act.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{act.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Impact Section */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <Image
                src="/science_data_bg.png"
                alt="Hawaiian volunteers conducting marine science research"
                fill
                className="object-cover object-center"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/70" />

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
                <div className="flex items-center gap-5 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-teal-400 uppercase mb-1">Science & Policy</span>
                    <div className="flex items-baseline text-5xl font-serif font-bold text-white">
                      <AnimatedCounter value={500} suffix="+" />
                    </div>
                    <span className="mt-1 text-[10px] font-semibold tracking-widest uppercase text-slate-400">Water Samples Analyzed</span>
                  </div>
                </div>

                <div className="h-12 w-px bg-white/15 hidden sm:block" />

                <p className="text-sm font-light text-slate-300 leading-relaxed">
                  Standardized community data collection informing state and federal policy. Publication-quality scientific output from volunteer-led monitoring.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
