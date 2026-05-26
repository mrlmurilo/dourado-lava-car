import { waLink } from '../config/constants'
import { useInView } from '../hooks/useInView'
import { IconWhatsApp } from './ui/icons/IconWhatsApp'
import { SectionLabel, SectionTitle } from './ui/Section'

const STEPS = [
  {
    n: '01',
    title: 'Agende pelo WhatsApp',
    desc: 'Mande uma mensagem e escolha o melhor horário. Rápido e sem burocracia.',
  },
  {
    n: '02',
    title: 'Traga seu veículo',
    desc: 'Chegue no horário combinado. Nossa equipe já estará pronta para recebê-lo.',
  },
  {
    n: '03',
    title: 'Retire limpo e brilhando',
    desc: 'Seu carro devolvido impecável, pronto para impressionar.',
  },
]

export function ComoFunciona() {
  const { ref, inView } = useInView()

  return (
    <section id="como-funciona" className="bg-dark py-24 px-6" ref={ref}>
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text="Processo" />
        <SectionTitle>Como Funciona</SectionTitle>

        <div className="mt-12 md:grid md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative flex items-start gap-5 md:flex-col md:gap-4 py-6 md:py-0 border-b border-white/5 md:border-none last:border-none"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {i < STEPS.length - 1 && (
                <div className="md:hidden absolute left-5 top-[72px] bottom-0 w-px bg-gradient-to-b from-gold/30 to-transparent" />
              )}
              <div className="font-bebas text-2xl text-gold bg-gold/10 border border-gold/20 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 leading-none">
                {s.n}
              </div>
              <div>
                <div className="font-bebas text-white text-lg tracking-wider leading-none mb-2">{s.title}</div>
                <div className="font-barlow text-white/45 text-sm leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold text-black font-barlow font-bold px-10 py-4 rounded text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,184,0,0.2)]"
          >
            <IconWhatsApp size={16} />
            Quero agendar agora
          </a>
        </div>
      </div>
    </section>
  )
}