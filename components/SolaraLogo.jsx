export default function SolaraLogo({ size = 48, id = 'logo' }) {
  const rays = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75]
  const clipInner = `${id}-inner`
  const clipTop = `${id}-top`

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={clipInner}>
          <circle cx="100" cy="100" r="88" />
        </clipPath>
        <clipPath id={clipTop}>
          <rect x="0" y="0" width="200" height="100" />
        </clipPath>
      </defs>

      {/* White background fill */}
      <circle cx="100" cy="100" r="96" fill="white" />

      {/* Dark water — bottom half, clipped to inner circle */}
      <rect x="12" y="100" width="176" height="90" clipPath={`url(#${clipInner})`} fill="#1A4F72" />

      {/* Sun rays (upper half only) */}
      {rays.map((angle) => {
        const rad = ((angle - 90) * Math.PI) / 180
        const x1 = 100 + 26 * Math.cos(rad)
        const y1 = 100 + 26 * Math.sin(rad)
        const x2 = 100 + 64 * Math.cos(rad)
        const y2 = 100 + 64 * Math.sin(rad)
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#F5A623"
            strokeWidth="5.5"
            strokeLinecap="round"
            clipPath={`url(#${clipTop})`}
          />
        )
      })}

      {/* Sun — circle clipped to top half */}
      <circle
        cx="100" cy="100" r="22"
        fill="#F5A623"
        clipPath={`url(#${clipTop})`}
      />

      {/* Horizon line */}
      <line x1="12" y1="100" x2="188" y2="100" stroke="white" strokeWidth="1" clipPath={`url(#${clipInner})`} />

      {/* Wave 1 */}
      <path
        d="M 16 120 Q 38 112 60 120 Q 82 128 104 120 Q 126 112 148 120 Q 166 126 184 120"
        stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round"
        clipPath={`url(#${clipInner})`}
      />
      {/* Wave 2 */}
      <path
        d="M 18 140 Q 42 132 66 140 Q 90 148 114 140 Q 138 132 162 140 Q 172 144 184 140"
        stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"
        clipPath={`url(#${clipInner})`}
      />
      {/* Wave 3 */}
      <path
        d="M 22 160 Q 48 152 74 160 Q 100 168 126 160 Q 150 153 176 160"
        stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round"
        clipPath={`url(#${clipInner})`}
      />

      {/* Inner border ring */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="#1A4F72" strokeWidth="3.5" />
      {/* Outer border ring */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="#1A4F72" strokeWidth="3.5" />
    </svg>
  )
}
