import { APP_URL } from '../constants'
import LanguageSelector from './LanguageSelector'

export default function Navbar() {
  return (
    <nav className="relative bg-transparent px-6 py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Left: logo + wordmark */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/pontepay-logo.svg"
            alt="PontePay"
            className="w-8 h-8 rounded-md"
          />
          <span className="font-heading text-2xl font-semibold text-[#1c1a18]">
            PontePay
          </span>
        </a>

        {/* Right: language selector + CTA pill */}
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#014A2D] text-white px-7 py-2.5 rounded-full hover:bg-[#015c38] transition-colors duration-200"
          >
            Open app →
          </a>
        </div>
      </div>
    </nav>
  )
}
