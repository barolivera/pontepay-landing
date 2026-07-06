import type { ServerResponse } from 'node:http'
import type { Plugin, Connect } from 'vite'
import {
  addSignup,
  countFor,
  isValidEmail,
  readEntries,
  sendSignupNotification,
} from './waitlist-core.ts'

/**
 * Simple file-backed waitlist endpoint for local dev / preview.
 *
 *   GET  /api/waitlist  -> { count }
 *   POST /api/waitlist  { email } -> { count }
 *
 * On a new signup it also emails a notification (see waitlist-core). The same
 * logic is mirrored for production in api/waitlist.ts (Vercel function).
 */
function json(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

const handler: Connect.NextHandleFunction = (req, res, next) => {
  if (!req.url || !req.url.split('?')[0].endsWith('/api/waitlist')) {
    return next()
  }

  if (req.method === 'GET') {
    return json(res, 200, { count: countFor(readEntries()) })
  }

  if (req.method === 'POST') {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      let email: unknown
      try {
        email = JSON.parse(raw || '{}').email
      } catch {
        return json(res, 400, { error: 'Invalid JSON' })
      }

      if (!isValidEmail(email)) {
        return json(res, 400, { error: 'Please enter a valid email.' })
      }

      const result = addSignup(email)
      // Respond immediately; email notification runs best-effort in the background.
      json(res, 200, { count: result.count })
      if (result.created) {
        void sendSignupNotification(result.email, result.count)
      }
    })
    return
  }

  res.statusCode = 405
  res.end('Method Not Allowed')
}

export function waitlistApi(): Plugin {
  return {
    name: 'pontepay-waitlist-api',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    // Also serve it during `vite preview` so the built site can be demoed.
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}
