"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

const ceramicTip = "Voor het beste resultaat adviseer ik de premium ceramic folie. Deze is sterker, biedt helderder zicht en blijft levenslang kleurvast. Omdat montage het grootste deel van de kosten vormt, is mijn mening dat besparen op de folie zonde is. Om u over de streep te trekken bied ik deze upgrade aan tegen een aantrekkelijke meerprijs. Zo kan ik de kwaliteit leveren waar ik voor sta en profiteert u van een duurzaam en premium eindresultaat.";

const tarieven = [
  { type: "3-deurs hatchback", standaard: 170, ceramic: 200 },
  { type: "5-deurs hatchback", standaard: 235, ceramic: 275 },
  { type: "Station",           standaard: 255, ceramic: 305 },
  { type: "SUV",               standaard: 285, ceramic: 345 },
];

export default function Tarieven() {
  const [ceramic, setCeramic] = useState(false);
  const [showTip, setShowTip] = useState(false);

  return (
    <section id="tarieven" className="py-28 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Transparante prijzen" title="Mijn" highlight="Tarieven" />

        {/* Toggle */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-5 flex-wrap">
            <span className={`text-sm font-medium ${!ceramic ? "text-text" : "text-sub"}`}>Standaard folie</span>
            <button
              onClick={() => setCeramic(!ceramic)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${ceramic ? "bg-accent" : "bg-card-border"}`}
              aria-label="Schakel folietype"
            >
              <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-text transition-transform duration-300 ${ceramic ? "translate-x-7" : ""}`} />
            </button>
            <span className={`text-sm font-medium ${ceramic ? "text-accent" : "text-sub"}`}>Ceramic folie</span>
            <button
              onClick={() => setShowTip(!showTip)}
              className="w-5 h-5 rounded-full border border-sub/40 text-sub text-xs flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label="Meer info over ceramic folie"
            >
              i
            </button>
          </div>

          {/* Inline tip panel */}
          <div className={`overflow-hidden transition-all duration-300 ${showTip ? "max-h-64 mt-5" : "max-h-0"}`}>
            <div className="bg-card border border-accent/20 rounded-2xl p-5">
              <p className="text-sub text-sm leading-relaxed font-light">{ceramicTip}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {tarieven.map((t) => (
            <div key={t.type} className="reveal glow-card bg-card border border-card-border p-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sub mb-6">{t.type}</h3>
              <p className="text-5xl font-bold text-accent mb-2">€{ceramic ? t.ceramic : t.standaard}</p>
              <p className="text-xs text-sub font-light">{ceramic ? "Ceramic folie" : "Standaard folie"}</p>
            </div>
          ))}
        </div>

        {/* Anders */}
        <div className="reveal glow-card bg-card border border-card-border p-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="font-semibold mb-1">Ander verzoek?</h3>
            <p className="text-sm text-sub font-light">Neem contact op voor een prijs op maat.</p>
          </div>
          <a href="#contact" className="glow-btn px-8 py-3 border border-accent text-accent text-sm font-semibold rounded-2xl hover:bg-accent hover:text-bg transition-colors">
            Op aanvraag
          </a>
        </div>

        <div className="mt-8 space-y-1.5 text-xs text-sub/50 font-light">
          <p>* Genoemde tarieven zijn indicatief (afwijkingen voorbehouden) voor het tinten vanaf de b-stijl, inclusief BTW.</p>
        </div>
      </div>
    </section>
  );
}
