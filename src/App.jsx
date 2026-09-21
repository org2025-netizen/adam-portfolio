import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Journey from './components/Journey'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from './pages/Admin'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    setIsLoaded(true)
    const hash = window.location.hash.slice(1)
    if (hash === 'admin') setCurrentPage('admin')

    const handleHash = () => {
      const h = window.location.hash.slice(1)
      setCurrentPage(h === 'admin' ? 'admin' : 'home')
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  if (currentPage === 'admin') {
    return <Admin />
  }

  return (
    <div className={`min-h-screen bg-navy-900 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Journey />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
