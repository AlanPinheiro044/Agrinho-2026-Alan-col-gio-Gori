/**
 * SITE AGRO FORTE - FUTURO SUSTENTÁVEL
 * Arquivo: script.js
 * Descrição: Funcionalidades JavaScript para navegação e interatividade
 * Autor: Alan Pinheiro da Silva
 * Desenvolvido com: Manus AI
 */

/**
 * Função para trocar entre abas
 * @param {string} tabName - Nome da aba a ser exibida
 */
function switchTab(tabName) {
    // Esconde todos os conteúdos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove classe active de todos os botões
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Mostra o conteúdo selecionado
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Adiciona classe active ao botão clicado
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Scroll para o topo das abas com animação suave
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        tabsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Função para rolar para o topo da página
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Função para atualizar botão ativo ao rolar a página
 */
window.addEventListener('scroll', function() {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.textContent.includes('Início')) {
            // Manter lógica de scroll se necessário
        }
    });
});

/**
 * Inicializar ao carregar a página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar listeners aos botões de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            switchTab(tabName);
        });
    });

    // Adicionar listeners aos botões de abas
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            switchTab(tabName);
        });
    });

    // Log de inicialização (opcional)
    console.log('Site Agro Forte carregado com sucesso!');
});

/**
 * Função para análise de eventos (opcional)
 */
function trackEvent(eventName, eventData) {
    // Pode ser usado para integração com Google Analytics ou similar
    console.log(`Evento: ${eventName}`, eventData);
}

/**
 * Função para validação de formulários (se necessário)
 */
function validateForm(formData) {
    // Validação básica
    if (!formData || Object.keys(formData).length === 0) {
        console.warn('Formulário vazio');
        return false;
    }
    return true;
}

/**
 * Função para armazenar dados no localStorage
 */
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Dados salvos: ${key}`);
    } catch (e) {
        console.error('Erro ao salvar no localStorage:', e);
    }
}

/**
 * Função para recuperar dados do localStorage
 */
function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Erro ao recuperar do localStorage:', e);
        return null;
    }
}

/**
 * Função para detectar dispositivo
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Função para otimizar performance
 */
function optimizePerformance() {
    // Lazy loading de imagens
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Função para acessibilidade
 */
function improveAccessibility() {
    // Adicionar atributos ARIA
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });

    // Adicionar suporte a teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Fechar modais ou menus se necessário
        }
    });
}

/**
 * Inicializar funcionalidades ao carregar
 */
window.addEventListener('load', function() {
    optimizePerformance();
    improveAccessibility();
    
    // Log de sucesso
    console.log('Todas as funcionalidades foram inicializadas');
});
