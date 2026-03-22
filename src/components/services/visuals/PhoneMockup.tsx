/** Aplicativos Mobile — phone frame with app screens */
export default function PhoneMockup() {
  return (
    <>
      {/* Floating badge top-left */}
      <div className="absolute -top-4 -left-6 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-green)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-green)">
            <path d="M8 2L10 6H14L11 9L12 13L8 10.5L4 13L5 9L2 6H6L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">App Store</p>
          <p className="text-sm font-bold text-(--color-accent-green)">Publicado</p>
        </div>
      </div>

      {/* Phone frame */}
      <div className="mx-auto w-[260px]">
        <div className="glass-card overflow-hidden p-0 rounded-[32px]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 bg-(--color-bg-base)/60">
            <span className="text-[10px] text-(--color-text-secondary)">9:41</span>
            <div className="h-5 w-20 rounded-full bg-(--color-bg-base)" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-(--color-text-secondary)/40" />
              <div className="h-2 w-2 rounded-full bg-(--color-text-secondary)/40" />
              <div className="h-2 w-3 rounded-sm bg-(--color-text-secondary)/40" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-(--color-bg-base)/40 px-5 pb-6 pt-4">
            {/* App header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="h-2 w-16 rounded bg-(--color-glass-hover) mb-1.5" />
                <div className="h-3.5 w-28 rounded bg-(--color-glass-hover)" />
              </div>
              <div className="h-8 w-8 rounded-full bg-(--color-glass-hover)" />
            </div>

            {/* Featured card */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--gradient-primary)", opacity: 0.85 }}>
              <div className="h-2 w-20 rounded bg-white/30 mb-2" />
              <div className="h-3 w-32 rounded bg-white/50 mb-3" />
              <div className="h-6 w-20 rounded-lg bg-white/25" />
            </div>

            {/* List items */}
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-(--color-glass-border) last:border-0">
                <div className={`h-10 w-10 rounded-xl shrink-0 ${
                  i === 0 ? "bg-(--color-accent-blue)/15" :
                  i === 1 ? "bg-(--color-accent-green)/15" :
                  "bg-(--color-accent-yellow)/15"
                }`} />
                <div className="flex-1">
                  <div className="h-2.5 w-24 rounded bg-(--color-glass-hover) mb-1.5" />
                  <div className="h-2 w-16 rounded bg-(--color-glass)" />
                </div>
                <div className="h-2 w-8 rounded bg-(--color-glass)" />
              </div>
            ))}

            {/* Bottom tab bar */}
            <div className="mt-5 flex items-center justify-around rounded-2xl bg-(--color-glass) py-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`h-4 w-4 rounded ${i === 0 ? "bg-(--color-accent-orange)/60" : "bg-(--color-glass-hover)"}`} />
                  <div className="h-1.5 w-6 rounded bg-(--color-glass-hover)" />
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
            <rect x="5" y="2" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="12" r="0.75" fill="currentColor" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">iOS + Android</p>
          <p className="text-sm font-bold text-(--color-accent-blue)">Multiplataforma</p>
        </div>
      </div>

      {/* Floating badge mid-right */}
      <div className="absolute top-1/3 -right-8 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-orange)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-orange)">
            <path d="M8 3V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Push</p>
          <p className="text-sm font-bold text-(--color-accent-orange)">Notificações</p>
        </div>
      </div>
    </>
  );
}
