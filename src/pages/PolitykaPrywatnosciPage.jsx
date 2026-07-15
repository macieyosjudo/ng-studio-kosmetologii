import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import { ADDRESS, PHONE_DISPLAY, INSTAGRAM_URL } from '../constants'

export default function PolitykaPrywatnosciPage() {
  return (
    <div>
      <PageHero eyebrow="Prywatność" title="Polityka prywatności" />

      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Polityka prywatności">
        <SectionReveal className="max-w-3xl mx-auto space-y-8 text-plum/80 text-sm sm:text-base leading-relaxed">
          <p className="text-xs sm:text-sm text-plum/60">Ostatnia aktualizacja: lipiec 2026</p>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">1. Administrator danych</h2>
            <p>
              Administratorem danych w zakresie opisanym w niniejszym dokumencie jest NG Studio Kosmetologii,
              {' '}{ADDRESS}, tel. {PHONE_DISPLAY}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">2. Zakres przetwarzanych danych</h2>
            <p>
              Ta strona internetowa ma charakter wyłącznie informacyjny i nie zawiera formularzy kontaktowych
              ani innych mechanizmów automatycznego zbierania danych osobowych. Nie zakładamy kont użytkowników,
              nie prowadzimy rezerwacji online i nie przechowujemy żadnych danych odwiedzających na serwerze strony.
            </p>
            <p className="mt-2">
              Kontakt w celu umówienia wizyty odbywa się wyłącznie poza tą stroną — telefonicznie lub przez wiadomość
              na Instagramie. W takim przypadku podane przez Ciebie dane (np. numer telefonu, treść wiadomości)
              przetwarzane są zgodnie z zasadami operatora telekomunikacyjnego lub polityką prywatności Meta
              Platforms, Inc. (Instagram), a nie przez niniejszą stronę internetową.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">3. Pliki cookies i technologie śledzące</h2>
            <p>
              Strona nie wykorzystuje plików cookies ani podobnych technologii śledzących. Nie korzystamy z narzędzi
              analitycznych (np. Google Analytics) ani reklamowych. Wszystkie zasoby strony (czcionki, obrazy, style)
              są hostowane na naszym serwerze — podczas przeglądania strony żadne dane nie są przesyłane do
              zewnętrznych serwerów w celach innych niż wyświetlenie samej strony.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">4. Logi serwera</h2>
            <p>
              Podczas korzystania ze strony, zapytania wysyłane przez Twoją przeglądarkę są automatycznie zapisywane
              w logach serwera (m.in. adres IP, data i czas systemu, informacje o przeglądarce). Dane te są
              przetwarzane wyłącznie w celach technicznych i administracyjnych (zapewnienie bezpieczeństwa
              i stabilności strony) na podstawie naszego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)
              i nie są wykorzystywane do Twojej identyfikacji.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">5. Odnośniki zewnętrzne</h2>
            <p>
              Strona zawiera odnośniki do{' '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-rose-600 underline underline-offset-2">
                Instagrama
              </a>{' '}
              oraz Google Maps. Po kliknięciu w te odnośniki opuszczasz naszą stronę i podlegasz politykom
              prywatności tych serwisów (odpowiednio Meta Platforms, Inc. i Google LLC), na które nie mamy wpływu.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">6. Opinie klientek</h2>
            <p>
              Prezentowane w sekcji „Opinie” treści pochodzą z publicznie dostępnych profili firmy w serwisach
              Google i Panorama Firm i zostały opublikowane przez klientki dobrowolnie na tych platformach.
              Wykorzystujemy je w celach informacyjnych na podstawie naszego prawnie uzasadnionego interesu
              (promocja usług). Jeśli chcesz, aby Twoja opinia została usunięta z naszej strony, skontaktuj się
              z nami telefonicznie lub przez Instagram.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">7. Twoje prawa</h2>
            <p>
              W związku z kontaktem poza stroną internetową (telefon, Instagram) przysługuje Ci prawo dostępu do
              danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa
              Urzędu Ochrony Danych Osobowych (UODO), jeśli uznasz, że przetwarzanie narusza przepisy RODO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-plum mb-2">8. Zmiany polityki</h2>
            <p>
              Polityka prywatności może być okazjonalnie aktualizowana, np. w związku ze zmianą funkcjonalności
              strony. Aktualna wersja zawsze dostępna jest pod tym adresem.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  )
}
