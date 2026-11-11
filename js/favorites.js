/* ==========================================================================
   COMPONENTE: BOTÕES DE FAVORITAR
   Lógica de curtidas nos cards de adoção e botão do header
   ========================================================================== */

/**
 * Inicializa todos os botões de favoritar da página
 */
export function inicializarBotoesFavoritos() {
  const favBtns = document.querySelectorAll('.fav-btn');

  favBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Impede que o clique propague para o card inteiro
      
      // Alterna a classe 'active' para mudar a cor do coração
      btn.classList.toggle('active');

      const nomeGato = btn.getAttribute('aria-label').replace('Favoritar ', '');
      const estaFavorito = btn.classList.contains('active');

      // Animação de escala para dar feedback tátil
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);

      console.log(`${nomeGato} ${estaFavorito ? 'adicionado aos' : 'removido dos'} favoritos!`);
    });
  });

  // Botão de favoritos do cabeçalho
  const headerFavBtn = document.querySelector('.header-actions .icon-btn');
  if (headerFavBtn) {
    headerFavBtn.addEventListener('click', () => {
      headerFavBtn.classList.toggle('active');
      alert('Você possui gatinhos favoritos salvos na sua lista!');
    });
  }

  // Botões "Conhecer" dos cards de adoção
  document.querySelectorAll('.btn-know-cat').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nomeGato = btn.getAttribute('data-cat');
      alert(`Conhecendo ${nomeGato}: Temperamento afetuoso, vacinado, castrado e pronto para adoção!`);
    });
  });
}
