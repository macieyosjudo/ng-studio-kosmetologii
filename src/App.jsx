import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CennikPage from './pages/CennikPage'
import GaleriaPage from './pages/GaleriaPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function Layout() {
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
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cennik" element={<CennikPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24">
                <div className="font-display text-6xl font-bold text-gradient mb-4">404</div>
                <h1 className="text-2xl font-bold text-plum mb-4">Strona nie znaleziona</h1>
                <p className="text-plum/60 mb-8">Ta strona nie istnieje lub została przeniesiona.</p>
                <a href="/" className="bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-600 transition-colors cursor-pointer">
                  Wróć na stronę główną
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
