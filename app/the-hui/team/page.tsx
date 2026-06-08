import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Linkedin } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Team & Leadership — Hui Nehu',
  description: 'Meet the team behind Hui Nehu: Indigenous practitioners, marine scientists, and operational experts.',
}

const team = [
  {
    name: 'James J.K. Carpio',
    role: 'Executive Director & President',
    bio: 'Indigenous Hawaiian natural resource practitioner providing deep cultural authority, ancestral ecosystem direction, and community engagement guidance.',
    initials: 'JC',
  },
  {
    name: 'Dr. Nakoa Goo',
    role: 'Chief Science Officer & Vice President',
    bio: 'Holds a PhD in Marine Ecology from the University of Hawai\u02BBi. Dr. Nakoa anchors the organization\u02BBs field operations in peer-reviewed marine science.',
    initials: 'NG',
  },
  {
    name: 'Lehua K. Wilcox',
    role: 'Director of Community Engagement',
    bio: 'Tasked with managing public educational programming, local school outreach, coordinating volunteer networks, and organizing community workday logistics.',
    initials: 'LW',
  },
  {
    name: 'Kainoa S. Vance',
    role: 'Director of Operations / Managing Director',
    bio: 'Coordinates backend commercial operations, asset tracking, marine fleet management, and septic truck logistics partnerships.',
    initials: 'KV',
  },
]

export default function TeamPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/team_stewards.png"
            alt="Hui Nehu team background"
            fill
            className="object-cover object-center opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 py-12">
          <Reveal>
            <Link 
              href="/the-hui"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back to The Hui
            </Link>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Coalition</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Team & Leadership</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Led by a balanced coalition of Indigenous cultural authorities, peer-reviewed marine scientists, and seasoned operational experts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-6 shadow-sm hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="h-16 w-16 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center font-bold font-serif text-xl mb-6">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">
                      {member.role}
                    </div>
                    <p className="text-sm font-light text-slate-300 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex gap-4 border-t border-slate-800 pt-4 text-xs font-mono text-slate-500">
                    <span className="hover:text-cyan-400 cursor-pointer flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> Email
                    </span>
                    <span className="hover:text-cyan-400 cursor-pointer flex items-center gap-1">
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </span>
                  </div>
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
