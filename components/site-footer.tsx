import { ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden text-slate-400">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      
      {/* Ambient glowing effect */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        
        {/* Closing CTA Strip as a Premium Floating Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-8 sm:p-12 md:py-16 text-center shadow-2xl backdrop-blur-md mb-20 max-w-5xl mx-auto">
          {/* Background glowing orb */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-500/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-cyan-500/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400 block mb-4 font-mono">
              Ola i ka wai
            </span>
            
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed font-light mb-10 max-w-2xl">
              “Ola i ka wai — Life is in the water. Help us protect it.”
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/the-hui"
                className="group flex items-center justify-center gap-2.5 rounded-full border border-slate-700 bg-slate-950/60 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-slate-500 hover:bg-slate-900/60 hover:scale-105"
              >
                Join the Hui
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/get-involved/investment-tiers"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)]"
              >
                Invest in Hawaiʻi’s Ocean
                <Heart className="h-4 w-4 fill-slate-950 text-slate-950 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid gap-10 md:grid-cols-3 items-start mb-16 border-b border-slate-900 pb-16">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Hui Nehu Logo"
              width={160}
              height={160}
              className="h-16 w-auto object-contain bg-white rounded-xl p-1 shadow-md mb-2"
            />
            <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold font-mono">
              Mālama &apos;Aina. Mālama Wai. Mālama Kai.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              A Maui-Based 501(c)(3) Marine Conservation Nonprofit restoring foundational food webs, reversing wastewater pollution, and empowering local communities.
            </p>
          </div>

          <div className="space-y-4 md:pl-12">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold font-mono">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/the-crisis" className="text-slate-450 hover:text-teal-400 transition-colors font-light">The Crisis</a>
              </li>
              <li>
                <a href="/our-work" className="text-slate-450 hover:text-teal-400 transition-colors font-light">Our Work</a>
              </li>
              <li>
                <a href="/the-hui" className="text-slate-450 hover:text-teal-400 transition-colors font-light">The Hui</a>
              </li>
              <li>
                <a href="/get-involved" className="text-slate-450 hover:text-teal-400 transition-colors font-light">Get Involved</a>
              </li>
              <li>
                <a href="/news-research" className="text-slate-450 hover:text-teal-400 transition-colors font-light">News & Research</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:text-right">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold font-mono">Acknowledgment</h4>
            <p className="text-xl font-serif italic text-amber-350 tracking-wide">
              MAHALO A NUI LOA!
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs md:ml-auto font-light">
              He aliʻi ka ʻāina, he kauwā ke kanaka.<br />
              (The land is chief; the people are its servants.)
            </p>
          </div>
        </div>

        {/* Contact Footer Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-6 text-xs sm:text-sm text-slate-450 font-mono">
          <a href="https://huinehu.org" className="hover:text-teal-400 transition-colors">huinehu.org</a>
          <span className="text-slate-800">•</span>
          <a href="mailto:partnerships@huinehu.org" className="hover:text-teal-400 transition-colors">partnerships@huinehu.org</a>
          <span className="text-slate-800">•</span>
          <span>(808) 555-NEHU</span>
          <span className="text-slate-800">•</span>
          <span>Maui, Hawaiʻi</span>
          <span className="text-slate-800">•</span>
          <span className="hover:text-teal-400 transition-colors cursor-pointer">@HuiNehu</span>
        </div>

        {/* Copyright & Sub-links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-900/50">
          <p className="text-[9px] font-mono font-bold text-slate-600 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Hui Nehu. All Rights Reserved.
          </p>
          <p className="text-[9px] font-mono font-bold text-slate-600 tracking-widest uppercase">
            Maui, HI · Est. 2023 · 501(c)(3)
          </p>
        </div>
      </div>
    </footer>
  )
}
