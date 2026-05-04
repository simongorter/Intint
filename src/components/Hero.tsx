import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Simon tint autoruiten op locatie"
          fill
          priority
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-transparent" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8 hero-fade-1">
          <span className="h-px w-10 bg-accent" />
          <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
            Tinting Service
          </span>
        </div>

        {/* Heading — lighter weight, mixed case */}
        <h1 className="hero-fade-2 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
          <span className="block text-text">Autoruiten tinten</span>
          <span className="block text-accent font-extrabold">bij u op locatie</span>
        </h1>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sub opacity-40">
        <span className="text-xs tracking-[0.3em] uppercase font-light">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-sub to-transparent" />
      </div>
    </section>
  );
}
