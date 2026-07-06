export type Lang = 'en' | 'es' | 'pt'

/** A single string localized across all supported languages. */
export type Localized = Record<Lang, string>

export const content = {
  // HERO
  hero: {
    eyebrow: {
      en: 'Built on Stellar Soroban',
      es: 'Construido sobre Stellar Soroban',
      pt: 'Construído no Stellar Soroban',
    },
    h1: {
      en: 'Earn Global,\nSpend Local.',
      es: 'Ganá Global,\nGastá Local.',
      pt: 'Ganhe Global,\nGaste Local.',
    },
    subtext: {
      en: 'Send USDC, receive local currency in seconds. No bank. No middleman. Just code.',
      es: 'Enviá USDC, recibí pesos en segundos. Sin banco. Sin intermediarios. Solo código.',
      pt: 'Envie USDC, receba moeda local em segundos. Sem banco. Sem intermediários. Só código.',
    },
    cta: { en: 'Open app', es: 'Abrir app', pt: 'Abrir app' },
    github: { en: 'View on GitHub', es: 'Ver en GitHub', pt: 'Ver no GitHub' },
  },

  // HOW IT WORKS
  howItWorks: {
    eyebrow: { en: 'How it works', es: 'Cómo funciona', pt: 'Como funciona' },
    h2: {
      en: 'From USDC to pesos\nin seconds.',
      es: 'De USDC a pesos\nen segundos.',
      pt: 'De USDC a pesos\nem segundos.',
    },
    step1: {
      title: { en: 'Sign in', es: 'Iniciá sesión', pt: 'Entre' },
      desc: {
        en: 'Enter your email. A Stellar wallet is created automatically — no seed phrase, no extensions, no jargon.',
        es: 'Ingresá tu email. Se crea una wallet Stellar automáticamente — sin frase semilla, sin extensiones.',
        pt: 'Digite seu email. Uma carteira Stellar é criada automaticamente — sem frase semente, sem extensões.',
      },
    },
    step2: {
      title: { en: 'Browse orders', es: 'Explorá órdenes', pt: 'Explore ordens' },
      desc: {
        en: 'Live rates from the blockchain. The exchange rate comes from the Reflector SEP-40 oracle — not set by us.',
        es: 'Tasas en vivo de la blockchain. La tasa viene del oráculo Reflector SEP-40 — no la fijamos nosotros.',
        pt: 'Taxas ao vivo da blockchain. A taxa vem do oráculo Reflector SEP-40 — não definida por nós.',
      },
    },
    step3: {
      title: { en: 'Trade', es: 'Operá', pt: 'Opere' },
      desc: {
        en: 'USDC goes into a Soroban escrow contract — never a company wallet. Both sides confirm. Funds release automatically.',
        es: 'El USDC va a un contrato escrow en Soroban — nunca a una wallet de la empresa. Ambas partes confirman.',
        pt: 'O USDC vai para um contrato escrow Soroban — nunca para uma carteira da empresa. Ambos confirmam.',
      },
    },
    step4: {
      title: { en: 'Earn', es: 'Ganá', pt: 'Ganhe' },
      desc: {
        en: 'Idle USDC earns 10.83% APY automatically via DeFindex vaults. No lock-up, no action needed.',
        es: 'El USDC inactivo gana 10.83% APY automáticamente vía DeFindex. Sin bloqueo, sin acción requerida.',
        pt: 'USDC parado rende 10.83% APY automaticamente via DeFindex. Sem bloqueio, sem ação necessária.',
      },
    },
  },

  // BUILT DIFFERENT
  builtDifferent: {
    eyebrow: {
      en: 'Built different.',
      es: 'Construido diferente.',
      pt: 'Construído diferente.',
    },
    h2: {
      en: 'Your money.\nYour rules.',
      es: 'Tu plata.\nTus reglas.',
      pt: 'Seu dinheiro.\nSuas regras.',
    },
    card1: {
      title: {
        en: 'Your money stays yours.',
        es: 'Tu plata siempre es tuya.',
        pt: 'Seu dinheiro sempre é seu.',
      },
      desc: {
        en: 'USDC is locked in an escrow contract. Nobody can touch it until both sides confirm.',
        es: 'El USDC queda bloqueado en un contrato escrow. Nadie puede tocarlo hasta que ambas partes confirmen.',
        pt: 'O USDC fica bloqueado em contrato escrow. Ninguém pode tocá-lo até ambos confirmarem.',
      },
    },
    card2: {
      title: {
        en: 'The real rate, always.',
        es: 'La tasa real, siempre.',
        pt: 'A taxa real, sempre.',
      },
      desc: {
        en: 'Rate comes directly from the Reflector oracle on-chain. No operator sets it.',
        es: 'La tasa viene directamente del oráculo Reflector on-chain. Ningún operador la fija.',
        pt: 'A taxa vem diretamente do oráculo Reflector on-chain. Nenhum operador a define.',
      },
    },
    card3: {
      title: {
        en: 'Pay like everyone else.',
        es: 'Pagá como todos.',
        pt: 'Pague como todo mundo.',
      },
      desc: {
        en: 'Receive pesos via QR — scannable from any Argentine bank or wallet app.',
        es: 'Recibí pesos por QR — escaneable desde cualquier banco o billetera argentina.',
        pt: 'Receba pesos via QR — escaneável de qualquer banco ou carteira argentina.',
      },
    },
    card4: {
      title: {
        en: 'Argentina to Brazil in seconds.',
        es: 'Argentina a Brasil en segundos.',
        pt: 'Argentina ao Brasil em segundos.',
      },
      desc: {
        en: 'Send ARS, receive BRL via PIX. Argentina → Stellar → Brazil.',
        es: 'Enviá ARS, recibí BRL por PIX. Argentina → Stellar → Brasil.',
        pt: 'Envie ARS, receba BRL via PIX. Argentina → Stellar → Brasil.',
      },
    },
  },

  // STATS
  stats: {
    eyebrow: {
      en: 'By the numbers',
      es: 'Los números hablan',
      pt: 'Os números falam',
    },
    h2: {
      en: 'The numbers speak.',
      es: 'Los números hablan.',
      pt: 'Os números falam.',
    },
    subtext: {
      en: 'No hidden costs. No waiting. No custodians.',
      es: 'Sin costos ocultos. Sin esperas. Sin custodios.',
      pt: 'Sem custos ocultos. Sem espera. Sem custódia.',
    },
    stat1: {
      value: '0.5%',
      label: {
        en: 'Platform fee — transparent, no hidden costs',
        es: 'Fee de plataforma — transparente, sin costos ocultos',
        pt: 'Taxa da plataforma — transparente, sem custos ocultos',
      },
    },
    stat2: {
      value: '10.83%',
      label: {
        en: 'APY on idle USDC via DeFindex vaults',
        es: 'APY sobre USDC inactivo vía DeFindex',
        pt: 'APY sobre USDC parado via DeFindex',
      },
    },
    stat3: {
      value: '< 30s',
      label: {
        en: 'From order to settlement on Stellar',
        es: 'De la orden al settlement en Stellar',
        pt: 'Da ordem ao settlement no Stellar',
      },
    },
  },

  // WAITLIST
  waitlist: {
    h2: {
      en: 'Be the first to cross the bridge.',
      es: 'Sé el primero en cruzar el puente.',
      pt: 'Seja o primeiro a cruzar a ponte.',
    },
    subtext: {
      en: 'Early adopters get reduced fees. No wallet needed — just your email.',
      es: 'Los primeros usuarios pagan menos comisiones. Sin wallet — solo tu email.',
      pt: 'Os primeiros usuários pagam menos taxas. Sem carteira — só seu email.',
    },
    placeholder: {
      en: 'you@email.com',
      es: 'tu@email.com',
      pt: 'voce@email.com',
    },
    cta: {
      en: 'Join waitlist',
      es: 'Unirme a la lista',
      pt: 'Entrar na lista',
    },
    submitting: {
      en: 'Joining…',
      es: 'Uniéndote…',
      pt: 'Entrando…',
    },
    success: {
      en: "You're in. We'll reach out before mainnet launch.",
      es: 'Estás dentro. Te contactaremos antes del lanzamiento en mainnet.',
      pt: 'Você entrou. Falaremos com você antes do lançamento na mainnet.',
    },
    error: {
      en: 'Something went wrong. Please try again.',
      es: 'Algo salió mal. Intentá de nuevo.',
      pt: 'Algo deu errado. Tente novamente.',
    },
    // {count} is replaced with the live signup number.
    counter: {
      en: '{count} people already signed up',
      es: '{count} personas ya se anotaron',
      pt: '{count} pessoas já se inscreveram',
    },
  },

  // POWERED BY
  poweredBy: {
    h2: {
      en: 'Powered by\nStellar — end to end.',
      es: 'Powered by\nStellar — de punta a punta.',
      pt: 'Powered by\nStellar — de ponta a ponta.',
    },
  },

  // CTA FINAL
  finalCta: {
    h2: {
      en: 'Ready to bridge?',
      es: '¿Listo para cruzar el puente?',
      pt: 'Pronto para cruzar a ponte?',
    },
    subtext: {
      en: 'No wallet needed. No KYC. Just your email and 30 seconds.',
      es: 'Sin wallet. Sin KYC. Solo tu email y 30 segundos.',
      pt: 'Sem carteira. Sem KYC. Só seu email e 30 segundos.',
    },
    cta: { en: 'Open app', es: 'Abrir app', pt: 'Abrir app' },
  },

  // FOOTER
  footer: {
    tagline: {
      en: 'Earn Global, Spend Local.',
      es: 'Ganá Global, Gastá Local.',
      pt: 'Ganhe Global, Gaste Local.',
    },
    built: {
      en: 'Built on Stellar Soroban · MIT License',
      es: 'Construido sobre Stellar Soroban · MIT License',
      pt: 'Construído no Stellar Soroban · MIT License',
    },
  },
} as const
