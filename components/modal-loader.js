/**
 * Modal Loader - Carrega modais dinamicamente
 * Este script carrega todos os modais de forma assíncrona
 */

class ModalLoader {
    constructor() {
        this.modals = [
            'product-modal.html',
            'colors-modal.html', 
            'contact-modal.html',
            'about-modal.html',
            'contact-form-modal.html',
            'favorites-modal.html'
        ];
        this.basePath = './components/modals/';
        this.loadedModals = new Set();
    }

    /**
     * Carrega um modal específico
     * @param {string} modalName - Nome do arquivo do modal
     * @returns {Promise<boolean>} - Retorna true se carregado com sucesso
     */
    async loadModal(modalName) {
        
        if (this.loadedModals.has(modalName)) {
            return true; // Já carregado
        }

        try {
            const response = await fetch(`${this.basePath}${modalName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const modalHTML = await response.text();
            
            // Criar container temporário para inserir o HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = modalHTML;
            
            // Inserir TODOS os elementos do arquivo de modal no body
            let insertedCount = 0;
            while (tempContainer.firstChild) {
                const child = tempContainer.firstChild;
                if (child.nodeType === Node.ELEMENT_NODE) {
                    insertedCount++;
                }
                document.body.appendChild(child);
            }
            
            this.loadedModals.add(modalName);
            return true;
            
        } catch (error) {
            return false;
        }
    }

    /**
     * Carrega todos os modais
     * @returns {Promise<void>}
     */
    async loadAllModals() {
        
        const loadPromises = this.modals.map(modal => this.loadModal(modal));
        const results = await Promise.allSettled(loadPromises);
        
        const successful = results.filter(result => result.status === 'fulfilled' && result.value).length;
        const failed = results.length - successful;
    }

    /**
     * Carrega modais de forma lazy (sob demanda)
     * @param {string} modalName - Nome do modal a ser carregado
     * @returns {Promise<boolean>}
     */
    async loadLazy(modalName) {
        if (!this.modals.includes(modalName)) {
            return false;
        }
        
        return await this.loadModal(modalName);
    }

    /**
     * Verifica se um modal está carregado
     * @param {string} modalName - Nome do modal
     * @returns {boolean}
     */
    isLoaded(modalName) {
        return this.loadedModals.has(modalName);
    }

    /**
     * Lista todos os modais carregados
     * @returns {Array<string>}
     */
    getLoadedModals() {
        return Array.from(this.loadedModals);
    }
}

// Instância global do loader
window.modalLoader = new ModalLoader();

/**
 * Função utilitária para carregar modais sob demanda
 * @param {string} modalName - Nome do modal
 * @returns {Promise<boolean>}
 */
window.loadModal = async function(modalName) {
    return await window.modalLoader.loadLazy(modalName);
};

// Auto-inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async function() {
    // Carregar todos os modais no início para garantir disponibilidade
    await window.modalLoader.loadAllModals();
    
    // Disparar evento customizado quando modais estiverem prontos
    const event = new CustomEvent('modalsLoaded', {
        detail: {
            loadedModals: window.modalLoader.getLoadedModals(),
            totalModals: window.modalLoader.modals.length
        }
    });
    document.dispatchEvent(event);
});
