"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 pb-32 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className={`w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Let's Connect</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring new opportunities and collaborations. Reach out with your project ideas, questions, or just to say hello!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Mail, label: "Email", value: "viandsouza002@gmail.com", href: "mailto:viandsouza002@gmail.com" },
            { icon: Phone, label: "Phone (UK)", value: "+44 7887 195 125", href: "tel:+447887195125" },
            { icon: Phone, label: "Phone (IN)", value: "+91 7892 791 046", href: "tel:+917892791046" },
            { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com/in/viandsouza", external: true },
          ].map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group glass p-6 rounded-xl hover:bg-primary/8 transition-all border border-primary/10 scale-hover slide-in"
            >
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg w-fit group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors break-all">
                    {value}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-xl transition-all -z-10" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-primary/10">
          <p className="text-sm text-muted-foreground">
            © 2025 Vian Dsouza. Designed with precision, built with passion.
          </p>
        </div>
      </div>
    </section>
  )
}
