import { useInView } from '../hooks/useInView'
import { IconStar } from './ui/icons/IconsStar'
import { SectionLabel, SectionTitle } from './ui/Section'

const ITEMS = [
  {
    name: 'Valde',
    role: 'Cliente de Marialva',
    text: 'Serviço excelente em Marialva! Meu carro saiu impecável — recomendo para todos da cidade.',
    stars: 5,
  },
  {
    name: 'Ana Paula',
    role: 'Cliente de Marialva',
    text: 'Atendimento rápido e eficiente em Marialva. O polimento premium deixou meu carro como novo!',
    stars: 5,
  },
  {
    name: 'Paulo',
    role: 'Cliente de Marialva',
    text: 'Preço justo e qualidade excepcional aqui em Marialva. Recomendo muito!',
    stars: 5,
  },
]

export function Depoimentos() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-[#060606] py-24 px-6" ref={ref}>
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text="O que dizem de nós" />
        <SectionTitle>Depoimentos</SectionTitle>

        <div className="grid gap-4 mt-12 md:grid-cols-3">
          {ITEMS.map((d, i) => (
            <div
              key={d.name}
              className="bg-card border border-white/8 rounded-xl p-6 flex flex-col card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4 text-gold">
                {Array.from({ length: d.stars }).map((_, j) => <IconStar key={j} />)}
              </div>
              <p className="font-barlow text-white/60 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{d.text}&rdquo;
              </p>
              <div>
                <div className="font-barlow font-semibold text-white/90 text-sm">{d.name}</div>
                <div className="font-barlow text-white/30 text-xs mt-0.5">{d.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}