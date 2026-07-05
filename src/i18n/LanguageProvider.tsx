import { useState, type ReactNode } from 'react'
import { LanguageContext } from './languageContext'
import { translations, type Lang } from './translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
