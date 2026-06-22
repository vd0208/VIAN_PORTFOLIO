"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePic from "./profile.jpg"

const focusAreas = ["Python", "Machine Learning", "SQL", "RAG / NLP", "Data Visualisation"]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20">
      {/* Subtle data grid backdrop */}
      <div className="grid-bg grid-bg-fade absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className={`space-y-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Open to data &amp; analytics roles</span>
          </div>

          <div className="space-y-5">
            <p className="mono-label text-xs text-primary">Data Science · Analytics · Machine Learning</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">Vian Dsouza</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-xl text-pretty">
              Data Science postgraduate turning complex, multi-source data into decisions that move the business.
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Currently pursuing an MSc in Data Science at the University of Bristol, with hands-on experience in
            predictive modelling, NLP, and stakeholder-ready reporting. I pair analytical depth with proven
            cross-functional leadership.
          </p>

          {/* Focus areas */}
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs + socials */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <a href="#contact" className="flex items-center gap-2">
                Get in touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View projects</a>
            </Button>
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/vd0208", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/viandsouza", label: "LinkedIn" },
                { icon: Mail, href: "mailto:viandsouza08@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="rounded-md border border-border bg-card p-2.5 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: portrait + metrics */}
        <div className={`space-y-6 ${isVisible ? "fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card">
            <img src={profilePic.src || "/placeholder.svg"} alt="Vian Dsouza" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-3 border-t border-border">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Bristol, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
