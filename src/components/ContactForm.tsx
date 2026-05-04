"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "./SectionLabel";

const DAGEN = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag"];
const DAGDELEN = ["Ochtend", "Middag"];

interface FormData {
  type: "afspraak" | "vraag";
  naam: string;
  email: string;
  telefoon: string;
  adres: string;
  postcode: string;
  stad: string;
  automerk: string;
  folie: string;
  tint: string;
  dagdelen: string[];
  opmerkingen: string;
}

const initialForm: FormData = {
  type: "afspraak", naam: "", email: "", telefoon: "",
  adres: "", postcode: "", stad: "",
  automerk: "", folie: "", tint: "", dagdelen: [], opmerkingen: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  function toggleDagdeel(slot: string) {
    const current = form.dagdelen;
    setForm({
      ...form,
      dagdelen: current.includes(slot) ? current.filter((d) => d !== slot) : [...current, slot],
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(initialForm);
    } catch { setStatus("error"); }
  }

  const inputClass = "w-full bg-card border border-card-border rounded-2xl px-5 py-4 text-text text-sm placeholder:text-sub/40 focus:outline-none focus:border-accent transition-colors font-light";
  const isAfspraak = form.type === "afspraak";

  return (
    <section id="contact" className="py-28 bg-[#080808] relative">
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative">
        <SectionLabel label="Vrijblijvende offerte" title="Neem" highlight="Contact Op" />

        {/* WhatsApp */}
        <div className="reveal mb-10">
          <p className="text-sub text-sm font-light mb-4">Liever direct appen?</p>
          <a
            href="https://wa.me/31648117422?text=Hallo%20Simon%2C%20ik%20heb%20een%20vraag%20over%20het%20tinten%20van%20mijn%20autoruiten."
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-text font-medium rounded-2xl text-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="text-[#25D366] shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.925l6.235-1.637A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.7.972.986-3.608-.235-.371A9.818 9.818 0 1112 21.818z"/>
            </svg>
            App mij op WhatsApp
          </a>
        </div>

        {status === "success" ? (
          <div className="glow-card bg-card border border-accent/30 rounded-3xl p-12 text-center">
            <p className="text-accent text-3xl font-bold mb-3">Verzonden!</p>
            <p className="text-sub font-light">Bedankt voor uw aanvraag. Ik neem zo snel mogelijk contact met u op.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 reveal">

            {/* Toggle */}
            <div className="flex rounded-2xl border border-card-border overflow-hidden mb-2">
              <button
                type="button"
                onClick={() => setForm({ ...form, type: "afspraak" })}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors ${isAfspraak ? "bg-accent text-bg" : "text-sub hover:text-text"}`}
              >
                Ik wil een afspraak inplannen
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, type: "vraag" })}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors ${!isAfspraak ? "bg-accent text-bg" : "text-sub hover:text-text"}`}
              >
                Ik heb een vraag
              </button>
            </div>

            {/* Naam */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Naam *</label>
              <input type="text" required value={form.naam} onChange={set("naam")} placeholder="Uw volledige naam" className={inputClass} />
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">E-mailadres *</label>
              <input type="email" required value={form.email} onChange={set("email")} placeholder="uw@email.nl" className={inputClass} />
            </div>

            {/* Telefoon */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Telefoonnummer</label>
              <input type="tel" value={form.telefoon} onChange={set("telefoon")} placeholder="06-12345678" className={inputClass} />
            </div>

            {/* Adres — alleen bij afspraak */}
            {isAfspraak && (
              <>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Straat &amp; huisnummer</label>
                  <input type="text" value={form.adres} onChange={set("adres")} placeholder="Kerkstraat 12" className={inputClass} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Postcode</label>
                    <input type="text" value={form.postcode} onChange={set("postcode")} placeholder="1234 AB" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Stad / plaats</label>
                    <input type="text" value={form.stad} onChange={set("stad")} placeholder="Amsterdam" className={inputClass} />
                  </div>
                </div>
              </>
            )}

            {isAfspraak && (
              <>
                {/* Auto */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Automerk &amp; model</label>
                  <input type="text" value={form.automerk} onChange={set("automerk")} placeholder="bijv. Volkswagen Golf 8" className={inputClass} />
                </div>

                {/* Folie + tint */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Gewenste folie type</label>
                    <select value={form.folie} onChange={set("folie")} className={inputClass}>
                      <option value="">Selecteer...</option>
                      <option>Standaard</option>
                      <option>Ceramic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">Gewenste tint</label>
                    <select value={form.tint} onChange={set("tint")} className={inputClass}>
                      <option value="">Selecteer...</option>
                      <option>5% (donker)</option>
                      <option>20% (medium)</option>
                    </select>
                  </div>
                </div>

                {/* Beschikbare dagdelen */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-3">Beschikbare dagdelen</label>
                  <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
                    {/* Header row */}
                    <div className="grid grid-cols-3 border-b border-card-border">
                      <div className="px-5 py-3" />
                      {DAGDELEN.map((d) => (
                        <div key={d} className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-sub text-center">{d}</div>
                      ))}
                    </div>
                    {/* Day rows */}
                    {DAGEN.map((dag, i) => (
                      <div key={dag} className={`grid grid-cols-3 ${i < DAGEN.length - 1 ? "border-b border-card-border" : ""}`}>
                        <div className="px-5 py-3.5 text-sm font-light text-text">{dag}</div>
                        {DAGDELEN.map((dagdeel) => {
                          const slot = `${dag}-${dagdeel}`;
                          const checked = form.dagdelen.includes(slot);
                          return (
                            <div key={slot} className="flex items-center justify-center px-5 py-3.5">
                              <button
                                type="button"
                                onClick={() => toggleDagdeel(slot)}
                                className={`w-5 h-5 rounded-md border transition-colors flex items-center justify-center ${
                                  checked
                                    ? "bg-accent border-accent"
                                    : "border-card-border hover:border-accent/50"
                                }`}
                                aria-label={slot}
                              >
                                {checked && (
                                  <svg className="w-3 h-3 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Opmerkingen */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-sub mb-2">
                {isAfspraak ? "Opmerkingen" : "Uw vraag"}
              </label>
              <textarea
                value={form.opmerkingen}
                onChange={set("opmerkingen")}
                rows={4}
                placeholder={isAfspraak ? "Vertel me meer over uw wensen..." : "Stel hier uw vraag..."}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-3d w-full py-4 text-bg font-semibold rounded-2xl text-sm disabled:opacity-50 disabled:[transform:none] disabled:[box-shadow:none]">
              {status === "sending" ? "Verzenden..." : "Versturen →"}
            </button>
            {status === "error" && <p className="text-red-400 text-sm text-center font-light">Er is iets misgegaan. Probeer opnieuw of mail info@intint.nl.</p>}
          </form>
        )}
      </div>
    </section>
  );
}
