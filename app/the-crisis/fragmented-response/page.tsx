import { CrisisPageTemplate, crisisPages } from '../crisis-pages'

const page = crisisPages.find(
  (item) => item.slug === '/the-crisis/fragmented-response',
)!

export const metadata = {
  title: 'A Fragmented Response — Hui Nehu',
  description:
    'Why isolated restoration, data, funding, and community programs fail to solve Hawaiʻi reef crisis at the needed scale.',
}

export default function FragmentedResponsePage() {
  return <CrisisPageTemplate page={page} />
}
