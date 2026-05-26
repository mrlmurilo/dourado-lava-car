import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Servicos } from './components/Servicos'
import { Diferenciais } from './components/Diferenciais'
import { ComoFunciona } from './components/ComoFunciona'
import { Depoimentos } from './components/Depoimentos'
import { Contato } from './components/Contato'
import { waLink } from './config/constants'
import { IconWhatsApp } from './components/ui/icons/IconWhatsApp'

export default function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Servicos />
      <Diferenciais />
      <ComoFunciona />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-bebas text-gold text-lg tracking-widest">DOURADO</span>
          <span className="font-bebas text-white/30 text-base tracking-wider">LAVACAR</span>
        </div>
        <p className="font-barlow text-white/25 text-xs text-center">
          © {new Date().getFullYear()} Dourado LavaCar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <IconWhatsApp size={26} />
    </a>
  )
}
