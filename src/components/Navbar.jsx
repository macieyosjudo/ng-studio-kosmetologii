import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL } from '../constants'

const links = [
  { href: '/#o-nas', label: 'O nas' },
  { href: '/#uslugi', label: 'Usługi' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/#opinie', label: 'Opinie' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between" aria-label="Nawigacja główna">
        <Link to="/" className="cursor-pointer">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="text-sm font-medium text-plum/80 hover:text-rose-500 transition-colors cursor-pointer">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-soft hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon size={16} />
            Umów wizytę
          </a>
        </div>

        <button
          type="button"
          className="md:hidden w-11 h-11 flex items-center justify-center text-plum cursor-pointer"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-rose-100 px-4 pb-6 pt-2 shadow-lg">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-plum/80 hover:text-rose-500 transition-colors cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-full font-semibold text-sm shadow-soft transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon size={16} />
            Umów wizytę na Instagramie
          </a>
        </div>
      )}
    </header>
  )
}
