const STATS = [
  { value: '0.5%', label: 'Platform fee — transparent, no hidden costs' },
  { value: '10.83%', label: 'APY on idle USDC via DeFindex vaults' },
  { value: '< 30s', label: 'From order to settlement on Stellar' },
]

export default function Stats() {
  return (
    <section className="bg-[#4ADE80] px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D] mb-3">
          The numbers speak.
        </h2>
        <p className="text-[#014A2D]/70 text-lg max-w-lg mx-auto">
          No hidden costs. No waiting. No custodians.
        </p>
      </div>
      <div className="max-w-[88rem] mx-auto flex flex-wrap justify-center gap-12 text-center">
        {STATS.map((stat) => (
          <div
            key={stat.value}
            className="w-full sm:w-[300px] h-[196px] flex flex-col items-center justify-center gap-4 rounded-xl border border-[#F5F5F5] bg-[#F5F5F5]/20"
          >
            <p
              className="font-heading text-6xl font-bold text-[#014A2D]"
              style={{ letterSpacing: '-0.03em' }}
            >
              {stat.value}
            </p>
            <p className="font-body text-[#014A2D]/70 max-w-[260px] leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
