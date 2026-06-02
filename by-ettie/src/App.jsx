import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Process from "./components/Process"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import Project from "./pages/Project"
import Schedule from "./pages/Schedule"
import ThankYou from "./pages/ThankYou"
import { trackPageView } from './lib/analytics'

function RouteTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteTracker />
      <Routes>
        <Route
          path="/"
          element={<> 
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Process />
            <Cta />
            <Footer />
          </>}
        />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
