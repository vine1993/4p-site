const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Criação de Sites",
    description:
      "Sites institucionais, landing pages e e-commerces. Design exclusivo com foco em conversão e performance.",
    cta: "Quero meu site",
    href: "/servicos/criacao-de-sites",
    accent: "from-(--color-accent-blue)/15 to-(--color-accent-blue)/5",
    iconColor: "text-(--color-accent-blue)",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="10" y="4" width="12" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
        <path d="M14 8H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e multiplataforma para iOS e Android. Da concepção ao lançamento nas lojas.",
    cta: "Criar meu app",
    href: "/servicos/aplicativos-mobile",
    accent: "from-(--color-accent-green)/15 to-(--color-accent-green)/5",
    iconColor: "text-(--color-accent-green)",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M12 8L6 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8L26 16L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6L14 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Sistemas Web",
    description:
      "Plataformas e sistemas sob medida. Dashboards, painéis administrativos e automações que otimizam seu negócio.",
    cta: "Preciso de um sistema",
    href: "/servicos/sistemas-web",
    accent: "from-(--color-accent-orange)/15 to-(--color-accent-orange)/5",
    iconColor: "text-(--color-accent-orange)",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 16L28 10" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16L4 10" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16V28" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Produtos Customizados",
    description:
      "Soluções digitais personalizadas. Integrações, APIs e ferramentas específicas para o seu modelo de negócio.",
    cta: "Tenho um projeto",
    href: "/servicos/produtos-customizados",
    accent: "from-(--color-accent-purple)/15 to-(--color-accent-purple)/5",
    iconColor: "text-(--color-accent-purple)",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32 bg-(--color-bg-base)">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-(--color-accent-orange)/5 blur-[100px]" />

      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        {/* Section header — offset grid col 2-7 */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-blue) mb-4">
              Serviços
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
              Tudo que seu negócio{" "}
              <span className="text-gradient-primary">precisa no digital.</span>
            </h2>
            <p className="mt-4 max-w-md text-(--color-text-secondary) text-lg">
              Da ideia ao produto final. Projetamos e desenvolvemos soluções digitais completas.
            </p>
          </div>
        </div>

        {/* Service cards — asymmetric offset mutation (2fr/1fr grid) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card group relative overflow-hidden p-8 lg:p-10"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative">
                <div
                  className={`mb-6 inline-flex items-center justify-center rounded-xl bg-(--color-glass) p-3 ${service.iconColor}`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-(--color-text-primary)">
                  {service.title}
                </h3>
                <p className="mt-3 text-(--color-text-secondary) leading-relaxed">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-accent-orange)" }}
                >
                  {service.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
