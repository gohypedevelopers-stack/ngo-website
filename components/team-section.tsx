import Image from 'next/image'
import { Reveal } from './reveal'

const team = [
  {
    initials: 'JC',
    role: 'Executive Director',
    name: 'James Carpio',
    bio: 'Decades of Indigenous natural resource practice, translating ancestral land stewardship into 21st-century conservation strategy.',
  },
  {
    initials: 'NG',
    role: 'Chief Science Officer',
    name: 'Dr. Nakoa Goo',
    bio: 'Leading marine ecologist from the University of Hawaiʻi, specializing in coral resilience and climate adaptation.',
  },
  {
    initials: 'CE',
    role: 'Community Engagement',
    name: 'Community Lead',
    bio: 'Ensuring our science is embedded in the communities it serves — from youth education to elder knowledge-keeping.',
  },
  {
    initials: 'OP',
    role: 'Operations',
    name: 'Operations Lead',
    bio: 'Keeping overhead lean at 15% so the ocean gets 85 cents of every invested dollar.',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative bg-white px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-none mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-teal-bright"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                The people
              </span>
            </div>
            
            <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
              Hawaiʻi&apos;s most credible ocean stewards
            </h2>
            
            <p className="text-lg leading-relaxed text-[#3A5652] font-light">
              Science and culture, inseparable. Our team is deeply rooted in both.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Split: Image & Team Cards */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left: Image Showcase */}
          <Reveal className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg lg:sticky lg:top-28">
            <Image
              src="/team_stewards.png"
              alt="Hawaiian marine conservationists and scientists working together on a research vessel off the coast of volcanic mountains"
              fill
              className="object-cover"
              priority
            />
          </Reveal>

          {/* Right: Team Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="group relative flex items-start gap-6 rounded-2xl border border-slate-100 bg-[#FAF8F5] p-6 transition-all duration-300 hover:bg-[#FAF6EE] hover:shadow-sm">
                  {/* Initials badge */}
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-teal-pale font-serif text-lg font-bold text-teal-deep">
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-bright mb-1">
                      {member.role}
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-bold text-teal-deep">
                      {member.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5A7470]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
