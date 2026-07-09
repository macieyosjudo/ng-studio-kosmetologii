import SectionReveal from './SectionReveal'

const stats = [
  { value: '5.0/5', label: 'Średnia ocena' },
  { value: '20+', label: 'Opinii Google i Panorama Firm' },
  { value: '100%', label: 'Pozytywnych opinii' },
  { value: '4+ lata', label: 'Zaufania klientek' },
]

export default function Stats() {
  return (
    <section className="py-6 sm:py-14 px-4 sm:px-6 lg:px-8 bg-plum" aria-label="Statystyki">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8" role="list">
        {stats.map(({ value, label }, i) => (
          <SectionReveal key={label} delay={i * 0.08} className="text-center" >
            <div role="listitem">
              <div className="font-display text-xl sm:text-4xl font-semibold text-rose-300 mb-0.5 sm:mb-1">{value}</div>
              <div className="text-xs sm:text-sm text-white/60">{label}</div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
