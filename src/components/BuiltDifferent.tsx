import { Radio, Lock, QrCode, ArrowLeftRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'
import type { Lang, Localized } from '../i18n/translations'

interface Card {
  icon: LucideIcon
  title: Localized
  desc: Localized
  variant: 'primary' | 'cream'
  /** Width class: a fixed width on desktop, or flex-1 to fill the row. */
  width: string
}

const t = content.builtDifferent

const CARDS: Card[] = [
  {
    icon: Radio,
    title: t.card1.title,
    desc: t.card1.desc,
    variant: 'primary',
    width: 'w-full sm:w-[411px] shrink-0',
  },
  {
    icon: Lock,
    title: t.card2.title,
    desc: t.card2.desc,
    variant: 'cream',
    width: 'flex-1',
  },
  {
    icon: QrCode,
    title: t.card3.title,
    desc: t.card3.desc,
    variant: 'cream',
    width: 'w-full sm:w-[282px] shrink-0',
  },
  {
    icon: ArrowLeftRight,
    title: t.card4.title,
    desc: t.card4.desc,
    variant: 'primary',
    width: 'flex-1',
  },
]

function CardItem({ card, lang }: { card: Card; lang: Lang }) {
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
        <h3 className="font-heading text-lg font-bold">{card.title[lang]}</h3>
        <p
          className={`font-body text-sm leading-relaxed ${
            isPrimary ? 'text-white/70' : 'text-[#014A2D]/70'
          }`}
        >
          {card.desc[lang]}
        </p>
      </div>
    </div>
  )
}

export default function BuiltDifferent() {
  const { lang } = useLanguage()

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
            className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D] whitespace-pre-line mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t.h2[lang]}
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <CardItem card={CARDS[0]} lang={lang} />
              <CardItem card={CARDS[1]} lang={lang} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <CardItem card={CARDS[2]} lang={lang} />
              <CardItem card={CARDS[3]} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
