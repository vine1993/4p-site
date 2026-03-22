import type { ReactNode } from "react";

const accentCycle = [
  "text-(--color-accent-yellow)",
  "text-(--color-accent-orange)",
  "text-(--color-accent-green)",
  "text-(--color-accent-blue)",
  "text-(--color-accent-purple)",
];

export interface Differential {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface DifferentialsProps {
  title: ReactNode;
  subtitle: string;
  items: Differential[];
}

export default function Differentials({
  title,
  subtitle,
  items,
}: DifferentialsProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-(--color-bg-elevated)">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-(--color-accent-blue)/5 blur-[120px]" />

      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-orange) mb-4">
          Por que a Four Pixels
        </p>
        <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-lg text-(--color-text-secondary) text-lg">
          {subtitle}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {items.map((d, i) => (
            <div
              key={d.title}
              className="glass-card group relative overflow-hidden p-8"
            >
              <div className={`mb-5 ${accentCycle[i % accentCycle.length]}`}>
                {d.icon}
              </div>
              <h3 className="text-lg font-bold text-(--color-text-primary)">
                {d.title}
              </h3>
              <p className="mt-3 text-sm text-(--color-text-secondary) leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
