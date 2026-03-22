"use client";

import { useState } from "react";

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ServiceFaqProps {
  faqs: FaqEntry[];
}

function FaqItem({ question, answer }: FaqEntry) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-(--color-border) last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-semibold text-(--color-text-primary) pr-8">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-(--color-text-secondary) transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <path
            d="M10 4V16M4 10H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-(--color-text-secondary) leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative py-24 lg:py-32 bg-(--color-bg-base)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-green) mb-4">
              Dúvidas Frequentes
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Perguntas que nossos clientes{" "}
              <span className="text-gradient-cool">sempre fazem.</span>
            </h2>
            <p className="mt-4 text-(--color-text-secondary)">
              Não encontrou sua resposta? Entre em contato e tiramos todas as
              suas dúvidas.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card overflow-hidden p-2 lg:p-4">
              <div className="px-6">
                {faqs.map((faq) => (
                  <FaqItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
