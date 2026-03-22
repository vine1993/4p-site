import type { ReactNode } from "react";

const accentCycle = [
  { accent: "text-(--color-accent-yellow)", border: "border-(--color-accent-yellow)/20" },
  { accent: "text-(--color-accent-orange)", border: "border-(--color-accent-orange)/20" },
  { accent: "text-(--color-accent-blue)", border: "border-(--color-accent-blue)/20" },
  { accent: "text-(--color-accent-green)", border: "border-(--color-accent-green)/20" },
  { accent: "text-(--color-accent-purple)", border: "border-(--color-accent-purple)/20" },
];

export interface ProcessStep {
  title: string;
  description: string;
  details: string[];
}

export interface ServiceProcessProps {
  title: ReactNode;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({
  title,
  subtitle,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-(--color-bg-base)">
      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-blue) mb-4">
          Nosso Processo
        </p>
        <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-lg text-(--color-text-secondary) text-lg">
          {subtitle}
        </p>

        <div className="mt-16 lg:mt-20">
          <div className="relative space-y-8">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-(--color-border) hidden lg:block" />

            {steps.map((step, i) => {
              const colors = accentCycle[i % accentCycle.length];
              const number = String(i + 1).padStart(2, "0");

              return (
                <div
                  key={number}
                  className={`glass-card relative p-8 lg:p-10 lg:ml-14 ${colors.border}`}
                >
                  <div className="lg:absolute lg:-left-14 lg:top-10 mb-4 lg:mb-0">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-(--color-bg-base) border border-(--color-glass-border) text-sm font-bold ${colors.accent}`}
                    >
                      {number}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${colors.accent}`}>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-(--color-text-secondary) leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="shrink-0 flex flex-wrap gap-2 lg:flex-col">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="inline-block rounded-full border border-(--color-glass-border) bg-(--color-glass) px-3 py-1 text-xs text-(--color-text-secondary)"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
