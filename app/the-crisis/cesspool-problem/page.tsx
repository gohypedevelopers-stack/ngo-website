import { CrisisPageTemplate, crisisPages } from '../crisis-pages'
import { fetchCrisisSubPages } from '@/lib/strapi'

export const metadata = {
  title: 'The Cesspool Problem — Hui Nehu',
  description:
    'How Hawaiʻi cesspools release 53M gallons of wastewater daily and threaten reefs, fisheries, and nearshore habitats.',
}

export default async function CesspoolProblemPage() {
  const subPages = await fetchCrisisSubPages()
  const page = subPages.find((item) => item.slug === 'cesspool-problem')
  const staticPage = crisisPages.find((item) => item.slug === '/the-crisis/cesspool-problem')!

  return <CrisisPageTemplate page={page} fallback={staticPage} />
}

