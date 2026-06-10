const items = [
  "Salas",
  "Cozinhas",
  "Quartos & Closets",
  "Banheiros",
  "Marcenaria sob medida",
];

function MarqueeRow() {
  return (
    <div className="flex w-max shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display italic text-3xl md:text-5xl text-white/20 whitespace-nowrap px-8 md:px-12">
            {item}
          </span>
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <section
      aria-label="Ambientes atendidos: salas, cozinhas, quartos e closets, banheiros, marcenaria sob medida"
      className="relative overflow-hidden border-y border-white/5 bg-[#070707] py-8 md:py-10"
    >
      <div className="flex w-max animate-[marquee_45s_linear_infinite]" aria-hidden="true">
        <MarqueeRow />
        <MarqueeRow />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070707] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070707] to-transparent" />
    </section>
  );
}
