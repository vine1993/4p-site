/** Sistemas Web — dashboard/admin panel mockup */
export default function DashboardMockup() {
  return (
    <>
      {/* Floating badge top-left */}
      <div className="absolute -top-4 -left-6 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-green)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-green)">
            <path d="M2 12L5 6L8 8L11 4L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Dados</p>
          <p className="text-sm font-bold text-(--color-accent-green)">Tempo Real</p>
        </div>
      </div>

      {/* Dashboard frame */}
      <div className="glass-card overflow-hidden p-0">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 shrink-0 border-r border-(--color-glass-border) bg-(--color-bg-base)/60 py-4 flex flex-col items-center gap-4">
            <div className="h-6 w-6 rounded-lg" style={{ background: "var(--gradient-primary)", opacity: 0.7 }} />
            <div className="mt-2 space-y-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-5 w-5 rounded ${i === 0 ? "bg-(--color-accent-orange)/40" : "bg-(--color-glass-hover)"}`} />
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 bg-(--color-bg-base)/40 p-5">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="h-2 w-14 rounded bg-(--color-glass) mb-1.5" />
                <div className="h-3 w-24 rounded bg-(--color-glass-hover)" />
              </div>
              <div className="flex gap-2">
                <div className="h-7 w-20 rounded-lg bg-(--color-glass-hover)" />
                <div className="h-7 w-7 rounded-lg bg-(--color-glass-hover)" />
              </div>
            </div>

            {/* Metric cards row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { color: "bg-(--color-accent-blue)/10", border: "border-(--color-accent-blue)/20" },
                { color: "bg-(--color-accent-green)/10", border: "border-(--color-accent-green)/20" },
                { color: "bg-(--color-accent-orange)/10", border: "border-(--color-accent-orange)/20" },
              ].map((card, i) => (
                <div key={i} className={`rounded-lg ${card.color} border ${card.border} p-3`}>
                  <div className="h-2 w-12 rounded bg-(--color-glass) mb-2" />
                  <div className="h-4 w-16 rounded bg-(--color-glass-hover)" />
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="rounded-lg border border-(--color-glass-border) bg-(--color-glass) p-4 mb-4">
              <div className="h-2 w-20 rounded bg-(--color-glass-hover) mb-4" />
              {/* Bar chart */}
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: i === 6 ? "var(--gradient-primary)" : "var(--color-glass-hover)",
                      opacity: i === 6 ? 0.9 : 1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-(--color-glass) px-3 py-2">
                  <div className="h-3 w-3 rounded-full bg-(--color-glass-hover)" />
                  <div className="h-2 w-20 rounded bg-(--color-glass-hover)" />
                  <div className="h-2 w-14 rounded bg-(--color-glass) ml-auto" />
                  <div className={`h-4 w-12 rounded text-center text-[8px] leading-4 font-medium ${
                    i === 0 ? "bg-(--color-accent-green)/15 text-(--color-accent-green)" :
                    i === 1 ? "bg-(--color-accent-yellow)/15 text-(--color-accent-yellow)" :
                    "bg-(--color-accent-blue)/15 text-(--color-accent-blue)"
                  }`}>
                    {i === 0 ? "Ativo" : i === 1 ? "Pendente" : "Novo"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge bottom-right */}
      <div className="absolute -bottom-3 -right-4 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-blue)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-blue)">
            <path d="M8 2L14 5V11L8 14L2 11V5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Automação</p>
          <p className="text-sm font-bold text-(--color-accent-blue)">Integrada</p>
        </div>
      </div>

      {/* Floating badge mid-right */}
      <div className="absolute top-1/2 -right-8 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-yellow)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-yellow)">
            <path d="M4 4H12C13.1 4 14 4.9 14 6V10C14 11.1 13.1 12 12 12H4C2.9 12 2 11.1 2 10V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Acesso</p>
          <p className="text-sm font-bold text-(--color-accent-yellow)">Por Perfil</p>
        </div>
      </div>
    </>
  );
}
