import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle } from './ui/Section'

const ITEMS = [
  {
    icon: '◈',
    title: 'Produtos Premium',
    desc: 'Apenas produtos de alta qualidade para proteger a pintura e os acabamentos do seu veículo.',
  },
  {
    icon: '⚡',
    title: 'Atendimento Rápido',
    desc: 'Respeitamos o seu tempo. Agilidade sem abrir mão da qualidade em nenhum detalhe.',
  },
  {
    icon: '⬡',
    title: 'Equipe Experiente',
    desc: 'Profissionais treinados e apaixonados pelo que fazem. Seu carro em boas mãos.',
  },
  {
    icon: '◎',
    title: 'Localização Central',
    desc: 'Fácil acesso, estacionamento amplo e espaço confortável para você aguardar.',
  },
]

export function Diferenciais() {
  const { ref, inView } = useInView()

  return (
    <section id="diferenciais" className="bg-[#060606] py-24 px-6" ref={ref}>
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text="Por que nos escolher" />
        <SectionTitle>Nossos Diferenciais</SectionTitle>

        <div className="grid gap-4 mt-12 sm:grid-cols-2">
          {ITEMS.map((d, i) => (
            <div
              key={d.title}
              className="bg-card border border-white/8 rounded-xl p-6 flex gap-4 card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-gold text-lg w-11 h-11 bg-gold/8 border border-gold/15 rounded-xl flex items-center justify-center flex-shrink-0 font-bebas">
                {d.icon}
              </div>
              <div>
                <div className="font-bebas text-white text-lg tracking-wider leading-none mb-2">
                  {d.title}
                </div>
                <div className="font-barlow text-white/45 text-sm leading-relaxed">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}