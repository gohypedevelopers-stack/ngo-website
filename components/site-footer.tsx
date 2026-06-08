import { Waves, Mail, Phone, MapPin, Instagram } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden text-slate-400">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3 items-start mb-16">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Hui Nehu Logo"
              width={160}
              height={160}
              className="h-24 w-auto object-contain bg-white rounded-xl p-1 shadow-md mb-2"
            />
            <p className="text-xs uppercase tracking-widest text-teal-400 font-bold font-mono">
              Mālama &apos;Aina. Mālama Wai. Mālama Kai.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              A Maui-Based 501(c)(3) Marine Conservation Nonprofit restoring foundational food webs, reversing wastewater pollution, and empowering local communities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white">Contact & Location</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Maui, Hawaiʻi (Physical Base)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href="mailto:partnerships@huinehu.org" className="hover:text-white transition-colors">
                  partnerships@huinehu.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>(808) 555-NEHU</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>@HuiNehu</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:text-right">
            <h4 className="font-serif text-lg font-bold text-white">Acknowledgment</h4>
            <p className="text-2xl font-serif italic text-amber-300 tracking-wide">
              MAHALO A NUI LOA!
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs md:ml-auto">
              He aliʻi ka ʻāina, he kauwā ke kanaka.<br />
              (The land is chief; the people are its servants.)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Hui Nehu. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            <a href="https://huinehu.org" className="hover:text-cyan-400 transition-colors">huinehu.org</a>
            <a href="/the-crisis" className="hover:text-cyan-400 transition-colors">The Crisis</a>
            <a href="/our-work" className="hover:text-cyan-400 transition-colors">Our Work</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
