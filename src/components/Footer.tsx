import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = content.footer

  return (
    <footer className="bg-[#014A2D] text-white">
      <div className="max-w-[88rem] mx-auto px-10 py-16 flex flex-col gap-12 items-start">
        {/* Brand */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-2.5">
            <img
              src="/pontepay-logo.svg"
              alt="PontePay"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-heading text-2xl font-medium text-white">
              PontePay
            </span>
          </div>
          <p className="font-heading text-xl font-medium text-white/80">
            {t.tagline[lang]}
          </p>
          <a
            href="https://x.com/useponte"
            target="_blank"
            rel="noreferrer"
            aria-label="PontePay on X"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/15 transition-colors"
          >
            <span className="font-body text-[15px] font-bold text-white/60">
              X
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-2">
          <span className="font-body text-white/70 text-sm">
            {t.built[lang]}
          </span>
          <svg
            viewBox="0 0 236 236"
            className="w-4 h-4 text-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M203 26.06 187.7 33.87 44.24 106.9a76 76 0 0 0-.42 8.15 74.51 74.51 0 0 0 .81 11l16.9-8.61 13.72-7 13.51-6.88 118.14-60.19q-2-3.13-4.29-6.06-3.32-4.24-7.31-8.24Zm14.79 24.34-34.11 17.38-119.4 60.83a75 75 0 0 0 4.32 6.08q3.32 4.23 7.32 8.22l15.24-7.76 143.51-73.09a74.68 74.68 0 0 0-.81-11 76 76 0 0 0-16.07-8.66ZM33.14 118.71 17.9 126.47 33 118.66Z" />
            <path d="M203 26.06 44.65 106.76l13.51-6.88L176.3 39.69q-2-3.13-4.29-6.06Z" />
          </svg>
        </div>
      </div>
    </footer>
  )
}
