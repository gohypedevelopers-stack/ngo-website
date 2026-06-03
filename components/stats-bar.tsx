import { Reveal } from './reveal'

export function StatsBar() {
  const stats = [
    { num: '5,000+', label: 'Coral fragments outplanted' },
    { num: '3 tons', label: 'Marine debris removed' },
    { num: '89%', label: 'Coral survival rate' },
    { num: '500+', label: 'Community volunteers' },
  ]

  return (
    <section className="relative z-20 -mt-12 sm:-mt-20 mx-auto w-full max-w-6xl px-5 sm:px-8 mb-24">
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700/50 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 backdrop-blur-xl">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-900/95 p-8 text-center flex flex-col items-center justify-center hover:bg-slate-800/95 transition-colors duration-300 group">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-teal-400 mb-2 tracking-tight group-hover:scale-110 transition-transform duration-500 group-hover:text-cyan-400">
                {stat.num}
              </div>
              <div className="text-xs font-semibold tracking-[0.1em] text-slate-400 uppercase max-w-[140px] leading-relaxed group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
