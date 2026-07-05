import { createContext, useContext } from 'react'
import type { Lang, Translation } from './translations'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Translations for the current language. */
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
