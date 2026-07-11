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
import { fetchTheHuiPageData, getStrapiMediaUrl } from '@/lib/strapi'

export const metadata = {
  title: 'The Hui — Hui Nehu',
  description: "Ancient Wisdom for a Modern Crisis. Meet our team, explore our story, and discover our collaborative partners.",
}

export default async function TheHuiPage() {
  const pageData = await fetchTheHuiPageData()

  // Story Section
  const storyEyebrow = pageData?.storyEyebrow
  const storyTitle = pageData?.storyTitle
  const storyProverb = pageData?.storyProverb
  const storyImage = getStrapiMediaUrl(pageData?.storyImage)
  const storyCard1Title = pageData?.storyCard1Title
  const storyCard1Body = pageData?.storyCard1Body
  const storyCard2Title = pageData?.storyCard2Title
  const storyCard2Body = pageData?.storyCard2Body
  const storyCard3Title = pageData?.storyCard3Title
  const storyCard3Body = pageData?.storyCard3Body

  // Team Section
  const teamEyebrow = pageData?.teamEyebrow
  const teamTitle = pageData?.teamTitle
  const teamDescription = pageData?.teamDescription
  
  const leader1Name = pageData?.leader1Name
  const leader1Role = pageData?.leader1Role
  const leader1Desc = pageData?.leader1Desc
  const leader2Name = pageData?.leader2Name
  const leader2Role = pageData?.leader2Role
  const leader2Desc = pageData?.leader2Desc

  const openRoles = [
    {
      role: pageData?.openRole1Title,
      desc: pageData?.openRole1Desc
    },
    {
      role: pageData?.openRole2Title,
      desc: pageData?.openRole2Desc
    },
    {
      role: pageData?.openRole3Title,
      desc: pageData?.openRole3Desc
    },
    {
      role: pageData?.openRole4Title,
      desc: pageData?.openRole4Desc
    }
  ]
  const openRoleNote = pageData?.openRoleNote

  const advisors = [
    pageData?.advisor1,
    pageData?.advisor2,
    pageData?.advisor3,
    pageData?.advisor4
  ].filter(Boolean)

  // Partners Section
  const partnersEyebrow = pageData?.partnersEyebrow
  const partnersTitle = pageData?.partnersTitle
  const partnersDescription = pageData?.partnersDescription

  const partnershipModes = [
    {
      num: '1',
      title: pageData?.partnerMode1Title,
      desc: pageData?.partnerMode1Desc
    },
    {
      num: '2',
      title: pageData?.partnerMode2Title,
      desc: pageData?.partnerMode2Desc
    },
    {
      num: '3',
      title: pageData?.partnerMode3Title,
      desc: pageData?.partnerMode3Desc
    }
  ]

  const targetPartners = [
    pageData?.targetPartner1,
    pageData?.targetPartner2,
    pageData?.targetPartner3,
    pageData?.targetPartner4,
    pageData?.targetPartner5,
    pageData?.targetPartner6
  ].filter(Boolean)

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
                    {storyEyebrow}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl tracking-tight">
                  {storyTitle}
                </h2>
 
                <p className="mt-4 text-lg font-serif italic text-teal-200 leading-relaxed font-light">
                  {storyProverb}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
                  <Image
                    src={storyImage}
                    alt="Story image"
                    fill
                    priority
                    loading="eager"
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">{storyCard1Title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {storyCard1Body}
                </p>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={200}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">{storyCard2Title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {storyCard2Body}
                </p>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={300}>
              <div className="h-full rounded-2xl border border-slate-850 bg-slate-900/40 backdrop-blur-sm p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-lg font-bold text-white mb-3 border-b border-slate-800 pb-3">{storyCard3Title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {storyCard3Body}
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
                  {teamEyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                {teamTitle}
              </h2>
              <p className="mt-4 text-sm text-slate-500 font-light leading-relaxed max-w-2xl">
                {teamDescription}
              </p>
            </Reveal>
          </div>

          {/* Leaders & Open Roles */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Leader 1 */}
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-100 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{leader1Name}</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">{leader1Role}</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {leader1Desc}
                </p>
              </div>
            </Reveal>

            {/* Leader 2 */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-100 mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{leader2Name}</h3>
                <span className="text-[11px] font-mono tracking-wider text-slate-400 block mb-3 uppercase">{leader2Role}</span>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {leader2Desc}
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
                  <span>{openRoleNote}</span>
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
                  <span>{openRoleNote}</span>
                </div>
              </div>
            </Reveal>

            {/* Open Role 3 */}
            <Reveal delay={400}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-teal-50/80 px-2 py-0.5 text-[9px] font-mono tracking-widest text-teal-800 uppercase mb-3 border border-teal-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[2].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[2].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-teal-600 shrink-0" />
                  <span>{openRoleNote}</span>
                </div>
              </div>
            </Reveal>

            {/* Open Role 4 */}
            <Reveal delay={500}>
              <div className="h-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-md bg-teal-50/80 px-2 py-0.5 text-[9px] font-mono tracking-widest text-teal-800 uppercase mb-3 border border-teal-200">Open Role</span>
                  <h3 className="font-serif text-base font-bold text-slate-800 mb-2">{openRoles[3].role}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{openRoles[3].desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[10px] text-slate-450 flex items-center gap-1">
                  <Info className="h-3 w-3 text-teal-600 shrink-0" />
                  <span>{openRoleNote}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Advisory Board Segment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <Reveal>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                Coming Soon
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {advisors.map((adv, i) => (
                  <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-xs font-semibold text-slate-700 flex items-center justify-between">
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
                  {partnersEyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl tracking-tight">
                {partnersTitle}
              </h2>
              <p className="mt-4 text-sm text-slate-500 font-light leading-relaxed max-w-2xl">
                {partnersDescription}
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
                {targetPartners.map((partner, i) => (
                  <div 
                    key={i} 
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

