import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../i18n/languageContext'
import type { Lang } from '../i18n/translations'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-600 flex items-center gap-2 hover:border-gray-400 transition-all"
      >
        <Globe className="w-4 h-4" />
        {current.label}
      </button>

      {open && (
        <>
          {/* Click-outside catcher */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            className="absolute right-0 mt-2 z-40 w-24 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden py-1"
          >
            {LANGS.map((l) => (
              <li key={l.code} role="option" aria-selected={l.code === lang}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l.code)
                    setOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    l.code === lang
                      ? 'text-[#014A2D] font-semibold bg-[#014A2D]/5'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
