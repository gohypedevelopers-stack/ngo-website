import Image from 'next/image'
import { Users, Mail, Linkedin, Briefcase, ShieldAlert, Award } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Team & Leadership — Hui Nehu',
  description: 'Led by a balanced coalition of Indigenous Hawaiian cultural authority, peer-reviewed marine science, and operational experts.',
}

const leaders = [
  {
    name: 'James J.K. Carpio',
    role: 'Executive Director & President',
    desc: 'Indigenous Hawaiian natural resource practitioner. James provides deep cultural authority, ancestral ecosystem direction, and community stewardship guidance.',
    initials: 'JC',
  },
  {
    name: 'Dr. Nakoa Goo',
    role: 'Chief Science Officer & Vice President',
    desc: 'PhD in Marine Ecology, University of Hawaiʻi. Dr. Nakoa anchors the organization’s field operations and ecological monitoring in peer-reviewed marine science.',
    initials: 'NG',
  },
]

const openRoles = [
  {
    title: 'Director of Community Engagement',
    focus: 'Education programs + community workdays',
  },
  {
    title: 'Director of Operations / Managing Director',
    focus: 'Commercial operations + fleet management',
  },
]

const advisoryBoard = [
  'DLNR Division of Aquatic Resources',
  'University of Hawaiʻi',
  'Maui County',
  'Traditional Hawaiian fishing communities',
]

export default function TeamPage() {
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
                    <Users className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                    The Hui &mdash; Team & Leadership
                  </span>
                </div>
                
                <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Led by Hawaiʻi’s Most<br className="hidden sm:inline" /> Credible Ocean Stewards
                </h1>
                
                <p className="mt-4 text-lg font-light leading-relaxed text-teal-900/85">
                  A team combining Indigenous Hawaiian cultural authority, peer-reviewed marine science, and operational expertise.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-105 shadow-xl">
                  <Image
                    src="/team_stewards.png"
                    alt="Hui Nehu team stewards"
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

      {/* Core Leadership Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Core Leadership</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {leaders.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <div className="border border-slate-200 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-teal-550/10 text-teal-700 border border-teal-200/50 flex items-center justify-center font-bold font-serif text-lg mb-6">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{member.name}</h3>
                    <div className="text-xs font-mono text-teal-600 uppercase tracking-widest block mb-4">
                      {member.role}
                    </div>
                    <p className="text-sm font-light text-slate-605 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-cyan-50 text-cyan-600 mb-4">
                <Briefcase className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Open Roles</h2>
              <div className="mx-auto mt-3 h-1 w-12 bg-cyan-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {openRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 100}>
                <div className="border border-dashed border-slate-300 bg-slate-50/50 rounded-2xl p-8 hover:border-cyan-500/40 hover:bg-slate-50 transition-all duration-300">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">{role.title}</h3>
                  <p className="text-sm font-light text-slate-500 leading-relaxed mb-4">
                    Focus: {role.focus}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 hover:text-cyan-700 cursor-pointer">
                    Apply Now &rarr;
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="relative py-12 overflow-hidden border-b border-slate-200">
        {/* Background Image */}
        <Image
          src="/advisory_board_bg.png"
          alt="Hawaiian bay background"
          fill
          className="object-cover object-center pointer-events-none"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-teal-50 text-teal-600 mb-3 border border-teal-100">
                <Award className="h-5 w-5 animate-pulse" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Advisory Board</h2>
              <div className="mx-auto mt-2 h-1 w-12 bg-teal-500 rounded-full" />
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryBoard.map((partner, index) => (
              <Reveal key={partner} delay={index * 50}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm flex items-center justify-center text-center hover:shadow-md hover:border-teal-500/30 transition-all duration-300 min-h-[70px]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 leading-relaxed">
                    {partner}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
