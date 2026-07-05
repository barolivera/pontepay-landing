import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'

export default function Stats() {
  const { lang } = useLanguage()
  const t = content.stats
  const stats = [t.stat1, t.stat2, t.stat3]

  return (
    <section className="bg-[#4ADE80] px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D] mb-3">
          {t.h2[lang]}
        </h2>
        <p className="text-[#014A2D]/70 text-lg max-w-lg mx-auto">
          {t.subtext[lang]}
        </p>
      </div>
      <div className="max-w-[88rem] mx-auto flex flex-wrap justify-center gap-12 text-center">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="w-full sm:w-[300px] h-[196px] flex flex-col items-center justify-center gap-4 rounded-xl border border-[#F5F5F5] bg-[#F5F5F5]/20"
          >
            <p
              className="font-heading text-6xl font-bold text-[#014A2D]"
              style={{ letterSpacing: '-0.03em' }}
            >
              {stat.value}
            </p>
            <p className="font-body text-[#014A2D]/70 max-w-[260px] leading-relaxed">
              {stat.label[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
