import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL, CITY, ADDRESS, PHONE_DISPLAY, PHONE_TEL, HOURS, MAPS_SEARCH_URL } from '../constants'

const quickLinks = [
  { to: '/#o-nas', label: 'O nas' },
  { to: '/#uslugi', label: 'Usługi' },
  { to: '/cennik', label: 'Cennik' },
  { to: '/galeria', label: 'Galeria' },
]

export default function Footer() {
  return (
    <footer className="bg-plum text-white/70 py-8 sm:py-14 px-4 sm:px-6 lg:px-8" aria-label="Stopka">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        <div>
          <Logo dark />
          <p className="text-sm text-white/50 mt-3">Kosmetologia estetyczna · {CITY}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram NG Studio Kosmetologii"
            className="mt-4 inline-flex w-11 h-11 rounded-full bg-white/10 hover:bg-rose-500 items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon size={20} />
          </a>
        </div>

        <div>
          <h3 className="font-display text-white text-base font-semibold mb-4">Nawigacja</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-rose-300 transition-colors cursor-pointer">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-white text-base font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-rose-300 transition-colors cursor-pointer"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                {ADDRESS}
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2.5 hover:text-rose-300 transition-colors cursor-pointer"
              >
                <Phone size={16} className="flex-shrink-0" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-white text-base font-semibold mb-4">Godziny otwarcia</h3>
          <ul className="space-y-1.5 text-sm">
            {HOURS.map(({ day, hours }) => (
              <li key={day} className="flex items-center justify-between gap-4">
                <span>{day}</span>
                <span className={hours === 'Zamknięte' ? 'text-white/40' : 'text-white/70'}>{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-4 sm:mt-10 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-xs text-white/40">
        <span>© {new Date().getFullYear()} NG Studio Kosmetologii. Wszelkie prawa zastrzeżone.</span>
        <span className="hidden sm:inline">·</span>
        <Link to="/polityka-prywatnosci" className="hover:text-rose-300 transition-colors cursor-pointer underline underline-offset-2">
          Polityka prywatności
        </Link>
        <span className="hidden sm:inline">·</span>
        <Link to="/regulamin" className="hover:text-rose-300 transition-colors cursor-pointer underline underline-offset-2">
          Regulamin
        </Link>
      </div>
    </footer>
  )
}
