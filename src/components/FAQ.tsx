"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  { vraag: "Wat is jouw werkgebied?",                               antwoord: "Ik werk binnen een straal van ongeveer 1 rijuur vanaf Balk. Dat omvat vrijwel heel Friesland en delen van Groningen, Drenthe en Overijssel. Twijfelt u of uw locatie binnen mijn werkgebied valt? Neem gerust contact op — ik denk graag mee." },
  { vraag: "Hoe lang duurt het tinten?",                       antwoord: "Over het algemeen is het tinten van alle ruiten vanaf de b-stijl binnen 4 uur afgerond, afhankelijk van het autotype. U kunt ondertussen gewoon doorgaan met uw dag." },
  { vraag: "Kan er altijd en overal worden getint?",           antwoord: "Ik kan enkel in de buitenlucht werken als de weersomstandigheden gunstig zijn. Bij neerslag of harde wind dient de afspraak te worden verzet indien u geen binnenruimte kunt faciliteren. Daarnaast verzoek ik de auto op een geschikte plaats neer te zetten. Dit betekent dat er voldoende werkruimte naast en achter de auto is (minstens 80 cm)." },
  { vraag: "Moet ik als klant nog voorbereidingen treffen?",   antwoord: "Voor het beste resultaat helpt het als uw auto van binnen en buiten zo schoon mogelijk is. Dit vermindert de kans op vuil dat tussen de folie en het glas terecht komt. Eventuele obstakels zoals kinderzitjes en spullen in de kofferbak graag vooraf verwijderen." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionLabel label="Vragen" title="Veelgestelde" highlight="Vragen" />
        <div>
          {faqs.map((f, i) => (
            <div key={i} className="reveal border-b border-card-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-medium pr-4 group-hover:text-accent transition-colors">{f.vraag}</span>
                <span className={`text-accent text-2xl shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-6" : "max-h-0"}`}>
                <p className="text-sub leading-relaxed font-light">{f.antwoord}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
