import { CrisisPageTemplate, crisisPages } from '../crisis-pages'

const page = crisisPages.find(
  (item) => item.slug === '/the-crisis/cesspool-problem',
)!

export const metadata = {
  title: 'The Cesspool Problem — Hui Nehu',
  description:
    'How Hawaiʻi cesspools release 53M gallons of wastewater daily and threaten reefs, fisheries, and nearshore habitats.',
}

export default function CesspoolProblemPage() {
  return <CrisisPageTemplate page={page} />
}
