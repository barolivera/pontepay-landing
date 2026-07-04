import { GITHUB_URL } from '../constants'

const FOOTER_LINKS = [
  { label: 'Marketplace', href: '#' },
  { label: 'Earn', href: '#' },
  { label: 'Corridor', href: '#' },
  { label: 'GitHub', href: GITHUB_URL },
]

export default function Footer() {
  return (
    <footer className="bg-[#014A2D] text-white">
      <div className="max-w-[88rem] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/pontepay-logo.svg"
                alt="PontePay"
                className="w-8 h-8 rounded-md"
              />
              <span className="font-heading text-2xl font-semibold text-white">
                PontePay
              </span>
            </div>
            <p className="font-heading text-xl text-white/80 mt-4">
              Earn Global, Spend Local.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="font-body text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-body text-white/70 text-sm">
              Built on Stellar Soroban · MIT License
            </span>
            <svg
              viewBox="0 0 236 236"
              className="w-5 h-5 text-white"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M203 26.06 187.7 33.87 44.24 106.9a76 76 0 0 0-.42 8.15 74.51 74.51 0 0 0 .81 11l16.9-8.61 13.72-7 13.51-6.88 118.14-60.19q-2-3.13-4.29-6.06-3.32-4.24-7.31-8.24Zm14.79 24.34-34.11 17.38-119.4 60.83a75 75 0 0 0 4.32 6.08q3.32 4.23 7.32 8.22l15.24-7.76 143.51-73.09a74.68 74.68 0 0 0-.81-11 76 76 0 0 0-16.07-8.66ZM33.14 118.71 17.9 126.47 33 118.66Z" />
              <path d="M203 26.06 44.65 106.76l13.51-6.88L176.3 39.69q-2-3.13-4.29-6.06Z" />
            </svg>
          </div>
          <p className="font-body text-white/50 text-sm">
            © 2026 PontePay — María Elisa Araya · Leonardo Cagliero · Barbara
            Olivera
          </p>
        </div>
      </div>
    </footer>
  )
}
