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
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto flex flex-col lg:flex-row gap-16 items-center justify-center">
        {/* Left: numbered steps with connector line */}
        <div className="shrink-0 lg:max-w-[520px]">
          <h2
            className="font-heading text-4xl md:text-5xl font-medium text-[#014A2D] mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            How it works
          </h2>

          <div className="relative">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-6 pb-10 last:pb-0">
                {/* Number */}
                <span className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#014A2D]">
                  <span className="font-heading text-xl font-bold text-[#4ADE80]">
                    {i + 1}
                  </span>
                </span>

                <div className="pt-1.5">
                  <h3 className="font-heading text-xl font-bold text-[#014A2D]">
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
