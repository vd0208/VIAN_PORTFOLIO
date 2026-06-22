"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "MSc Data Science",
    school: "University of Bristol — Bristol, UK",
    period: "Sep 2025 – Sep 2026",
    detail: "Coursework: Data Engineering, Data Analytics, AI & Text Analytics, Visual Analytics & Society.",
    note: null as string | null,
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "St Aloysius University — Mangalore, India",
    period: "Aug 2022 – Mar 2025",
    detail: "Coursework: Software Engineering, Data Science, J2EE, Java, C/C++ and Python.",
    note: "Three-year academic merit award · Special Award for Leadership",
  },
]

const languages = ["English (Fluent)", "Hindi", "Kannada", "Tulu", "Konkani"]

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-primary">01 — Profile</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">About me</h2>
        </header>

        {/* Professional summary */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <p className="mono-label text-xs text-muted-foreground lg:pt-1">Summary</p>
          <p className="lg:col-span-2 text-lg leading-relaxed text-foreground/90 text-pretty">
            Results-driven Data Science graduate with dual competency in advanced analytics and stakeholder
            engagement. I bring hands-on proficiency in Python, machine learning, SQL, and data visualisation, backed
            by a portfolio of end-to-end predictive modelling and NLP projects delivering measurable business impact.
            Alongside the technical work, I&apos;ve directed a 50-member youth organisation, orchestrated national-scale
            conferences, and cultivated corporate partnerships — sharpening the communication and cross-functional
            collaboration that data-driven, client-facing roles demand.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-5">
          <p className="mono-label text-xs text-muted-foreground">Education</p>
          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu) => (
              <div key={edu.degree} className="card-hover rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight">{edu.degree}</h3>
                    <p className="text-sm text-primary">{edu.school}</p>
                    <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{edu.detail}</p>
                    {edu.note && (
                      <div className="flex items-center gap-2 pt-1 text-sm text-foreground">
                        <Award className="h-4 w-4 text-accent" />
                        <span>{edu.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-4">
          <p className="mono-label text-xs text-muted-foreground">Languages</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
