import { Star, Quote } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { MAPS_SEARCH_URL } from '../constants'

const reviews = [
  {
    name: 'Klaudia',
    source: 'Google',
    time: '5 miesięcy temu',
    text: 'Kilka różnych wizyt już za mną i za każdym razem byłam bardzo zadowolona. Na pewno wrócę jeszcze nieraz. Serdecznie polecam!',
  },
  {
    name: 'Klientka',
    source: 'Panorama Firm',
    time: '3 lata temu',
    text: 'Bez wątpienia Pani Natalia to najlepszy zabiegowiec / kosmetolog w Żywcu! Robiłam modelowanie ust trzykrotnie i dopiero u Pani Natalii (NG Studio Kosmetologii) jestem w pełni zadowolona.',
  },
  {
    name: 'Klaudia Szwajca',
    source: 'Google',
    time: 'rok temu',
    text: 'Mój zabieg na usta był pierwszy raz i na pewno nie ostatni. Pani Natalia od razu ciepło mnie przywitała, wszystko objaśniła na początku.',
  },
  {
    name: 'Emilia M',
    source: 'Google',
    time: 'rok temu',
    text: 'Mój pierwszy zabieg powiększania ust w tym salonie i nie ostatni. Pani Natalia jest bardzo profesjonalna, przy tym uśmiechnięta, wszystko cudownie wyjaśnia.',
  },
  {
    name: 'Wiktoria Sacha',
    source: 'Google',
    time: 'rok temu',
    text: 'Zabieg oczyszczania wodorowego spełnił moje oczekiwania, Pani Natalka zna się na rzeczy. Miła, sympatyczna i służy dobrą radą w temacie pielęgnacji skóry. Bardzo polecam!',
  },
  {
    name: 'Kinga Wawok',
    source: 'Google',
    time: 'rok temu',
    text: 'Jestem bardzo wdzięczna, że trafiłam właśnie na tak wspaniałą panią, która z sercem podchodzi do ludzi jak i do branży, w której pracuje. Wszystko na spokojnie.',
  },
  {
    name: 'Ира Молодченко',
    source: 'Google',
    time: '2 lata temu',
    text: 'Naprawiłam usta po nieudanym powiększaniu w innym salonie. Bardzo miła obsługa, dużo informacji po powiększeniu i gojeniu ust. Jestem teraz bardzo zadowolona ze swoich nowych ust.',
  },
  {
    name: 'Marta Pieterwas',
    source: 'Google',
    time: '3 lata temu',
    text: 'Miejsce godne polecenia! Natalia ma ogromny talent, dobrze doradzi, ma wyczucie smaku.',
  },
  {
    name: 'Zosia Dudys',
    source: 'Google',
    time: 'rok temu',
    text: 'Pierwszy raz powiększałam usta i bardzo polecam to miejsce. Wszystko zostało mi wyjaśnione, super atmosfera i miła pani, a efekt lepszy niż sobie wyobrażałam!',
  },
  {
    name: 'Monika Supłat',
    source: 'Google',
    time: '2 lata temu',
    text: 'Polecam z całego serca. Świetna atmosfera i dbałość o komfort klienta. Usta uratowane po modelowaniu w innym salonie, indywidualne podejście i profesjonalna obsługa.',
  },
  {
    name: 'Sabina Wróbel',
    source: 'Google',
    time: '4 lata temu',
    text: 'Pełen profesjonalizm! Natalia słucha zawsze oczekiwań klientek. Podchodzi do każdej klientki w sposób wyjątkowy i indywidualny. Z czystym sumieniem mogę polecić ten salon!',
  },
  {
    name: 'Anna Pępek',
    source: 'Google',
    time: '4 lata temu',
    text: 'Najlepsze Studio Kosmetologii w Żywcu! Natalia jest osobą dokładną i staranną, posiadającą wyczucie estetyki.',
  },
]

export default function Testimonials() {
  return (
    <section id="opinie" className="py-10 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream" aria-label="Opinie klientek">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-6 sm:mb-14">
          <span className="inline-block bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-2 sm:mb-4">Opinie</span>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-plum mb-2 sm:mb-4">Co mówią nasze klientki</h2>
          <div className="flex items-center justify-center gap-2 mb-2" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-400 text-rose-400" />
            ))}
          </div>
          <p className="text-plum/70 text-base sm:text-lg">5.0/5 na podstawie ponad 20 opinii z Google i Panoramy Firm</p>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {reviews.map((r, i) => (
            <SectionReveal key={`${r.name}-${i}`} delay={(i % 3) * 0.08}>
              <figure className="bg-white border border-rose-100/80 rounded-2xl p-3 sm:p-6 h-full flex flex-col shadow-sm hover:shadow-soft transition-shadow duration-300">
                <Quote size={22} className="hidden sm:block text-rose-300 mb-3" aria-hidden="true" />
                <blockquote className="text-plum/75 text-[11px] sm:text-sm leading-snug sm:leading-relaxed flex-1 line-clamp-5 sm:line-clamp-none">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-2 pt-2 sm:mt-5 sm:pt-4 border-t border-rose-50">
                  <div className="text-xs sm:text-sm font-semibold text-plum truncate">{r.name}</div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-plum/70 truncate">
                    {r.source} ·
                    <Star size={11} className="fill-rose-400 text-rose-400 flex-shrink-0" aria-hidden="true" />
                    5
                  </div>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-6 sm:mt-10">
          <a
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold text-sm underline underline-offset-4 cursor-pointer"
          >
            Zobacz wszystkie opinie na Google
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
