const STACK = [
  { name: 'Soroban', body: 'P2P escrow contract. 20/20 tests passing.' },
  {
    name: 'Reflector SEP-40',
    body: 'Live ARS/USD oracle via cross-contract call.',
  },
  {
    name: 'Privy',
    body: 'Embedded Stellar wallets. Email login, no seed phrase.',
  },
  {
    name: 'SEP-24',
    body: 'Anchor deposit/withdraw. Interoperable with any Stellar anchor.',
  },
  { name: 'SEP-31', body: 'Cross-border corridor. ARS → BRL via PIX.' },
  { name: 'DeFindex', body: 'Yield vault. 10.83% APY on idle USDC.' },
  {
    name: 'Transferencias 3.0',
    body: 'BCRA instant rail. EMVCo QR standard.',
  },
]

export default function TechStack() {
  return (
    <section className="bg-[#014A2D] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <span className="font-body text-sm font-semibold uppercase tracking-widest text-[#4ADE80]">
          Powered by
        </span>
        <h2
          className="font-heading text-4xl md:text-5xl text-white mt-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          Stellar — end to end.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 transition-colors duration-200 hover:bg-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.name}
                </h3>
              </div>
              <p className="font-body text-white/70 mt-2 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
