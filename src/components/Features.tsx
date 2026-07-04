import { Radio, Lock, QrCode, ArrowLeftRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  heading: string
  body: string
  span: string
  variant: 'primary' | 'cream'
}

const FEATURES: Feature[] = [
  {
    icon: Radio,
    heading: 'On-chain rate',
    body: 'The ARS/USD rate is a cross-contract call into the Reflector SEP-40 oracle. Nobody sets it. Nobody can manipulate it. Verifiable by anyone on-chain.',
    span: 'md:col-span-2',
    variant: 'primary',
  },
  {
    icon: Lock,
    heading: 'Soroban escrow',
    body: 'USDC is locked in a smart contract during every trade. Self-custodial from start to finish. 20/20 contract tests passing.',
    span: '',
    variant: 'cream',
  },
  {
    icon: QrCode,
    heading: 'Transferencias 3.0',
    body: "Pay with QR from any Argentine bank app. Argentina's BCRA instant payment rail — the same one used by millions every day.",
    span: '',
    variant: 'cream',
  },
  {
    icon: ArrowLeftRight,
    heading: 'ARS → BRL corridor',
    body: 'Send money from Argentina to Brazil via PIX in seconds using SEP-31 cross-border payments. Argentina → Stellar → Brazil.',
    span: 'md:col-span-2',
    variant: 'primary',
  },
]

export default function Features() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <h2
          className="font-heading text-4xl md:text-5xl text-[#014A2D]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Built different.
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {FEATURES.map((feature) => {
            const isPrimary = feature.variant === 'primary'
            const Icon = feature.icon
            return (
              <div
                key={feature.heading}
                className={`${feature.span} rounded-3xl p-8 flex flex-col justify-between min-h-[16rem] transition-transform duration-200 hover:-translate-y-1 ${
                  isPrimary
                    ? 'bg-[#014A2D] text-white'
                    : 'bg-[#f5f2e8] text-[#014A2D]'
                }`}
              >
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    isPrimary ? 'bg-white/10' : 'bg-[#014A2D]/8'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isPrimary ? 'text-[#4ADE80]' : 'text-[#014A2D]'
                    }`}
                  />
                </span>
                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-semibold">
                    {feature.heading}
                  </h3>
                  <p
                    className={`font-body mt-3 leading-relaxed ${
                      isPrimary ? 'text-white/70' : 'text-[#014A2D]/70'
                    }`}
                  >
                    {feature.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
