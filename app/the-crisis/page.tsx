import { CrisisLandingPage } from './crisis-pages'
import { fetchCrisisPageData, fetchCrisisSubPages } from '@/lib/strapi'

export const metadata = {
  title: 'The Crisis — Hui Nehu',
  description:
    'The connected crisis Hui Nehu exists to solve: nehu food webs, wastewater pollution, and fragmented restoration response.',
}

export default async function TheCrisisPage() {
  const crisisPageData = await fetchCrisisPageData()
  const subPages = await fetchCrisisSubPages()
  return <CrisisLandingPage data={crisisPageData} subPages={subPages} />
}



