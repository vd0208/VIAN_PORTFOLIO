"use client"

import { useEffect, useRef } from "react"

export function SkillsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = true

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "TypeScript", "R"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Data & Analytics",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Jupyter"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Frontend & Web",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Tableau", "Power BI"],
      color: "from-orange-500 to-red-500"
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools and technologies used to build scalable, data-driven solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={category.category}
                className="group glass p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 scale-hover border border-primary/10"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="space-y-2">
                    <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors mr-2 mb-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-xl transition-all duration-300 -z-10" />
              </div>
            ))}
          </div>

          {/* Tech Stack Visual */}
          <div className="mt-20 space-y-6">
            <h3 className="text-2xl font-semibold text-center">Preferred Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Python", "React", "Next.js", "SQL", "TensorFlow", "Docker"].map((tech, idx) => (
                <div
                  key={tech}
                  className="glass p-4 rounded-lg text-center hover:bg-primary/10 transition-all scale-hover border border-primary/10"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <p className="font-semibold text-primary">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
