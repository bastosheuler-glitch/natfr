export function HistoryIllo({ dates }: { dates: { year: string }[] }) {
  const items = dates.slice(0, 6)
  const step = 560 / (items.length - 1 || 1)
  return (
    <svg className="illo" viewBox="0 0 600 140" role="img" aria-hidden="true">
      <rect x="0" y="0" width="200" height="6" fill="#000091" />
      <rect x="200" y="0" width="200" height="6" fill="#ffffff" />
      <rect x="400" y="0" width="200" height="6" fill="#e1000f" />
      <line x1="20" y1="80" x2="580" y2="80" stroke="#161616" strokeWidth="3" />
      {items.map((d, i) => {
        const x = items.length === 1 ? 300 : 20 + i * step
        return (
          <g key={i}>
            <circle cx={x} cy="80" r="9" fill="#000091" />
            <circle cx={x} cy="80" r="4" fill="#ffffff" />
            <text x={x} y="60" textAnchor="middle" fontSize="17" fontWeight="700" fill="#161616">
              {d.year}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function ValuesIllo({ devise }: { devise: [string, string, string] }) {
  return (
    <svg className="illo" viewBox="0 0 600 180" role="img" aria-hidden="true">
      <rect x="80" y="10" width="70" height="100" fill="#000091" />
      <rect x="150" y="10" width="70" height="100" fill="#ffffff" stroke="#dddddd" />
      <rect x="220" y="10" width="70" height="100" fill="#e1000f" />
      <text x="130" y="145" textAnchor="middle" fontSize="20" fontWeight="700" fill="#000091">
        {devise[0]}
      </text>
      <text x="300" y="145" textAnchor="middle" fontSize="20" fontWeight="700" fill="#161616">
        {devise[1]}
      </text>
      <text x="470" y="145" textAnchor="middle" fontSize="20" fontWeight="700" fill="#e1000f">
        {devise[2]}
      </text>
    </svg>
  )
}

export function InstitutionsIllo({
  labels,
}: {
  labels: { people: string; vote: string; president: string; parliament: string; laws: string }
}) {
  return (
    <svg className="illo" viewBox="0 0 600 240" role="img" aria-hidden="true">
      <rect x="220" y="10" width="160" height="44" rx="8" fill="#000091" />
      <text x="300" y="38" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">
        {labels.people}
      </text>
      <line x1="300" y1="54" x2="160" y2="100" stroke="#161616" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="300" y1="54" x2="440" y2="100" stroke="#161616" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="230" y="82" fontSize="13" fill="#666666">
        {labels.vote}
      </text>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#161616" strokeWidth="1.5" />
        </marker>
      </defs>
      <rect x="60" y="104" width="200" height="44" rx="8" fill="#e8edff" stroke="#000091" />
      <text x="160" y="132" textAnchor="middle" fontSize="15" fontWeight="600" fill="#000091">
        {labels.president}
      </text>
      <rect x="340" y="104" width="200" height="44" rx="8" fill="#e8edff" stroke="#000091" />
      <text x="440" y="132" textAnchor="middle" fontSize="15" fontWeight="600" fill="#000091">
        {labels.parliament}
      </text>
      <line x1="160" y1="148" x2="280" y2="194" stroke="#161616" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="440" y1="148" x2="320" y2="194" stroke="#161616" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="220" y="198" width="160" height="36" rx="8" fill="#18753c" />
      <text x="300" y="222" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff">
        {labels.laws}
      </text>
    </svg>
  )
}

export function RightsIllo({ items }: { items: { icon: string; label: string }[] }) {
  return (
    <svg className="illo" viewBox="0 0 600 200" role="img" aria-hidden="true">
      {items.map((item, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 40 + col * 180
        const y = 10 + row * 95
        return (
          <g key={i}>
            <rect x={x} y={y} width="160" height="80" rx="10" fill="#ffffff" stroke="#dddddd" />
            <text x={x + 80} y={y + 36} textAnchor="middle" fontSize="26">
              {item.icon}
            </text>
            <text x={x + 80} y={y + 64} textAnchor="middle" fontSize="13" fontWeight="600" fill="#161616">
              {item.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
