import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'
import { APP_URL } from '../constants'

export default function FinalCta() {
  const { lang } = useLanguage()
  const t = content.finalCta

  return (
    <section className="relative overflow-hidden px-10 h-[584px] flex items-center justify-center text-center">
      {/* Background image */}
      <img
        src="/cta-final.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[88rem] mx-auto flex flex-col items-center gap-8">
        <h2
          className="font-heading text-4xl md:text-6xl font-bold text-[#1c1a18] whitespace-pre-line"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t.h2[lang]}
        </h2>
        <p className="font-body text-[#1c1a18]/70 text-xl max-w-lg">
          {t.subtext[lang]}
        </p>
        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#4ADE80] text-[#014A2D] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#3fce72] transition-colors duration-200"
        >
          {t.cta[lang]} →
        </a>
      </div>
    </section>
  )
}
