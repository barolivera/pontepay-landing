import { ArrowRight } from 'lucide-react'
import Marquee from './Marquee'
import GithubIcon from './GithubIcon'
import { APP_URL, GITHUB_URL, MARQUEE_ITEMS } from '../constants'

export default function Hero() {
  return (
    <section className="px-4 pt-4">
      <div className="max-w-[88rem] mx-auto">
        <div className="relative min-h-screen rounded-3xl overflow-hidden flex flex-col">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-14 pt-28">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
              Built on Stellar Soroban
            </span>

            <h1
              className="font-heading text-5xl md:text-6xl font-bold text-white whitespace-pre-line mt-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              {'Earn Global,\nSpend Local.'}
            </h1>

            <p className="font-body text-white/80 text-lg max-w-md mt-6">
              Send USDC, receive local currency in seconds. No bank. No
              middleman. Just code.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 bg-[#014A2D] text-white rounded-full pl-8 pr-2 py-2 hover:bg-[#015c38] transition-colors duration-200"
              >
                <span className="font-medium">Open app</span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
                  <ArrowRight className="w-5 h-5 text-[#014A2D] transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white px-6 py-3.5 hover:bg-white/15 transition-colors duration-200"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="font-medium">View on GitHub</span>
              </a>
            </div>
          </div>

          {/* Marquee footer */}
          <div className="relative z-10 pb-8 pt-6 border-t border-white/10 backdrop-blur-sm bg-black/10">
            <Marquee items={MARQUEE_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  )
}
