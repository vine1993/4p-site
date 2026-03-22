/** Produtos Customizados — code editor + API terminal mockup */
export default function CodeMockup() {
  return (
    <>
      {/* Floating badge top-left */}
      <div className="absolute -top-4 -left-6 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-green)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-green)">
            <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Build</p>
          <p className="text-sm font-bold text-(--color-accent-green)">Passed</p>
        </div>
      </div>

      {/* Code editor frame */}
      <div className="glass-card overflow-hidden p-0 mb-4">
        {/* Editor tab bar */}
        <div className="flex items-center border-b border-(--color-glass-border) bg-(--color-bg-base)/60">
          <div className="flex">
            <div className="flex items-center gap-2 border-r border-(--color-glass-border) px-4 py-2.5 bg-(--color-glass)">
              <div className="h-2 w-2 rounded-full bg-(--color-accent-blue)/60" />
              <span className="text-[10px] text-(--color-text-secondary)">handler.go</span>
            </div>
            <div className="flex items-center gap-2 border-r border-(--color-glass-border) px-4 py-2.5">
              <div className="h-2 w-2 rounded-full bg-(--color-accent-green)/60" />
              <span className="text-[10px] text-(--color-text-secondary)/60">models.go</span>
            </div>
          </div>
        </div>

        {/* Code content */}
        <div className="bg-(--color-bg-base)/40 p-4 font-mono text-[11px] leading-5">
          {/* Line numbers + code */}
          <div className="flex gap-4">
            <div className="text-(--color-text-secondary)/30 select-none text-right w-5 shrink-0">
              {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(n => (
                <div key={n}>{n}</div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              <div><span className="text-(--color-accent-purple)">func</span> <span className="text-(--color-accent-yellow)">ProcessOrder</span><span className="text-(--color-text-secondary)">(ctx </span><span className="text-(--color-accent-green)">context.Context</span><span className="text-(--color-text-secondary)">, data </span><span className="text-(--color-accent-green)">*OrderInput</span><span className="text-(--color-text-secondary)">)</span> <span className="text-(--color-text-secondary)">(</span><span className="text-(--color-accent-green)">*Result</span><span className="text-(--color-text-secondary)">, </span><span className="text-(--color-accent-green)">error</span><span className="text-(--color-text-secondary)">) {'{'}</span></div>
              <div className="pl-4"><span className="text-(--color-text-primary)">validated</span><span className="text-(--color-text-secondary)">, </span><span className="text-(--color-text-primary)">err</span> <span className="text-(--color-text-secondary)">:= </span><span className="text-(--color-accent-yellow)">Validate</span><span className="text-(--color-text-secondary)">(data)</span></div>
              <div className="pl-4"><span className="text-(--color-accent-purple)">if</span> <span className="text-(--color-text-primary)">err</span> <span className="text-(--color-text-secondary)">!= </span><span className="text-(--color-accent-purple)">nil</span> <span className="text-(--color-text-secondary)">{'{'}</span></div>
              <div className="pl-8"><span className="text-(--color-accent-purple)">return</span> <span className="text-(--color-accent-purple)">nil</span><span className="text-(--color-text-secondary)">, </span><span className="text-(--color-accent-yellow)">fmt.Errorf</span><span className="text-(--color-text-secondary)">(</span><span className="text-(--color-accent-green)">{'"validate: %w"'}</span><span className="text-(--color-text-secondary)">, err)</span></div>
              <div className="pl-4"><span className="text-(--color-text-secondary)">{'}'}</span></div>
              <div />
              <div className="pl-4"><span className="text-(--color-text-primary)">result</span><span className="text-(--color-text-secondary)">, _ := </span><span className="text-(--color-accent-yellow)">Execute</span><span className="text-(--color-text-secondary)">(ctx, validated)</span></div>
              <div />
              <div className="pl-4"><span className="text-(--color-accent-yellow)">Notify</span><span className="text-(--color-text-secondary)">(result.ID)</span></div>
              <div className="pl-4"><span className="text-(--color-accent-yellow)">SyncERP</span><span className="text-(--color-text-secondary)">(ctx, result)</span></div>
              <div />
              <div className="pl-4"><span className="text-(--color-accent-purple)">return</span> <span className="text-(--color-text-primary)">result</span><span className="text-(--color-text-secondary)">, </span><span className="text-(--color-accent-purple)">nil</span></div>
              <div><span className="text-(--color-text-secondary)">{'}'}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal/API response */}
      <div className="glass-card overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-(--color-glass-border) px-4 py-2 bg-(--color-bg-base)/60">
          <div className="h-2 w-2 rounded-full bg-(--color-accent-green)/60" />
          <span className="text-[10px] text-(--color-text-secondary)">API Response — 200 OK</span>
          <span className="ml-auto text-[10px] text-(--color-accent-green)">42ms</span>
        </div>
        <div className="bg-(--color-bg-base)/40 p-4 font-mono text-[11px] leading-5">
          <div className="text-(--color-text-secondary)">{'{'}</div>
          <div className="pl-4"><span className="text-(--color-accent-orange)">{'"status"'}</span><span className="text-(--color-text-secondary)">: </span><span className="text-(--color-accent-green)">{'"success"'}</span><span className="text-(--color-text-secondary)">,</span></div>
          <div className="pl-4"><span className="text-(--color-accent-orange)">{'"orderId"'}</span><span className="text-(--color-text-secondary)">: </span><span className="text-(--color-accent-blue)">{'"ORD-2847"'}</span><span className="text-(--color-text-secondary)">,</span></div>
          <div className="pl-4"><span className="text-(--color-accent-orange)">{'"synced"'}</span><span className="text-(--color-text-secondary)">: </span><span className="text-(--color-accent-purple)">true</span></div>
          <div className="text-(--color-text-secondary)">{'}'}</div>
        </div>
      </div>

      {/* Floating badge bottom-right */}
      <div className="absolute -bottom-3 -right-4 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-orange)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-orange)">
            <circle cx="5" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 7.5L9 5.5" stroke="currentColor" strokeWidth="1" />
            <path d="M7 8.5L9 10.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">APIs</p>
          <p className="text-sm font-bold text-(--color-accent-orange)">Integradas</p>
        </div>
      </div>

      {/* Floating badge mid-right */}
      <div className="absolute top-1/3 -right-8 z-10 glass-card px-4 py-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-(--color-accent-purple)/15 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-(--color-accent-purple)">
            <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-(--color-text-secondary)">Solução</p>
          <p className="text-sm font-bold text-(--color-accent-purple)">Sob Medida</p>
        </div>
      </div>
    </>
  );
}
