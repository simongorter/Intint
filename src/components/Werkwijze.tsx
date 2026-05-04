import SectionLabel from "./SectionLabel";
import Image from "next/image";

const stappen = [
  { nr: "01", title: "Aanvraag",              desc: "Ik beantwoord al uw vragen en we bespreken de mogelijkheden om de service bij u op locatie aan te bieden." },
  { nr: "02", title: "Afspraak inplannen",    desc: "Samen spreken we een geschikt moment, locatie en prijs af." },
  { nr: "03", title: "Installatie",  desc: "Op de afspraak installeer ik de folie op uw auto." },
  { nr: "04", title: "Oplevering",   desc: "Pas als het resultaat naar wens is, beschouw ik de klus als voltooid." },
];

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="py-28 bg-[#080808] relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "linear-gradient(rgba(212,168,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionLabel label="Mijn aanpak" title="Hoe het" highlight="Werkt" />
            {stappen.map((s, i) => (
              <div key={s.nr} className={`reveal flex gap-7 py-8 ${i < stappen.length - 1 ? "border-b border-card-border" : ""}`}>
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl border border-accent/30 flex items-center justify-center text-accent font-semibold text-sm">
                    {s.nr}
                  </div>
                  {i < stappen.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-accent/20 to-transparent min-h-[20px]" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                  <p className="text-sub leading-relaxed text-sm font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Side image */}
          <div className="reveal sticky top-28 rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[560px]">
            <Image
              src="/hoehetwerkt.jpg"
              alt="Vakman tint autoruiten"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-sub uppercase tracking-widest font-light mb-1">Vakmanschap</p>
              <p className="text-text font-medium">Nauwkeurig aangebracht, strak afgewerkt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
