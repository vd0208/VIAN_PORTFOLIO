import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { SkillsShowcase } from "@/components/skills-showcase"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Hero />
          <Projects />
          <SkillsShowcase />
          <About />
          <Experience />
          <Awards />
        </div>
        <Contact />
      </main>
    </div>
  )
}
