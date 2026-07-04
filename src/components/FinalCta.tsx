import { ArrowRight } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { APP_URL, GITHUB_URL } from '../constants'

export default function FinalCta() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="rounded-3xl bg-[#f5f2e8] px-8 py-20 md:px-16 md:py-28 text-center">
          <h2
            className="font-heading text-4xl md:text-6xl font-bold text-[#014A2D]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Ready to bridge?
          </h2>
          <p className="font-body text-lg md:text-xl text-[#014A2D]/70 mt-5 max-w-xl mx-auto">
            No wallet needed. No KYC. Just your email and 30 seconds.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#014A2D]/20 text-[#014A2D] px-6 py-3.5 hover:bg-[#014A2D]/5 transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="font-medium">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
