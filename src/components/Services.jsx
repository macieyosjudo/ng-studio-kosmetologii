import { Link } from 'react-router-dom'
import { Syringe, Zap, Layers, Droplets, ArrowRight } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { INSTAGRAM_URL } from '../constants'

const services = [
  {
    Icon: Zap,
    title: 'Redukcja zmarszczek',
    desc: 'Wygładzenie zmarszczek mimicznych okolicy oczu i czoła.',
    color: 'from-purple-400 to-fuchsia-500',
  },
  {
    Icon: Layers,
    title: 'Wolumetria twarzy',
    desc: 'Modelowanie brody, kości jarzmowych i linii żuchwy kwasem hialuronowym.',
    color: 'from-rose-300 to-purple-400',
  },
  {
    Icon: Syringe,
    title: 'Mezoterapia igłowa',
    desc: 'Odżywienie i rewitalizacja skóry poprzez precyzyjne mikroiniekcje z aktywnymi składnikami.',
    color: 'from-rose-400 to-purple-400',
  },
  {
    Icon: Droplets,
    title: 'Wodorowe oczyszczanie twarzy',
    desc: 'Głębokie, delikatne oczyszczanie skóry twarzy z użyciem technologii wodorowej.',
    color: 'from-sky-300 to-rose-300',
  },
]

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-rose-50/40" aria-label="Nasze usługi">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-14">
          <span className="inline-block bg-white text-rose-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">Oferta</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-plum mb-4">Nasze Usługi</h2>
          <p className="text-plum/70 text-lg max-w-lg mx-auto">Zabiegi kosmetologiczne dopasowane do Twoich potrzeb i oczekiwań</p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map(({ Icon, title, desc, color }, i) => (
            <SectionReveal key={title} delay={(i % 4) * 0.1}>
              <div className="group bg-white border border-rose-100/80 rounded-2xl p-6 sm:p-7 hover:-translate-y-2 hover:shadow-soft transition-all duration-300 h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} color="white" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-plum mb-2 font-display">{title}</h3>
                <p className="text-plum/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/cennik"
            className="inline-flex items-center gap-2 border-2 border-rose-200 text-rose-600 hover:bg-rose-50 px-7 py-3.5 rounded-xl font-semibold transition-colors cursor-pointer"
          >
            Zobacz cennik <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-soft hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            Zapytaj o dostępne terminy <ArrowRight size={16} aria-hidden="true" />
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
