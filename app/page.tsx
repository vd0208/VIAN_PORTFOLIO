import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { SkillsShowcase } from "@/components/skills-showcase"
import { Certifications } from "@/components/certifications"
import { Awards } from "@/components/awards"
import { Contact } from "@/components/contact"
import { VisitorGate } from "@/components/visitor-gate"
import { MarqueeRibbon } from "@/components/marquee-ribbon"

export default function Home() {
  return (
    <div className="min-h-screen">
      <VisitorGate />
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Hero />
        </div>

        <MarqueeRibbon
          items={["DATA SCIENCE", "MACHINE LEARNING", "ANALYTICS", "PYTHON", "RAG / NLP", "DATA STORYTELLING"]}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <About />
          <Experience />
          <Projects />
          <SkillsShowcase />
        </div>

        <MarqueeRibbon items={["CERTIFIED", "AWARDED", "OPEN TO WORK", "LET'S BUILD", "BRISTOL, UK"]} reverse />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Certifications />
          <Awards />
        </div>
        <Contact />
      </main>
    </div>
  )
}
