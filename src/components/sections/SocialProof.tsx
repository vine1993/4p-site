const stats = [
  { value: "150+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "5+", label: "Anos de Mercado" },
  { value: "24h", label: "Tempo de Resposta" },
];

import Image from "next/image";

const clients = [
  { name: "GT Plan", url: "https://gtplan.net/", logo: "/clients/gtplan.webp" },
  { name: "TechNova", url: "#", logo: null },
  { name: "Solar Energy", url: "#", logo: null },
  { name: "Construtora Alfa", url: "#", logo: null },
  { name: "Bella Cucina", url: "#", logo: null },
  { name: "Pet Vida", url: "#", logo: null },
  { name: "Studio Forma", url: "#", logo: null },
  { name: "Dr. Saúde", url: "#", logo: null },
];

export default function SocialProof() {
  return (
    <section id="resultados" className="relative bg-(--color-bg-elevated) py-20 lg:py-28">
      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center lg:p-8">
              <div className="text-3xl font-bold text-gradient-cool lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-(--color-text-secondary)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Clients section */}
        <div className="mt-20">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-(--color-text-secondary)/60 mb-10">
            Empresas que confiam no nosso trabalho
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target={client.url !== "#" ? "_blank" : undefined}
                rel={client.url !== "#" ? "noopener noreferrer" : undefined}
                className="glass-card group flex flex-col items-center gap-4 p-6 lg:p-8"
              >
                {/* Logo */}
                {client.logo ? (
                  <div className="flex h-14 w-full items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--color-glass) border border-(--color-glass-border) transition-all duration-300 group-hover:border-(--color-accent-blue)/30 group-hover:bg-(--color-accent-blue)/10">
                    <span className="text-lg font-bold text-(--color-text-secondary) transition-colors group-hover:text-(--color-accent-blue)">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Client name */}
                <span className="text-sm font-medium text-(--color-text-secondary) transition-colors group-hover:text-(--color-text-primary)">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
