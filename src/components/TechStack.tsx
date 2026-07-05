const STACK = [
  { name: 'Soroban', body: 'P2P escrow contract · 20/20 tests' },
  { name: 'Reflector SEP-40', body: 'Live ARS/USD oracle' },
  { name: 'Privy', body: 'Embedded wallets · email login' },
  { name: 'SEP-24', body: 'Anchor deposit/withdraw' },
  { name: 'SEP-31', body: 'ARS→BRL corridor via PIX' },
  { name: 'DeFindex', body: '10.83% APY yield vault' },
  { name: 'Transferencias 3.0', body: 'BCRA instant rail' },
  { name: 'Stellar', body: 'Settles in ~5 seconds' },
]

export default function TechStack() {
  return (
    <section className="bg-[#f5f2e8] px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-[#014A2D]/60 text-center">
          Powered by
        </p>
        <h2
          className="font-heading text-4xl text-[#014A2D] text-center mt-3"
          style={{ letterSpacing: '-0.03em' }}
        >
          Stellar — end to end.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="font-heading text-lg font-semibold text-[#014A2D]">
                {item.name}
              </h3>
              <p className="font-body text-gray-600 text-sm mt-1.5">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
