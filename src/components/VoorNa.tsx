import SectionLabel from "./SectionLabel";
import Image from "next/image";

const fotos = [
  {
    voor: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&q=80",
    na:   "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
    label: "Sedan",
  },
  {
    voor: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=700&q=80",
    na:   "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80",
    label: "SUV",
  },
  {
    voor: "https://images.unsplash.com/photo-1541443131876-6ae4374b5b4d?w=700&q=80",
    na:   "https://images.unsplash.com/photo-1602777924655-6c7b5be38d8e?w=700&q=80",
    label: "Hatchback",
  },
];

export default function VoorNa() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Resultaten" title="Voor &" highlight="Na" />
        <p className="reveal text-sub font-light mb-12 max-w-xl -mt-6">
          Hieronder vindt u voorbeelden van onze werkzaamheden. Elke auto verdient een perfecte afwerking.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((f, i) => (
            <div key={i} className="reveal space-y-3">
              <p className="text-xs uppercase tracking-widest text-sub font-light mb-3">{f.label}</p>
              {/* Voor */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group glow-card border border-card-border">
                <Image src={f.voor} alt={`Voor — ${f.label}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-sub uppercase tracking-widest">
                  Voor
                </div>
              </div>
              {/* Na */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group glow-card border border-accent/25">
                <Image src={f.na} alt={`Na — ${f.label}`} fill className="object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-accent rounded-full text-xs font-semibold text-bg uppercase tracking-widest">
                  Na
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
