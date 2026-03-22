export default function Conversion() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Inverted section mutation — light island in dark page */}
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
            <form className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all focus:border-(--color-accent-blue) focus:ring-2 focus:ring-(--color-accent-blue)/20 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all focus:border-(--color-accent-blue) focus:ring-2 focus:ring-(--color-accent-blue)/20 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sobre o Projeto
                </label>
                <textarea
                  id="project"
                  rows={4}
                  placeholder="Descreva brevemente o que precisa..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all resize-none focus:border-(--color-accent-blue) focus:ring-2 focus:ring-(--color-accent-blue)/20 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                Enviar Mensagem
              </button>
              <p className="text-center text-xs text-gray-400">
                Sem spam. Respondemos em até 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
