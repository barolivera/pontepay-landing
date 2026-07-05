export default function LiveRateTicker() {
  return (
    <div className="relative z-10 w-full bg-white/40 backdrop-blur-sm py-3">
      <div className="max-w-[88rem] mx-auto px-6 flex items-center justify-center gap-5 flex-wrap font-body text-sm text-[#1c1a18]">
        {/* LIVE */}
        <span className="flex items-center gap-2 font-medium">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-[#4ADE80]" />
          </span>
          <span className="text-[#014A2D]">LIVE</span>
        </span>

        {/* Rates */}
        <span className="font-medium">1 USD = 1,480 ARS · 5.72 BRL · 4,200 COP</span>

        {/* Oracle badge */}
        <span className="bg-white/80 rounded-full px-3 py-1 text-xs text-[#3d3935]">
          Reflector Oracle
        </span>
      </div>
    </div>
  )
}
