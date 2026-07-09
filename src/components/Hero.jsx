import { motion } from 'framer-motion'
import { Star, ChevronDown } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL, CITY } from '../constants'

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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/70 border border-rose-200 text-rose-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" aria-hidden="true" />
              Kosmetologia estetyczna · {CITY}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-plum mb-5"
            >
              Piękno oparte na <span className="text-gradient">wiedzy i doświadczeniu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-plum/70 leading-relaxed mb-8 max-w-lg"
            >
              NG Studio Kosmetologii to gabinet Natalii w Żywcu — redukcja zmarszczek, wolumetria
              twarzy, mezoterapia igłowa oraz wodorowe oczyszczanie twarzy. Indywidualne podejście,
              fachowa wiedza i efekty, które od lat polecają klientki.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-soft hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <InstagramIcon size={18} />
                Umów wizytę
              </a>
              <a
                href="#opinie"
                className="flex items-center justify-center gap-2 bg-white text-rose-600 border-2 border-rose-200 px-6 py-3.5 rounded-xl font-semibold hover:bg-rose-50 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                Zobacz opinie klientek
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-rose-400 text-rose-400" />
                ))}
              </div>
              <p className="text-sm text-plum/70">
                <span className="font-semibold text-plum">5.0/5</span> · ponad 20 opinii na Google i Panoramie Firm
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-56 sm:w-72 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-300/50 to-rose-400/30 blur-2xl scale-110" aria-hidden="true" />
              <div className="relative aspect-square rounded-full overflow-hidden ring-4 ring-white shadow-soft">
                <img
                  src="/natalia-portrait.jpg"
                  alt="Natalia — NG Studio Kosmetologii"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-white shadow-soft ring-1 ring-rose-100 flex items-center justify-center p-2.5">
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
