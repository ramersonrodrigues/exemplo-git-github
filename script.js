/* ==========================================================================
   COMPONENTE: SCRIPT PRINCIPAL (MAIN SCRIPT)
   --------------------------------------------------------------------------
   Este arquivo é o ponto de entrada da lógica JavaScript do site.
   Ele carrega todos os componentes HTML de forma assíncrona e inicializa
   os módulos de interatividade de cada componente.
   ========================================================================== */

// ===========================================================================
// IMPORTAÇÕES DOS MÓDULOS DE INTERATIVIDADE
// ===========================================================================

// Módulos de navegação e estrutura
import { inicializarNavegacaoInferior } from './js/navigation.js';

// Módulos de componentes específicos
import { inicializarChipsCategorias } from './js/categories.js';
import { inicializarBotoesFavoritos } from './js/favorites.js';
import { inicializarBotoesAcoesHero } from './js/hero.js';
import { inicializarDicaDoDia } from './js/daily-tip.js';
import { inicializarCuriosidades } from './js/facts.js';
import { inicializarAdocao } from './js/adoption.js';
import { inicializarFormularioNewsletter } from './js/newsletter.js';

// ===========================================================================
// FUNÇÃO DE CARREGAMENTO DE COMPONENTES HTML
// ===========================================================================

/**
 * Carrega um componente HTML de forma assíncrona e o injeta no DOM
 * @param {string} caminhoArquivo - Caminho relativo do arquivo HTML do componente
 * @param {string} idContainer - ID do elemento onde o componente será inserido
 */
async function carregarComponente(caminhoArquivo, idContainer) {
  try {
    const resposta = await fetch(caminhoArquivo);
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar ${caminhoArquivo}: ${resposta.status}`);
    }
    const html = await resposta.text();
    const container = document.getElementById(idContainer);
    if (container) {
      container.innerHTML = html;
      console.log(`✓ Componente carregado: ${caminhoArquivo}`);
    }
  } catch (erro) {
    console.error(`✗ Falha ao carregar componente ${caminhoArquivo}:`, erro);
  }
}

// ===========================================================================
// FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO
// ===========================================================================

/**
 * Função principal que carrega todos os componentes e inicializa a aplicação
 */
async function inicializarAplicacao() {
  console.log('🚀 Iniciando carregamento dos componentes...');

  // ===========================================================================
  // CARREGAMENTO DE TODOS OS COMPONENTES HTML
  // ===========================================================================
  
  // Componentes do cabeçalho e hero
  await Promise.all([
    carregarComponente('components/header.html', 'header-component'),
    carregarComponente('components/hero.html', 'hero-component'),
    carregarComponente('components/categories.html', 'categories-component'),
    carregarComponente('components/daily-tip.html', 'daily-tip-component'),
    carregarComponente('components/facts.html', 'facts-component'),
    carregarComponente('components/adoption.html', 'adoption-component'),
    carregarComponente('components/newsletter.html', 'newsletter-component'),
    carregarComponente('components/bottom-nav.html', 'bottom-nav-component')
  ]);

  // ===========================================================================
  // INICIALIZAÇÃO DAS INTERATIVIDADES
  // ===========================================================================
  
  // Inicializa módulos de navegação e estrutura
  inicializarNavegacaoInferior();
  
  // Inicializa módulos de componentes específicos
  inicializarChipsCategorias();
  inicializarBotoesFavoritos();
  inicializarBotoesAcoesHero();
  inicializarDicaDoDia();
  inicializarCuriosidades();
  inicializarAdocao();
  inicializarFormularioNewsletter();

  console.log('✅ Aplicação inicializada com sucesso!');
}

// ===========================================================================
// EXECUÇÃO DA INICIALIZAÇÃO
// ===========================================================================

// Inicia a aplicação quando o script for executado
// (type="module" garante execução após parsing do DOM)
inicializarAplicacao();
