import { Zap, Layers, Droplets, Syringe, Building2, Users, Camera, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

// Fill in `src` (e.g. '/gallery/wnetrze.jpg', place the file in public/gallery/) as real
// photos become available — until then each tile shows a labelled placeholder.
const galleryItems = [
  { src: null, alt: 'Wnętrze gabinetu', Icon: Building2, gradient: 'from-rose-200 to-rose-400' },
  { src: null, alt: 'Redukcja zmarszczek — efekt', Icon: Zap, gradient: 'from-fuchsia-300 to-rose-500' },
  { src: null, alt: 'Wolumetria twarzy', Icon: Layers, gradient: 'from-purple-300 to-fuchsia-400' },
  { src: null, alt: 'Wodorowe oczyszczanie twarzy', Icon: Droplets, gradient: 'from-sky-200 to-rose-300' },
  { src: null, alt: 'Mezoterapia igłowa', Icon: Syringe, gradient: 'from-rose-300 to-purple-400' },
  { src: null, alt: 'Zespół NG Studio', Icon: Users, gradient: 'from-purple-300 to-rose-400' },
  { src: null, alt: 'Efekty zabiegów', Icon: Camera, gradient: 'from-rose-400 to-fuchsia-500' },
  { src: null, alt: 'Gabinet zabiegowy', Icon: Sparkles, gradient: 'from-rose-400 to-purple-300' },
]

export default function GaleriaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Galeria"
        title="Zobacz nasze studio"
        subtitle="Wnętrze gabinetu i efekty zabiegów NG Studio Kosmetologii"
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Galeria zdjęć">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryItems.map(({ src, alt, Icon, gradient }, i) => (
              <SectionReveal key={alt} delay={(i % 4) * 0.06}>
                <figure className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-shadow duration-300">
                  {src ? (
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}>
                      <Icon size={28} className="text-white/90" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-white/90 text-xs font-medium text-center px-3">{alt}</span>
                    </div>
                  )}
                </figure>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
