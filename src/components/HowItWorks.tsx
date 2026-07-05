import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'

export default function HowItWorks() {
  const { lang } = useLanguage()
  const t = content.howItWorks
  const steps = [t.step1, t.step2, t.step3, t.step4]

  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto flex flex-col lg:flex-row gap-16 items-center justify-center">
        {/* Left: numbered steps */}
        <div className="shrink-0 lg:max-w-[520px]">
          <h2
            className="font-heading text-4xl md:text-5xl font-medium text-[#014A2D] mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            {t.eyebrow[lang]}
          </h2>

          <div className="relative">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 pb-10 last:pb-0">
                {/* Number */}
                <span className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#014A2D]">
                  <span className="font-heading text-xl font-bold text-[#4ADE80]">
                    {i + 1}
                  </span>
                </span>

                <div className="pt-1.5">
                  <h3 className="font-heading text-xl font-bold text-[#014A2D]">
                    {step.title[lang]}
                  </h3>
                  <p className="font-body text-gray-600 mt-2 leading-relaxed max-w-sm">
                    {step.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: video */}
        <div className="shrink-0 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-[420px] aspect-[960/1604]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/how-it-work_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
