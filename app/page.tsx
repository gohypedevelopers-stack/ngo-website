import { SiteNav } from '@/components/site-nav'
import { HeroBanner } from '@/components/hero-banner'
import { CrisisSection } from '@/components/crisis-section'
import { SolutionSection } from '@/components/solution-section'
import { SiteFooter } from '@/components/site-footer'
import { fetchHomepageData } from '@/lib/strapi'

export default async function Page() {
  const homepageData = await fetchHomepageData()

  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden">
      <h1 className="sr-only">
        Hui Nehu — Hawaiʻi marine conservation nonprofit
      </h1>
      <SiteNav />
      <HeroBanner data={homepageData} />
      <CrisisSection data={homepageData} />
      <SolutionSection data={homepageData} />
      <SiteFooter />
    </main>
  )
}

