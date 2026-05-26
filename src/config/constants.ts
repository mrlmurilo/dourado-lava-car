// ─── WhatsApp ─────────────────────────────────────────────────────────────────
// Substitua pelo número real no formato: 55 + DDD + número (sem espaços/traços)
export const WA_NUMBER = '5544999153521'
export const WA_DEFAULT_MSG = 'Olá! Gostaria de agendar uma lavagem.'
 
export function waLink(msg?: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg ?? WA_DEFAULT_MSG)}`
}
 