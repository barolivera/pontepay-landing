import { APP_URL, GITHUB_URL } from '../constants'

export default function FinalCta() {
  return (
    <section className="bg-[#014A2D] px-6 py-24 text-center">
      <div className="max-w-[88rem] mx-auto">
        <h2 className="font-heading text-6xl font-bold text-white">
          Ready to bridge?
        </h2>
        <p className="font-body text-white/70 text-xl max-w-lg mx-auto mt-4">
          No wallet needed. No KYC. Just your email and 30 seconds.
        </p>

        <div className="mt-8">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#4ADE80] text-[#014A2D] font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#3fce72] transition-colors duration-200"
          >
            Open app →
          </a>
        </div>

        <div className="mt-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="font-body text-white/50 text-sm hover:text-white/80 transition-colors duration-200"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
