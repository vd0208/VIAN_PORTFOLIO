import { Sparkles } from "lucide-react"

interface MarqueeRibbonProps {
  items: string[]
  reverse?: boolean
}

export function MarqueeRibbon({ items, reverse = false }: MarqueeRibbonProps) {
  // Duplicate the list so the -50% scroll wraps seamlessly
  const loop = [...items, ...items]

  return (
    <div
      className="relative overflow-hidden bg-primary py-3 select-none"
      role="presentation"
      aria-hidden="true"
    >
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-4 pr-4 whitespace-nowrap">
            <span className="display text-lg text-primary-foreground tracking-wide">{item}</span>
            <Sparkles className="h-4 w-4 text-primary-foreground/80" />
          </span>
        ))}
      </div>
    </div>
  )
}
