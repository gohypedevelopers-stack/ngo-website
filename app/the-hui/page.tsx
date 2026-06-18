import Image from 'next/image'
import { 
  Compass, 
  Users, 
  Network, 
  CheckCircle2, 
  Info,
  ShieldCheck,
  User
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'The Hui — Hui Nehu',
  description: "Ancient Wisdom for a Modern Crisis. Meet our team, explore our story, and discover our collaborative partners.",
}

export default function TheHuiPage() {
  const targetPartners = [
    'Hawaiʻi Community Foundation',
    'National Fish and Wildlife Foundation',
    'NOAA Pacific Islands Region',
    'DLNR Division of Aquatic Resources',
    'University of Hawaiʻi Marine Programs',
    '1% for the Planet'
  ]

  const partnershipModes = [
    {
      num: '1',
      title: 'Resource & Technology Sharing',
      desc: 'Technical expertise, marine science data, Bio Cleaner septic access'
    },
    {
      num: '2',
      title: 'Joint Advocacy',
      desc: 'Unified coalition for state environmental policy + federal grants'
    },
    {
      num: '3',
      title: 'Capacity Building',
      desc: 'Admin support + scientific validation for volunteer-led ahupuaʻa projects'
    }
  ]

  const openRoles = [
    {
      role: 'Director of Community Engagement',
      desc: 'education programs + community workdays'
    },
    {
      role: 'Director of Operations / Managing Director',
      desc: 'commercial operations + fleet management'
    }
  ]

  const advisors = [
    'DLNR Division of Aquatic Resources',
    'University of Hawaiʻi',
    'Maui County',
    'Traditional Hawaiian fishing communities'
  ]

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="dark" />

      {/* =========================================================================
          SECTION 1: OUR STORY (ORIGIN & VISION)
         ========================================================================= */}
      <section id="story" className="bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-950/50 text-teal-300 border border-teal-900/30">
                    <Compass className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                    Our Story · Origin & vision
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl tracking-tight">
                  Ancient Wisdom for a Modern Crisis
                </h2>
 
                <p className="mt-4 text-lg font-serif italic text-teal-200 leading-relaxed font-light">
                  &ldquo;He aliʻi ka ʼaina, he kauwā ke kanaka.&rdquo; &mdash; The land is chief; the people are its servants.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
                  <Image
                    src="/ahupuaa_stewardship.png"
                    alt="Traditional community stewardship of the ahupuaʻa"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Who We Are */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">Who We Are</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  A Maui-based 501(c)(3) marine conservation nonprofit, established 2023. The first community-led, whole-system marine conservation organization in Hawaiʻi.
                </p>
              </div>
            </Reveal>

            {/* Name Meaning */}
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">Name Meaning</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Hui Nehu means &ldquo;The Community of the Anchovy.&rdquo; We believe true restoration starts at the very foundation of the food chain.
                </p>
              </div>
            </Reveal>

            {/* Our Model */}
            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">Our Model</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  The ahupuaʻa made operational — organizing conservation work from land-based pollution sources to offshore nurseries, addressing issues at source not just symptoms in the ocean.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TEAM & LEADERSHIP
         ========================================================================= */}
      <section id="team" className="bg-white py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                  <Users className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                  Team & Leadership · The people
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                Led by Hawaiʻi’s Most Credible Ocean Stewards
              </h2>
              <p className="mt-4 text-sm text-slate-500 font-light leading-relaxed max-w-2xl">
                A team combining Indigenous Hawaiian cultural authority, peer-reviewed marine science, and operational expertise.
              </p>
            </Reveal>
          </div>

          {/* Leaders & Open Roles */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* James Carpio */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-100 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">James J.K. Carpio</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">Executive Director & President</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Indigenous Hawaiian natural resource practitioner
                </p>
              </div>
            </Reveal>

            {/* Dr Nakoa Goo */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-100 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Dr. Nakoa Goo</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">Chief Science Officer & Vice President</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  PhD in Marine Ecology, University of Hawaiʻi
                </p>
              </div>
            </Reveal>

            {/* Open Role 1 */}
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-teal-50/80 px-2 py-0.5 text-[9px] font-mono tracking-widest text-teal-800 uppercase mb-3 border border-teal-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[0].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[0].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-teal-600 shrink-0" />
                  <span>Two leadership roles still have placeholder names &mdash; fill before website launch.</span>
                </div>
              </div>
            </Reveal>

            {/* Open Role 2 */}
            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-teal-50/80 px-2 py-0.5 text-[9px] font-mono tracking-widest text-teal-800 uppercase mb-3 border border-teal-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[1].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[1].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-teal-600 shrink-0" />
                  <span>Two leadership roles still have placeholder names &mdash; fill before website launch.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Advisory Board Segment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <Reveal>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                Advisory Board
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {advisors.map((adv) => (
                  <div key={adv} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>{adv}</span>
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PARTNERS & COALITION
         ========================================================================= */}
      <section id="partners" className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100">
                  <Network className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                  Partners & Coalition · Coalition & partnerships
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                A Collaborative Catalyst, Not a Competitor
              </h2>
              <p className="mt-4 text-sm text-slate-500 font-light leading-relaxed max-w-2xl">
                Coalition anchor &mdash; supporting, empowering, and partnering with existing grassroots organizations to accelerate marine conservation across Hawaiʻi. We do not operate in silos.
              </p>
            </Reveal>
          </div>

          {/* Partnership Modes */}
          <div className="space-y-6 mb-16">
            <h3 className="font-serif text-xl font-bold text-slate-900">Three Partnership Modes</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {partnershipModes.map((mode) => (
                <Reveal key={mode.num}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-bold transition-all group-hover:bg-teal-500 group-hover:text-white">
                      0{mode.num}
                    </div>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-2">{mode.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{mode.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Target Partners Grid */}
          <div className="rounded-2xl border border-teal-500/10 bg-teal-50/20 p-8 sm:p-10">
            <Reveal>
              <h3 className="font-serif text-lg font-bold text-teal-950 mb-6 text-center">Target Regional Partners</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {targetPartners.map((partner) => (
                  <div 
                    key={partner} 
                    className="rounded-xl border border-slate-100 bg-white py-5 px-6 shadow-2xs text-center text-xs font-semibold text-slate-700 hover:border-teal-500/20 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
