/* ==========================================================================
   COMPONENTE: ADOÇÃO (ADOPTION)
   Lógica de interatividade dos cards de adoção e filtros
   ========================================================================== */

/**
 * Inicializa funcionalidades da seção de adoção
 */
export function inicializarAdocao() {
  const catCards = document.querySelectorAll('.cat-card');
  const seeAllBtn = document.getElementById('seeAllAdoption');

  // Animação de entrada escalonada para os cards
  catCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });

  // Botão "Ver todos" da seção de adoção
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Exibindo todos os gatinhos disponíveis para adoção!');
    });
  }

  // Clique no card inteiro (exceto botões) abre detalhes
  catCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Ignora cliques em botões internos
      if (e.target.closest('button')) return;
      
      const nomeGato = card.getAttribute('data-cat-name');
      console.log(`Visualizando perfil de ${nomeGato}`);
    });
  });
}
