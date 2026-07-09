import Logo from './Logo'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL, CITY } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-plum text-white/70 py-12 px-4 sm:px-6 lg:px-8" aria-label="Stopka">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="[&_span]:text-white [&_.text-rose-500]:text-rose-300">
            <Logo />
          </div>
          <p className="text-sm text-white/50 mt-2">Kosmetologia estetyczna · {CITY}</p>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram NG Studio Kosmetologii"
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-rose-500 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          <InstagramIcon size={20} />
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} NG Studio Kosmetologii. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}
