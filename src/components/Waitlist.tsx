import { useEffect, useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/languageContext'
import { content } from '../i18n/translations'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const SEED_COUNT = 3

export default function Waitlist() {
  const { lang } = useLanguage()
  const t = content.waitlist

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [count, setCount] = useState(SEED_COUNT)

  // Load the current signup count on mount.
  useEffect(() => {
    let active = true
    fetch('/api/waitlist')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data && typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('request failed')
      const data = await res.json()
      if (typeof data.count === 'number') setCount(data.count)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // Split the localized template around {count} so the number can be highlighted.
  const [counterBefore, counterAfter] = t.counter[lang].split('{count}')

  return (
    <section className="bg-[#1a3a2a] px-6 py-24">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-6">
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-[#F5F5F5]"
          style={{ letterSpacing: '-0.03em' }}
        >
          {t.h2[lang]}
        </h2>
        <p className="font-body text-[#F5F5F5]/70 text-lg max-w-md">
          {t.subtext[lang]}
        </p>

        {status === 'success' ? (
          <div className="w-full mt-2 rounded-full border border-[#4ADE80]/40 bg-[#4ADE80]/10 px-8 py-4">
            <p className="font-body text-[#4ADE80] text-lg font-medium">
              {t.success[lang]}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full mt-2 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder={t.placeholder[lang]}
              aria-label="Email"
              className="flex-1 rounded-full bg-[#F5F5F5] text-[#014A2D] placeholder-[#014A2D]/40 px-6 py-4 font-body text-base outline-none focus:ring-2 focus:ring-[#4ADE80] transition"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-full bg-[#4ADE80] text-[#014A2D] font-semibold px-8 py-4 text-base hover:bg-[#3fce72] disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap"
            >
              {status === 'submitting' ? t.submitting[lang] : t.cta[lang]}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-body text-red-300 text-sm -mt-2">{t.error[lang]}</p>
        )}

        <p className="font-body text-[#F5F5F5]/50 text-sm mt-2">
          {counterBefore}
          <span className="text-[#4ADE80] font-semibold">{count}</span>
          {counterAfter}
        </p>
      </div>
    </section>
  )
}
