import SectionLabel from "./SectionLabel";
import Image from "next/image";

const punten = [
  { nr: "01", title: "Persoonlijke aanpak", desc: "Direct contact met Simon — Stuur gerust een berichtje via Whatsapp." },
  { nr: "02", title: "Vakmanschap",         desc: "Altijd strak resultaat door jarenlange ervaring in het professioneel tinten van autoruiten." },
  { nr: "03", title: "Mobiele service",     desc: "Intint komt naar u, zodat u gewoon door kan met uw dag." },
];

export default function OverOns() {
  return (
    <section id="diensten" className="py-28 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <SectionLabel label="Over mij" title="Wie is" highlight="Intint?" />
            <p className="text-sub leading-relaxed text-lg font-light mb-4">
              Mijn naam is Simon. In 2020 heb ik Intint opgericht. Met Intint richt ik mij volledig op het tinten van autoruiten voor zowel particulieren als zakelijke klanten. Mijn doel is simpel: Nauwkeurig werk leveren met een service op locatie waarbij ik de klant écht tevreden achter laat.
            </p>
          </div>
          {/* Image */}
          <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/wieisintint.jpg"
              alt="Autoruit tinten op locatie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {punten.map((p) => (
            <div
              key={p.nr}
              className="reveal glow-card bg-card border border-card-border p-8"
            >
              <h3 className="font-semibold text-base mb-3">{p.title}</h3>
              <p className="text-sub text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
