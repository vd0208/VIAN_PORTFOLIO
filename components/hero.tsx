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
      {/* Aurora glow backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="grid-bg grid-bg-fade absolute inset-0 opacity-40" />
        <div
          className="aurora h-[420px] w-[420px] -left-24 top-10"
          style={{ background: "oklch(0.64 0.26 322)" }}
        />
        <div
          className="aurora h-[360px] w-[360px] right-0 top-40"
          style={{ background: "oklch(0.7 0.2 280)", animationDelay: "3s" }}
        />
        <div
          className="aurora h-[300px] w-[300px] left-1/3 bottom-0"
          style={{ background: "oklch(0.75 0.15 200)", animationDelay: "6s" }}
        />
      </div>

      <div className="w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className={`space-y-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 backdrop-blur px-3 py-1.5 glow-primary">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Open to data &amp; analytics roles</span>
          </div>

          <div className="space-y-5">
            <p className="mono-label text-xs text-accent">Data Science · Analytics · Machine Learning</p>
            <h1 className="display text-6xl sm:text-7xl lg:text-8xl text-balance">
              Vian
              <br />
              <span className="holo-text">Dsouza</span>
            </h1>
            <p className="text-lg lg:text-2xl text-muted-foreground font-light max-w-xl text-pretty">
              Turning complex, multi-source data into decisions that move the business.
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
                className="rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs + socials */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group rounded-full glow-primary">
              <a href="#contact" className="flex items-center gap-2">
                Get in touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/50">
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
                  className="rounded-full border border-border bg-card/70 backdrop-blur p-2.5 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div className={`relative ${isVisible ? "fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {/* Holographic frame glow */}
          <div
            className="absolute -inset-3 rounded-[1.4rem] opacity-70 blur-2xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.7 0.2 280), oklch(0.66 0.26 322), oklch(0.75 0.15 200))",
            }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.4rem] border border-primary/30 bg-card">
            <img
              src={profilePic.src || "/placeholder.svg"}
              alt="Vian Dsouza"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-3 border-t border-primary/20">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Bristol, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
