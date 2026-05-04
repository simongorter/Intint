import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <Image src="/logo.svg" alt="Intint logo" width={220} height={64} />
            </div>
            <p className="text-sm text-sub leading-relaxed">
              Autoruiten tinten op locatie.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sub mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-sub">
              <li>Simon Gorter</li>
              <li>06 48 11 74 22</li>
              <li>info@intint.nl</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sub mb-4">
              Adres
            </h4>
            <ul className="space-y-2 text-sm text-sub">
              <li>Westein 27G</li>
              <li>8561 BZ Balk</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sub mb-4">
              Bedrijfsgegevens
            </h4>
            <ul className="space-y-2 text-sm text-sub">
              <li>KVK: —</li>
              <li>BTW: —</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sub">
          <p>&copy; {new Date().getFullYear()} Intint. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
