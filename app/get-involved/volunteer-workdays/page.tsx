import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, Compass, ShieldAlert, Waves, BookOpen } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Community Workdays — Hui Nehu',
  description: 'Join our field crews for hands-on restoration and citizen science campaigns on Maui.',
}

const pathways = [
  {
    title: 'In-Water Restoration',
    desc: 'Assisting in physical loko i\u02BBa dry-stack wall restoration, clearing invasive seaweeds, and outplanting native nursery-grown limu strains.',
    icon: Waves,
    color: 'text-cyan-400',
  },
  {
    title: 'Debris Extraction',
    desc: 'Participating in organized beach, estuary, stream, and reef cleanup actions, gathering weights and polymer data for local recyclers.',
    icon: ShieldAlert,
    color: 'text-red-400',
  },
  {
    title: 'Educational Days',
    desc: 'Bringing family and students to active sites to learn traditional land stewardship methods and master modern citizen science data gear.',
    icon: BookOpen,
    color: 'text-amber-405',
  },
]

export default function VolunteerWorkdaysPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Volunteers in Hawaiian water background"
            fill
            className="object-cover object-center opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/get-involved"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Get Involved
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Field Engagement</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Volunteer & Community Workdays</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Join our field teams for structured community workdays across Mauiʻs watersheds (ahupuaʻa).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pathways.map((path, index) => {
              const Icon = path.icon
              return (
                <Reveal key={path.title} delay={index * 100}>
                  <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 ${path.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white mb-4">
                        {path.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 font-light mb-6">
                        {path.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Registration highlight */}
          <Reveal>
            <div className="border border-white/5 bg-slate-900/40 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Ready to Join a Field Crew?</h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Workdays are held bi-weekly on Saturdays across various locations on Maui. We provide safety instructions, gloves, water, and lunch. No prior science or construction experience is required.
              </p>
              <a 
                href="mailto:partnerships@huinehu.org?subject=Volunteer%20Workday%20Registration"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 font-bold px-8 py-4 text-sm hover:bg-teal-400 transition-all hover:scale-105"
              >
                Sign Up for Next Workday
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
