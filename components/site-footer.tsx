import { Waves } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden text-slate-400">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.15)] group hover:border-cyan-500/50 transition-colors">
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Waves className="h-8 w-8 relative z-10" />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
              Hui Nehu
            </h3>
            <p className="max-w-md mx-auto text-base leading-relaxed text-slate-400">
              Nonprofit marine conservation · Blending ancestral wisdom with modern science to protect Hawaiʻi&apos;s oceans.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-xs font-mono font-bold text-slate-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} The Community of the Anchovy · Hawaiʻi
          </p>
          <div className="flex gap-8 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
