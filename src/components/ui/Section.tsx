export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bebas text-white text-4xl md:text-5xl tracking-wider leading-none">
      {children}
    </h2>
  )
}

export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-7 h-px bg-gold" />
      <span className="font-barlow text-gold text-xs tracking-[0.35em] uppercase">{text}</span>
    </div>
  )
}