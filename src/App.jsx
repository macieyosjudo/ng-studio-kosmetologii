import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CtaSection from './components/CtaSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rose-500 text-white px-4 py-2 rounded-lg z-[9999] text-sm font-medium"
      >
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
