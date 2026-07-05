import { Radio, Lock, QrCode, ArrowLeftRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Card {
  icon: LucideIcon
  heading: string
  body: string
  variant: 'primary' | 'cream'
}

const CARDS: Card[] = [
  {
    icon: Radio,
    heading: 'Your money stays yours.',
    body: 'USDC is locked in an escrow contract. Nobody — not us, not the counterparty — can touch it until both sides confirm.',
    variant: 'primary',
  },
  {
    icon: Lock,
    heading: 'The real rate, always.',
    body: 'Rate comes directly from the Reflector oracle on-chain. No operator sets it. No one can manipulate it.',
    variant: 'cream',
  },
  {
    icon: QrCode,
    heading: 'Pay like everyone else.',
    body: 'Receive pesos via QR — scannable from any Argentine bank or wallet app.',
    variant: 'cream',
  },
  {
    icon: ArrowLeftRight,
    heading: 'Argentina to Brazil in seconds.',
    body: 'Send ARS, receive BRL via PIX. Argentina → Stellar → Brazil.',
    variant: 'primary',
  },
]

export default function BuiltDifferent() {
  return (
    <section className="bg-[#f5f2e8] py-24 px-8">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 items-stretch">
        {/* Left column: image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl min-h-[24rem]">
          <img
            src="/screens/app-home.png"
            alt="PontePay app home screen"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right column: heading + stacked cards */}
        <div>
          <p className="font-body text-sm uppercase tracking-widest text-[#014A2D]/60 mb-3">
            Built different.
          </p>
          <h2
            className="font-heading text-4xl font-bold text-[#014A2D] whitespace-pre-line mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            {'Your money.\nYour rules.'}
          </h2>

          <div className="flex flex-col gap-4">
            {CARDS.map((card) => {
              const isPrimary = card.variant === 'primary'
              const Icon = card.icon
              return (
                <div
                  key={card.heading}
                  className={`rounded-2xl p-6 flex gap-4 ${
                    isPrimary
                      ? 'bg-[#014A2D] text-white'
                      : 'bg-[#f5f2e8] border border-[#014A2D]/15 text-[#014A2D]'
                  }`}
                >
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full ${
                      isPrimary ? 'bg-[#4ADE80]' : 'bg-[#014A2D]/10'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-[#014A2D]" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {card.heading}
                    </h3>
                    <p
                      className={`font-body text-sm mt-1.5 leading-relaxed ${
                        isPrimary ? 'text-white/70' : 'text-[#014A2D]/70'
                      }`}
                    >
                      {card.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
