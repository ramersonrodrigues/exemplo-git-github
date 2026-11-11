/* ==========================================================================
   COMPONENTE: HERO SECTION
   Lógica dos botões de ação da seção principal
   ========================================================================== */

/**
 * Inicializa os botões de ação do Hero
 */
export function inicializarBotoesAcoesHero() {
  // Botão principal "Descobrir Cuidados"
  const btnDescobrir = document.getElementById('btnHeroDiscover');
  if (btnDescobrir) {
    btnDescobrir.addEventListener('click', () => {
      // Rola suavemente até a seção de dicas/cuidados
      const secaoCuidados = document.getElementById('daily-tip-section');
      if (secaoCuidados) {
        const yPos = secaoCuidados.offsetTop - 80;
        window.scrollTo({ top: yPos, behavior: 'smooth' });
      }
    });
  }

  // Botão de som de ronrom (efeito sonoro / vibração visual)
  const btnPurr = document.getElementById('btnPurrSound');
  if (btnPurr) {
    btnPurr.addEventListener('click', () => {
      // Alterna a classe de preenchimento do ícone para simular ativação
      const icon = btnPurr.querySelector('.material-symbols-outlined');
      const ativo = icon.classList.toggle('text-filled');

      if (ativo) {
        btnPurr.style.background = 'var(--color-secondary-container)';
        console.log('Reproduzindo som de ronronado relaxante... 🐾');
      } else {
        btnPurr.style.background = 'rgba(255, 185, 155, 0.45)';
        console.log('Som pausado.');
      }
    });
  }
}
