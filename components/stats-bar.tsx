import { Reveal } from './reveal'
import { Sprout, Trash2, Heart, Users } from 'lucide-react'

export function StatsBar() {
  const stats = [
    { num: '5,000+', label: 'Coral fragments outplanted', icon: Sprout },
    { num: '3 tons', label: 'Marine debris removed', icon: Trash2 },
    { num: '89%', label: 'Coral survival rate', icon: Heart },
    { num: '500+', label: 'Community volunteers', icon: Users },
  ]

  return (
    <section className="relative z-20 -mt-12 sm:-mt-20 mx-auto w-full max-w-6xl px-5 sm:px-8 mb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-xl backdrop-blur-md transition-all duration-500 hover:border-teal-500/30 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-teal-500/5">
                {/* Background glowing gradient orb */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full pointer-events-none group-hover:bg-teal-500/10 transition-all duration-500" />
                
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-500/10 text-teal-400 mb-4 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-500">
                  <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Stat Number */}
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-teal-400 mb-2 tracking-tight transition-all duration-500 group-hover:text-white group-hover:scale-105">
                  {stat.num}
                </div>
                
                {/* Stat Label */}
                <div className="text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase max-w-[150px] leading-relaxed transition-colors duration-500 group-hover:text-slate-200">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
