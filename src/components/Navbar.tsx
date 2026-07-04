import { APP_URL } from '../constants'

const NAV_LINKS = ['Marketplace', 'Corridor', 'Earn', 'Anchor', 'Docs']

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Left: logo + wordmark */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/pontepay-logo.svg"
            alt="PontePay"
            className="w-8 h-8 rounded-md"
          />
          <span className="font-heading text-2xl font-semibold text-black">
            PontePay
          </span>
        </a>

        {/* Center: nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: CTA pill */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-[#014A2D] text-white px-7 py-2.5 rounded-full hover:bg-[#015c38] transition-colors duration-200"
        >
          Open app →
        </a>
      </div>
    </nav>
  )
}
