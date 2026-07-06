import type { VercelRequest, VercelResponse } from '@vercel/node'
import {
  addSignup,
  countFor,
  isValidEmail,
  readEntries,
  sendSignupNotification,
} from '../waitlist-core.ts'

/**
 * Vercel serverless function — production counterpart to the Vite dev
 * middleware in waitlist-api.ts. Same contract:
 *
 *   GET  /api/waitlist  -> { count }
 *   POST /api/waitlist  { email } -> { count }
 *
 * On a new signup it emails a notification via Gmail SMTP (GMAIL_APP_PASSWORD).
 * Note: Vercel's filesystem is ephemeral, so the JSON file does not persist
 * across invocations — the email notification is the durable record of signups.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ count: countFor(readEntries()) })
  }

  if (req.method === 'POST') {
    // Vercel parses JSON bodies automatically, but fall back to raw strings.
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

    const result = addSignup(email)
    if (result.created) {
      // Await so the function isn't torn down before the email is sent.
      await sendSignupNotification(result.email, result.count)
    }
    return res.status(200).json({ count: result.count })
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).json({ error: 'Method Not Allowed' })
}
