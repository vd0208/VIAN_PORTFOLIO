"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  
  {
  title: "Customer Churn Analysis Model",
  description: "RAG Platform for Budget Analysis",
  details: [
    "Created high-contrast KDE plots to identify churn risk thresholds.",
    "Developed a ”Usage Decay” metric to track declining 90-day engagement",
    " Built a Random Forest model identifying at-risk users with 85% accuracy.",
    "Leveraged FAKER to simulate 2,000+ realistic customer profiles and login behaviors.",
    "Designed an interactive dashboard for monitoring revenue at risk and deployed it using Streamlit.",
  ],
  technologies: ["Python", "Streamlit", "NumPy", "Scikit-Learn", "Joblib:", "Matplotlib", "Pandas"],
  github: "https://github.com/vd0208/Customer-churn-analysis-model"
},
  {
  title: "Indian_Budget_Analysis_using RAG",
  description: "RAG Platform for Budget Analysis",
  details: [
    "Developed a Retrieval-Augmented Generation (RAG) system to analyze Indian Union Budgets (2024–2026) using local LLMs.",
    "Engineered a 'Hybrid Edge' search engine combining Semantic Vector Search with Deterministic Keyword frequency analysis.",
    "Built a dynamic analytics dashboard that synchronizes real-time chatbot context with live-calculated sectoral growth charts.",
    "Implemented 100% local inference using Ollama and FAISS to ensure data privacy and zero API dependency.",
  ],
  technologies: ["Python", "Streamlit", "Ollama", "Llama 3", "FAISS", "LangChain", "Pandas"],
  github: "https://github.com/vd0208/Indian_Budget_Analysis"
},
  {
    title: "Buycision",
    description: "AI-Powered Shopping Decisions Platform",
    details: [
      "Built using React & MongoDB with AI-driven product review sentiment analysis.",
      "Created analytics dashboard tracking user behavior and redirection stats.",
      "Implemented machine learning algorithms to help users make informed purchase decisions.",
      "Features futuristic UI with animated elements and real-time data visualization.",
    ],
    technologies: ["React", "MongoDB", "AI/ML", "Node.js", "Express", "Sentiment Analysis"],
    github: "https://github.com/vd0208/buysicion",
    live: "https://buycision-app.vercel.app",
  },
  {
    title: "Aider+",
    description: "Medical Appointment & Hospital Management System",
    details: [
      "Comprehensive patient booking system with emergency alert features.",
      "Integrated multiple hospitals including Indiana Hospital, Father Muller Medical College, and more.",
      "Real-time appointment scheduling with hospital-specific service information.",
      "User-friendly interface for seamless healthcare access and emergency contact system.",
    ],
    technologies: ["React", "MongoDB", "Node.js", "Express", "Real-time Notifications"],
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
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className={`space-y-16 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Innovative solutions combining data science, AI, and full-stack development with a focus on real-world impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group h-full slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Card */}
                <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:bg-primary/5 transition-all border border-primary/10 scale-hover">
                  {/* Project Preview */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center border-b border-primary/10 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-center space-y-2 relative z-10">
                      <div className="text-4xl font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Project</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 space-y-4 flex flex-col">
                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-primary/15 text-primary font-medium hover:bg-primary/25 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2 border-t border-primary/10">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors py-2 hover:bg-primary/10 rounded-lg"
                      >
                        GitHub
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors py-2 hover:bg-accent/10 rounded-lg"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
