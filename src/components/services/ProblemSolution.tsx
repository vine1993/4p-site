import type { ReactNode } from "react";

export interface ProblemSolutionProps {
  problemTitle: ReactNode;
  solutionTitle: ReactNode;
  problems: string[];
  solutions: string[];
}

const XIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProblemSolution({
  problemTitle,
  solutionTitle,
  problems,
  solutions,
}: ProblemSolutionProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-(--color-bg-elevated)">
      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problem */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-orange) mb-4">
              O Problema
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {problemTitle}
            </h2>
            <div className="mt-8 space-y-5">
              {problems.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-4 rounded-xl border border-(--color-accent-orange)/15 bg-(--color-accent-orange)/5 p-5"
                >
                  <div className="shrink-0 text-(--color-accent-orange)">
                    {XIcon}
                  </div>
                  <p className="text-(--color-text-secondary) leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-green) mb-4">
              A Solução
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {solutionTitle}
            </h2>
            <div className="mt-8 space-y-5">
              {solutions.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-4 rounded-xl border border-(--color-accent-green)/15 bg-(--color-accent-green)/5 p-5"
                >
                  <div className="shrink-0 text-(--color-accent-green)">
                    {CheckIcon}
                  </div>
                  <p className="text-(--color-text-secondary) leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
