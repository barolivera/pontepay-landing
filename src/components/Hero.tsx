import { ArrowRight } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LiveRateTicker from './LiveRateTicker'
import { useLanguage } from '../i18n/languageContext'
import { APP_URL, GITHUB_URL } from '../constants'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section>
      <div className="relative mx-6 h-[85vh] rounded-3xl overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Content + ticker layer (absolute over the image) */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-14">
            <span className="inline-flex items-center self-start rounded-full border border-[#014A2D]/5 bg-white/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#1c1a18]">
              {t.eyebrow}
            </span>

            <h1
              className="font-heading text-5xl md:text-6xl font-bold text-[#1c1a18] whitespace-pre-line mt-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              {t.h1}
            </h1>

            <p className="font-body text-[#3d3935] text-lg max-w-md mt-6">
              {t.subtext}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 bg-[#014A2D] text-white rounded-full pl-8 pr-2 py-2 hover:bg-[#015c38] transition-colors duration-200"
              >
                <span className="font-medium">{t.cta}</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
                  <ArrowRight className="w-5 h-5 text-[#014A2D] transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#014A2D] bg-white/80 backdrop-blur-sm text-[#014A2D] px-6 py-3.5 hover:bg-white transition-colors duration-200"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="font-medium">{t.github}</span>
              </a>
            </div>
          </div>

          {/* Live rate ticker footer */}
          <LiveRateTicker />
        </div>
      </div>
    </section>
  )
}
