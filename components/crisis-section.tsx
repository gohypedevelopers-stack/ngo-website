import Image from 'next/image'
import { Reveal } from './reveal'
import { GitFork, Compass, Coins } from 'lucide-react'

const problems = [
  {
    title: 'Fragmentation',
    body: 'Organizations work in silos, duplicating efforts while leaving critical gaps in conservation coverage.',
    icon: GitFork,
  },
  {
    title: 'Cultural disconnect',
    body: 'Most programs ignore Native Hawaiian ecological knowledge — the most sophisticated understanding of these unique ecosystems.',
    icon: Compass,
  },
  {
    title: 'Funding collapse',
    body: 'Conservation funding has dropped significantly since 2018, even as ecosystem threats accelerate.',
    icon: Coins,
  },
]

export function CrisisSection() {
  return (
    <section id="crisis" className="relative bg-[#FAF8F5] px-5 py-20 sm:px-8 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-coral"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                  The urgency
                </span>
              </div>
              
              <h2 className="mb-6 font-serif text-4xl sm:text-5xl font-bold leading-tight text-teal-deep">
                Hawaiʻi&apos;s reefs are collapsing in <span className="text-coral">real time</span>
              </h2>
              
              <p className="text-lg text-[#3A5652] leading-relaxed mb-6 font-light">
                <strong className="font-semibold text-teal-deep text-pretty">84% of the world&apos;s coral reefs</strong> bleached this year. Hawaiʻi, home to 85% of all US coral reefs and generating over $800 million annually, is on the front lines. The nehu — our tiny Hawaiian anchovy — anchors the entire food web. When it disappears, everything follows.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6 text-[#4F6E69] text-base leading-relaxed mb-6">
                <p>
                  Raw sewage pollutes our nearshore waters. Buried plastics choke our beaches. Hawaiian monk seal populations hover near collapse. The threats compound faster than any single organization can address alone.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border-l-2 border-coral pl-6 py-1">
                <p className="italic leading-relaxed text-teal-deep text-lg font-serif">
                  &ldquo;The nehu doesn&apos;t know it&apos;s the foundation of an entire ecosystem — it simply lives and sustains. Our work exists to protect that fundamental act.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image Showcase */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] flex items-center justify-center">
            <Reveal delay={200} className="relative w-full h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                <Image
                  src="/nehu_reef_crisis.png"
                  alt="School of shimmering silver nehu fish swimming around beautiful coral reefs"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>

        </div>

        {/* Problems Cards Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-pale text-teal-mid mb-5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="mb-2 font-serif text-lg font-bold text-teal-deep">
                      {p.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-[#5A7470]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
