import Image from 'next/image'
import { 
  Compass, 
  Users, 
  Network, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  ShieldCheck,
  User,
  ExternalLink
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
      desc: 'Technical expertise, marine science data, and Bio Cleaner septic system access.'
    },
    {
      num: '2',
      title: 'Joint Advocacy',
      desc: 'Unified coalition for state environmental policy and joint federal grant acquisition.'
    },
    {
      num: '3',
      title: 'Capacity Building',
      desc: 'Administrative support and scientific validation for community volunteer-led ahupuaʻa projects.'
    }
  ]

  const openRoles = [
    {
      role: 'Director of Community Engagement',
      desc: 'Overseeing education programs and community workdays.'
    },
    {
      role: 'Director of Operations / Managing Director',
      desc: 'Managing commercial operations and fleet management.'
    }
  ]

  const advisors = [
    'DLNR Division of Aquatic Resources',
    'University of Hawaiʻi',
    'Maui County',
    'Traditional Hawaiian fishing communities'
  ]

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Light Nav Background container */}
      <div className="bg-white border-b border-slate-100 w-full h-20" />
      <SiteNav theme="light" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28 overflow-hidden border-b border-slate-200">
        {/* Ambient ocean glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.06)_0%,transparent_55%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.04)_0%,transparent_60%)]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-teal-500/5 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] animate-float-slow" style={{ animationDelay: '-4s' }} />
        
        {/* Subtle grid pattern for modern layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                    <Users className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Who We Are
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-slate-900">
                  Ancient Wisdom for a Modern Crisis
                </h1>
                
                <p className="mt-4 text-xl font-serif italic text-teal-800 leading-relaxed font-light">
                  &ldquo;He aliʻi ka ʼaina, he kauwā ke kanaka.&rdquo; <br/>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 not-italic font-semibold">&mdash; The land is chief; the people are its servants.</span>
                </p>

                <p className="mt-4 text-lg text-slate-650 font-light leading-relaxed">
                  Hui Nehu means &ldquo;The Community of the Anchovy.&rdquo; We believe true restoration starts at the very foundation of the food chain, combining traditional Hawaiian ecological systems with modern marine science.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a href="#story" className="group flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50/50 px-5 py-2.5 text-xs font-semibold text-teal-950 hover:bg-teal-50 hover:border-teal-300 transition-all">
                    Our Story
                  </a>
                  <a href="#team" className="group flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 px-5 py-2.5 text-xs font-semibold text-emerald-950 hover:bg-emerald-50 hover:border-emerald-300 transition-all">
                    Team & Leadership
                  </a>
                  <a href="#partners" className="group flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/50 px-5 py-2.5 text-xs font-semibold text-amber-950 hover:bg-amber-50 hover:border-amber-300 transition-all">
                    Partners & Coalition
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
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

      {/* =========================================================================
          SECTION 1: OUR STORY (ORIGIN & VISION)
         ========================================================================= */}
      <section id="story" className="bg-gradient-to-b from-white to-teal-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
                  <Compass className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                  Origin & Vision
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                The Anchovy Foundation
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Who We Are */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-3">Who We Are</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  A Maui-based 501(c)(3) marine conservation nonprofit, established 2023. The first community-led, whole-system marine conservation organization in Hawaiʻi.
                </p>
              </div>
            </Reveal>

            {/* Name Meaning */}
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-3">Name Meaning</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Hui Nehu means &ldquo;The Community of the Anchovy.&rdquo; We believe true restoration starts at the very foundation of the food chain.
                </p>
              </div>
            </Reveal>

            {/* Our Model */}
            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-3">Our Model</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
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
      <section id="team" className="bg-gradient-to-b from-white to-emerald-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Users className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  The People
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Led by Hawaiʻi’s Most Credible Ocean Stewards
              </h2>
              <p className="mt-2 text-base text-slate-600 font-light leading-relaxed">
                A team combining Indigenous Hawaiian cultural authority, peer-reviewed marine science, and operational expertise.
              </p>
            </Reveal>
          </div>

          {/* Leaders & Open Roles */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* James Carpio */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-emerald-55 flex items-center justify-center text-emerald-700 border border-emerald-200 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">James J.K. Carpio</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">Executive Director & President</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Indigenous Hawaiian natural resource practitioner with decades of regional ecosystem care experience.
                </p>
              </div>
            </Reveal>

            {/* Dr Nakoa Goo */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-emerald-55 flex items-center justify-center text-emerald-700 border border-emerald-200 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">Dr. Nakoa Goo</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">Chief Science Officer & VP</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  PhD in Marine Ecology, University of Hawaiʻi. Leading peer-reviewed marine science implementation.
                </p>
              </div>
            </Reveal>

            {/* Open Role 1 */}
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-amber-50 px-2 py-0.5 text-[9px] font-mono tracking-widest text-amber-700 uppercase mb-3 border border-amber-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[0].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[0].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-amber-500 shrink-0" />
                  <span>Two leadership roles still have placeholder names &mdash; fill before website launch.</span>
                </div>
              </div>
            </Reveal>

            {/* Open Role 2 */}
            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-amber-50 px-2 py-0.5 text-[9px] font-mono tracking-widest text-amber-700 uppercase mb-3 border border-amber-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[1].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[1].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-amber-500 shrink-0" />
                  <span>Two leadership roles still have placeholder names &mdash; fill before website launch.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Advisory Board Segment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <Reveal>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                Advisory Board
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {advisors.map((adv) => (
                  <div key={adv} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>{adv}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
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
      <section id="partners" className="bg-gradient-to-b from-white to-amber-50/20 py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700">
                  <Network className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Coalition & Partnerships
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                A Collaborative Catalyst, Not a Competitor
              </h2>
              <p className="mt-2 text-base text-slate-650 font-light leading-relaxed">
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
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold transition-all group-hover:bg-amber-500 group-hover:text-white">
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
          <div className="rounded-2xl border border-amber-500/10 bg-amber-50/5 p-8 sm:p-10">
            <Reveal>
              <h3 className="font-serif text-lg font-bold text-amber-950 mb-6 text-center">Target Regional Partners</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {targetPartners.map((partner) => (
                  <div 
                    key={partner} 
                    className="rounded-xl border border-slate-100 bg-white py-5 px-6 shadow-2xs text-center text-xs font-semibold text-slate-700 hover:border-amber-500/20 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300"
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
