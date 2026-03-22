const steps = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seu público e seus objetivos. Mapeamos concorrentes e identificamos oportunidades.",
    accent: "text-(--color-accent-yellow)",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos arquitetura, wireframes e estratégia de conteúdo. Você aprova antes de começarmos a produzir.",
    accent: "text-(--color-accent-orange)",
  },
  {
    number: "03",
    title: "Design & Código",
    description:
      "Criamos o design e desenvolvemos com as melhores tecnologias. Cada etapa com sua aprovação.",
    accent: "text-(--color-accent-blue)",
  },
  {
    number: "04",
    title: "Lançamento",
    description:
      "Publicamos, configuramos analytics e garantimos que tudo funcione. Suporte contínuo após a entrega.",
    accent: "text-(--color-accent-green)",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 bg-(--color-bg-base)">
      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        {/* Section header — offset grid */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-green) mb-4">
              Como Funciona
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
              Do briefing ao{" "}
              <span className="text-gradient-cool">lançamento.</span>
            </h2>
            <p className="mt-4 max-w-md text-(--color-text-secondary) text-lg">
              Processo transparente em 4 etapas. Você acompanha tudo.
            </p>
          </div>
        </div>

        {/* Steps — asymmetric 2fr/1fr alternating */}
        <div className="mt-16 space-y-6 lg:mt-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`glass-card flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-10 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Number */}
              <div className="shrink-0">
                <span
                  className={`text-6xl font-bold tracking-tighter ${step.accent} lg:text-8xl`}
                  style={{ opacity: 0.3 }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-(--color-text-primary) lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-(--color-text-secondary) leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-3 left-1/2 h-6 w-px bg-(--color-border)" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
