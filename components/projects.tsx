"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Customer Churn Analysis & Predictive Modelling",
    description: "Random Forest pipeline that flags at-risk customers and quantifies revenue at risk.",
    metric: "85%",
    metricLabel: "Prediction accuracy",
    points: [
      "Built a Random Forest classifier identifying at-risk customers with 85% accuracy to drive targeted retention.",
      "Engineered a proprietary 'Usage Decay' feature quantifying 90-day engagement drop-off for earlier warning signals.",
      "Consolidated 5+ weekly analyst reports into one interactive revenue-at-risk dashboard deployed with Streamlit.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
    github: "https://github.com/vd0208/Customer-churn-analysis-model",
    live: null as string | null,
  },
  {
    title: "Indian Budget Analysis using RAG",
    description: "Retrieval-Augmented Generation system analysing Indian Union Budgets with fully local LLMs.",
    metric: "40%",
    metricLabel: "Q&A accuracy uplift",
    points: [
      "Structured financial data from 100+ pages of policy documents for year-on-year comparison across 15+ ministries.",
      "Lifted Q&A accuracy by 40% with citation-level source attribution, minimising hallucination on sensitive queries.",
      "Routed all inference locally via Ollama + FAISS for full data privacy and zero external API dependency.",
    ],
    technologies: ["Python", "Ollama", "Llama 3", "FAISS", "LangChain", "Streamlit"],
    github: "https://github.com/vd0208/Indian_Budget_Analysis",
    live: null,
  },
  {
    title: "Buycision",
    description: "AI-powered shopping decisions platform with review sentiment analysis.",
    metric: "AI/ML",
    metricLabel: "Sentiment engine",
    points: [
      "Built with React & MongoDB featuring AI-driven product review sentiment analysis.",
      "Created an analytics dashboard tracking user behaviour and redirection statistics.",
      "Applied ML to help users make informed purchase decisions with real-time visualisation.",
    ],
    technologies: ["React", "MongoDB", "Node.js", "Express", "AI/ML"],
    github: "https://github.com/vd0208/buysicion",
    live: "https://buycision-app.vercel.app",
  },
  {
    title: "Aider+",
    description: "Medical appointment and hospital management system with emergency alerts.",
    metric: "Full-stack",
    metricLabel: "MERN booking system",
    points: [
      "Comprehensive patient booking system with emergency alert features across multiple partner hospitals.",
      "Real-time appointment scheduling with hospital-specific service information.",
      "User-friendly interface for seamless healthcare access and emergency contact.",
    ],
    technologies: ["React", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/vd0208/AIDER_PLUS",
    live: "https://aiderplus.vercel.app",
  },
]

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 border-t border-border">
      <div className={`space-y-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        <header className="space-y-3">
          <p className="mono-label text-xs text-primary">03 — Selected Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Featured projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            End-to-end data science and full-stack builds focused on measurable, real-world impact.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="card-hover group flex flex-col rounded-xl border border-border bg-card p-6 slide-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Metric header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
                <div>
                  <p className="font-mono text-3xl font-bold text-primary">{project.metric}</p>
                  <p className="mono-label text-[10px] text-muted-foreground mt-1">{project.metricLabel}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-2 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-border p-2 text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col pt-4">
                <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
