"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, LineChart, Database, BarChart3, Sparkles, Wrench, Users } from "lucide-react"

const categories = [
  {
    icon: Code2,
    title: "Programming & Querying",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "R", "SQL", "C#", "JavaScript", "Node.js", "Express"],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    skills: ["Machine Learning", "Exploratory Data Analysis", "Predictive Modelling", "Data Cleaning & Wrangling", "Statistical Analysis"],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: ["MongoDB", "SQL Databases", "AWS Cloud (Practitioner)", "Git & Version Control"],
  },
  {
    icon: BarChart3,
    title: "Visualisation & Reporting",
    skills: ["Tableau", "Excel (Advanced)", "Data Storytelling", "Dashboard Development"],
  },
  {
    icon: Sparkles,
    title: "AI & Generative AI",
    skills: ["RAG Pipelines", "Ollama (Local LLM)", "Prompt Engineering", "NLP Applications", "AI Governance & Responsible AI"],
  },
  {
    icon: Wrench,
    title: "Frameworks & Tools",
    skills: ["RESTful API Development", "MERN Stack", "Agile / Scrum"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Client-Facing Communication", "Stakeholder Presentation", "Attention to Detail", "Cross-Cultural Teamwork", "Problem Solving"],
  },
]

export function SkillsShowcase() {
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
    <section id="skills" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-accent">04 — Toolkit</p>
          <h2 className="display text-4xl lg:text-6xl">Technical expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            The languages, frameworks, and methods I use to build scalable, data-driven solutions.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="card-hover rounded-xl border border-border bg-card p-6 slide-in"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="flex items-center gap-3 pb-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
