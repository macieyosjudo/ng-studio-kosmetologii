import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CtaSection from '../components/CtaSection'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <CtaSection />
      <Contact />
    </div>
  )
}
