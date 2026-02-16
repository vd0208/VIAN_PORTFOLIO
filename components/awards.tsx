"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Award, Trophy } from "lucide-react"

const awards = [
  {
    title: "Student Academic Merit",
    organization: "St Aloysius University",
    years: "2023, 2024, 2025",
    description: "Recognized for outstanding academic performance across all three years of undergraduate studies.",
  },
  {
    title: "Community Leadership Award",
    organization: "ICYM Moodbidri Unit",
    years: "2025",
    description: "Awarded for exceptional leadership and community service as President of ICYM Moodbidri Unit.",
  },
  {
    title: "Special Award",
    organization: "St Aloysius University",
    years: "2025",
    description:
      "Special recognition for outstanding performance in curriculum, extra-curriculum, and leadership activities.",
  },
]

export function Awards() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="awards" ref={sectionRef} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Awards & Recognition</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-2 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {index === 0 ? (
                      <Trophy className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{award.years}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{award.title}</h3>
                  <p className="text-sm text-primary">{award.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
