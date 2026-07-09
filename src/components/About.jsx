import { CheckCircle2 } from 'lucide-react'
import SectionReveal from './SectionReveal'

const points = [
  'Indywidualne podejście do każdej klientki',
  'Fachowa wiedza poparta wieloletnim doświadczeniem',
  'Zabiegi z zakresu medycyny estetycznej i kosmetologii',
  'Dokładne wyjaśnienie przebiegu zabiegu i pielęgnacji pozabiegowej',
  'Ciepła, przyjazna atmosfera gabinetu',
]

export default function About() {
  return (
    <section id="o-nas" className="py-6 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="O nas">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-14 items-center">
        <SectionReveal direction="right" className="order-2 lg:order-1">
          <div className="relative max-w-[130px] mx-auto sm:max-w-none">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-rose-50 to-rose-200/60 flex items-center justify-center shadow-soft p-3 sm:p-12">
              <img src="/logo.png" alt="NG Studio Kosmetologii" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-2 -right-1 sm:-bottom-6 sm:-right-8 bg-white rounded-xl sm:rounded-2xl shadow-soft px-2 py-1 sm:px-6 sm:py-4 border border-rose-100">
              <div className="text-xs sm:text-2xl font-bold text-gradient font-display">5.0★</div>
              <div className="hidden sm:block text-xs text-plum/70 font-medium">średnia ocena klientek</div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal direction="left" delay={0.1} className="order-1 lg:order-2">
          <span className="inline-block bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-2 sm:mb-4">O nas</span>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-plum mb-2 sm:mb-6">
            Poznaj Natalię
          </h2>
          <p className="text-plum/70 text-base sm:text-lg leading-snug sm:leading-relaxed mb-2 sm:mb-6">
            Natalia to kosmetolog prowadząca NG Studio Kosmetologii w Żywcu, specjalizująca się
            w redukcji zmarszczek, wolumetrii twarzy, mezoterapii igłowej oraz wodorowym
            oczyszczaniu twarzy. Łączy fachową wiedzę z uważnością na potrzeby i oczekiwania
            każdej klientki.
          </p>
          <ul className="space-y-1.5 sm:space-y-3" role="list">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 sm:gap-3 text-plum/80" role="listitem">
                <div className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px] text-rose-500" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
