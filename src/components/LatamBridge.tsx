const CURRENCIES = [
  { flag: '🇦🇷', code: 'ARS' },
  { flag: '🇧🇷', code: 'BRL' },
  { flag: '🇨🇴', code: 'COP' },
]

export default function LatamBridge() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <h2
            className="font-heading text-4xl md:text-5xl text-[#014A2D] whitespace-pre-line"
            style={{ letterSpacing: '-0.03em' }}
          >
            {'The financial bridge\nfor LATAM.'}
          </h2>
          <p className="font-body text-lg md:text-xl text-black/70 leading-relaxed mt-6 max-w-lg">
            PontePay connects freelancers in Argentina, Brazil and Colombia with
            the global economy — without banks, without custody, with verifiable
            on-chain rates.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {CURRENCIES.map((c) => (
              <span
                key={c.code}
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f2e8] text-[#014A2D] px-5 py-2.5 font-heading font-semibold"
              >
                <span className="text-xl leading-none">{c.flag}</span>
                {c.code}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image with graceful gradient fallback */}
        <div className="relative rounded-3xl overflow-hidden min-h-[24rem] lg:min-h-[30rem] bg-gradient-to-br from-[#014A2D] via-[#015c38] to-[#4ADE80]">
          <img
            src="/latam-bridge.png"
            alt="Coins and flowers representing LATAM currencies bridging on-chain"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}
