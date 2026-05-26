import { useState, useEffect } from 'react'
import { waLink } from '../config/constants'
import { IconWhatsApp } from './ui/icons/IconWhatsApp'
import logo from '../assets/logo.png'
 
const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
//  { label: 'Antes & Depois', href: '#antes-depois' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]
 
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 shadow-[0_1px_0_rgba(255,184,0,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 select-none">
          <img src={logo} alt="Dourado LavaCar" className="h-9 w-auto" />
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-gold text-2xl tracking-widest">DOURADO</span>
            <span className="font-bebas text-white/50 text-xl tracking-wider">LAVACAR</span>
          </div>
        </a>
 
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-barlow text-white/60 text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold text-black font-barlow font-bold text-xs px-5 py-2.5 rounded tracking-[0.15em] uppercase hover:brightness-110 transition-all active:scale-95"
          >
            <IconWhatsApp size={14} />
            Agendar
          </a>
        </div>
 
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-px bg-white transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-5'}`} />
          <span className={`block h-px bg-white transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-4'}`} />
        </button>
      </div>
 
      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black border-t border-white/5 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-barlow text-white/70 text-sm tracking-[0.15em] uppercase py-3 border-b border-white/5 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-gold text-black font-barlow font-bold text-sm px-6 py-4 rounded tracking-[0.15em] uppercase"
          >
            <IconWhatsApp size={16} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}