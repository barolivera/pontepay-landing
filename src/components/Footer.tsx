export default function Footer() {
  return (
    <footer className="bg-black text-white">
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
            <a
              href="https://x.com/useponte"
              target="_blank"
              rel="noreferrer"
              aria-label="PontePay on X"
              className="inline-flex mt-5 text-white/60 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
              </svg>
            </a>
          </div>
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
        </div>
      </div>
    </footer>
  )
}
