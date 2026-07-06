import type { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'
import { SEED, isValidEmail, sendSignupNotification } from '../waitlist-core.ts'

/**
 * Vercel serverless function — production counterpart to the Vite dev
 * middleware in waitlist-api.ts. Same contract:
 *
 *   GET  /api/waitlist  -> { count }
 *   POST /api/waitlist  { email } -> { count } | 400
 *
 * Storage is Vercel KV (the filesystem is read-only in production):
 *   - Set  "waitlist:emails" — every normalized email, for dedup.
 *   - Key  "waitlist:count"  — public count = SEED + real signups.
 *
 * On a genuinely new signup it emails a notification via Gmail SMTP
 * (GMAIL_APP_PASSWORD).
 */
const EMAILS_KEY = 'waitlist:emails'
const COUNT_KEY = 'waitlist:count'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const count = (await kv.get<number>(COUNT_KEY)) ?? SEED
    return res.status(200).json({ count })
  }

  if (req.method === 'POST') {
    let email: unknown
    try {
      const body =
        typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body
      email = body?.email
    } catch {
      return res.status(400).json({ error: 'Invalid JSON' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid email.' })
    }

    const normalized = email.trim().toLowerCase()

    // sadd returns the number of newly-added members: 1 = new, 0 = duplicate.
    const added = await kv.sadd(EMAILS_KEY, normalized)
    // Derive the count from set cardinality so it can't drift from the set.
    const count = SEED + (await kv.scard(EMAILS_KEY))
    await kv.set(COUNT_KEY, count)

    if (added === 1) {
      console.log(`[waitlist] new signup: ${normalized} (count ${count})`)
      await sendSignupNotification(normalized, count)
    }

    return res.status(200).json({ count })
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: 'Method Not Allowed' })
}
