import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { blogPosts } from '../blogData'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen flex flex-col justify-between">
      <SiteNav theme="light" />

      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <Link href="/news-research" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to News & Research
            </Link>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="font-mono text-teal-600 font-semibold uppercase">{post.category}</span>
                <span className="text-slate-400">•</span>
                <time className="text-slate-500">{post.date}</time>
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                {post.title}
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12 shadow-lg border border-slate-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-a:text-teal-600 hover:prose-a:text-teal-700">
              {post.content.split('\n\n').map((paragraph, index) => {
                let html = paragraph.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return (
                  <p key={index} className="mb-6 font-light leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: html }} />
                )
              })}
            </div>
          </Reveal>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
