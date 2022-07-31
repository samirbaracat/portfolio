import React from 'react'

import AboutContainer from '../components/AboutContainer'
import Technologies from '../components/TechnologiesContainer'
import Projects from '../components/ProjectsContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return <main id="main-content">
    <AboutContainer />
    <Technologies />
    <Projects />
  </main>
}

export default MainContent