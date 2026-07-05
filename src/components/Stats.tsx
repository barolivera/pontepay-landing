const STATS = [
  { value: '0.5%', label: 'Platform fee — transparent, no hidden costs' },
  { value: '10.83%', label: 'APY on idle USDC via DeFindex vaults' },
  { value: '< 30s', label: 'From order to settlement on Stellar' },
]

export default function Stats() {
  return (
    <section className="bg-[#4ADE80] px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-[#014A2D]/60 font-medium mb-4">
          By the numbers
        </p>
        <h2 className="font-heading text-4xl font-bold text-[#014A2D] mb-3">
          The numbers speak.
        </h2>
        <p className="text-[#014A2D]/70 text-lg max-w-lg mx-auto">
          No hidden costs. No waiting. No custodians.
        </p>
      </div>
      <div className="max-w-[88rem] mx-auto grid md:grid-cols-3 gap-12 text-center">
        {STATS.map((stat) => (
          <div key={stat.value}>
            <p
              className="font-heading text-6xl font-bold text-[#014A2D]"
              style={{ letterSpacing: '-0.03em' }}
            >
              {stat.value}
            </p>
            <p className="font-body text-[#014A2D]/70 mt-4 max-w-xs mx-auto leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
