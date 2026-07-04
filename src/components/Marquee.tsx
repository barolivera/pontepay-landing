interface MarqueeProps {
  items: string[]
  /** Tailwind text color class, e.g. "text-white/70" */
  className?: string
  separatorClassName?: string
}

export default function Marquee({
  items,
  className = 'text-white/70',
  separatorClassName = 'text-[#4ADE80]',
}: MarqueeProps) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex w-max animate-marquee">
        {track.map((item, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className={`px-6 text-sm font-medium tracking-wide ${className}`}>
              {item}
            </span>
            <span className={separatorClassName} aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
