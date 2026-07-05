const STEPS = [
  {
    title: 'Sign in',
    body: 'Enter your email. A Stellar wallet is created automatically — no seed phrase, no extensions, no jargon.',
  },
  {
    title: 'Browse orders',
    body: 'Live rates from the blockchain. The exchange rate comes from the Reflector SEP-40 oracle — not set by us, not controlled by anyone.',
  },
  {
    title: 'Trade',
    body: 'USDC goes into a Soroban escrow contract — never a company wallet. Both sides confirm. Funds release automatically.',
  },
  {
    title: 'Earn',
    body: 'Idle USDC earns 10.83% APY automatically via DeFindex vaults. No lock-up, no action needed. Your savings work while you sleep.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: numbered steps with connector line */}
        <div>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold text-[#014A2D] mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            How it works
          </h2>

          <div className="relative">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <span className="absolute left-[1.375rem] top-14 bottom-0 w-px bg-[#014A2D]/15" />
                )}

                {/* Number */}
                <span className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#014A2D]">
                  <span className="font-heading text-xl font-bold text-[#4ADE80]">
                    {i + 1}
                  </span>
                </span>

                <div className="pt-1.5">
                  <h3 className="font-heading text-xl font-semibold text-[#014A2D]">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600 mt-2 leading-relaxed max-w-sm">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="flex justify-center">
          <div className="relative w-[17rem] h-[35rem] rounded-[2.5rem] bg-black p-3 shadow-2xl">
            {/* Notch */}
            <span className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#014A2D] via-[#015c38] to-[#4ADE80]">
              <img
                src="/screens/app-home.png"
                alt="PontePay app home screen"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              {/* Fallback branding shown if image is absent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/pontepay-logo.svg"
                  alt=""
                  className="w-16 h-16 rounded-xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
