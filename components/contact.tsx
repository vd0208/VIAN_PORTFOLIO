"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react"

const channels = [
  { icon: Mail, label: "Email", value: "viandsouza08@gmail.com", href: "mailto:viandsouza08@gmail.com" },
  { icon: Phone, label: "Phone (UK)", value: "+44 7887 195 125", href: "tel:+447887195125" },
  { icon: Linkedin, label: "LinkedIn", value: "in/viandsouza", href: "https://linkedin.com/in/viandsouza", external: true },
  { icon: Github, label: "GitHub", value: "github.com/vd0208", href: "https://github.com/vd0208", external: true },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 mt-8 border-t border-border bg-card/40">
      <div className="grid-bg grid-bg-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-12 space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}
      >
        <header className="space-y-3 max-w-2xl">
          <p className="mono-label text-xs text-primary">07 — Contact</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance">Let&apos;s build with data</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Open to data-driven consulting and analytical roles. Reach out about opportunities, collaborations, or to
            talk through a problem worth modelling.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="card-hover group rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="mono-label text-[10px] text-muted-foreground mt-4">{label}</p>
              <p className="mt-1 text-sm font-semibold break-all group-hover:text-primary transition-colors">
                {value}
              </p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2025 Vian Dsouza · Bristol, United Kingdom</p>
          <p className="font-mono text-xs text-muted-foreground">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
