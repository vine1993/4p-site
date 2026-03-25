import Image from "next/image";

const stats = [
  { value: "150+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "5+", label: "Anos de Mercado" },
  { value: "24h", label: "Tempo de Resposta" },
];

const clients = [
  { name: "Adecco", subtitle: "Recrutamento e soluções de RH para o mercado brasileiro", logo: "/clients/adecco.png" },
  { name: "Tua Terra", subtitle: "Desenvolvimento de bairros planejados e loteamentos residenciais", logo: "/clients/tuaterra.png" },
  { name: "Cardenas", subtitle: "Fabricação de botões duráveis e modernos alinhados às tendências da moda", logo: "/clients/cardenas.png" },
  { name: "King Star", subtitle: "Venda de colchões online", logo: "/clients/kingstar.png" },
  { name: "supplymind.com", subtitle: "Gestão inteligente de supply chain", logo: "/clients/supplymind.png" },
  { name: "Feiríssima", subtitle: "Hortifruti online com entrega em domicílio", logo: "/clients/feirissima.png" },
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
            Algumas das empresas que confiam no nosso trabalho
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="glass-card flex flex-col items-center justify-between gap-4 p-6 text-center"
              >
                {/* Fixed-height logo area — keeps all cards aligned */}
                <div className="flex h-20 w-full items-center justify-center">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={200}
                      height={80}
                      className="h-full w-auto max-w-40 object-contain opacity-85"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--color-glass) border border-(--color-glass-border)">
                      <span className="text-lg font-bold text-(--color-text-secondary)">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-(--color-text-primary)">
                    {client.name}
                  </p>
                  {client.subtitle && (
                    <p className="mt-1 text-xs leading-relaxed text-(--color-text-secondary)">
                      {client.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
