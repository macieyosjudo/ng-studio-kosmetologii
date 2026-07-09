import SectionReveal from './SectionReveal'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL } from '../constants'

export default function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-500 to-rose-700 relative overflow-hidden" aria-label="Umów wizytę">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>
      <SectionReveal className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
          Umów się na konsultację
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
          Napisz do nas na Instagramie, a wspólnie dobierzemy zabieg idealny dla Ciebie.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        >
          <InstagramIcon size={18} />
          Napisz na Instagramie
        </a>
      </SectionReveal>
    </section>
  )
}
