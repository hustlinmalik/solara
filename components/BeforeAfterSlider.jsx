'use client'
import { useState, useRef, useCallback } from 'react'

export default function BeforeAfterSlider({ before, after, label = '' }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e) => { if (dragging.current) updatePosition(e.clientX) }
  const onMouseUp = () => { dragging.current = false }

  const onTouchMove = (e) => {
    e.preventDefault()
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div className="space-y-2">
      {label && (
        <p className="text-white/40 text-xs tracking-widest uppercase text-center">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* After (base layer) */}
        <div className="absolute inset-0 bg-navy-700 flex items-center justify-center">
          {after ? (
            <img src={after} alt="After" className="w-full h-full object-cover" draggable={false} />
          ) : (
            <div className="flex flex-col items-center gap-2 text-navy-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs tracking-widest uppercase">After Photo</span>
            </div>
          )}
        </div>

        {/* Before (clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="absolute inset-0 bg-navy-800 flex items-center justify-center" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
            {before ? (
              <img src={before} alt="Before" className="w-full h-full object-cover" draggable={false} />
            ) : (
              <div className="flex flex-col items-center gap-2 text-navy-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-xs tracking-widest uppercase">Before Photo</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center z-20"
          style={{ left: `${position}%` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1A4F72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" transform="translate(12,0) scale(-1,1)" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded tracking-widest uppercase z-10">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-sun-500/90 backdrop-blur-sm text-navy-950 text-xs font-bold px-2.5 py-1 rounded tracking-widest uppercase z-10">
          After
        </div>
      </div>
    </div>
  )
}
