import { motion } from 'framer-motion'
import { Star, ChevronDown, Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import FacebookIcon from './FacebookIcon'
import { INSTAGRAM_URL, FACEBOOK_URL, CITY, PHONE_TEL } from '../constants'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-cream to-rose-100/50 pt-16"
      aria-label="Strona główna"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:py-24 w-full">
        <div className="grid grid-cols-[1.4fr_1fr] sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="hidden sm:inline-flex items-center gap-2 bg-white/70 border border-rose-200 text-rose-600 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium mb-3 sm:mb-6"
            >
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
              Kosmetologia estetyczna · {CITY}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] sm:leading-[1.1] tracking-tight text-plum mb-2 sm:mb-5"
            >
              Piękno oparte na <span className="text-gradient">wiedzy i doświadczeniu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-plum/70 leading-relaxed mb-4 sm:mb-8 max-w-lg"
            >
              <span className="sm:hidden">Redukcja zmarszczek, wolumetria twarzy i mezoterapia igłowa w Żywcu.</span>
              <span className="hidden sm:inline">
                NG Studio Kosmetologii to gabinet Natalii w Żywcu — redukcja zmarszczek, wolumetria
                twarzy, mezoterapia igłowa oraz wodorowe oczyszczanie twarzy. Indywidualne podejście,
                fachowa wiedza i efekty, które od lat polecają klientki.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2 sm:flex-row flex-wrap sm:gap-3 mb-4 sm:mb-10"
            >
              <div className="flex gap-2 sm:hidden">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white px-3 py-3 text-sm rounded-xl font-semibold shadow-soft transition-all duration-200 cursor-pointer"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white text-rose-600 border-2 border-rose-200 px-3 py-3 text-sm rounded-xl font-semibold hover:bg-rose-50 transition-all duration-200 cursor-pointer"
                >
                  <Phone size={16} />
                  Zadzwoń
                </a>
              </div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-soft hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <FacebookIcon size={18} />
                Umów wizytę
              </a>
              <a
                href="#opinie"
                className="flex items-center justify-center gap-2 bg-white text-rose-600 border-2 border-rose-200 px-4 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base rounded-xl font-semibold hover:bg-rose-50 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                Zobacz opinie klientek
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] fill-rose-400 text-rose-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-plum/70">
                <span className="font-semibold text-plum">5.0/5</span> · ponad 20 opinii na Google i Panoramie Firm
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-24 sm:w-72 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300/50 to-rose-400/30 blur-xl sm:blur-2xl scale-110" aria-hidden="true" />
              <div className="relative aspect-square rounded-full overflow-hidden ring-2 sm:ring-4 ring-white shadow-soft">
                <img
                  src="/natalia-portrait.jpg"
                  alt="Natalia — NG Studio Kosmetologii"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:-bottom-2 sm:-right-2 sm:w-16 sm:h-16 rounded-full bg-white shadow-soft ring-1 ring-rose-100 flex items-center justify-center p-1 sm:p-2.5">
                <img src="/logo-mark.png" alt="" className="w-full h-full object-contain" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="hidden lg:flex justify-center mt-6 flex-col items-center gap-1 text-plum/60"
          aria-hidden="true"
        >
          <span className="text-xs font-medium">Przewiń, aby dowiedzieć się więcej</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
