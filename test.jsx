const { useState } = React;

function Terms() {
  const [lang, setLang] = useState("en");

  const toggleBtn = (selected) =>
    `px-5 py-3 text-base md:text-[0.9rem] font-thin uppercase border ${selected ? "bg-black text-white" : "border-[#3c3c3c] text-[#868686]"
    }`;

  const titles = {
    en: "Terms and Conditions",
    nl: "Algemene Voorwaarden",
  };

  return (
    <main className="p-6 sm:p-6 md:p-20 bg-transparent">
      {/* Header area: title + language buttons */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-5xl sm:text-8xl md:text-8xl font-extrabold">{titles[lang]}</h1>
        </div>

        <div className="flex gap-4">
          <button className={toggleBtn(lang === "en")} onClick={() => setLang("en")}>
            English
          </button>
          <button className={toggleBtn(lang === "nl")} onClick={() => setLang("nl")}>
            Dutch
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none text-base md:text-[1rem] text-[#868686]">
        {lang === "en" ? (
          <>
            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[1. Introduction]</h3>
            <p>
              Welcome to <span className="text-[#cc751b]">The Four Deuces B.V.</span> (<span className="text-[#cc751b]">"Studio"</span>). These terms and conditions (<span className="text-[#cc751b]">"Terms"</span>)
              apply to all clients (<span className="text-[#cc751b]">"Client"</span> and <span className="text-[#cc751b]">"Clients"</span>) receiving services from the Studio
              offered by resident and/or guesting artists (<span className="text-[#cc751b]">"Artists"</span> or <span className="text-[#cc751b]">"Artists"</span>). By scheduling
              an appointment or receiving services, you agree to be bound by these Terms.
            </p>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[2. Appointments]</h3>
            <div className="space-y-4">
              <p>
                <strong>Booking:</strong> Appointments can be booked in person, via email, through
                Instagram, or on our website. Please note that walk-ins are not an option.
              </p>
              <p>
                <strong>Email:</strong> <a
                  href="mailto:booking@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  booking@thefourdeuces.nl
                </a> and <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  studio@thefourdeuces.nl
                </a>
                <br />
                <strong>Instagram:</strong> <a
                  href="https://www.instagram.com/the.four.deuces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  @the.four.deuces
                </a>
                <br />
                <strong>Website:</strong> <a
                  href="https://www.thefourdeuces.nl/book.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  www.thefourdeuces.nl/book
                </a>
              </p>
              <p>
                <strong>Invalid Appointments:</strong> Appointments scheduled through any sources
                other than those listed above may be invalidated. To ensure your appointment is
                valid, please only use the official booking methods.
              </p>
              <p>
                <strong>Deposit:</strong> A non-refundable deposit is required to secure an
                appointment. The deposit will be applied to the final cost of the tattoo.
              </p>
              <p>
                <strong>Rescheduling and Cancellations:</strong> Clients must provide <span className="text-[#cc751b]">at least 48
                  hours' notice</span> to reschedule or cancel an appointment. Failure to do so will result
                in the forfeiture of the deposit.
              </p>
              <p>
                <strong>Late Arrivals:</strong> If a client arrive more than <span className="text-[#cc751b]">30 minutes late
                  without notifying</span> the artist or manager, the appointment may be rescheduled or
                canceled, and the deposit may be forfeited.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[3. Pricing and Payment]</h3>
            <div className="space-y-4">
              <p>
                <strong>Pricing:</strong> Tattoo pricing varies based on size, complexity, and
                placement. The final cost will be determined after a consultation with the artist,
                during which the design, location, and any special requirements will be discussed.
              </p>
              <p>
                <strong>Standard Tattoos:</strong> Prices for standard tattoos are calculated based
                on the time required to complete the design, the intricacy of the artwork, and the
                location on the body. Larger or more detailed pieces may require multiple sessions,
                which will be factored into the final cost.
              </p>
              <p>
                <strong>Cover-Ups:</strong> Cover-up tattoos typically involve more intricate work
                to effectively conceal the existing tattoo. The final cost will depend on the
                extent of the cover-up and the number of sessions required.
              </p>
              <p>
                <strong>Reworks and Modifications:</strong> If a client requests changes to an
                existing tattoo, whether originally done by our Studio or another, these reworks or
                modifications will be priced based on the complexity of the changes and the time
                required. Similar to cover-ups, these may require more sessions and carry
                additional costs.
              </p>
              <p>
                <strong>Payment:</strong> Deposit is required upon completion of the tattoo. We
                accept cash, credit, and debit cards. Upon agreement between the client and a
                resident artist or manager (not applicable to guest artists), payment can also be
                made via PayPal.
              </p>
              <p>
                <strong>Gratuities:</strong> Gratuities are appreciated but not required.
              </p>
              <p>
                <strong>Additional Costs:</strong> Any additional work or changes requested by the
                client during the session may incur extra charges.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[4. Health and Safety]</h3>
            <div className="space-y-4">
              <p>
                <strong>Age Requirement:</strong> We adhere to local regulations and laws,
                therefore, you have to be <span className="text-[#cc751b]">at least 18 years old</span> or accompanied by an adult.
              </p>
              <p>
                <strong>Health Disclosure:</strong> Clients <span className="text-[#cc751b]">must</span> disclose any medical conditions,
                allergies, or skin sensitivities prior to receiving a tattoo. Failure to disclose
                information releases both the tattoo Artist and the Studio from any liability.
              </p>
              <p>
                <strong>Hygiene:</strong> The Studio follows strict hygiene protocols (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  NEN-EN 17169
                </a>) to ensure the safety of our clients and staff. All our artists are
                well-versed in and adhere to this hygiene regulations.
              </p>
              <p>
                <strong>Pregnancy and Medical Conditions:</strong> Pregnant or nursing clients may
                be refused tattoo services. A tattoo will only be performed if the client provides
                written confirmation from their doctor authorizing them to receive a tattoo.
                Failure to do so will result in the forfeiture of the deposit and release both the
                tattoo artist and the Studio from any liability for risks that may arise before,
                during, and after the tattooing process, including the aftercare and healing
                period.
              </p>
              <p>
                <strong>Use of Painkillers and Anesthetics:</strong> The Studio does not use local
                painkillers or anesthetics during the tattooing process.
              </p>
              <p>
                <strong>Repeat Tattoos:</strong> The artist reserves the right to refuse to repeat
                a tattoo on the same area until it has completely healed.
              </p>
              <p>
                <strong>Tattoo Refusal:</strong> The artist reserves the right to refuse a tattoo
                if the risks associated with the tattooing process or healing are considered high
                or difficult to assess. If necessary, the artist is obligated to advise the client
                to consult a doctor before proceeding.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[5. Tattoo Process]</h3>
            <div className="space-y-4">
              <p>
                <strong>Design Approval:</strong> Clients must approve the final design and
                placement before the tattooing process begins. Complaints regarding the tattoo
                design and placement will be void once the final design and placement are approved.
                Verbal approvals hold the same legal power as written approvals, whether on paper,
                by email, or via any social media platform or messenger.
              </p>
              <p>
                <strong>Aftercare:</strong> Detailed aftercare instructions and recommendations
                will be provided in accordance with (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  NEN-EN 17169
                </a>), section 7.12. Clients are
                responsible for following these instructions to ensure proper healing. Failure to
                follow these instructions and recommendations will release both the tattoo Artist
                and the Studio from any liability.
              </p>
              <p>
                <strong>Touch-ups:</strong> One complimentary touch-up is offered within 6 months
                of the initial tattoo date, provided aftercare instructions were followed.
                Additional touch-ups beyond this period, or touch-ups for tattoos that were
                originally cover-ups, may incur additional charges.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[6. Liability]</h3>
            <div className="space-y-4">
              <p>
                <strong>Client Responsibility:</strong> Clients acknowledge the risks associated
                with getting a tattoo, including potential allergic reactions, infections, and
                dissatisfaction with the final outcome. Clients are also responsible for informing
                the artist of any known health issues, such as blood disorders, skin conditions,
                or immune system deficiencies, that could affect the tattooing process or healing.
                Failure to disclose such information releases the tattoo artist and the Studio
                from any liability.
              </p>
              <p>
                <strong>Agreement:</strong> Clients are <span className="text-[#cc751b]">considered to have read and agreed to
                  these terms</span> upon making an appointment and/or receiving tattoo services.
              </p>
              <p>
                <strong>Health Issues:</strong> The Studio is not liable for any health issues or
                complications arising from the tattooing process, including but not limited to
                infections or allergic reactions.
              </p>
              <p>
                <strong>Waiver:</strong> Clients may be requested to sign a waiver releasing the
                Studio from liability for any adverse reactions or outcomes.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[7. Rights and Permissions]</h3>
            <div className="space-y-4">
              <p>
                <strong>Photography:</strong> The Studio reserves the right to take photographs and
                videos of tattoos for promotional purposes. Clients may opt out by informing the
                artist prior to the tattoo session.
              </p>
              <p>
                <strong>Design Rights:</strong> The Studio <span className="text-[#cc751b]">retains the rights to all custom
                  designs created by our artists</span>. Clients may not reproduce the design without
                permission. Reproduction of the design without the consent of the Artist and/or
                Studio will result in liability under the Dutch Copyright Law (Auteurswet).
              </p>
              <p>
                <strong>Intellectual Property:</strong> Any artwork created by the Studio’s
                artists remains the intellectual property of the Studio and may not be used for
                commercial purposes without explicit permission. Unauthorized use of Studio
                artworks will result in liability under the Dutch Copyright Law (Auteurswet).
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[8. Conduct]</h3>
            <div className="space-y-4">
              <p>
                <strong>Behavior:</strong> The Studio maintains a professional environment.
                Inappropriate behavior, including harassment or discrimination, <span className="text-[#cc751b]">will not be
                  tolerated and may result in refusal of service</span>.
              </p>
              <p>
                <strong>Accompaniment:</strong> Due to space and safety considerations,
                accompanying persons should remain on the ground floor during the session.
              </p>
              <p>
                <strong>Conditions:</strong> The Studio reserves the right to refuse tattoo
                consultation or proceed with the process if the client arrives sick, intoxicated,
                under the influence of alcohol or drugs, or in any other unfavorable condition.
              </p>
              <p>
                <strong>Behavior During Session:</strong> Clients must follow all instructions
                provided by the tattoo artist. Failure to comply with instructions may result in
                termination of the session and release both the tattoo Artist and the Studio from
                any liability.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[9. Guest Artists]</h3>
            <div className="space-y-4">
              <p>
                <strong>Legal Status:</strong> The guest artist is not an official employee or
                representative of the Studio and cannot be regarded as such under any
                circumstances. The guest artist operates solely in their own interest and assumes
                personal responsibility, thereby releasing the Studio and its representatives from
                any legal liability. The guest artist provides services on the Studio's premises in
                accordance with the terms of the workspace lease.
              </p>
              <p>
                <strong>Booking with Guest Artists:</strong> Appointments with guest artists are
                subject to availability and may require separate booking procedures. The Studio
                will provide information about how to book with guest artists at the time of their
                visit.
              </p>
              <p>
                <strong>Deposit and Payment:</strong> A non-refundable deposit is required to secure
                an appointment with a guest artist, similar to resident artists. Payment for
                services with guest artists is due upon completion and may be subject to different
                payment methods as specified by the guest artist. Guest artists may not accept
                PayPal payments.
              </p>
              <p>
                <strong>Terms and Conditions:</strong> These terms apply only if the appointment was
                scheduled through an official Studio representative. The Studio releases itself
                from liability for any issues or dissatisfaction arising from appointments scheduled
                directly with guest artists.
              </p>
              <p>
                <strong>Design Approval and Aftercare:</strong> The same design approval and
                aftercare policies apply when receiving services from guest artists. Clients must
                approve the final design and placement before the tattooing process begins.
              </p>
              <p>
                <strong>Touch-ups:</strong> The Studio’s touch-up policy does not apply to work done
                by guest artists. Any touch-ups needed for tattoos by guest artists must be
                arranged directly with the guest artist and may incur additional charges.
              </p>
              <p>
                <strong>Liability:</strong> The Studio and its resident artists are not liable for any
                issues or dissatisfaction arising from services provided by guest artists. Clients
                must address any concerns directly with the guest artist during their visit.
              </p>
              <p>
                <strong>Conduct:</strong> All standard Studio conduct policies apply during sessions
                with guest artists. This includes maintaining appropriate behavior and adhering to
                the Studio's hygiene and safety protocols.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[10. Modifications to Terms]</h3>
            <div className="space-y-4">
              <p>
                The Studio reserves the right to modify these Terms at any time. Clients will be
                notified of any significant changes.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[11. Contact Information]</h3>
            <div className="space-y-4">
              <p>
                For any questions or concerns regarding these Terms, please contact us at&nbsp;
                <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  studio@thefourdeuces.nl
                </a>.
              </p>
            </div>

          </>
        ) : (
          <div className="text-[#868686]">
            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[1. Inleiding]</h3>
            <p>
              Welkom bij <span className="text-[#cc751b]">The Four Deuces B.V.</span> (<span className="text-[#cc751b]">"Studio"</span>). Deze algemene voorwaarden (<span className="text-[#cc751b]">"Voorwaarden"</span>)
              zijn van toepassing op alle klanten (<span className="text-[#cc751b]">"Klant"</span> en <span className="text-[#cc751b]">"Klanten"</span>) die diensten ontvangen van de Studio
              aangeboden door resident en/of gastartiesten (<span className="text-[#cc751b]">"Artiesten"</span>). Door een afspraak te maken of diensten te ontvangen, gaat u akkoord met deze Voorwaarden.
            </p>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[2. Afspraken]</h3>
            <div className="space-y-4">
              <p>
                <strong>Boeking:</strong> Afspraken kunnen persoonlijk, via e-mail, Instagram of via onze website worden geboekt. Let op: binnenlopen zonder afspraak is niet mogelijk.
              </p>
              <p>
                <strong>Email:</strong> <a
                  href="mailto:booking@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  booking@thefourdeuces.nl
                </a> en <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  studio@thefourdeuces.nl
                </a>
                <br />
                <strong>Instagram:</strong> <a
                  href="https://www.instagram.com/the.four.deuces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  @the.four.deuces
                </a>
                <br />
                <strong>Website:</strong> <a
                  href="https://www.thefourdeuces.nl/book.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  www.thefourdeuces.nl/book
                </a>
              </p>
              <p>
                <strong>Ongeldige Afspraken:</strong> Afspraken gemaakt via andere bronnen dan hierboven genoemd kunnen ongeldig worden verklaard. Gebruik uitsluitend de officiële boekingsmethoden.
              </p>
              <p>
                <strong>Deposit:</strong> Een niet-restitueerbare aanbetaling is vereist om een afspraak vast te leggen. De aanbetaling wordt verrekend met de uiteindelijke kosten van de tattoo.
              </p>
              <p>
                <strong>Wijzigingen en Annuleringen:</strong> Klanten moeten <span className="text-[#cc751b]">minimaal 48 uur van tevoren</span> informeren bij het verzetten of annuleren van een afspraak. Niet naleven kan leiden tot verlies van de aanbetaling.
              </p>
              <p>
                <strong>Te Laat Komen:</strong> Als een klant meer dan <span className="text-[#cc751b]">30 minuten te laat komt zonder dit te melden</span> aan de artiest of manager, kan de afspraak worden verzet of geannuleerd en kan de aanbetaling vervallen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[3. Prijzen en Betaling]</h3>
            <div className="space-y-4">
              <p>
                <strong>Prijzen:</strong> De prijs van een tattoo varieert afhankelijk van grootte, complexiteit en plaatsing. De uiteindelijke prijs wordt bepaald na een consult met de artiest waarin ontwerp, locatie en speciale wensen worden besproken.
              </p>
              <p>
                <strong>Standaard Tattoos:</strong> Prijzen voor standaard tattoos worden berekend op basis van de benodigde tijd, de complexiteit van het ontwerp en de plaatsing op het lichaam. Grotere of meer gedetailleerde tattoos kunnen meerdere sessies vereisen.
              </p>
              <p>
                <strong>Cover-Ups:</strong> Cover-up tattoos zijn vaak complexer om bestaande tattoos effectief te bedekken. De prijs hangt af van de omvang van de cover-up en het aantal benodigde sessies.
              </p>
              <p>
                <strong>Wijzigingen:</strong> Als een klant wijzigingen aan een bestaande tattoo vraagt, worden deze beoordeeld op complexiteit en benodigde tijd. Extra sessies kunnen extra kosten met zich meebrengen.
              </p>
              <p>
                <strong>Betaling:</strong> De aanbetaling is vereist bij afronding van de tattoo. We accepteren contant, credit- en debitkaarten. In overleg met een resident artiest of manager kan betaling ook via PayPal.
              </p>
              <p>
                <strong>Fooi:</strong> Fooi is welkom maar niet verplicht.
              </p>
              <p>
                <strong>Extra Kosten:</strong> Extra werk of wijzigingen tijdens de sessie kunnen extra kosten met zich meebrengen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[4. Gezondheid en Veiligheid]</h3>
            <div className="space-y-4">
              <p>
                <strong>Leeftijdsvereiste:</strong> We volgen lokale wetgeving; klanten moeten <span className="text-[#cc751b]">minimaal 18 jaar oud</span> zijn of begeleid worden door een volwassene.
              </p>
              <p>
                <strong>Gezondheidsinformatie:</strong> Klanten <span className="text-[#cc751b]">moeten</span> eventuele medische aandoeningen, allergieën of huidgevoeligheden vooraf melden. Niet melden ontslaat zowel de artiest als de Studio van aansprakelijkheid.
              </p>
              <p>
                <strong>Hygiëne:</strong> De Studio volgt strikte hygiëneprotocollen (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  NEN-EN 17169
                </a>) voor de veiligheid van klanten en personeel.
              </p>
              <p>
                <strong>Zwangerschap en Medische Condities:</strong> Zwangere of zogende klanten kunnen de dienst worden geweigerd. Schriftelijke toestemming van een arts is vereist.
              </p>
              <p>
                <strong>Pijnstillers en Verdovingen:</strong> De Studio gebruikt geen lokale verdovingen tijdens het tatoeëren.
              </p>
              <p>
                <strong>Herhalingen:</strong> De artiest kan weigeren dezelfde tattoo te herhalen totdat deze volledig is genezen.
              </p>
              <p>
                <strong>Weigering:</strong> De artiest kan een tattoo weigeren als de risico’s te hoog zijn of moeilijk te beoordelen.
              </p>
            </div>
            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[5. Tattoo Proces]</h3>
            <div className="space-y-4">
              <p>
                <strong>Ontwerp Goedkeuring:</strong> Klanten moeten het uiteindelijke ontwerp en de plaatsing goedkeuren voordat het tatoeëren begint. Klachten over ontwerp en plaatsing vervallen zodra het ontwerp en de plaatsing zijn goedgekeurd. Mondelinge goedkeuring heeft dezelfde juridische waarde als schriftelijke goedkeuring.
              </p>
              <p>
                <strong>Nazorg:</strong> Gedetailleerde nazorginstructies worden gegeven volgens (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  NEN-EN 17169
                </a>), sectie 7.12. Klanten zijn verantwoordelijk voor het volgen van deze instructies. Niet naleven ontslaat de artiest en de Studio van aansprakelijkheid.
              </p>
              <p>
                <strong>Touch-ups:</strong> Eén gratis touch-up wordt aangeboden binnen 6 maanden na de oorspronkelijke tattoo, mits de nazorginstructies zijn opgevolgd. Extra touch-ups of touch-ups van cover-ups kunnen extra kosten met zich meebrengen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[6. Aansprakelijkheid]</h3>
            <div className="space-y-4">
              <p>
                <strong>Verantwoordelijkheid Klant:</strong> Klanten erkennen de risico’s van tatoeëren, waaronder allergische reacties, infecties en ontevredenheid. Klanten moeten de artiest informeren over bekende gezondheidsproblemen. Niet melden ontslaat de artiest en Studio van aansprakelijkheid.
              </p>
              <p>
                <strong>Overeenkomst:</strong> Klanten worden <span className="text-[#cc751b]">geacht deze voorwaarden gelezen en geaccepteerd te hebben</span> bij het maken van een afspraak en/of ontvangen van diensten.
              </p>
              <p>
                <strong>Gezondheidsproblemen:</strong> De Studio is niet aansprakelijk voor gezondheidsproblemen of complicaties door het tatoeëren, inclusief infecties of allergische reacties.
              </p>
              <p>
                <strong>Vrijwaring:</strong> Klanten kunnen worden gevraagd een verklaring te ondertekenen die de Studio vrijwaart van aansprakelijkheid voor eventuele negatieve gevolgen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[7. Rechten en Eigendom]</h3>
            <div className="space-y-4">
              <p>
                <strong>Fotografie:</strong> De Studio behoudt het recht om foto’s en video’s van tattoos te maken voor promotiedoeleinden. Klanten kunnen bezwaar maken door dit vooraf aan de artiest te melden.
              </p>
              <p>
                <strong>Ontwerp Rechten:</strong> De Studio <span className="text-[#cc751b]">behoudt alle rechten op maatwerk ontwerpen</span>. Klanten mogen ontwerpen niet reproduceren zonder toestemming. Overtreding kan leiden tot aansprakelijkheid volgens de Nederlandse Auteurswet.
              </p>
              <p>
                <strong>Intellectueel Eigendom:</strong> Artwork van de Studio blijft intellectueel eigendom van de Studio en mag niet commercieel worden gebruikt zonder expliciete toestemming. Ongeoorloofd gebruik leidt tot aansprakelijkheid volgens de Auteurswet.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[8. Gedrag]</h3>
            <div className="space-y-4">
              <p>
                <strong>Gedrag:</strong> De Studio handhaaft een professionele omgeving. Ongepast gedrag, inclusief intimidatie of discriminatie, <span className="text-[#cc751b]">wordt niet getolereerd en kan leiden tot weigering van dienst</span>.
              </p>
              <p>
                <strong>Begeleiding:</strong> Vanwege ruimte en veiligheid moeten begeleiders op de begane grond blijven tijdens de sessie.
              </p>
              <p>
                <strong>Voorwaarden:</strong> De Studio kan een consult of tatoeage weigeren als de klant ziek, onder invloed of in een andere nadelige toestand is.
              </p>
              <p>
                <strong>Gedrag Tijdens Sessie:</strong> Klanten moeten alle instructies van de artiest volgen. Niet naleven kan leiden tot beëindiging van de sessie en ontslaat de artiest en Studio van aansprakelijkheid.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[9. Gastartiesten]</h3>
            <div className="space-y-4">
              <p>
                <strong>Juridische Status:</strong> De gastartiest is geen werknemer of vertegenwoordiger van de Studio en kan niet als zodanig worden beschouwd. De gastartiest is persoonlijk verantwoordelijk en ontslaat de Studio van aansprakelijkheid. Diensten worden verleend op basis van de voorwaarden van het werkruimtecontract.
              </p>
              <p>
                <strong>Boeking met Gastartiesten:</strong> Afspraken met gastartiesten zijn afhankelijk van beschikbaarheid en kunnen aparte boekingsprocedures vereisen. De Studio informeert over de boekingsprocedure bij het bezoek van de gastartiest.
              </p>
              <p>
                <strong>Deposit en Betaling:</strong> Een niet-restitueerbare aanbetaling is vereist, vergelijkbaar met resident artiesten. Betaling geschiedt na voltooiing van de dienst en kan andere betalingsmethoden hebben. Gastartiesten accepteren mogelijk geen PayPal.
              </p>
              <p>
                <strong>Algemene Voorwaarden:</strong> Deze voorwaarden zijn alleen van toepassing bij een afspraak via een officiële Studio-vertegenwoordiger. De Studio is niet aansprakelijk voor afspraken rechtstreeks met gastartiesten.
              </p>
              <p>
                <strong>Ontwerp Goedkeuring en Nazorg:</strong> Zelfde beleid geldt voor gastartiesten. Klanten moeten ontwerp en plaatsing goedkeuren voordat het tatoeëren begint.
              </p>
              <p>
                <strong>Touch-ups:</strong> Het Studio-beleid voor touch-ups geldt niet voor gastartiesten. Eventuele touch-ups moeten direct met de gastartiest worden geregeld en kunnen extra kosten met zich meebrengen.
              </p>
              <p>
                <strong>Aansprakelijkheid:</strong> De Studio en resident artiesten zijn niet aansprakelijk voor problemen of ontevredenheid door diensten van gastartiesten. Klanten moeten eventuele klachten direct bij de gastartiest melden.
              </p>
              <p>
                <strong>Gedrag:</strong> Alle standaard gedragsregels van de Studio gelden tijdens sessies met gastartiesten, inclusief hygiëne en veiligheidsprotocollen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[10. Wijzigingen in Voorwaarden]</h3>
            <div className="space-y-4">
              <p>
                De Studio behoudt zich het recht voor deze Voorwaarden op elk moment te wijzigen. Klanten worden geïnformeerd over belangrijke wijzigingen.
              </p>
            </div>

            <h3 className="text-[#f0efed]/[0.8] mt-2 p-4">[11. Contactinformatie]</h3>
            <div className="space-y-4">
              <p>
                Voor vragen of opmerkingen over deze Voorwaarden kunt u contact met ons opnemen via &nbsp;
                <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cc751b] underline hover:text-orange-600"
                >
                  studio@thefourdeuces.nl
                </a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// expose for the HTML loader script
window.Terms = Terms;