import SectionLabel from "./SectionLabel";

const reviews = [
  { naam: "Kassie",         auto: "Mercedes W211",      sterren: 5, tekst: "Mijn W211 door Simon laten blinderen. Simon komt zijn afspraken na, werkt super netjes en is echt een vakman! Ben er super blij mee. Ik zou hem echt iedereen aanraden!!" },
  { naam: "Hasan Tasdemir", auto: "BMW 316 Compact",    sterren: 5, tekst: "Simon is professioneel en bekwaam. Heeft de ruiten van mijn BMW 316 compact getint en het resultaat is echt helemaal top! Is niet bezig je het duurste pakket te verkopen en heeft zelfs geattendeerd op de actie voor een goedkopere deal, erg eerlijk! Aanrader als je je ruiten wilt laten tinten!" },
  { naam: "Hans Pieterson", auto: "Kia Niro",             sterren: 5, tekst: "Ineens wilden we midden in de zomer toch getint glas achter bij onze Kia Niro. Ik belde een bedrijf dat al jaren bestaat, die hadden pas over 2 maanden plaats. Toen belde ik Simon, die kon dezelfde week nog. En ook nog eens aan huis! Hij heeft vakwerk geleverd. Super blij. Past ook goed bij de nieuwe tijd, naar de klant toe." },
];

export default function Reviews() {
  return (
    <section className="py-28 bg-[#080808] relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent opacity-[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionLabel label="Ervaringen" title="Wat klanten" highlight="Zeggen" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.naam} className="reveal glow-card bg-card border border-card-border p-8">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: r.sterren }).map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-sub leading-relaxed mb-8 text-sm font-light">&ldquo;{r.tekst}&rdquo;</p>
              <div className="flex items-center gap-4 border-t border-card-border pt-6">
                <div className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-accent font-semibold text-sm">
                  {r.naam[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.naam}</p>
                  <p className="text-xs text-sub font-light">{r.auto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Intint+-+Autoruiten+tinten%2Fblinderen+op+locatie+-+Raamfolie+gebouwen/@52.3841215,4.9587025,136079m/data=!3m1!1e3!4m14!1m5!8m4!1e1!2s103477104504082452282!3m1!1e1!3m7!1s0x47c6279db83b35ad:0xa42ef692748aca5a!8m2!3d52.8959561!4d5.5771827!9m1!1b1!16s%2Fg%2F11l3t3vmg1?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-text font-medium rounded-2xl text-sm hover:border-accent hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-accent shrink-0">
              <path d="M21.805 10.023H12v4.011h5.617c-.242 1.24-.976 2.29-2.079 2.995v2.49h3.364c1.967-1.813 3.103-4.481 3.103-7.65 0-.733-.065-1.44-.2-2.128-.001.282-.001 0 0 .282z" fill="#4285F4"/>
              <path d="M12 22c2.675 0 4.92-.887 6.562-2.398l-3.364-2.49c-.887.595-2.02.948-3.198.948-2.46 0-4.542-1.661-5.285-3.892H3.245v2.562C4.878 19.892 8.21 22 12 22z" fill="#34A853"/>
              <path d="M6.715 14.168A5.96 5.96 0 0 1 6.3 12c0-.75.13-1.477.415-2.168V7.27H3.245A9.98 9.98 0 0 0 2 12c0 1.617.387 3.143 1.245 4.73l3.47-2.562z" fill="#FBBC05"/>
              <path d="M12 6.04c1.384 0 2.627.477 3.606 1.41l2.703-2.703C16.916 3.236 14.672 2 12 2 8.21 2 4.878 4.108 3.245 7.27l3.47 2.562C7.458 7.701 9.54 6.04 12 6.04z" fill="#EA4335"/>
            </svg>
            Bekijk Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
