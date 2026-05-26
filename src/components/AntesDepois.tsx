import { useRef, useState, useCallback, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle} from './ui/Section'
import {  } from './ui/Section'
import { IconChevrons } from './ui/icons/IconsStar'

// ─── Types ────────────────────────────────────────────────────────────────────
export interface BeforeAfterItem {
  label: string
  /** Caminho ou URL da foto de antes. Deixe vazio para usar o placeholder. */
  beforeSrc?: string
  /** Caminho ou URL da foto de depois. Deixe vazio para usar o placeholder. */
  afterSrc?: string
}

// ─── Dados — troque pelos caminhos reais das suas fotos ───────────────────────
const ITEMS: BeforeAfterItem[] = [
  { label: 'Lavagem Completa' },
  { label: 'Polimento Premium' },
  { label: 'Lavagem Simples' },
]

// ─── Placeholder ──────────────────────────────────────────────────────────────
function Placeholder({ type }: { type: 'before' | 'after' }) {
  const isBefore = type === 'before'
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{
        background: isBefore
          ? 'linear-gradient(135deg, #1c1208 0%, #2a1a06 60%, #1c1208 100%)'
          : 'linear-gradient(135deg, #090909 0%, #0e1520 60%, #090909 100%)',
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.04) 24px, rgba(255,255,255,0.04) 25px),
            repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,0.04) 24px, rgba(255,255,255,0.04) 25px)`,
        }}
      />
      <svg
        className={`relative z-10 opacity-25 ${isBefore ? 'text-amber-700' : 'text-blue-400'}`}
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
      >
        <rect x="3" y="11" width="18" height="8" rx="2" />
        <path d="M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
      <span
        className={`relative z-10 font-barlow text-[10px] tracking-[0.3em] uppercase font-semibold ${
          isBefore ? 'text-amber-700/60' : 'text-blue-400/60'
        }`}
      >
        {isBefore ? 'Sua foto aqui' : 'Sua foto aqui'}
      </span>
    </div>
  )
}

// ─── Slider ───────────────────────────────────────────────────────────────────
function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  // Mouse drag
  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => updatePos(e.clientX)
    const onUp = () => setDragging(false)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  }, [dragging, updatePos])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
      onMouseDown={(e) => { e.preventDefault(); setDragging(true); updatePos(e.clientX) }}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); updatePos(e.touches[0].clientX) }}
    >
      {/* BEFORE layer */}
      <div className="absolute inset-0">
        {item.beforeSrc
          ? <img src={item.beforeSrc} alt="Antes" className="w-full h-full object-cover" draggable={false} />
          : <Placeholder type="before" />
        }
        <span className="absolute bottom-3 left-3 z-10 bg-black/70 text-white/80 font-barlow font-bold text-[10px] px-2.5 py-1 rounded tracking-[0.2em] uppercase">
          Antes
        </span>
      </div>

      {/* AFTER layer — clipped by slider position */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {item.afterSrc
          ? <img src={item.afterSrc} alt="Depois" className="w-full h-full object-cover" draggable={false} />
          : <Placeholder type="after" />
        }
        <span className="absolute bottom-3 right-3 z-10 bg-gold/90 text-black font-barlow font-bold text-[10px] px-2.5 py-1 rounded tracking-[0.2em] uppercase">
          Depois
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.6)] flex items-center justify-center pointer-events-none z-10"
        style={{ left: `${pos}%` }}
      >
        <IconChevrons />
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function AntesDepois() {
  const { ref, inView } = useInView()

  return (
    <section id="antes-depois" className="bg-dark py-24 px-6" ref={ref}>
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text="Resultados reais" />
        <SectionTitle>Antes & Depois</SectionTitle>
        <p className="font-barlow text-white/40 text-sm mt-3 mb-12">
          Arraste o controle para ver a transformação.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <BeforeAfterSlider item={item} />
              <div className="font-bebas text-white/60 text-sm tracking-widest uppercase text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions to developer */}
        <p className="mt-8 text-center font-barlow text-white/20 text-xs">
          💡 Para adicionar fotos reais, edite o array <code className="text-gold/40">ITEMS</code> em{' '}
          <code className="text-gold/40">src/components/AntesDepois.tsx</code> com os caminhos das imagens.
        </p>
      </div>
    </section>
  )
}