import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import nodemailer from 'nodemailer'

/**
 * Shared waitlist logic: the seed count, email validation, and the Gmail
 * notification. Storage differs by environment:
 *   - Local Vite dev/preview (waitlist-api.ts) uses the JSON file below.
 *   - Production (api/waitlist.ts on Vercel) uses Vercel KV, since Vercel's
 *     filesystem is read-only.
 */
export const SEED = 3

const NOTIFY_TO = 'pont3pay@gmail.com'
const GMAIL_USER = 'pont3pay@gmail.com'

// Dev-only persistence. Vercel uses KV instead (see api/waitlist.ts).
const DATA_FILE = resolve(process.cwd(), 'waitlist.json')

export interface Entry {
  email: string
  at: string
}

export function readEntries(): Entry[] {
  if (!existsSync(DATA_FILE)) return []
  try {
    const parsed = JSON.parse(readFileSync(DATA_FILE, 'utf8'))
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/** Public-facing count: seed (Sofi + Tomi + equipo) plus real signups. */
export function countFor(entries: Entry[]): number {
  return SEED + entries.length
}

export interface AddResult {
  count: number
  /** True only when a brand-new email was stored (not a duplicate). */
  created: boolean
  email: string
}

/**
 * Record a signup. Idempotent per normalized email. Best-effort persistence:
 * if the filesystem is read-only (Vercel), the count still reflects this
 * invocation but won't survive to the next one.
 */
export function addSignup(rawEmail: string): AddResult {
  const entries = readEntries()
  const email = rawEmail.trim().toLowerCase()

  if (entries.some((e) => e.email === email)) {
    return { count: countFor(entries), created: false, email }
  }

  entries.push({ email, at: new Date().toISOString() })
  try {
    writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2))
  } catch (err) {
    console.error('[waitlist] could not persist signups:', err)
  }

  console.log(`[waitlist] new signup: ${email} (total ${entries.length})`)
  return { count: countFor(entries), created: true, email }
}

/**
 * Notify the team of a new signup via Gmail SMTP. Never throws — a failed
 * notification must not fail the signup itself.
 */
export async function sendSignupNotification(
  email: string,
  count: number,
): Promise<void> {
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!pass) {
    console.warn('[waitlist] GMAIL_APP_PASSWORD not set — skipping email notification')
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass },
    })

    await transporter.sendMail({
      from: `PontePay Waitlist <${GMAIL_USER}>`,
      to: NOTIFY_TO,
      subject: 'Nueva signup en PontePay waitlist 🌉',
      text: `Email registrado: ${email}\nTotal en waitlist: ${count}`,
    })
    console.log(`[waitlist] notification sent for ${email}`)
  } catch (err) {
    console.error('[waitlist] failed to send notification email:', err)
  }
}
