import Image from 'next/image'
import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { blogPosts } from './blogData'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'News & Research — Hui Nehu',
  description: 'Standardized environmental datasets, coral survival monitoring, water quality testing, and regulatory milestones.',
}

export default function NewsResearchPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="dark" />

      {/* Split Hero Section */}
      <section className="relative bg-transparent pt-32 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-teal-400"></span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-400">
                    Nā Kiaʻi Kai Dataset Console
                  </span>
                </div>
                
                <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                  News & Research
                </h1>
                
                <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  Showcasing publication-quality, standardized environmental datasets generated directly by our Nā Kiaʻi Kai Community Science program volunteers.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
                  <Image
                    src="/news_research_dataset.png"
                    alt="Volunteers logging community science water quality datasets"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-12">
          
          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 100}>
                <Link href={`/news-research/${post.slug}`} className="group block h-full">
                  <div className="border border-slate-200 bg-white rounded-3xl overflow-hidden hover:border-teal-500/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-teal-605 uppercase font-semibold text-teal-600">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm font-light text-slate-600 leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 mt-auto">
                        Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

