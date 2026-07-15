import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import { ADDRESS, PHONE_DISPLAY } from '../constants'

export default function RegulaminPage() {
  return (
    <div>
      <PageHero eyebrow="Regulamin" title="Regulamin strony" />

      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Regulamin">
        <SectionReveal className="max-w-3xl mx-auto space-y-8 text-plum/80 text-sm sm:text-base leading-relaxed">
          <p className="text-xs sm:text-sm text-plum/60">Ostatnia aktualizacja: lipiec 2026</p>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">1. Postanowienia ogólne</h2>
            <p>
              Niniejszy regulamin określa zasady korzystania ze strony internetowej NG Studio Kosmetologii,
              prowadzonej przez gabinet kosmetologii estetycznej z siedzibą pod adresem {ADDRESS}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">2. Charakter strony</h2>
            <p>
              Strona ma charakter wyłącznie informacyjny (wizytówkowy). Nie umożliwia dokonywania rezerwacji ani
              płatności online. Umówienie wizyty odbywa się telefonicznie ({PHONE_DISPLAY}) lub za pośrednictwem
              wiadomości na Instagramie.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">3. Charakter treści</h2>
            <p>
              Informacje o zabiegach i cenniku zamieszczone na stronie mają charakter poglądowy i nie stanowią
              oferty w rozumieniu art. 66 Kodeksu cywilnego ani porady medycznej. Ostateczny zakres zabiegu,
              ewentualne przeciwwskazania i dokładna cena ustalane są indywidualnie podczas konsultacji w gabinecie.
              Ceny podane w cenniku mogą ulec zmianie.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">4. Własność intelektualna</h2>
            <p>
              Zawartość strony — teksty, zdjęcia, logo i grafiki — stanowi własność NG Studio Kosmetologii lub jest
              wykorzystywana za zgodą uprawnionych podmiotów i podlega ochronie prawnoautorskiej. Kopiowanie,
              powielanie lub wykorzystywanie tych treści bez zgody jest zabronione.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">5. Odpowiedzialność</h2>
            <p>
              Dokładamy starań, aby informacje prezentowane na stronie były aktualne i rzetelne, jednak nie
              ponosimy odpowiedzialności za przejściowe błędy, przerwy w dostępności strony lub nieaktualność
              danych wynikającą z opóźnienia w ich aktualizacji.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">6. Dane osobowe</h2>
            <p>
              Zasady przetwarzania danych osobowych opisane są w{' '}
              <a href="/polityka-prywatnosci" className="text-rose-600 underline underline-offset-2">
                Polityce Prywatności
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">7. Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.
              W razie pytań dotyczących regulaminu prosimy o kontakt telefoniczny lub przez Instagram.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
