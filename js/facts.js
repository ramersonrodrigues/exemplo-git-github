/* ==========================================================================
   COMPONENTE: CURIOSIDADES FASCINANTES (FACTS)
   Lógica de animação e interatividade dos cards de curiosidades
   ========================================================================== */

/**
 * Inicializa animações de entrada para os cards de curiosidades
 */
export function inicializarCuriosidades() {
  const factItems = document.querySelectorAll('.fact-item');

  // Animação escalonada de entrada
  factItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(15px)';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // Efeito de hover nos cards
  factItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const iconBox = item.querySelector('.fact-icon-box');
      if (iconBox) {
        iconBox.style.transform = 'scale(1.15)';
        iconBox.style.transition = 'transform 0.3s ease';
      }
    });

    item.addEventListener('mouseleave', () => {
      const iconBox = item.querySelector('.fact-icon-box');
      if (iconBox) {
        iconBox.style.transform = 'scale(1)';
      }
    });
  });
}
