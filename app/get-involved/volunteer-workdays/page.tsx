import Image from 'next/image'
import { Heart, Eye, Droplets, Trash2, GraduationCap, Calendar, Compass } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { VolunteerModalButton } from '@/components/volunteer-modal-button'

export const metadata = {
  title: 'Volunteer & Workdays — Hui Nehu',
  description: 'Volunteers are the backbone of the Nā Kiaʻi Kai Community Science program. Join a workday on Maui.',
}

const volunteerActivities = [
  {
    title: 'Fish & limu surveys',
    desc: 'Conducting visual census counts of fish populations and tracking native seaweed distribution.',
    icon: Eye,
    color: 'text-cyan-600 bg-cyan-50'
  },
  {
    title: 'Water quality testing',
    desc: 'Sampling local streams and coastlines to check for nutrient spikes, salinity, and runoff contamination.',
    icon: Droplets,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Marine debris removal',
    desc: 'Extracting shoreline plastic pollution, microplastics, and heavy ghost fishing nets.',
    icon: Trash2,
    color: 'text-rose-600 bg-rose-50'
  },
  {
    title: 'Coral outplanting',
    desc: 'Transplanting resilient, thermal-tolerant coral fragments onto degraded nearshore reef flats.',
    icon: Heart,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Youth education support',
    desc: 'Assisting in mentoring local Maui students during outdoor hands-on marine science days.',
    icon: GraduationCap,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Community workdays',
    desc: 'Joining watershed restoration, clearing stream blockages, and rebuilding traditional fishponds.',
    icon: Calendar,
    color: 'text-teal-600 bg-teal-50'
  }
]

export default function VolunteerWorkdaysPage() {
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
                    <Compass className="h-5 w-5 animate-spin-slow" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Get Involved &mdash; Volunteer
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Join a Community Workday.<br />Become a Kiaʻi Kai.
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  Volunteers are the backbone of the Nā Kiaʻi Kai Community Science program. From beach cleanups to fish surveys to coral outplanting, there is a role for every skill level.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/banner.png"
                    alt="Volunteers in Hawaiian water restoration workday"
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
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Volunteer Activities</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerActivities.map((act, index) => {
              const IconComp = act.icon
              return (
                <Reveal key={act.title} delay={index * 50}>
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

      {/* Registration Callout */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden text-white p-8 sm:p-12 shadow-xl text-center">
              {/* Background Image */}
              <Image
                src="/volunteer_crew_bg.png"
                alt="Community volunteers ready for workday"
                fill
                className="object-cover object-center"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-950/80" />

              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-serif font-bold">Ready to Join a Field Crew?</h3>
                <p className="text-base sm:text-lg font-light text-slate-200 leading-relaxed max-w-2xl mx-auto">
                  No prior marine science or engineering background required. We provide protective gear, safety briefs, water, and lunch.
                </p>
                <div className="pt-4">
                  <VolunteerModalButton />
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
