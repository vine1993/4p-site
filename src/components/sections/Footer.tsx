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
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Como Funciona", href: "/#como-funciona" },
      { label: "Resultados", href: "/#resultados" },
      { label: "Contato", href: "/#contato" },
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
                alt="Four Pixels — Agência Digital"
                width={360}
                height={100}
                className="h-12 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--color-text-secondary)">
              Agência digital especializada em sites e aplicativos que geram
              resultados para o seu negócio.
            </p>
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

          {/* Contact info */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <h4 className="text-sm font-semibold text-(--color-text-primary)">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-(--color-text-secondary)">
              <li>
                <a
                  href="mailto:contato@fourpixels.com.br"
                  className="transition-colors hover:text-(--color-text-primary)"
                >
                  contato@fourpixels.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  className="transition-colors hover:text-(--color-text-primary)"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-(--color-border) pt-8 text-xs text-(--color-text-secondary) sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Four Pixels. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-(--color-text-primary)">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-(--color-text-primary)">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
