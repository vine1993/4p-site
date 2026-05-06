import type { ReactNode } from "react";

const WHATSAPP_NUMBER = "5511961848388";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  cta: string;
  whatsappMessage: string;
  visual: ReactNode;
  breadcrumbs?: ReactNode;
}

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
  cta,
  whatsappMessage,
  visual,
  breadcrumbs,
}: ServiceHeroProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <section className="relative overflow-hidden bg-(--color-bg-base) pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-(--color-accent-orange)/8 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[300px] w-[400px] rounded-full bg-(--color-accent-blue)/6 blur-[120px]" />

      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        {breadcrumbs && <div className="mb-8">{breadcrumbs}</div>}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <span className="inline-block rounded-full border border-(--color-glass-border) bg-(--color-glass) px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-(--color-accent-orange)">
              {badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-6xl">
              {title}
              <br />
              <span className="text-gradient-primary">{highlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-(--color-text-secondary) leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                {cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="text-sm text-(--color-text-secondary)">
                Orçamento gratuito e sem compromisso
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
