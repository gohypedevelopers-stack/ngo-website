import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const tiers = [
  {
    badge: 'Entry',
    name: 'Nehu Community Partner',
    amount: '$5,000',
    period: '/ yr',
    featured: false,
    cta: 'Become a partner',
    checkoutParam: 'nehu-community-partner',
    perks: [
      'Named in our annual reef health report',
      'Quarterly impact updates',
      'Invitation to community volunteer days',
    ],
  },
  {
    badge: 'Recommended',
    name: 'Koʻa Reef Steward',
    amount: '$25,000',
    period: '/ yr',
    featured: true,
    cta: 'Become a steward',
    checkoutParam: 'koa-reef-steward',
    perks: [
      'Name a coral nursery site',
      'Private science briefings with Dr. Goo',
      'Annual reef dive with our research team',
      'Recognition across all program materials',
    ],
  },
  {
    badge: 'Founding',
    name: 'Koʻa Founding Partner',
    amount: '$100K+',
    period: '/ yr',
    featured: false,
    cta: 'Start a conversation',
    checkoutParam: 'koa-founding-partner',
    perks: [
      'Named program sponsorship',
      'Seat on the Science Advisory Council',
      'Co-develop an island expansion site',
      'Legacy recognition in endowment materials',
    ],
  },
]

export function AskSection() {
  const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK

  return (
    <section id="ask" className="relative bg-[#FAF8F5] px-5 py-16 sm:px-8 sm:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-teal-bright"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">
                Partner with us
              </span>
              <span className="h-px w-8 bg-teal-bright"></span>
            </div>
            
            <h2 className="mb-4 font-serif text-3xl sm:text-4xl font-bold leading-tight text-teal-deep">
              Invest in Hawaiʻi&apos;s ocean legacy
            </h2>
            
            <p className="text-sm leading-relaxed text-[#5A7470] max-w-xl mx-auto">
              We&apos;re seeking $750,000 in philanthropic investment to scale Hawaiʻi&apos;s most effective marine conservation model. Choose your tier — every level has named, tangible impact.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl p-6 bg-white border transition-all duration-300 hover:shadow-md',
                  tier.featured
                    ? 'border-teal-bright shadow-sm'
                    : 'border-slate-100 shadow-sm',
                )}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-teal-bright px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {tier.badge}
                </div>
                
                <h3 className="mb-3 font-serif text-lg font-bold text-teal-deep">
                  {tier.name}
                </h3>
                
                <div className="mb-6 flex items-baseline gap-1 text-3xl font-bold text-teal-deep">
                  {tier.amount}
                  <span className="text-sm font-normal text-[#5A7470]">
                    {tier.period}
                  </span>
                </div>
                
                <ul className="mb-6 flex flex-1 flex-col gap-3">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[#5A7470]"
                    >
                      <div className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal-pale text-teal-mid">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={
                    stripePaymentLink
                      ? `${stripePaymentLink}?client_reference_id=${tier.checkoutParam}`
                      : `mailto:partners@huinehu.org?subject=${encodeURIComponent(tier.name)}`
                  }
                  className={cn(
                    'mt-auto inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300',
                    tier.featured
                      ? 'bg-teal-bright text-white hover:bg-teal-deep'
                      : 'border border-slate-200 text-[#0a4a40] hover:border-teal-bright hover:bg-teal-pale/50',
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
