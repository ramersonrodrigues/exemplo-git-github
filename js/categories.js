/* ==========================================================================
   COMPONENTE: CATEGORIAS / CHIPS
   Lógica de seleção e filtragem por chips horizontais
   ========================================================================== */

/**
 * Inicializa os chips de categorias com evento de clique
 */
export function inicializarChipsCategorias() {
  const chips = document.querySelectorAll('#categoryChips .chip');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      // Remove a classe 'active' de todos os chips
      chips.forEach((c) => c.classList.remove('active'));
      // Adiciona a classe 'active' apenas no chip clicado
      chip.classList.add('active');

      // Obtém o valor da categoria selecionada
      const categoria = chip.getAttribute('data-category');
      console.log(`Categoria selecionada: ${categoria}`);

      // Feedback visual temporário no botão "Ver todos"
      const verTodos = document.getElementById('seeAllCategories');
      if (verTodos) {
        verTodos.textContent = `Filtrado: ${chip.textContent.trim()}`;
        setTimeout(() => {
          verTodos.textContent = 'Ver todos';
        }, 2000);
      }
    });
  });
}
