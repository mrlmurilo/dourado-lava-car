import { waLink } from '../config/constants'
import { IconWhatsApp } from './ui/icons/IconWhatsApp'

const STATS = [
  //{ num: '100+', label: 'Carros atendidos' },
  { num: '4.9 ★', label: 'Avaliação média' },
  //{ num: '3 anos', label: 'De experiência' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 hero-dots" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gold" />
      <div className="absolute right-[-80px] top-[20%] w-72 h-72 bg-gold/8 rounded-full blur-[80px]" />
      <div className="absolute top-20 right-8 w-24 h-24 opacity-20">
        <div className="w-full h-full diagonal-stripe rounded" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-gold" />
          <span className="font-barlow text-gold text-xs tracking-[0.35em] uppercase">
            Marialva · Paraná
          </span>
        </div>

        <h1 className="font-bebas leading-none">
          <span className="block text-gold leading-none" style={{ fontSize: 'clamp(5.5rem, 24vw, 13rem)' }}>
            DOURADO
          </span>
          <span className="block text-white/85 leading-none -mt-2" style={{ fontSize: 'clamp(3.2rem, 15vw, 8.5rem)' }}>
            LAVACAR
          </span>
        </h1>

        <p className="font-barlow text-white/50 text-base mt-6 max-w-xs leading-relaxed">
          Seu carro merece o melhor.{' '}
          <span className="text-white/80 font-medium">
            Qualidade profissional, agilidade e cuidado.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-gold text-black font-barlow font-bold px-8 py-4 rounded text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,184,0,0.25)]"
          >
            <IconWhatsApp size={16} />
            Agendar agora
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center border border-white/15 text-white/70 font-barlow font-medium px-8 py-4 rounded text-sm tracking-[0.2em] uppercase hover:border-gold/50 hover:text-gold transition-all"
          >
            Ver serviços
          </a>
        </div>

        <div className="flex gap-8 mt-16 pt-8 border-t border-white/8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-bebas text-gold text-xl leading-none">{s.num}</div>
              <div className="font-barlow text-white/35 text-[10px] uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}