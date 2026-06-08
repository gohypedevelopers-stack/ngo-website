import { CrisisPageTemplate, crisisPages } from '../crisis-pages'

const page = crisisPages.find((item) => item.slug === '/the-crisis/the-nehu')!

export const metadata = {
  title: 'The Nehu — Hui Nehu',
  description:
    'Why nehu are a keystone species in Hawaiʻi reef food webs and why Hui Nehu centers restoration around them.',
}

export default function TheNehuPage() {
  return <CrisisPageTemplate page={page} />
}
