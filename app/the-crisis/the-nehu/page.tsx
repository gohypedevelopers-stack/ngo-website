import { CrisisPageTemplate, crisisPages } from '../crisis-pages'
import { fetchCrisisSubPages } from '@/lib/strapi'

export const metadata = {
  title: 'The Nehu — Hui Nehu',
  description:
    'Why nehu are a keystone species in Hawaiʻi reef food webs and why Hui Nehu centers restoration around them.',
}

export default async function TheNehuPage() {
  const subPages = await fetchCrisisSubPages()
  const page = subPages.find((item) => item.slug === 'the-nehu')
  const staticPage = crisisPages.find((item) => item.slug === '/the-crisis/the-nehu')!

  return <CrisisPageTemplate page={page} fallback={staticPage} />
}

