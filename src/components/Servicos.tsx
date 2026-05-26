import { waLink } from '../config/constants'
import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionLabel, SectionTitle } from './ui/Section'

interface Service {
  name: string
  price: string
  description: string
  features: string[]
  highlight: boolean
  vehicle: 'car' | 'moto' | 'both'
}

const SERVICES: Service[] = [
    {
    name: 'Lavagem Simples Externa',
    price: 'R$ 30',
    description: 'Somente lavagem externa rápida para carros: ideal quando precisa apenas remover sujeira superficial.',
    features: ['Lavagem externa', 'Enxágue e secagem', 'Limpeza rápida de rodas'],
    highlight: false,
    vehicle: 'car',
  },
  {
    name: 'Lavagem Simples',
    price: 'R$ 70',
    description: 'Lavagem rápida e completa para carros: externa, secagem e acabamento. Ideal para manutenção semanal.',
    features: ['Lavagem externa completa', 'Limpeza e secagem com microfibra', 'Limpeza de rodas e soleiras', 'Acabamento com pano'],
    highlight: false,
    vehicle: 'car',
  },
    {
    name: 'Lavagem Detalhada',
    price: 'R$ 120',
    description: 'Limpeza profunda interna e externa para carros: aspiração, shampoo, limpeza de estofados e proteção de superfícies.',
    features: ['Aspiração completa', 'Shampoo e desengraxante', 'Limpeza de vidros e painéis', 'Tratamento de estofados e perfumação'],
    highlight: true,
    vehicle: 'car',
  },
  {
    name: 'Lavagem Simples',
    price: 'R$ 45',
    description: 'Lavagem rápida específica para motocicletas: limpeza externa, secagem e verificação de componentes.',
    features: ['Lavagem externa', 'Secagem manual', 'Limpeza de rodas e detalhes', 'Verificação visual básica'],
    highlight: false,
    vehicle: 'moto',
  },
    {
    name: 'Polimento de Motor',
    price: 'R$ 60',
    description: 'Polimento e limpeza do compartimento do motor da motocicleta, removendo sujeira e deixando com aspecto renovado.',
    features: ['Limpeza do motor', 'Desengraxante e polimento leve', 'Proteção superficial contra sujeira'],
    highlight: false,
    vehicle: 'moto',
  },
  {
    name: 'Lavagem Detalhada',
    price: 'R$ 80',
    description: 'Limpeza detalhada para motocicletas, focando nas áreas de difícil acesso e acabamento.',
    features: ['Limpeza completa externa', 'Limpeza de corrente (opcional)', 'Secagem manual', 'Finalização com produto de brilho',],
    highlight: false,
    vehicle: 'moto',
  },
]

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const { name, price, description, features, highlight } = service

  return (
    <div
      className={`relative rounded-xl p-6 transition-all duration-500 flex flex-col h-full ${
        highlight ? 'bg-gold' : 'bg-card border border-white/8 card-hover'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-black text-gold font-barlow font-bold text-[10px] px-3 py-1.5 rounded-full tracking-[0.2em] uppercase whitespace-nowrap">
            ✦ Mais Popular
          </span>
        </div>
      )}

      <div className={`font-bebas text-5xl leading-none mb-0.5 ${highlight ? 'text-black' : 'text-gold'}`}>
        {price}
      </div>
      <div className={`font-bebas text-xl tracking-wider leading-none mb-1 ${highlight ? 'text-black' : 'text-white'}`}>
        {name}
      </div>
      <div className={`font-barlow text-sm mb-6 leading-snug ${highlight ? 'text-black/65' : 'text-white/45'}`}>
        {description}
      </div>

      <ul className="space-y-2.5 mb-8">
        {features.map((f) => (
          <li key={f} className={`font-barlow text-sm flex items-center gap-2.5 ${highlight ? 'text-black/80' : 'text-white/65'}`}>
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${highlight ? 'bg-black/40' : 'bg-gold'}`} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={waLink(`Olá! Gostaria de agendar ${name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto block text-center font-barlow font-bold text-xs tracking-[0.2em] uppercase py-3.5 rounded-lg transition-all active:scale-95 ${
          highlight
            ? 'bg-black text-gold hover:bg-black/85'
            : 'bg-gold/10 text-gold border border-gold/20 hover:bg-gold hover:text-black'
        }`}
      >
        Agendar este serviço
      </a>
    </div>
  )
}

export function Servicos() {
  const { ref, inView } = useInView()
  const [vehicle, setVehicle] = useState<'car' | 'moto'>('car')

  const filtered = SERVICES.filter((s) => s.vehicle === 'both' || s.vehicle === vehicle)

  return (
    <section id="servicos" className="bg-[#060606] py-24 px-6" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionLabel text="O que oferecemos" />
        <SectionTitle>Nossos Serviços</SectionTitle>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setVehicle('car')}
            className={`px-4 py-2 rounded-full text-sm font-barlow transition ${vehicle === 'car' ? 'bg-gold text-black' : 'bg-card text-white/70'}`}
          >
            Carro
          </button>
          <button
            onClick={() => setVehicle('moto')}
            className={`px-4 py-2 rounded-full text-sm font-barlow transition ${vehicle === 'moto' ? 'bg-gold text-black' : 'bg-card text-white/70'}`}
          >
            Moto
          </button>
        </div>

        <div className="grid gap-4 mt-8 md:grid-cols-3">
          {filtered.map((s, i) => (
            <ServiceCard key={`${s.name}-${s.vehicle}-${i}`} service={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}