"use client"

import { useEffect, useRef, useState } from "react"
import { BadgeCheck } from "lucide-react"

const certifications = [
  {
    title: "Forward Program",
    issuer: "McKinsey.org · Jun 2026",
    description:
      "Digital and leadership skills program building adaptability, structured problem-solving, and career resilience.",
  },
  {
    title: "IBM Project Management Certificate",
    issuer: "IBM · Coursera",
    description: "Foundations of planning, executing, and closing projects across Agile and traditional methodologies.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Trainee badge covering core AWS cloud concepts, services, security, and pricing fundamentals.",
  },
  {
    title: "Bristol Plus Award",
    issuer: "University of Bristol",
    description: "Recognising professional development, employability, and active community engagement.",
  },
]

export function Certifications() {
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
    <section id="certifications" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-primary">05 — Credentials</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Certifications</h2>
        </header>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="card-hover rounded-xl border border-border bg-card p-6 slide-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="rounded-lg bg-accent/10 p-2">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                </div>
                <p className="mono-label text-[10px] text-muted-foreground">{cert.issuer}</p>
              </div>
              <h3 className="pt-4 text-lg font-semibold leading-tight">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
