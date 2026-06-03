import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Reveal } from './reveal'

export function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="Marine conservationists working underwater to restore a coral reef"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-teal-400"></span>
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-teal-400">
                  Community of the Anchovy · Hawaiʻi
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                Restoring Hawaiʻi&apos;s ocean,<br />
                <em className="not-italic text-teal-400">from land to reef</em>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-xl">
                A nonprofit blending Native Hawaiian wisdom with modern marine science — protecting the foundations of the Pacific food web for generations to come.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#initiatives" className="group flex items-center justify-center gap-3 rounded-full bg-teal-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.4)]">
                  Explore Our Initiatives
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#guide" className="group flex items-center justify-center gap-3 rounded-full border border-slate-500/40 bg-slate-900/40 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-slate-800/60">
                  Read the Reef Futures Guide
                  <BookOpen className="h-4 w-4 text-teal-400" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative hidden lg:block h-[600px] w-full">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 blur-[100px] rounded-full z-0" />
            
            {/* Top Right Image (Fisherman) */}
            <Reveal delay={200} className="absolute top-4 right-4 w-[60%] h-[60%] z-10">
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105 hover:z-30">
                <Image
                  src="/fisherman_net.png"
                  alt="Traditional Native Hawaiian fisherman preparing a hoop net"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Bottom Left Image (3D Printed) */}
            <Reveal delay={400} className="absolute bottom-4 left-4 w-[65%] h-[55%] z-20">
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-slate-950/50 transition-transform duration-700 hover:scale-105 hover:z-30">
                <Image
                  src="/3dprinted.png"
                  alt="Large-format 3D manufacturing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
