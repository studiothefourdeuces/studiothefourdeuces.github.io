const { useState, useEffect } = React;

function TermsSlider() {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState("en");
  const [direction, setDirection] = useState("next"); // For animation
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimClass(direction === "next" ? "slide-in-right" : "slide-in-left");
    }, 10); // slight delay to trigger CSS
    return () => clearTimeout(timeout);
  }, [step]);

  const sections = {
    en: [
      {
        id: 1, title: "Introduction",
        content:
          <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
            <div className="text-xs text-[#cc751b]">[1.1]</div>
            <div>
              Welcome to <span className="text-[#cacaca]">The Four Deuces B.V.</span> (<span className="text-[#cacaca]">"Studio"</span>). These terms and conditions (<span className="text-[#cacaca]">"Terms"</span>)
              apply to all clients (<span className="text-[#cacaca]">"Client"</span> and <span className="text-[#cacaca]">"Clients"</span>) receiving services from the Studio
              offered by resident and/or guesting artists (<span className="text-[#cacaca]">"Artists"</span> or <span className="text-[#cacaca]">"Artists"</span>). By scheduling
              an appointment or receiving services, you agree to be bound by these Terms.
            </div>
          </div>
      },
      {
        id: 2, title: "Appointments",
        content:
          <div className="space-y-4">
            {/* Grid container for each item */}
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.1]</div>
              <div>
                Booking: Appointments can be booked in person, via email, through Instagram, or on our website. Please note that walk-ins are not an option.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.2]</div>
              <div>
                Email: <a
                  href="mailto:booking@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  booking@thefourdeuces.nl
                </a> and <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  studio@thefourdeuces.nl
                </a>
                <br />
                Instagram: <a
                  href="https://www.instagram.com/the.four.deuces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  @the.four.deuces
                </a>
                <br />
                Website: <a
                  href="https://www.thefourdeuces.nl/book.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  www.thefourdeuces.nl/book
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.3]</div>
              <div>
                Invalid Appointments: Appointments scheduled through any sources other than those listed above may be invalidated. To ensure your appointment is valid, please only use the official booking methods.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.4]</div>
              <div>
                Deposit: A non-refundable deposit is required to secure an appointment. The deposit will be applied to the final cost of the tattoo.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.5]</div>
              <div>
                Rescheduling and Cancellations: Clients must provide <span className="text-[#cacaca]">at least 48 hours' notice</span> to reschedule or cancel an appointment. Failure to do so will result in the forfeiture of the deposit.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.6]</div>
              <div>
                Late Arrivals: If a client arrives more than <span className="text-[#cacaca]">30 minutes late without notifying</span> the artist or manager, the appointment may be rescheduled or canceled, and the deposit may be forfeited.
              </div>
            </div>
          </div>
      },
      {
        id: 3, title: "Pricing and Payment",
        content:
          <div className="space-y-4">
            {/* Grid container for each item */}
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.1]</div>
              <div>
                Pricing: Tattoo pricing varies based on size, complexity, and placement. The final cost will be determined after a consultation with the artist, during which the design, location, and any special requirements will be discussed.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.2]</div>
              <div>
                Standard Tattoos: Prices for standard tattoos are calculated based on the time required to complete the design, the intricacy of the artwork, and the location on the body. Larger or more detailed pieces may require multiple sessions, which will be factored into the final cost.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.3]</div>
              <div>
                Cover-Ups: Cover-up tattoos typically involve more intricate work to effectively conceal the existing tattoo. The final cost will depend on the extent of the cover-up and the number of sessions required.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.4]</div>
              <div>
                Reworks and Modifications: If a client requests changes to an existing tattoo, whether originally done by our Studio or another, these reworks or modifications will be priced based on the complexity of the changes and the time required. Similar to cover-ups, these may require more sessions and carry additional costs.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.5]</div>
              <div>
                Payment: Deposit is required upon completion of the tattoo. We accept cash, credit, and debit cards. Upon agreement between the client and a resident artist or manager (not applicable to guest artists), payment can also be made via PayPal.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.6]</div>
              <div>
                Gratuities: Gratuities are appreciated but not required.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.7]</div>
              <div>
                Additional Costs: Any additional work or changes requested by the client during the session may incur extra charges.
              </div>
            </div>
          </div>
      },
      {
        id: 4, title: "Health and Safety",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.1]</div>
              <div>
                Age Requirement: We adhere to local regulations and laws, therefore, you have to be <span className="text-[#cacaca]">at least 18 years old</span> or accompanied by an adult.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.2]</div>
              <div>
                Health Disclosure: Clients <span className="text-[#cacaca]">must</span> disclose any medical conditions, allergies, or skin sensitivities prior to receiving a tattoo. Failure to disclose information releases both the tattoo Artist and the Studio from any liability.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.3]</div>
              <div>
                Hygiene: The Studio follows strict hygiene protocols (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  NEN-EN 17169
                </a>) to ensure the safety of our clients and staff. All our artists are well-versed in and adhere to this hygiene regulations.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.4]</div>
              <div>
                Pregnancy and Medical Conditions: Pregnant or nursing clients may be refused tattoo services. A tattoo will only be performed if the client provides written confirmation from their doctor authorizing them to receive a tattoo. Failure to do so will result in the forfeiture of the deposit and release both the tattoo artist and the Studio from any liability for risks that may arise before, during, and after the tattooing process, including the aftercare and healing period.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.5]</div>
              <div>
                Use of Painkillers and Anesthetics: The Studio does not use local painkillers or anesthetics during the tattooing process.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.6]</div>
              <div>
                Repeat Tattoos: The artist reserves the right to refuse to repeat a tattoo on the same area until it has completely healed.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.7]</div>
              <div>
                Tattoo Refusal: The artist reserves the right to refuse a tattoo if the risks associated with the tattooing process or healing are considered high or difficult to assess. If necessary, the artist is obligated to advise the client to consult a doctor before proceeding.
              </div>
            </div>
          </div>
      },
      {
        id: 5, title: "Tattoo Process",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.1]</div>
              <div>
                Design Approval: Clients must approve the final design and placement before the tattooing process begins. Complaints regarding the tattoo design and placement will be void once the final design and placement are approved. Verbal approvals hold the same legal power as written approvals, whether on paper, by email, or via any social media platform or messenger.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.2]</div>
              <div>
                Aftercare: Detailed aftercare instructions and recommendations will be provided in accordance with (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  NEN-EN 17169
                </a>), section 7.12. Clients are responsible for following these instructions to ensure proper healing. Failure to follow these instructions and recommendations will release both the tattoo Artist and the Studio from any liability.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.3]</div>
              <div>
                Touch-ups: One complimentary touch-up is offered within 6 months of the initial tattoo date, provided aftercare instructions were followed. Additional touch-ups beyond this period, or touch-ups for tattoos that were originally cover-ups, may incur additional charges.
              </div>
            </div>
          </div>
      },
      {
        id: 6, title: "Liability",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.1]</div>
              <div>
                Client Responsibility: Clients acknowledge the risks associated with getting a tattoo, including potential allergic reactions, infections, and dissatisfaction with the final outcome. Clients are also responsible for informing the artist of any known health issues, such as blood disorders, skin conditions, or immune system deficiencies, that could affect the tattooing process or healing. Failure to disclose such information releases the tattoo artist and the Studio from any liability.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.2]</div>
              <div>
                Agreement: Clients are <span className="text-[#cacaca]">considered to have read and agreed to these terms</span> upon making an appointment and/or receiving tattoo services.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.3]</div>
              <div>
                Health Issues: The Studio is not liable for any health issues or complications arising from the tattooing process, including but not limited to infections or allergic reactions.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.4]</div>
              <div>
                Waiver: Clients may be requested to sign a waiver releasing the Studio from liability for any adverse reactions or outcomes.
              </div>
            </div>
          </div>
      },
      {
        id: 7, title: "Contact",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.1]</div>
              <div>
                Photography: The Studio reserves the right to take photographs and videos of tattoos for promotional purposes. Clients may opt out by informing the artist prior to the tattoo session.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.2]</div>
              <div>
                Design Rights: The Studio <span className="text-[#cacaca]">retains the rights to all custom designs created by our artists</span>. Clients may not reproduce the design without permission. Reproduction of the design without the consent of the Artist and/or Studio will result in liability under the Dutch Copyright Law (Auteurswet).
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.3]</div>
              <div>
                Intellectual Property: Any artwork created by the Studio’s artists remains the intellectual property of the Studio and may not be used for commercial purposes without explicit permission. Unauthorized use of Studio artworks will result in liability under the Dutch Copyright Law (Auteurswet).
              </div>
            </div>
          </div>
      },
      {
        id: 8, title: "Conduct",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.1]</div>
              <div>
                Behavior: The Studio maintains a professional environment. Inappropriate behavior, including harassment or discrimination, <span className="text-[#cacaca]">will not be tolerated and may result in refusal of service</span>.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.2]</div>
              <div>
                Accompaniment: Due to space and safety considerations, accompanying persons should remain on the ground floor during the session.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.3]</div>
              <div>
                Conditions: The Studio reserves the right to refuse tattoo consultation or proceed with the process if the client arrives sick, intoxicated, under the influence of alcohol or drugs, or in any other unfavorable condition.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.4]</div>
              <div>
                Behavior During Session: Clients must follow all instructions provided by the tattoo artist. Failure to comply with instructions may result in termination of the session and release both the tattoo Artist and the Studio from any liability.
              </div>
            </div>
          </div>
      },
      {
        id: 9, title: "Guest Artists",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.1]</div>
              <div>
                Legal Status: The guest artist is not an official employee or representative of the Studio and cannot be regarded as such under any circumstances. The guest artist operates solely in their own interest and assumes personal responsibility, thereby releasing the Studio and its representatives from any legal liability. The guest artist provides services on the Studio's premises in accordance with the terms of the workspace lease.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.2]</div>
              <div>
                Booking with Guest Artists: Appointments with guest artists are subject to availability and may require separate booking procedures. The Studio will provide information about how to book with guest artists at the time of their visit.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.3]</div>
              <div>
                Deposit and Payment: A non-refundable deposit is required to secure an appointment with a guest artist, similar to resident artists. Payment for services with guest artists is due upon completion and may be subject to different payment methods as specified by the guest artist. Guest artists may not accept PayPal payments.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.4]</div>
              <div>
                Terms and Conditions: These terms apply only if the appointment was scheduled through an official Studio representative. The Studio releases itself from liability for any issues or dissatisfaction arising from appointments scheduled directly with guest artists.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.5]</div>
              <div>
                Design Approval and Aftercare: The same design approval and aftercare policies apply when receiving services from guest artists. Clients must approve the final design and placement before the tattooing process begins.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.6]</div>
              <div>
                Touch-ups: The Studio’s touch-up policy does not apply to work done by guest artists. Any touch-ups needed for tattoos by guest artists must be arranged directly with the guest artist and may incur additional charges.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.7]</div>
              <div>
                Liability: The Studio and its resident artists are not liable for any issues or dissatisfaction arising from services provided by guest artists. Clients must address any concerns directly with the guest artist during their visit.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.8]</div>
              <div>
                Conduct: All standard Studio conduct policies apply during sessions with guest artists. This includes maintaining appropriate behavior and adhering to the Studio's hygiene and safety protocols.
              </div>
            </div>
          </div>
      },
      {
        id: 10, title: "Modifications to Terms",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[10.1]</div>
              <div>
                The Studio reserves the right to modify these Terms at any time. Clients will be notified of any significant changes.
              </div>
            </div>
          </div>
      },
      {
        id: 11, title: "Contact Information",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[11.1]</div>
              <div>
                For any questions or concerns regarding these Terms, please contact us at&nbsp;
                <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  studio@thefourdeuces.nl
                </a>.
              </div>
            </div>
          </div>
      },
    ],
    nl: [
      {
        id: 1, title: "Inleiding",
        content:
          <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
            <div className="text-xs text-[#cc751b]">[1.1]</div>
            <div>
              Welkom bij <span className="text-[#cacaca]">The Four Deuces B.V.</span> (<span className="text-[#cacaca]">"Studio"</span>). Deze algemene voorwaarden (<span className="text-[#cacaca]">"Voorwaarden"</span>)
              zijn van toepassing op alle klanten (<span className="text-[#cacaca]">"Klant"</span> en <span className="text-[#cacaca]">"Klanten"</span>) die diensten ontvangen van de Studio
              aangeboden door vaste en/of gastkunstenaars (<span className="text-[#cacaca]">"Kunstenaars"</span>). Door een afspraak te maken of diensten te ontvangen, stemt u in met deze Voorwaarden.
            </div>
          </div>
      },
      {
        id: 2, title: "Afspraken",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.1]</div>
              <div>
                Boeking: Afspraken kunnen persoonlijk, via e-mail, Instagram of onze website worden gemaakt. Let op: binnenlopen zonder afspraak is niet mogelijk.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.2]</div>
              <div>
                E-mail: <a
                  href="mailto:booking@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  booking@thefourdeuces.nl
                </a> en <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  studio@thefourdeuces.nl
                </a>
                <br />
                Instagram: <a
                  href="https://www.instagram.com/the.four.deuces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  @the.four.deuces
                </a>
                <br />
                Website: <a
                  href="https://www.thefourdeuces.nl/book.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  www.thefourdeuces.nl/book
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.3]</div>
              <div>
                Ongeldige Afspraken: Afspraken gemaakt via andere bronnen dan hierboven vermeld kunnen ongeldig worden verklaard. Gebruik uitsluitend de officiële boekingsmethoden.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.4]</div>
              <div>
                Aanbetaling: Een niet-terugbetaalbare aanbetaling is vereist om een afspraak vast te leggen. De aanbetaling wordt verrekend met de uiteindelijke kosten van de tatoeage.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.5]</div>
              <div>
                Wijzigingen en Annuleringen: Klanten moeten <span className="text-[#cacaca]">minimaal 48 uur van tevoren</span> een afspraak verzetten of annuleren. Bij niet-naleving vervalt de aanbetaling.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[2.6]</div>
              <div>
                Te Laat Komen: Als een klant meer dan <span className="text-[#cacaca]">30 minuten te laat zonder melding</span> arriveert bij de artiest of manager, kan de afspraak worden verzet of geannuleerd en kan de aanbetaling vervallen.
              </div>
            </div>
          </div>
      },
      {
        id: 3, title: "Prijzen en Betaling",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.1]</div>
              <div>
                Prijzen: De prijs van een tatoeage varieert op basis van grootte, complexiteit en plaatsing. De definitieve prijs wordt bepaald na een consult met de artiest, waarbij ontwerp, locatie en speciale wensen worden besproken.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.2]</div>
              <div>
                Standaardtatoeages: Prijzen voor standaard tatoeages worden berekend op basis van de tijd die nodig is om het ontwerp te voltooien, de complexiteit van het werk en de plaatsing op het lichaam. Grotere of gedetailleerdere ontwerpen kunnen meerdere sessies vereisen.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.3]</div>
              <div>
                Cover-ups: Cover-up tatoeages vereisen meestal meer ingewikkeld werk om bestaande tatoeages effectief te verbergen. De uiteindelijke prijs hangt af van de omvang en het aantal benodigde sessies.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.4]</div>
              <div>
                Herzieningen en Aanpassingen: Als een klant wijzigingen aan een bestaande tatoeage wil, of deze nu door onze Studio of elders is gezet, worden de kosten bepaald op basis van de complexiteit en de benodigde tijd. Net als bij cover-ups kunnen meerdere sessies extra kosten met zich meebrengen.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.5]</div>
              <div>
                Betaling: De aanbetaling is vereist bij voltooiing van de tatoeage. Wij accepteren contant, creditcard en pinbetaling. Betaling via PayPal is mogelijk na afspraak met een vaste artiest of manager (niet van toepassing op gastkunstenaars).
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.6]</div>
              <div>
                Fooien: Fooien worden gewaardeerd maar zijn niet verplicht.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[3.7]</div>
              <div>
                Extra Kosten: Extra werk of wijzigingen die tijdens de sessie door de klant worden gevraagd, kunnen extra kosten met zich meebrengen.
              </div>
            </div>
          </div>
      },
      {
        id: 4, title: "Gezondheid en Veiligheid",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.1]</div>
              <div>
                Leeftijdsvereiste: Wij volgen de lokale wetgeving, u moet <span className="text-[#cacaca]">minimaal 18 jaar oud</span> zijn of begeleid worden door een volwassene.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.2]</div>
              <div>
                Gezondheid: Klanten <span className="text-[#cacaca]">moeten</span> medische aandoeningen, allergieën of huidgevoeligheden melden voor het zetten van een tatoeage. Het niet melden ontslaat de artiest en de Studio van aansprakelijkheid.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.3]</div>
              <div>
                Hygiëne: De Studio volgt strikte hygiëneprotocollen (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  NEN-EN 17169
                </a>) om de veiligheid van klanten en personeel te waarborgen. Al onze artiesten kennen en volgen deze hygiëneregels.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.4]</div>
              <div>
                Zwangerschap en Medische Condities: Zwangere of zogende klanten kunnen geweigerd worden. Een tatoeage wordt alleen gezet met schriftelijke toestemming van een arts. Bij niet-naleving vervalt de aanbetaling en worden de artiest en Studio van aansprakelijkheid ontslagen.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.5]</div>
              <div>
                Pijnstillers en Verdovingen: De Studio gebruikt geen lokale verdovingen tijdens het tatoeëren.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.6]</div>
              <div>
                Herhaling Tatoeages: De artiest behoudt zich het recht voor om een tatoeage op hetzelfde gebied niet opnieuw te zetten totdat deze volledig genezen is.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[4.7]</div>
              <div>
                Weigering Tatoeage: De artiest kan een tatoeage weigeren als de risico’s hoog of moeilijk in te schatten zijn. Zo nodig adviseert de artiest de klant om een arts te raadplegen.
              </div>
            </div>
          </div>
      },
      {
        id: 5, title: "Tatoeageproces",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.1]</div>
              <div>
                Ontwerpgoedkeuring: Klanten moeten het uiteindelijke ontwerp en de plaatsing goedkeuren voordat het tatoeëren begint. Klachten over ontwerp of plaatsing zijn ongeldig zodra goedkeuring is gegeven. Mondelinge goedkeuring heeft dezelfde wettelijke waarde als schriftelijke goedkeuring, via papier, e-mail of sociale media/messenger.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.2]</div>
              <div>
                Nazorg: Gedetailleerde nazorginstructies worden verstrekt conform (<a
                  href="https://www.rivm.nl/hygienerichtlijnen/EU-norm-tatoeeren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  NEN-EN 17169
                </a>), sectie 7.12. Klanten zijn verantwoordelijk voor het opvolgen van deze instructies. Niet naleven ontslaat zowel de artiest als de Studio van aansprakelijkheid.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[5.3]</div>
              <div>
                Bijwerkbeurten: Één gratis bijwerkbeurt wordt aangeboden binnen 6 maanden na de eerste tatoeage, mits nazorginstructies zijn gevolgd. Extra bijwerkbeurten of bijwerkbeurten voor cover-ups kunnen extra kosten met zich meebrengen.
              </div>
            </div>
          </div>
      },
      {
        id: 6, title: "Aansprakelijkheid",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.1]</div>
              <div>
                Verantwoordelijkheid Klant: Klanten erkennen de risico’s van tatoeëren, inclusief allergische reacties, infecties en ontevredenheid. Klanten moeten gezondheidsproblemen melden die het tatoeëren of genezing kunnen beïnvloeden. Niet melden ontslaat artiest en Studio van aansprakelijkheid.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.2]</div>
              <div>
                Overeenkomst: Klanten worden <span className="text-[#cacaca]">geacht deze voorwaarden te hebben gelezen en akkoord te zijn</span> bij het maken van een afspraak of ontvangen van diensten.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.3]</div>
              <div>
                Gezondheidsproblemen: De Studio is niet aansprakelijk voor gezondheidsproblemen of complicaties tijdens of na het tatoeëren, inclusief infecties of allergische reacties.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[6.4]</div>
              <div>
                Vrijwaring: Klanten kunnen gevraagd worden een vrijwaringsverklaring te ondertekenen die de Studio ontslaat van aansprakelijkheid bij negatieve uitkomsten.
              </div>
            </div>
          </div>
      },
      {
        id: 7, title: "Contact",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.1]</div>
              <div>
                Fotografie: De Studio behoudt zich het recht voor om foto’s en video’s van tatoeages voor promotie te maken. Klanten kunnen weigeren door dit vooraf aan de artiest door te geven.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.2]</div>
              <div>
                Ontwerprechten: De Studio <span className="text-[#cacaca]">behoudt alle rechten op custom ontwerpen</span> van onze artiesten. Klanten mogen ontwerpen niet reproduceren zonder toestemming. Overtreding valt onder de Nederlandse Auteurswet.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[7.3]</div>
              <div>
                Intellectueel Eigendom: Alle kunstwerken van Studio-artiesten blijven eigendom van de Studio en mogen niet commercieel worden gebruikt zonder expliciete toestemming. Ongeoorloofd gebruik valt onder de Nederlandse Auteurswet.
              </div>
            </div>
          </div>
      },
      {
        id: 8, title: "Gedrag",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.1]</div>
              <div>
                Gedrag: De Studio handhaaft een professionele omgeving. Ongepast gedrag, inclusief intimidatie of discriminatie, <span className="text-[#cacaca]">wordt niet getolereerd en kan leiden tot weigering van dienst</span>.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.2]</div>
              <div>
                Begeleiding: Vanwege ruimte en veiligheid moeten begeleiders op de begane grond blijven tijdens de sessie.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.3]</div>
              <div>
                Voorwaarden: De Studio behoudt zich het recht voor een consult of sessie te weigeren als de klant ziek, dronken, onder invloed van drugs of anderszins ongeschikt is.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[8.4]</div>
              <div>
                Gedrag Tijdens Sessie: Klanten moeten instructies van de artiest volgen. Niet-naleving kan leiden tot beëindiging van de sessie en ontslaat artiest en Studio van aansprakelijkheid.
              </div>
            </div>
          </div>
      },
      {
        id: 9, title: "Gastkunstenaars",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.1]</div>
              <div>
                Juridische Status: De gastkunstenaar is geen officiële medewerker van de Studio en kan dat onder geen enkele omstandigheid worden beschouwd. De gastkunstenaar handelt in eigen belang en neemt persoonlijke verantwoordelijkheid, waarbij de Studio wordt vrijgesteld van aansprakelijkheid.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.2]</div>
              <div>
                Boeking Gastkunstenaars: Afspraken met gastkunstenaars zijn afhankelijk van beschikbaarheid en kunnen aparte boekingsprocedures vereisen. De Studio verstrekt informatie bij hun bezoek.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.3]</div>
              <div>
                Aanbetaling en Betaling: Een niet-terugbetaalbare aanbetaling is vereist voor gastkunstenaars, vergelijkbaar met vaste artiesten. Betaling vindt plaats bij voltooiing en kan andere methoden hebben zoals bepaald door de gastkunstenaar. PayPal is mogelijk niet beschikbaar.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.4]</div>
              <div>
                Voorwaarden: Deze voorwaarden gelden alleen bij afspraak via een officiële Studio-vertegenwoordiger. De Studio is niet aansprakelijk voor afspraken direct met gastkunstenaars.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.5]</div>
              <div>
                Ontwerpgoedkeuring en Nazorg: Dezelfde regels gelden bij gastkunstenaars. Klanten moeten ontwerp en plaatsing goedkeuren voor de sessie.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.6]</div>
              <div>
                Bijwerkbeurten: Het Studio-beleid geldt niet voor gastkunstenaars. Eventuele bijwerkbeurten moeten direct met de gastkunstenaar worden geregeld en kunnen extra kosten hebben.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.7]</div>
              <div>
                Aansprakelijkheid: De Studio en vaste artiesten zijn niet aansprakelijk voor diensten van gastkunstenaars. Klanten moeten problemen direct met de gastkunstenaar bespreken.
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[9.8]</div>
              <div>
                Gedrag: Alle standaard Studio-gedragsregels gelden ook bij gastkunstenaars. Dit omvat professioneel gedrag en naleving van hygiëne en veiligheid.
              </div>
            </div>
          </div>
      },
      {
        id: 10, title: "Wijzigingen Voorwaarden",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[10.1]</div>
              <div>
                De Studio behoudt zich het recht voor deze Voorwaarden te allen tijde te wijzigen. Klanten worden op de hoogte gebracht van belangrijke wijzigingen.
              </div>
            </div>
          </div>
      },
      {
        id: 11, title: "Contactinformatie",
        content:
          <div className="space-y-4">
            <div className="grid grid-cols-[40px_1fr] gap-4 items-start">
              <div className="text-xs text-[#cc751b]">[11.1]</div>
              <div>
                Voor vragen over deze Voorwaarden kunt u contact opnemen via&nbsp;
                <a
                  href="mailto:studio@thefourdeuces.nl"
                  className="text-[#cacaca] underline hover:text-[#cc751b]"
                >
                  studio@thefourdeuces.nl
                </a>.
              </div>
            </div>
          </div>
      }
    ]
  };

  const currentSections = sections[lang];
  const currentSection = currentSections.find(s => s.id === step);

  const toggleLang = (newLang) => {
    setLang(newLang);
    setStep(1); // Reset to first section when switching language
  };

  const btnStyle = (active) =>
    `px-5 py-3 rounded-xs border ${active ? "" : "border-[#3c3c3c] text-[#868686]"} font-thin uppercase`;

  return (
    <div className="terms-slider max-w-3xl mx-auto p-6 relative overflow-hidden">
      {/* Page Title */}
      <h1 className="flex text-center text-4xl md:text-6xl font-extrabold mb-6">
        {lang === "en" ? "Terms and Conditions" : "Algemene Voorwaarden"}
      </h1>

      {/* Language Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button className={btnStyle(lang === "en")} onClick={() => toggleLang("en")}>English</button>
        <button className={btnStyle(lang === "nl")} onClick={() => toggleLang("nl")}>Dutch</button>
      </div>

      {/* Animated Slider */}
      <div key={`${lang}-${step}`} className={`terms-slide ${animClass}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">{currentSection.title}</h2>
        <div className="text-sm text-[#868686] mb-6">[Section {step}/{currentSections.length}]</div>
        <div className="prose text-[#868686]">{currentSection.content}</div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-8">
        <button className={btnStyle(step > 1)} onClick={() => setStep(prev => Math.max(prev - 1, 1))}>Previous</button>
        <button className={btnStyle(step < currentSections.length)} onClick={() => setStep(prev => Math.min(prev + 1, currentSections.length))}>Next</button>
      </div>
    </div>
  );
}

window.TermsSlider = TermsSlider;