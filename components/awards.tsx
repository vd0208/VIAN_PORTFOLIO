"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy } from "lucide-react"

const awards = [
  {
    title: "Student Academic Merit Award",
    organization: "St Aloysius University",
    years: "2023 · 2024 · 2025",
    description: "Awarded three consecutive years in recognition of outstanding academic performance.",
    featured: true,
  },
  {
    title: "Special Award for Outstanding Leadership",
    organization: "St Aloysius University",
    years: "2025",
    description:
      "Recognised for directing a 50-member youth organisation, hosting a national-scale conference, and forging corporate event partnerships.",
    featured: false,
  },
]

export function Awards() {
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
    <section id="awards" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-accent">06 — Recognition</p>
          <h2 className="display text-4xl lg:text-6xl">Achievements &amp; awards</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-5">
          {awards.map((award, index) => {
            const Icon = award.featured ? Trophy : Award
            return (
              <div
                key={award.title}
                className="card-hover rounded-xl border border-border bg-card p-6 slide-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{award.years}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight">{award.title}</h3>
                <p className="mt-1 text-sm text-primary">{award.organization}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
