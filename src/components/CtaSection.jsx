import SectionReveal from './SectionReveal'
import InstagramIcon from './InstagramIcon'
import { Phone } from 'lucide-react'
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL } from '../constants'

export default function CtaSection() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-500 to-rose-700 relative overflow-hidden" aria-label="Umów wizytę">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>
      <SectionReveal className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white mb-2 sm:mb-4">
          Umów się na konsultację
        </h2>
        <p className="text-white/85 text-base sm:text-lg mb-4 sm:mb-8 max-w-xl mx-auto">
          <span className="sm:hidden">Napisz do nas na Instagramie lub zadzwoń, a wspólnie dobierzemy zabieg idealny dla Ciebie.</span>
          <span className="hidden sm:inline">Napisz do nas na Instagramie, a wspólnie dobierzemy zabieg idealny dla Ciebie.</span>
        </p>
        <div className="flex gap-2 sm:hidden max-w-xs mx-auto">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white text-rose-600 hover:bg-rose-50 px-3 py-3 text-sm rounded-xl font-semibold shadow-lg transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-plum text-white hover:bg-plum/90 px-3 py-3 text-sm rounded-xl font-semibold shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        >
          <InstagramIcon size={18} />
          Napisz na Instagramie
        </a>
      </SectionReveal>
    </section>
  )
}
