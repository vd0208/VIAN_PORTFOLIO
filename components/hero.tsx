"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowRight, Code2, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePic from './profile.jpg';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = ["Python", "SQL", "React", "Machine Learning", "Data Analytics"]

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Picture with glass effect */}
          <div className={`flex justify-center lg:justify-start ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <div className="relative w-full max-w-md">
              {/* Outer metallic ring with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40 rounded-2xl blur-xl" />
              
              {/* Glass morphic frame */}
              <div className="relative rounded-2xl overflow-hidden glass p-1 pulse-glow">
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img 
                    src={profilePic.src} 
                    alt="Vian Dsouza" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Accent glow elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/25 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`space-y-10 ${isVisible ? "fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.2s' }}>
            {/* Intro badge */}
            <div className="glass px-4 py-2 rounded-full w-fit flex items-center gap-2 scale-hover">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Data Science & Analytics</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Vian Dsouza
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground">
                Turning Data Into Insights
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Specialized in transforming complex data into actionable intelligence. Experienced in Python, SQL, and React with expertise in AI-driven applications and fintech innovation.
            </p>

            {/* Skills showcase with tech logos */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground/70 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <div 
                    key={skill}
                    className="glass px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-all scale-hover border border-primary/10"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group scale-hover font-semibold">
                <a href="#contact" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Get In Touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/40 hover:border-primary/80 hover:bg-primary/5 scale-hover font-semibold">
                <a href="#projects" className="flex items-center gap-2">
                  View Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/vd0208", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/viandsouza", label: "LinkedIn" },
                { icon: Mail, href: "mailto:viandsouza002@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="glass p-3 rounded-lg hover:bg-primary/15 transition-all scale-hover group border border-primary/10"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
