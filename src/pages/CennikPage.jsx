import { Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const categories = [
  {
    title: 'Redukcja zmarszczek',
    items: [
      { name: 'Okolica oczu', note: '1 partia + foxy eye', price: '700 zł' },
      { name: 'Czoło', note: '2 partie + foxy eye', price: '1200 zł' },
      { name: 'Czoło + okolica oczu', note: '3 partie + foxy eye', price: '1400 zł' },
    ],
  },
  {
    title: 'Wolumetria twarzy',
    items: [
      { name: 'Odbudowa wolumetryczna brody', note: 'modelowanie brody · 1.1 ml', price: '850 zł' },
      { name: 'Odbudowa wolumetryczna kości jarzmowych', note: 'modelowanie kości jarzmowych · 2.2 ml', price: '1400 zł' },
      { name: 'Odbudowa wolumetryczna linii żuchwy', note: 'modelowanie linii żuchwy · 2.2 ml', price: '1400 zł' },
      { name: 'Dodatkowy ml preparatu', note: '1.1 ml', price: '600 zł' },
    ],
  },
  {
    title: 'Mezoterapia igłowa',
    items: [
      { name: 'Koktajl witaminowy', note: 'twarz', price: '360 zł', note2: 'twarz + szyja + dekolt', price2: '560 zł' },
      { name: 'Z kwasem hialuronowym', note: 'twarz', price: '460 zł', note2: 'twarz + szyja + dekolt', price2: '760 zł' },
      { name: 'Hydra booster', note: 'twarz', price: '660 zł', note2: 'twarz + szyja + dekolt', price2: '1160 zł' },
      { name: 'Mezoterapia skóry głowy', note: 'kwas hialuronowy + peptydy biomimetyczne', price: '660 zł' },
      { name: 'Mezoterapia okolicy oczu', note: 'biostymulacja', price: '460 zł' },
    ],
  },
  {
    title: 'Wodorowe oczyszczanie twarzy',
    items: [
      { name: 'Pakiet Basic', note: 'demakijaż + peeling kawitacyjny + wodorowe oczyszczanie', price: '180 zł' },
      { name: 'Pakiet Basic + oczyszczanie manualne', note: 'demakijaż + peeling kawitacyjny + wodorowe oczyszczanie + oczyszczanie manualne', price: '280 zł' },
      { name: 'Pakiet Medium', note: 'demakijaż + peeling kawitacyjny + wodorowe oczyszczanie + infuzja tlenowa', price: '280 zł' },
      { name: 'Pakiet Full', note: 'demakijaż + peeling enzymatyczny + peeling kawitacyjny + wodorowe oczyszczanie + infuzja tlenowa + sonoforeza + radiofrekwencja RF + chłodząca głowica', price: '380 zł' },
    ],
  },
]

export default function CennikPage() {
  return (
    <div>
      <PageHero
        eyebrow="Cennik"
        title="Cennik zabiegów"
        subtitle="Pełna lista zabiegów NG Studio Kosmetologii wraz z cenami"
      />

      <section className="py-8 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Cennik">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-10">
          {categories.map((cat, ci) => (
            <SectionReveal key={cat.title} delay={ci * 0.05}>
              <div className="bg-rose-50/40 border border-rose-100/80 rounded-2xl p-4 sm:p-8">
                <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-5">
                  <Sparkles size={18} className="text-rose-500" aria-hidden="true" />
                  <h2 className="font-display text-base sm:text-2xl font-semibold text-plum">{cat.title}</h2>
                </div>
                <ul className="divide-y divide-rose-100" role="list">
                  {cat.items.map((item) => (
                    <li key={item.name} className="py-2.5 sm:py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div>
                          <p className="text-sm sm:text-base font-medium text-plum">{item.name}</p>
                          {item.note && <p className="text-xs sm:text-sm text-plum/70 mt-0.5">{item.note}</p>}
                        </div>
                        <span className="font-display text-base sm:text-lg font-semibold text-rose-600 whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.note2 && (
                        <div className="flex items-start justify-between gap-3 sm:gap-4 mt-1.5 pt-1.5 sm:mt-2 sm:pt-2 border-t border-dashed border-rose-100">
                          <p className="text-xs sm:text-sm text-plum/70">{item.note2}</p>
                          <span className="font-display text-sm sm:text-base font-semibold text-rose-500 whitespace-nowrap">{item.price2}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}

          <SectionReveal delay={0.1}>
            <p className="text-center text-xs sm:text-sm text-plum/70">
              Ceny mogą się różnić w zależności od indywidualnych potrzeb — dokładną wycenę ustalimy na konsultacji.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
