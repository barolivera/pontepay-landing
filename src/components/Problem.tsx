const STATS = [
  { value: '#2', label: 'Crypto volume in LATAM' },
  { value: '50%+', label: 'ARS purchases are stablecoins' },
  { value: '5%', label: 'Average bank commission' },
  { value: '3–5 days', label: 'International transfer time' },
]

export default function Problem() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-[#014A2D]/60">
          Why PontePay
        </span>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-6 items-start">
          <h2
            className="font-heading text-4xl md:text-5xl text-[#014A2D] whitespace-pre-line"
            style={{ letterSpacing: '-0.03em' }}
          >
            {'Argentina runs on\ntwo currencies.'}
          </h2>

          <div>
            <p className="font-body text-lg md:text-xl text-black/70 leading-relaxed">
              People earn in dollars but spend in pesos — every day. Converting
              between them means KYC-heavy exchanges, custodial wallets, opaque
              spreads and funds that can be frozen. Argentina is #2 in crypto
              volume in Latin America. Over 50% of all ARS exchange purchases are
              already stablecoins. The demand was there. The rails weren't.
            </p>
            <p className="font-heading text-xl md:text-2xl text-[#014A2D] mt-6">
              Argentina is the proof of concept. LATAM is the opportunity.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white border border-black/5 p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <p
                className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D]"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </p>
              <p className="font-body text-black/60 mt-3 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
