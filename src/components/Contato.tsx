import { waLink } from '../config/constants'
import { useInView } from '../hooks/useInView'
import { IconWhatsApp } from './ui/icons/IconWhatsApp'
import { SectionLabel, SectionTitle } from './ui/Section'

const CONTACT_INFO = [
  { label: 'Endereço', value: 'Rua Gentil Rodrigues, 556 — Centro\nMarialva · PR' },
  { label: 'WhatsApp', value: '(44) 9 9915-3521' },
  { label: 'Instagram', value: '@dourado_lava_car_marialva' },
]

const HOURS = [
  { dia: 'Segunda a Domingo', hora: '07h – 19h', open: true },
//  { dia: 'Sábado', hora: '08h – 19h', open: true },
  //{ dia: 'Domingo', hora: '08h – 19h', open: true  },
]

export function Contato() {
  const { ref, inView } = useInView()

  return (
    <section id="contato" className="bg-dark py-24 px-6" ref={ref}>
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text="Nos encontre" />
        <SectionTitle>Contato & Horários</SectionTitle>

        <div className="grid gap-10 mt-12 md:grid-cols-2">
          <div className="space-y-8">
            {CONTACT_INFO.map((item) => (
              <div key={item.label}>
                <div className="font-bebas text-gold text-sm tracking-[0.25em] mb-1.5">{item.label}</div>
                <div className="font-barlow text-white/65 text-sm whitespace-pre-line leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="font-bebas text-gold text-sm tracking-[0.25em] mb-4">
              Horário de Funcionamento
            </div>
            <div className="space-y-3 mb-10">
              {HOURS.map((h) => (
                <div
                  key={h.dia}
                  className="flex items-center justify-between font-barlow text-sm border-b border-white/5 pb-3"
                >
                  <span className="text-white/50">{h.dia}</span>
                  <span className={h.open ? 'text-white font-medium' : 'text-white/25'}>{h.hora}</span>
                </div>
              ))}
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gold text-black font-barlow font-bold px-6 py-4 rounded text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all active:scale-95 w-full"
            >
              <IconWhatsApp size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}