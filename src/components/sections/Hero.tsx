// Change VARIANT to "A", "B", or "C" to test different geometric visuals
const VARIANT: "A" | "B" | "C" = "A";

function GeometricA() {
  // Dashboard/mockup inside the diamond — shows what they build
  return (
    <div className="relative h-72 w-72 lg:h-[420px] lg:w-[420px]">
      {/* Outer rotating diamond */}
      <div className="absolute inset-0 rotate-45 rounded-3xl border border-(--color-accent-blue)/20" />
      {/* Mid diamond with gradient border */}
      <div className="absolute inset-6 rotate-45 rounded-2xl border border-(--color-accent-green)/15" />
      {/* Inner diamond — clipped content area */}
      <div className="absolute inset-12 rotate-45 overflow-hidden rounded-xl bg-gradient-to-br from-(--color-accent-blue)/10 to-(--color-accent-green)/10 backdrop-blur-sm">
        {/* Dashboard mockup inside (counter-rotated) */}
        <div className="-rotate-45 flex flex-col gap-2 p-8 lg:p-12">
          {/* Mini nav bar */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-(--color-accent-orange)/60" />
            <div className="h-2 w-2 rounded-full bg-(--color-accent-yellow)/60" />
            <div className="h-2 w-2 rounded-full bg-(--color-accent-green)/60" />
            <div className="ml-2 h-1.5 w-16 rounded-full bg-white/10" />
          </div>
          {/* Content lines */}
          <div className="mt-3 space-y-2">
            <div className="h-3 w-24 rounded bg-white/15" />
            <div className="h-2 w-32 rounded bg-white/8" />
            <div className="h-2 w-20 rounded bg-white/8" />
          </div>
          {/* Mini cards */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-12 rounded-lg bg-(--color-accent-blue)/15 border border-(--color-accent-blue)/20" />
            <div className="h-12 rounded-lg bg-(--color-accent-green)/15 border border-(--color-accent-green)/20" />
          </div>
          {/* CTA */}
          <div className="mt-2 h-6 w-20 rounded-md bg-gradient-to-r from-(--color-accent-yellow)/40 to-(--color-accent-orange)/40" />
        </div>
      </div>
      {/* Floating accent dots */}
      <div className="absolute -top-3 left-1/2 h-2 w-2 rounded-full bg-(--color-accent-yellow)/50" />
      <div className="absolute top-1/2 -right-3 h-2 w-2 rounded-full bg-(--color-accent-blue)/50" />
      <div className="absolute -bottom-3 left-1/2 h-2 w-2 rounded-full bg-(--color-accent-green)/50" />
    </div>
  );
}

function GeometricB() {
  // Code/terminal aesthetic inside diamond — shows tech capability
  return (
    <div className="relative h-72 w-72 lg:h-[420px] lg:w-[420px]">
      <div className="absolute inset-0 rotate-45 rounded-3xl border border-(--color-accent-purple)/20" />
      <div className="absolute inset-6 rotate-45 rounded-2xl border border-(--color-accent-blue)/15" />
      <div className="absolute inset-12 rotate-45 overflow-hidden rounded-xl bg-(--color-bg-elevated)/80 backdrop-blur-md border border-(--color-glass-border)">
        {/* Code lines inside (counter-rotated) */}
        <div className="-rotate-45 p-8 lg:p-12 font-mono text-xs">
          <div className="space-y-1.5">
            <div className="flex gap-1.5">
              <span className="text-(--color-accent-purple)/70">const</span>
              <span className="text-(--color-accent-blue)/70">site</span>
              <span className="text-white/30">=</span>
              <span className="text-(--color-accent-green)/70">{`{`}</span>
            </div>
            <div className="flex gap-1.5 pl-4">
              <span className="text-(--color-accent-orange)/70">design:</span>
              <span className="text-(--color-accent-yellow)/70">{'"único"'}</span>
            </div>
            <div className="flex gap-1.5 pl-4">
              <span className="text-(--color-accent-orange)/70">performance:</span>
              <span className="text-(--color-accent-green)/70">100</span>
            </div>
            <div className="flex gap-1.5 pl-4">
              <span className="text-(--color-accent-orange)/70">conversão:</span>
              <span className="text-(--color-accent-green)/70">true</span>
            </div>
            <div><span className="text-(--color-accent-green)/70">{`}`}</span></div>
          </div>
          {/* Blinking cursor */}
          <div className="mt-2 h-3 w-1.5 animate-pulse bg-(--color-accent-yellow)/60" />
        </div>
      </div>
      {/* Orbit particles */}
      <div className="absolute top-6 right-12 h-1.5 w-1.5 rounded-full bg-(--color-accent-orange)/40" />
      <div className="absolute bottom-12 left-6 h-1.5 w-1.5 rounded-full bg-(--color-accent-blue)/40" />
      <div className="absolute top-1/3 -left-2 h-1 w-1 rounded-full bg-(--color-accent-green)/40" />
    </div>
  );
}

function GeometricC() {
  // Abstract gradient mesh with logo colors inside diamond — pure visual impact
  return (
    <div className="relative h-72 w-72 lg:h-[420px] lg:w-[420px]">
      <div className="absolute inset-0 rotate-45 rounded-3xl border border-white/10" />
      <div className="absolute inset-4 rotate-45 rounded-2xl border border-white/5" />
      <div className="absolute inset-8 rotate-45 overflow-hidden rounded-xl">
        {/* Gradient mesh with logo colors */}
        <div className="absolute inset-0 bg-(--color-bg-elevated)">
          <div className="absolute top-0 left-0 h-1/2 w-1/2 bg-gradient-to-br from-(--color-accent-yellow)/30 to-transparent" />
          <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-gradient-to-bl from-(--color-accent-orange)/30 to-transparent" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-tr from-(--color-accent-blue)/30 to-transparent" />
          <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-(--color-accent-green)/30 to-transparent" />
          {/* Center white diamond (echoing the logo) */}
          <div className="absolute inset-1/4 rotate-45 rounded-lg bg-white/8 backdrop-blur-sm" />
        </div>
      </div>
      {/* Glow behind */}
      <div className="pointer-events-none absolute inset-0 -z-10 rotate-45 rounded-3xl bg-gradient-to-br from-(--color-accent-yellow)/10 via-(--color-accent-orange)/5 to-(--color-accent-blue)/10 blur-2xl" />
    </div>
  );
}

const variants = { A: GeometricA, B: GeometricB, C: GeometricC };

export default function Hero() {
  const Geometric = variants[VARIANT];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-(--color-bg-base) pt-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-(--color-accent-blue)/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-(--color-accent-purple)/6 blur-[100px]" />

      <div className="mx-auto grid max-w-(--layout-max-width) grid-cols-12 gap-6 px-6 lg:px-20">
        {/* Text — offset grid: col 2-8 */}
        <div className="col-span-12 flex flex-col gap-8 lg:col-span-7">
          {/* Oversized heading mutation */}
          <h1 className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-[clamp(72px,8vw,120px)] lg:leading-[0.95]">
            <span className="block text-(--color-text-primary)">
              Criamos sites
            </span>
            <span className="block text-gradient-cool">
              que convertem.
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-(--color-text-secondary) lg:text-xl">
            Desenvolvimento de sites e aplicativos com foco em resultado.
            Design que atrai, tecnologia que entrega.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:shadow-xl hover:shadow-(--color-accent-orange)/30 hover:brightness-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-(--color-border) px-8 py-4 text-base font-medium text-(--color-text-secondary) transition-all duration-200 hover:border-(--color-text-secondary) hover:text-(--color-text-primary)"
            >
              Nossos Serviços
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative element — larger, offset right cols 9-12 */}
        <div className="col-span-12 flex items-center justify-center lg:col-start-9 lg:col-span-4">
          <Geometric />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-(--color-text-secondary)/50">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-(--color-text-secondary)/30 to-transparent" />
      </div>
    </section>
  );
}
