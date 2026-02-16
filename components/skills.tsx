"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Palette, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    skills: ["Python", "SQL", "MongoDB", "React", "JavaScript", "Node.js", "Express", "Data Visualization", "Excel"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Data Engineering", "Data Analytics", "AI & Text Analytics", "Machine Learning", "Statistical Analysis"],
  },
  {
    title: "Tools & Frameworks",
    icon: Palette,
    skills: ["Git", "VS Code", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Communication", "Problem-Solving", "Time Management", "Team Collaboration"],
  },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
