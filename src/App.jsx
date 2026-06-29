import './App.css'
import ContactSection from './components/ContactSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import ProfilesSection from './components/ProfilesSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import {
  contactLinks,
  navLinks,
  profileLinks,
  projects,
  skillGroups,
  typingWords,
} from './data/portfolio.js'

function App() {
  return (
    <>
      <Navbar brand="Sachit" links={navLinks} />
      <main className="page">
        <HeroSection
          intro="Hi, I'm"
          name="Sachit"
          role="Full Stack Developer"
          label="I'm a"
          words={typingWords}
        />
        <SkillsSection groups={skillGroups} />
        <ProjectsSection projects={projects} />
        <ProfilesSection profiles={profileLinks} />
        <ContactSection contacts={contactLinks} />
      </main>
    </>
  )
}

export default App
