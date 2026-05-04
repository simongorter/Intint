interface SectionLabelProps {
  label: string;
  title: string;
  highlight?: string;
  className?: string;
}

export default function SectionLabel({ label, title, highlight, className = "" }: SectionLabelProps) {
  return (
    <div className={`mb-14 reveal ${className}`}>
      <div className="flex items-center gap-4 mb-5">
        <span className="h-px w-10 bg-accent" />
        <span className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">{label}</span>
        <span className="h-px w-10 bg-accent" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
        <span className="text-text">{title} </span>
        {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
    </div>
  );
}
