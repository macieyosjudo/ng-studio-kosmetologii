import SectionReveal from './SectionReveal'

const stats = [
  { value: '5.0/5', label: 'Średnia ocena', shortLabel: 'Średnia ocena' },
  { value: '20+', label: 'Opinii Google i Panorama Firm', shortLabel: 'Opinii' },
  { value: '100%', label: 'Pozytywnych opinii', shortLabel: 'Pozytywnych' },
  { value: '4+ lata', label: 'Zaufania klientek', shortLabel: 'Zaufania' },
]

export default function Stats() {
  return (
    <section className="py-3 sm:py-14 px-4 sm:px-6 lg:px-8 bg-plum" aria-label="Statystyki">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-x-1.5 sm:gap-8" role="list">
        {stats.map(({ value, label, shortLabel }, i) => (
          <SectionReveal key={label} delay={i * 0.08} className="text-center" >
            <div role="listitem">
              <div className="font-display text-sm sm:text-4xl font-semibold text-rose-300 mb-0 sm:mb-1">{value}</div>
              <div className="text-[9px] sm:text-sm text-white/60 leading-tight">
                <span className="sm:hidden">{shortLabel}</span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
