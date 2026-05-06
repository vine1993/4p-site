import Image from "next/image";

const navGroups = [
  {
    title: "Serviços",
    links: [
      { label: "Criação de Sites", href: "/servicos/criacao-de-sites" },
      { label: "Aplicativos Mobile", href: "/servicos/aplicativos-mobile" },
      { label: "Sistemas Web", href: "/servicos/sistemas-web" },
      { label: "Produtos Customizados", href: "/servicos/produtos-customizados" },
    ],
  },
  {
    title: "Soluções por Segmento",
    links: [
      { label: "Site para Advogados", href: "/servicos/site-para-advogados" },
      { label: "Site para Médicos", href: "/servicos/site-para-medicos" },
      { label: "Site para Dentistas", href: "/servicos/site-para-dentistas" },
      { label: "Site para Veterinária", href: "/servicos/site-para-clinica-veterinaria" },
      { label: "Site para Imobiliárias", href: "/servicos/site-para-imobiliarias" },
      { label: "Cardápio Digital", href: "/servicos/cardapio-virtual" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Como Funciona", href: "/#como-funciona" },
      { label: "Resultados", href: "/#resultados" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg-elevated) pt-16 pb-8">
      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand — col 1-4 */}
          <div className="col-span-12 lg:col-span-4">
            <a href="/">
              <Image
                src="/logo.png"
                alt="4 Pixels — Agência Digital"
                width={360}
                height={100}
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-text-secondary)">
              Agência digital especializada em sites e aplicativos que geram
              resultados para o seu negócio.
            </p>
            <address className="mt-6 not-italic space-y-2 text-sm text-(--color-text-secondary)">
              <p>Sediados em São Paulo · SP · Brasil</p>
              <p>
                <a
                  href="tel:+5511961848388"
                  className="transition-colors hover:text-(--color-text-primary)"
                >
                  (11) 96184-8388
                </a>
              </p>
              <p className="text-xs text-text-secondary/70">
                Atendemos todo o Brasil e projetos remotos no exterior
              </p>
            </address>
          </div>

          {/* Nav groups — col 6-12 */}
          {navGroups.map((group) => (
            <div key={group.title} className="col-span-6 lg:col-span-2">
              <h4 className="text-sm font-semibold text-(--color-text-primary)">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-(--color-border) pt-8 text-xs text-(--color-text-secondary) sm:flex-row">
          <p>&copy; {new Date().getFullYear()} 4 Pixels. Todos os direitos reservados.</p>
          <p className="text-text-secondary/50">ad4pixels.com.br</p>
        </div>
      </div>
    </footer>
  );
}
