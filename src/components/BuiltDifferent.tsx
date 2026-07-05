import { Radio, Lock, QrCode, ArrowLeftRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Card {
  icon: LucideIcon
  heading: string
  body: string
  variant: 'primary' | 'cream'
  /** Width class: a fixed width on desktop, or flex-1 to fill the row. */
  width: string
}

const CARDS: Card[] = [
  {
    icon: Radio,
    heading: 'Your money stays yours.',
    body: 'USDC is locked in an escrow contract. Nobody — not us, not the counterparty — can touch it until both sides confirm.',
    variant: 'primary',
    width: 'w-full sm:w-[411px] shrink-0',
  },
  {
    icon: Lock,
    heading: 'The real rate, always.',
    body: 'Rate comes directly from the Reflector oracle on-chain. No operator sets it. No one can manipulate it.',
    variant: 'cream',
    width: 'flex-1',
  },
  {
    icon: QrCode,
    heading: 'Pay like everyone else.',
    body: 'Receive pesos via QR — scannable from any Argentine bank or wallet app.',
    variant: 'cream',
    width: 'w-full sm:w-[282px] shrink-0',
  },
  {
    icon: ArrowLeftRight,
    heading: 'Argentina to Brazil in seconds.',
    body: 'Send ARS, receive BRL via PIX. Argentina → Stellar → Brazil.',
    variant: 'primary',
    width: 'flex-1',
  },
]

function CardItem({ card }: { card: Card }) {
  const isPrimary = card.variant === 'primary'
  const Icon = card.icon
  return (
    <div
      className={`${card.width} rounded-2xl p-6 flex flex-col gap-4 justify-center ${
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
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-lg font-bold">{card.heading}</h3>
        <p
          className={`font-body text-sm leading-relaxed ${
            isPrimary ? 'text-white/70' : 'text-[#014A2D]/70'
          }`}
        >
          {card.body}
        </p>
      </div>
    </div>
  )
}

export default function BuiltDifferent() {
  return (
    <section className="bg-[#f5f2e8] py-24 px-10">
      <div className="max-w-[88rem] mx-auto flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Left: image */}
        <div className="shrink-0 w-full lg:w-[598px] aspect-[598/757] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/built-different.png"
            alt="PontePay — coins bridging on-chain"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: heading + 2×2 bento cards */}
        <div className="flex-1 min-w-0 w-full">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D] mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Your money. Your rules.
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <CardItem card={CARDS[0]} />
              <CardItem card={CARDS[1]} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <CardItem card={CARDS[2]} />
              <CardItem card={CARDS[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
