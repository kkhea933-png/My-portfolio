import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Skill from './components/Skill.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Skill />
    <Projects />
    <Contact />
  </StrictMode>,
)
