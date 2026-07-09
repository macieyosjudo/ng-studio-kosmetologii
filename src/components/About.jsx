import { CheckCircle2 } from 'lucide-react'
import SectionReveal from './SectionReveal'

const points = [
  'Indywidualne podejście do każdej klientki',
  'Fachowa wiedza poparta wieloletnim doświadczeniem',
  'Naprawa i korekta ust po zabiegach w innych gabinetach',
  'Dokładne wyjaśnienie przebiegu zabiegu i pielęgnacji pozabiegowej',
  'Ciepła, przyjazna atmosfera gabinetu',
]

export default function About() {
  return (
    <section id="o-nas" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-label="O nas">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <SectionReveal direction="right" className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-rose-100 to-rose-300/60 flex items-center justify-center shadow-soft">
              <span className="font-display text-8xl text-white/90 select-none" aria-hidden="true">N</span>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-soft px-6 py-4 border border-rose-100">
              <div className="text-2xl font-bold text-gradient font-display">5.0★</div>
              <div className="text-xs text-plum/70 font-medium">średnia ocena klientek</div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal direction="left" delay={0.1} className="order-1 lg:order-2">
          <span className="inline-block bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">O nas</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum mb-6">
            Poznaj Natalię
          </h2>
          <p className="text-plum/70 text-lg leading-relaxed mb-6">
            Natalia to kosmetolog prowadząca NG Studio Kosmetologii w Żywcu, znana klientkom
            przede wszystkim z precyzyjnego modelowania i powiększania ust oraz umiejętności
            skutecznej korekty ust po nieudanych zabiegach wykonanych gdzie indziej. Łączy
            fachową wiedzę z uważnością na potrzeby i oczekiwania każdej klientki.
          </p>
          <ul className="space-y-3" role="list">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-plum/80" role="listitem">
                <div className="w-6 h-6 mt-0.5 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-rose-500" aria-hidden="true" />
                </div>
                {p}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
