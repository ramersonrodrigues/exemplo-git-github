/* ==========================================================================
   COMPONENTE: NEWSLETTER / CLUBE DO BIGODE
   Lógica de validação e envio do formulário de e-mail
   ========================================================================== */

/**
 * Inicializa o formulário da newsletter com validação e feedback
 */
export function inicializarFormularioNewsletter() {
  const form = document.getElementById('newsletterForm');
  const inputEmail = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  if (!form || !inputEmail || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    const email = inputEmail.value.trim();

    // Validação simples de formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      inputEmail.style.boxShadow = '0 0 0 2px var(--color-error)';
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    // Remove estilo de erro caso haja
    inputEmail.style.boxShadow = '';

    // Exibe a mensagem de sucesso
    feedback.classList.remove('hidden');
    inputEmail.value = '';
    inputEmail.placeholder = 'E-mail cadastrado com sucesso!';

    // Oculta o feedback após 5 segundos
    setTimeout(() => {
      feedback.classList.add('hidden');
      inputEmail.placeholder = 'Seu melhor e-mail...';
    }, 5000);
  });
}
