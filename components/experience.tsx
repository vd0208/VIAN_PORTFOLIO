"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Website Manager",
    company: "Fudar.in",
    period: "06/2023 – 04/2024",
    responsibilities: [
      "Managed and maintained the official website, ensuring 99% uptime and smooth user experience.",
      "Implemented analytics tracking to monitor user engagement and improve site traffic.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "CodeLab Systems",
    period: "06/2024 – 07/2024",
    responsibilities: [
      "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Collaborated with team members on various client projects and internal tools.",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Experience & Leadership</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:translate-x-2"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 ml-12">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-2">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">President</h3>
                <p className="text-primary">ICYM Moodbidri Unit</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground ml-12">
              <Calendar className="h-4 w-4" />
              <span>2024-25</span>
            </div>
            <ul className="space-y-2 ml-12">
              <li className="text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-2">▹</span>
                <span>Managed 50+ members and organized large-scale community events.</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-2">▹</span>
                <span>Led initiatives to improve community engagement and youth development programs.</span>
              </li>
            </ul>
          </div>
        </Card>
        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Postgraduate Officer</h3>
                <p className="text-primary">Bristol Data Science Society</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground ml-12">
              <Calendar className="h-4 w-4" />
              <span>2025-26 (currently holding the position)</span>
            </div>
            <ul className="space-y-2 ml-12">
              <li className="text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-2">▹</span>
                <span>Act as a liaison for a multicultural student body in a leading UK university.</span>
              </li>
              <li className="text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-2">▹</span>
                <span>Contributing and managing the society events </span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
}
