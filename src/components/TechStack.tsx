interface StackItem {
  name: string
  body: string
  /** Full logo lockup (image) shown instead of the name. */
  logo?: string
  /** Icon-only logo, rendered next to the name as a wordmark. */
  logoIcon?: string
}

const STACK: StackItem[] = [
  {
    name: 'Stellar',
    body: 'Settles in ~5 seconds · Testnet deployed',
    logo: '/logos/stellar.png',
  },
  {
    name: 'Privy',
    body: 'Embedded Stellar wallets · Email login · No seed phrase',
    logo: '/logos/privy.svg',
  },
  {
    name: 'DeFindex',
    body: 'Yield vault · 10.83% APY on idle USDC',
    logo: '/logos/defindex.png',
  },
  {
    name: 'Reflector',
    body: 'Live ARS/USD oracle via cross-contract call',
    logoIcon: '/logos/reflector.svg',
  },
  {
    name: 'Soroban',
    body: 'P2P escrow smart contract · Rust · 20/20 tests passing',
  },
  { name: 'SEP-24', body: 'Interactive anchor deposit/withdraw' },
  { name: 'SEP-31', body: 'Cross-border corridor ARS→BRL' },
  { name: 'Transferencias 3.0', body: 'BCRA instant rail · EMVCo QR standard' },
]

function CardHead({ item }: { item: StackItem }) {
  if (item.logo) {
    return (
      <img
        src={item.logo}
        alt={item.name}
        className="h-6 w-auto max-w-full object-contain"
      />
    )
  }
  if (item.logoIcon) {
    return (
      <div className="flex items-center gap-2">
        <img src={item.logoIcon} alt="" className="h-6 w-6" />
        <span className="font-heading text-lg font-medium tracking-tight text-[#014A2D]">
          {item.name}
        </span>
      </div>
    )
  }
  return (
    <h3 className="font-heading text-lg font-medium text-[#014A2D]">
      {item.name}
    </h3>
  )
}

export default function TechStack() {
  return (
    <section className="bg-[#f5f2e8] px-10 py-16">
      <div className="max-w-[88rem] mx-auto flex flex-col items-center gap-12">
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-[#014A2D] text-center whitespace-pre-line"
          style={{ letterSpacing: '-0.03em' }}
        >
          {'Powered by\nStellar — end to end.'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="h-7 flex items-center justify-center">
                <CardHead item={item} />
              </div>
              <p className="font-body text-gray-600 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
