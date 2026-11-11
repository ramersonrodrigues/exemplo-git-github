/* ==========================================================================
   COMPONENTE: NAVEGAÇÃO INFERIOR (BOTTOM NAV)
   Lógica de scroll spy e navegação suave entre seções
   ========================================================================== */

/**
 * Inicializa a barra de navegação inferior com detecção de seção ativa
 */
export function inicializarNavegacaoInferior() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section, .hero-section');

  // Função para atualizar o item ativo da barra de navegação com base na posição de rolagem
  function atualizarItemAtivo() {
    let secaoAtual = '';
    const offsetScroll = 120; // Margem para compensar o header fixo

    sections.forEach((secao) => {
      const topSecao = secao.offsetTop - offsetScroll;
      const alturaSecao = secao.offsetHeight;
      if (window.scrollY >= topSecao && window.scrollY < topSecao + alturaSecao) {
        secaoAtual = secao.getAttribute('id') || secao.classList[0];
      }
    });

    // Percorre os links da navegação para aplicar a classe 'active' no correspondente
    navItems.forEach((item) => {
      const alvo = item.getAttribute('data-target');
      if (alvo === secaoAtual || (alvo === 'hero-section' && window.scrollY < 200)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Listener de rolagem para detectar a seção visível
  window.addEventListener('scroll', atualizarItemAtivo);
  // Executa uma vez ao carregar a página
  atualizarItemAtivo();

  // Listener de clique para rolagem suave até a seção correspondente
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const alvoId = item.getAttribute('data-target');
      const elementoAlvo = document.getElementById(alvoId) || document.querySelector('.' + alvoId);
      if (elementoAlvo) {
        const yPos = elementoAlvo.offsetTop - 80; // Compensa a altura do header fixo
        window.scrollTo({
          top: yPos,
          behavior: 'smooth'
        });
      }
    });
  });
}
