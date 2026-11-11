/* ==========================================================================
   COMPONENTE: DICA DO DIA (DAILY TIP)
   Lógica de interação do cartão de dica diária
   ========================================================================== */

/**
 * Inicializa interações da seção de dica do dia
 */
export function inicializarDicaDoDia() {
  const tipCard = document.querySelector('.tip-card');
  if (!tipCard) return;

  // Efeito de hover sutil no cartão
  tipCard.addEventListener('mouseenter', () => {
    tipCard.style.transform = 'translateY(-2px)';
    tipCard.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)';
  });

  tipCard.addEventListener('mouseleave', () => {
    tipCard.style.transform = '';
    tipCard.style.boxShadow = '';
  });
}
