export type Lang = 'en' | 'es' | 'pt'

/** Shape of a single language's strings (values widened to string). */
export type Translation = Record<
  'eyebrow' | 'h1' | 'subtext' | 'cta' | 'github',
  string
>

export const translations = {
  en: {
    eyebrow: 'Built on Stellar Soroban',
    h1: 'Earn Global,\nSpend Local.',
    subtext:
      'Send USDC, receive local currency in seconds. No bank. No middleman. Just code.',
    cta: 'Open app',
    github: 'View on GitHub',
  },
  es: {
    eyebrow: 'Construido sobre Stellar Soroban',
    h1: 'Ganá Global,\nGastá Local.',
    subtext:
      'Enviá USDC, recibí pesos en segundos. Sin banco. Sin intermediarios. Solo código.',
    cta: 'Abrir app',
    github: 'Ver en GitHub',
  },
  pt: {
    eyebrow: 'Construído no Stellar Soroban',
    h1: 'Ganhe Global,\nGaste Local.',
    subtext:
      'Envie USDC, receba moeda local em segundos. Sem banco. Sem intermediários. Só código.',
    cta: 'Abrir app',
    github: 'Ver no GitHub',
  },
} as const
