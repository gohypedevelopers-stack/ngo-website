import Image from 'next/image'
import { Reveal } from './reveal'
import { HomepageData, getStrapiMediaUrl } from '@/lib/strapi'

export function TeamSection({ data }: { data?: HomepageData | null }) {
  const label = data?.teamLabel || ''
  const title = data?.teamTitle || ''
  const body = data?.teamBody || ''
  
  const imageUrl = getStrapiMediaUrl(data?.teamImage) || ''
  const teamMembers = data?.teamMembers || []

  return (
    <section id="team" className="relative bg-white px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Block */}
        {(label || title || body) && (
          <div className="max-w-none mb-16">
            <Reveal>
              {label && (
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-teal-bright"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                    {label}
                  </span>
                </div>
              )}
              
              {title && (
                <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
                  {title}
                </h2>
              )}
              
              {body && (
                <p className="text-lg leading-relaxed text-[#3A5652] font-light">
                  {body}
                </p>
              )}
            </Reveal>
          </div>
        )}

        {/* 2-Column Split: Image & Team Cards */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left: Image Showcase */}
          {imageUrl && (
            <Reveal className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-100 shadow-lg lg:sticky lg:top-28">
              <Image
                src={imageUrl}
                alt={title || "Team image"}
                fill
                className="object-cover"
                priority
                unoptimized={imageUrl.startsWith('http')}
              />
            </Reveal>
          )}

          {/* Right: Team Cards Stack */}
          {teamMembers.length > 0 && (
            <div className={imageUrl ? "lg:col-span-7 flex flex-col gap-6" : "lg:col-span-12 flex flex-col gap-6"}>
              {teamMembers.map((member, i) => (
                <Reveal key={member.name || i} delay={i * 100}>
                  <div className="group relative flex items-start gap-6 rounded-2xl border border-slate-100 bg-[#FAF8F5] p-6 transition-all duration-300 hover:bg-[#FAF6EE] hover:shadow-sm">
                    {/* Initials badge */}
                    {member.initials && (
                      <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-teal-pale font-serif text-lg font-bold text-teal-deep">
                        {member.initials}
                      </div>
                    )}
                    <div>
                      {member.role && (
                        <div className="text-[10px] font-bold uppercase tracking-wider text-teal-bright mb-1">
                          {member.role}
                        </div>
                      )}
                      {member.name && (
                        <h3 className="mb-2 font-serif text-lg font-bold text-teal-deep">
                          {member.name}
                        </h3>
                      )}
                      {member.bio && (
                        <p className="text-sm leading-relaxed text-[#5A7470]">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
