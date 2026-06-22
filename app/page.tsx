import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { SkillsShowcase } from "@/components/skills-showcase"
import { Certifications } from "@/components/certifications"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <SkillsShowcase />
          <Certifications />
          <Awards />
        </div>
        <Contact />
      </main>
    </div>
  )
}
