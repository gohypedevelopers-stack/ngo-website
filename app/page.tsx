import { SiteNav } from '@/components/site-nav'
import { HeroBanner } from '@/components/hero-banner'
import { StatsBar } from '@/components/stats-bar'
import { CrisisSection } from '@/components/crisis-section'
import { SolutionSection } from '@/components/solution-section'
import { ScienceSection } from '@/components/science-section'
import { TeamSection } from '@/components/team-section'
import { UpenaInitiative } from '@/components/upena-initiative'
import { PrintedCanoes } from '@/components/printed-canoes'
import { ReefFutures } from '@/components/reef-futures'
import { EvCanoe } from '@/components/ev-canoe'
import { KoinaEcosystem } from '@/components/koina-ecosystem'
import { AskSection } from '@/components/ask-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-slate-950 text-slate-100 overflow-x-hidden">
      <h1 className="sr-only">
        Hui Nehu — Hawaiʻi marine conservation nonprofit
      </h1>
      <SiteNav />
      <HeroBanner />
      <StatsBar />
      <CrisisSection />
      <SolutionSection />
      <ScienceSection />
      <TeamSection />
      <UpenaInitiative />
      <PrintedCanoes />
      <ReefFutures />
      <EvCanoe />
      <KoinaEcosystem />
      <AskSection />
      <SiteFooter />
    </main>
  )
}
