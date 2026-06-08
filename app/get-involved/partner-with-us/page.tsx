import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, HeartHandshake, Home, GraduationCap } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Partner With Us — Hui Nehu',
  description: 'Join Hui Nehu as a corporate sponsor, landowner partner, or academic collaborator.',
}

const partnershipTypes = [
  {
    title: 'Corporate & Philanthropic Alliances',
    desc: 'Align your business or foundation with a whole-system, community-embedded conservation model that delivers verifiable, ecological, and cultural returns.',
    icon: HeartHandshake,
  },
  {
    title: 'Landowner Partnerships',
    desc: 'Working directly with regional landowners and estates to transition aging, legacy wastewater cesspools into modern, eco-friendly containment systems.',
    icon: Home,
  },
  {
    title: 'Academic Collaborations',
    desc: 'Providing field testing infrastructure, coastal access, and community-sourced database arrays to support university-level marine science research initiatives.',
    icon: GraduationCap,
  },
]

export default function PartnerWithUsPage() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/banner.png"
            alt="Ocean partnership background"
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
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 block mb-2 uppercase">Collaborations</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">Partner With Us</h1>
            <p className="mt-4 text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              Facilitating structured resource, data, and technology sharing with federal agencies, academic institutions, and regional environmental foundations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership Pillars Grid */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Reveal key={type.title} delay={index * 100}>
                  <div className="border border-white/5 bg-slate-900/40 rounded-2xl p-8 hover:border-cyan-500/20 transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-455 border border-cyan-500/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white mb-4">
                        {type.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 font-light mb-6">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Form / Inquiry Highlight */}
          <Reveal>
            <div className="border border-white/5 bg-slate-900/40 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Initialize Partnership Discussions</h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Our operations team reviews incoming corporate alignment, land access, and academic collaboration requests on a rolling basis. Contact us to schedule an introductory call.
              </p>
              <a 
                href="mailto:partnerships@huinehu.org?subject=New%25Partner%25Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 font-bold px-8 py-4 text-sm hover:bg-teal-400 transition-all hover:scale-105"
              >
                Submit Partnership Inquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
