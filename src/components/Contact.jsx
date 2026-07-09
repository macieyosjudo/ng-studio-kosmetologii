import { MapPin, Clock } from 'lucide-react'
import SectionReveal from './SectionReveal'
import InstagramIcon from './InstagramIcon'
import { INSTAGRAM_URL, MAPS_SEARCH_URL, CITY } from '../constants'

const cards = [
  {
    Icon: InstagramIcon,
    title: 'Instagram',
    desc: 'Najszybszy sposób na kontakt i rezerwację terminu.',
    action: { label: '@ng.studiokosmetologii', href: INSTAGRAM_URL },
  },
  {
    Icon: MapPin,
    title: 'Lokalizacja',
    desc: `Gabinet znajduje się w ${CITY}. Dokładny adres i dojazd znajdziesz na Google Maps.`,
    action: { label: 'Znajdź nas na mapie', href: MAPS_SEARCH_URL },
  },
  {
    Icon: Clock,
    title: 'Godziny i terminy',
    desc: 'Aktualną dostępność terminów i godziny otwarcia sprawdzisz najszybciej na Instagramie.',
    action: { label: 'Sprawdź dostępność', href: INSTAGRAM_URL },
  },
]

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-rose-50/40" aria-label="Kontakt">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-14">
          <span className="inline-block bg-white text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">Kontakt</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum mb-4">Zapraszamy do studia</h2>
          <p className="text-plum/70 text-lg max-w-lg mx-auto">Skontaktuj się z nami i umów wizytę w NG Studio Kosmetologii</p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map(({ Icon, title, desc, action }, i) => (
            <SectionReveal key={title} delay={i * 0.1}>
              <div className="bg-white border border-rose-100/80 rounded-2xl p-7 h-full flex flex-col items-center text-center shadow-sm hover:shadow-soft transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center mb-4">
                  <Icon size={22} color="white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-plum mb-2">{title}</h3>
                <p className="text-plum/70 text-sm leading-relaxed mb-5">{desc}</p>
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-rose-600 hover:text-rose-700 font-semibold text-sm underline underline-offset-4 cursor-pointer"
                >
                  {action.label}
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
