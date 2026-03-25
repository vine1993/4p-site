"use client";

import { useActionState, useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const initialState = { success: false };

interface FieldErrors {
  name?: string;
  email?: string;
  project?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.get("name")?.toString().trim()) errors.name = "Informe seu nome.";
  const email = data.get("email")?.toString().trim() ?? "";
  if (!email) errors.email = "Informe seu e-mail.";
  else if (!emailRegex.test(email)) errors.email = "E-mail inválido.";
  if (!data.get("project")?.toString().trim()) errors.project = "Descreva brevemente seu projeto.";
  return errors;
}

export default function Conversion() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      setFieldErrors(errors);
    } else {
      setFieldErrors({});
    }
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-(--color-accent-blue)/10 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-(--color-accent-green)/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-(--layout-max-width) px-6 lg:px-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Text — offset left */}
          <div className="col-span-12 lg:col-start-2 lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-(--color-accent-blue) mb-4">
              Vamos Conversar
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-(--color-accent-blue) to-(--color-accent-green) bg-clip-text text-transparent">
                transformar
              </span>{" "}
              sua presença digital?
            </h2>
            <p className="mt-4 max-w-md text-gray-600 text-lg leading-relaxed">
              Conte seu projeto. Respondemos em até 24 horas com uma proposta
              personalizada — sem compromisso.
            </p>
          </div>

          {/* Form — offset right */}
          <div className="col-span-12 lg:col-start-8 lg:col-span-4">
            {state.success ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-green-100 bg-green-50 px-6 py-12 text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-green-500">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-base font-semibold text-gray-900">Mensagem enviada!</p>
                <p className="text-sm text-gray-500">Respondemos em até 24h.</p>
              </div>
            ) : (
              <form
                action={formAction}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    onChange={() => setFieldErrors((e) => ({ ...e, name: undefined }))}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all focus:ring-2 focus:outline-none ${
                      fieldErrors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-(--color-accent-blue) focus:ring-(--color-accent-blue)/20"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    onChange={() => setFieldErrors((e) => ({ ...e, email: undefined }))}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all focus:ring-2 focus:outline-none ${
                      fieldErrors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-(--color-accent-blue) focus:ring-(--color-accent-blue)/20"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Sobre o Projeto
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    placeholder="Descreva brevemente o que precisa..."
                    onChange={() => setFieldErrors((e) => ({ ...e, project: undefined }))}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all resize-none focus:ring-2 focus:outline-none ${
                      fieldErrors.project
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : "border-gray-200 focus:border-(--color-accent-blue) focus:ring-(--color-accent-blue)/20"
                    }`}
                  />
                  {fieldErrors.project && (
                    <p className="mt-1.5 text-xs text-red-500">{fieldErrors.project}</p>
                  )}
                </div>

                {state.error && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-red-500">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {state.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {pending ? "Enviando..." : "Enviar Mensagem"}
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-400">ou</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <a
                  href="https://wa.me/5511961848388?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
