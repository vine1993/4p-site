const featured = {
  quote:
    "O site ficou muito acima do que esperávamos e os resultados apareceram no primeiro mês.",
  name: "Carlos Mendes",
  role: "CEO, GT Plan",
  result: "+340%",
  resultLabel: "aumento em leads",
  projectUrl: "https://gtplan.net",
};

const others = [
  {
    quote:
      "Entregaram no prazo, com qualidade e sempre disponíveis para ajustar o que fosse necessário.",
    name: "Ana Ferreira",
    role: "Diretora de Marketing, TechNova",
    result: "2x",
    resultLabel: "mais conversões",
  },
  {
    quote:
      "Nosso aplicativo ficou exatamente como imaginamos. A equipe é técnica e entende de negócio.",
    name: "Ricardo Lopes",
    role: "Fundador, Solar Energy",
    result: "4.9",
    resultLabel: "nota na App Store",
  },
];

export default function VisualBreak() {
  return (
    <section className="relative overflow-hidden bg-(--color-bg-elevated) py-24 lg:py-32">
      {/* Large ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-(--color-accent-orange)/5 blur-[150px]" />

      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-orange) mb-4">
          Resultados Reais
        </p>

        {/* Featured testimonial — large editorial layout */}
        <div className="glass-card relative overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            {/* Left — result + project mockup */}
            <div className="relative flex flex-col items-center justify-center gap-4 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-(--color-glass-border)">
              <div
                className="text-7xl font-bold tracking-tighter lg:text-[120px] lg:leading-none"
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {featured.result}
              </div>
              <p className="text-lg text-(--color-text-secondary) lg:text-xl">
                {featured.resultLabel}
              </p>
              <a
                href={featured.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent-orange) transition-colors hover:text-(--color-text-primary)"
              >
                Ver projeto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Right — quote */}
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <svg
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="none"
                className="mb-8 text-(--color-accent-orange)/30"
              >
                <path
                  d="M12 8H6C6 8 4 12 4 16V24H12V16H8C8 12 10 10 12 8ZM26 8H20C20 8 18 12 18 16V24H26V16H22C22 12 24 10 26 8Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="text-2xl font-bold leading-snug tracking-tight text-(--color-text-primary) lg:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-(--color-accent-yellow)/30 to-(--color-accent-orange)/30 flex items-center justify-center text-sm font-bold text-(--color-text-primary)">
                  {featured.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-(--color-text-primary)">
                    {featured.name}
                  </p>
                  <p className="text-sm text-(--color-text-secondary)">
                    {featured.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials — smaller, side by side */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((t) => (
            <div
              key={t.name}
              className="glass-card group relative overflow-hidden p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Mini result */}
                <div className="shrink-0 text-center sm:text-left">
                  <div
                    className="text-4xl font-bold tracking-tight lg:text-5xl"
                    style={{
                      background: "var(--gradient-cool)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {t.result}
                  </div>
                  <p className="mt-1 text-xs text-(--color-text-secondary)">
                    {t.resultLabel}
                  </p>
                </div>

                {/* Quote + author */}
                <div className="flex-1">
                  <p className="text-(--color-text-primary) leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-(--color-glass) border border-(--color-glass-border) flex items-center justify-center text-xs font-bold text-(--color-text-secondary)">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-(--color-text-primary)">
                        {t.name}
                      </p>
                      <p className="text-xs text-(--color-text-secondary)">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
