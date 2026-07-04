import { Mail, ListOrdered, ShieldCheck, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  body: string
}

const STEPS: Step[] = [
  {
    icon: Mail,
    title: 'Sign in',
    body: 'Enter your email. A Stellar wallet is created automatically — no seed phrase, no extensions, no jargon.',
  },
  {
    icon: ListOrdered,
    title: 'Browse orders',
    body: 'Live rates from the blockchain. The exchange rate comes from the Reflector SEP-40 oracle — not set by us, not controlled by anyone.',
  },
  {
    icon: ShieldCheck,
    title: 'Trade',
    body: 'USDC goes into a Soroban escrow contract — never a company wallet. Both sides confirm. Funds release automatically.',
  },
  {
    icon: TrendingUp,
    title: 'Earn',
    body: 'Idle USDC earns 10.83% APY automatically via DeFindex vaults. No lock-up, no action needed. Your savings work while you sleep.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#014A2D] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-[#4ADE80]">
          How it works
        </span>
        <h2
          className="font-heading text-4xl md:text-5xl text-white whitespace-pre-line mt-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          {'From USDC to pesos\nin seconds.'}
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-16">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4ADE80]">
                    <Icon className="w-6 h-6 text-[#014A2D]" />
                  </span>
                  <span className="font-heading text-2xl font-bold text-white/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mt-6">
                  {step.title}
                </h3>
                <p className="font-body text-white/70 mt-3 leading-relaxed">
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
