export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null
  }

  const title = label || payload[0]?.payload?.name || 'Details'

  return (
    <div className="min-w-[180px] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-panel backdrop-blur">
      <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">{title}</p>
      <div className="space-y-2">
        {payload.map((item) => (
          <div key={`${item.dataKey}-${item.name}`} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color || item.fill || '#38bdf8' }}
              />
              {item.name}
            </span>
            <span className="font-semibold text-white">
              {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
