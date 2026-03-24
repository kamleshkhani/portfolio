import { useState } from 'react'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import HeroSection from '../components/sections/HeroSection'
import JourneySection from '../components/sections/JourneySection'
import ProjectModal from '../components/sections/ProjectModal'
import ProjectsSection from '../components/sections/ProjectsSection'
import ServicesSection from '../components/sections/ServicesSection'
import SkillsSection from '../components/sections/SkillsSection'

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenProject={setSelectedProject} />
        <JourneySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
