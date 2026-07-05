export default function LiveRateTicker() {
  return (
    <div className="relative z-10 w-full bg-[#014A2D]/90 py-3">
      <div className="max-w-[88rem] mx-auto px-6 flex items-center justify-center gap-5 flex-wrap font-body text-sm text-white">
        {/* LIVE */}
        <span className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="text-[#4ADE80]">LIVE</span>
        </span>

        {/* Rates */}
        <span>1 USD = 1,480 ARS · 5.72 BRL · 4,200 COP</span>

        {/* Oracle badge */}
        <span className="bg-white/10 rounded-full px-3 py-1 text-xs text-white/60">
          Reflector Oracle
        </span>
      </div>
    </div>
  )
}
