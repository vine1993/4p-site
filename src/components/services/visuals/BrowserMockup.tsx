/** Criação de Sites — browser window with site preview */
export default function BrowserMockup() {
  return (
    <>
      {/* Floating badge top-left */}
      <div className="absolute -top-4 -left-6 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-green)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-green)">
            <path d="M4 12L7 6L10 8L13 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Design</p>
          <p className="text-sm font-bold text-(--color-accent-green)">Exclusivo</p>
        </div>
      </div>

      {/* Browser frame */}
      <div className="glass-card overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-(--color-glass-border) px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-(--color-accent-orange)/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-(--color-accent-yellow)/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-(--color-accent-green)/60" />
          </div>
          <div className="flex-1 mx-8">
            <div className="rounded-md bg-(--color-bg-base)/60 px-3 py-1 text-xs text-(--color-text-secondary) text-center">
              seusite.com.br
            </div>
          </div>
        </div>

        <div className="bg-(--color-bg-base)/40 p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="h-3 w-20 rounded bg-(--color-glass-hover)" />
            <div className="flex gap-4">
              <div className="h-2 w-12 rounded bg-(--color-glass-hover)" />
              <div className="h-2 w-12 rounded bg-(--color-glass-hover)" />
              <div className="h-2 w-12 rounded bg-(--color-glass-hover)" />
            </div>
          </div>

          <div className="mb-6">
            <div className="h-4 w-3/4 rounded bg-(--color-glass-hover) mb-2" />
            <div className="h-4 w-1/2 rounded mb-4" style={{ background: "var(--gradient-primary)", opacity: 0.6 }} />
            <div className="h-2 w-full rounded bg-(--color-glass) mb-1.5" />
            <div className="h-2 w-4/5 rounded bg-(--color-glass) mb-4" />
            <div className="h-7 w-28 rounded-lg" style={{ background: "var(--gradient-primary)", opacity: 0.7 }} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["bg-(--color-accent-blue)/10", "bg-(--color-accent-green)/10", "bg-(--color-accent-orange)/10"].map((bg, i) => (
              <div key={i} className={`rounded-lg ${bg} p-3`}>
                <div className="h-6 w-6 rounded bg-(--color-glass-hover) mb-2" />
                <div className="h-2 w-full rounded bg-(--color-glass-hover) mb-1" />
                <div className="h-2 w-3/4 rounded bg-(--color-glass)" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge bottom-right */}
      <div className="absolute -bottom-3 -right-4 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-blue)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-blue)">
            <rect x="2" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Mobile</p>
          <p className="text-sm font-bold text-(--color-accent-blue)">Responsivo</p>
        </div>
      </div>

      {/* Floating badge mid-right */}
      <div className="absolute top-1/2 -right-8 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-yellow)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-yellow)">
            <path d="M9 2L4 9H8L7 14L12 7H8L9 2Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Performance</p>
          <p className="text-sm font-bold text-(--color-accent-yellow)">Otimizada</p>
        </div>
      </div>
    </>
  );
}
