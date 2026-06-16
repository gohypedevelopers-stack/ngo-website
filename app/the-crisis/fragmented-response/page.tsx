import { CrisisPageTemplate, crisisPages } from '../crisis-pages'
import { fetchCrisisSubPages } from '@/lib/strapi'

export const metadata = {
  title: 'A Fragmented Response — Hui Nehu',
  description:
    'Why isolated restoration, data, funding, and community programs fail to solve Hawaiʻi reef crisis at the needed scale.',
}

export default async function FragmentedResponsePage() {
  const subPages = await fetchCrisisSubPages()
  const page = subPages.find((item) => item.slug === 'fragmented-response')
  const staticPage = crisisPages.find((item) => item.slug === '/the-crisis/fragmented-response')!

  return <CrisisPageTemplate page={page} fallback={staticPage} />
}

