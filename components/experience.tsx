"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Users } from "lucide-react"

const roles = [
  {
    type: "work" as const,
    title: "Analyst",
    company: "Fudar.in — Mangalore, India",
    period: "Jun 2023 – Jun 2024",
    points: [
      "Tracked and evaluated weekly KPIs across website traffic, bounce rates, and conversion metrics, translating findings into data-driven reports that shaped content strategy and campaign prioritisation.",
      "Maintained and optimised a fleet asset database covering 50+ vehicles, deploying rigorous data-validation protocols to safeguard data integrity for mission-critical operational decisions.",
      "Analysed end-to-end vehicle maintenance and repair expenditure, surfacing historical cost patterns that informed proactive cost-reduction initiatives.",
      "Synthesised multi-source operational datasets into executive-ready performance summaries, enabling senior leadership to act on real-time business intelligence.",
    ],
  },
  {
    type: "work" as const,
    title: "MERN Stack Intern",
    company: "CodeLab Systems — Mangalore, India",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Interrogated and validated structured and semi-structured MongoDB records, resolving 15+ data integrity issues found through systematic backend debugging.",
      "Architected RESTful API endpoints with Node.js and Express, reducing client-server latency and enabling three new frontend features to reach production.",
      "Delivered two production-ready full-stack modules within the internship cycle, meeting all acceptance criteria ahead of sprint deadlines.",
      "Collaborated in an Agile environment across sprint planning, daily stand-ups, and peer pull-request reviews.",
    ],
  },
  {
    type: "lead" as const,
    title: "Postgraduate Officer",
    company: "Bristol Data Science Society",
    period: "2025 – 2026 · Current",
    points: [
      "Act as a liaison for a multicultural student body within a leading UK university.",
      "Contribute to and manage society events and member engagement.",
    ],
  },
  {
    type: "lead" as const,
    title: "President",
    company: "ICYM Moodbidri Unit",
    period: "2024 – 2025",
    points: [
      "Directed a 50-member youth organisation and organised large-scale community events.",
      "Led initiatives improving community engagement and youth development programmes.",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-primary">02 — Track Record</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Experience &amp; leadership</h2>
        </header>

        <div className="relative space-y-6 md:pl-8 md:border-l md:border-border">
          {roles.map((role, index) => {
            const Icon = role.type === "work" ? Briefcase : Users
            return (
              <div
                key={index}
                className="relative card-hover rounded-xl border border-border bg-card p-6 slide-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="hidden md:block absolute -left-[41px] top-7 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">{role.title}</h3>
                        <p className="text-sm text-primary">{role.company}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{role.period}</span>
                  </div>
                  <ul className="space-y-2.5 md:pl-12">
                    {role.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
