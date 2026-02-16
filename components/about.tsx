"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-semibold">MSc Data Science</h3>
                <p className="text-muted-foreground">University of Bristol</p>
                <p className="text-sm text-muted-foreground">Expected Sep 2026</p>
                <p className="text-sm leading-relaxed">
                  Relevant coursework: Data Engineering, Data Analytics, AI & Text Analytics, Visual Analytics and
                  Society
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-semibold">Bachelor of Computer Applications</h3>
                <p className="text-muted-foreground">St Aloysius University (Mangalore)</p>
                <p className="text-sm text-muted-foreground">2022 - 2025</p>
                <p className="text-sm leading-relaxed"> 
                  Relevant coursework: Software Engineering, Data Science, J2EE, Java, C/C++ and
                  Python</p>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-primary">All 3 years merit award, Special Award</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {["English (Fluent)", "Hindi", "Kannada", "Tulu", "Konkani"].map((lang) => (
              <span key={lang} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
