// Dados dos produtos (simulando uma API)
const products = [
    {
        id: 1,
        specifications: "ITEM 001",
        name: "Armário FEPOM",
        description: "",
        image: "assets/images/products/produto_01.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 2,
        specifications: "ITEM 002",
        name: "Roupeiro Infantil 4 Portas",
        description: "",
        image: "assets/images/products/produto_02.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 3,
        specifications: "ITEM 003",
        name: "Cama Beliche COLOG",
        description: "",
        image: "assets/images/products/produto_03.jpeg",
        fullDescription: "",
        category: "camas",
    },
    {
        id: 4,
        specifications: "ITEM 004",
        name: "Carrinho Biblioteca",
        description: "",
        image: "assets/images/products/produto_04.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 5,
        specifications: "ITEM 005",
        name: "Carrinho Biblioteca",
        description: "",
        image: "assets/images/products/produto_05.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 6,
        specifications: "ITEM 006",
        name: "Estante Infantil Dupla Face - Flor",
        description: "",
        image: "assets/images/products/produto_06.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 7,
        specifications: "ITEM 007",
        name: "Armário Para Pastas Suspensas - 4 gavetas duplas",
        description: "",
        image: "assets/images/products/produto_07.jpeg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 8,
        specifications: "ITEM 008",
        name: "Estante de Aço",
        description: "",
        image: "assets/images/products/produto_08.jpeg",
        fullDescription: "",
        category: "estantes",
    },
    {
        id: 9,
        specifications: "ITEM 009",
        name: "Estante Simples Face Infantil",
        description: "",
        image: "assets/images/products/produto_09.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 10,
        specifications: "ITEM 010",
        name: "Estante Expositora Infantil - Flor",
        description: "",
        image: "assets/images/products/produto_10.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 11,
        specifications: "ITEM 011",
        name: "Estante Face Dupla com Painel",
        description: "",
        image: "assets/images/products/produto_11.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 12,
        specifications: "ITEM 012",
        name: "Estante Expositora com Painel",
        description: "",
        image: "assets/images/products/produto_12.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 13,
        specifications: "ITEM 013",
        name: "Estante Expositora Infantil - Flor",
        description: "",
        image: "assets/images/products/produto_13.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 14,
        specifications: "ITEM 014",
        name: "Armário com Portas Transparentes",
        description: "",
        image: "assets/images/products/produto_14.jpeg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 15,
        specifications: "ITEM 015",
        name: "Estante para Armazenagem com Prateleira em OSB",
        description: "",
        image: "assets/images/products/produto_15.jpeg",
        fullDescription: "",
        category: "armazenagem",
    },
    {
        id: 16,
        specifications: "ITEM 016",
        name: "Estante para Armazenagem com Prateleira em OSB",
        description: "",
        image: "assets/images/products/produto_16.jpeg",
        fullDescription: "",
        category: "armazenagem",
    },
    {
        id: 17,
        specifications: "ITEM 017",
        name: "Roupeiro 4 Portas - Fechadura Eletronica",
        description: "",
        image: "assets/images/products/produto_17.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 18,
        specifications: "ITEM 018",
        name: "Roupeiro 4 Portas",
        description: "",
        image: "assets/images/products/produto_18.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 19,
        specifications: "ITEM 019",
        name: "Roupeiro 4 Portas",
        description: "",
        image: "assets/images/products/produto_19.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 20,
        specifications: "ITEM 020",
        name: "Roupeiro Infantil 6 Portas",
        description: "",
        image: "assets/images/products/produto_20.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 21,
        specifications: "ITEM 021",
        name: "Arquivo 4 gavetas",
        description: "",
        image: "assets/images/products/produto_21.jpeg",
        fullDescription: "",
        category: "arquivos",
    },
    {
        id: 22,
        specifications: "ITEM 022",
        name: "Armário de Porta de Abrir",
        description: "",
        image: "assets/images/products/produto_22.jpeg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 23,
        specifications: "ITEM 023",
        name: "Armário para Pasta AZ",
        description: "",
        image: "assets/images/products/produto_23.jpeg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 24,
        specifications: "ITEM 024",
        name: "Roupeiro de 8 Portas",
        description: "",
        image: "assets/images/products/produto_24.jpeg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 25,
        specifications: "ITEM 025",
        name: "Painel de Fechamento Estante Face Dupla",
        description: "",
        image: "assets/images/products/produto_25.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 26,
        specifications: "ITEM 026",
        name: "Painel de Fechamento Estante Face Simples",
        description: "",
        image: "assets/images/products/produto_26.jpeg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 27,
        specifications: "ITEM 027",
        name: "Estante para Armazenagem com Prateleira em OSB",
        description: "",
        image: "assets/images/products/produto_27.jpeg",
        fullDescription: "",
        category: "armazenagem",
    },
    {
        id: 28,
        specifications: "ITEM 028",
        name: "Armário de Porta de Abrir",
        description: "",
        image: "assets/images/products/produto_28.jpg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 29,
        specifications: "ITEM 029",
        name: "Roupeiro Exército",
        description: "",
        image: "assets/images/products/produto_29.jpg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 30,
        specifications: "ITEM 030",
        name: "Armário de Porta Individuais",
        description: "",
        image: "assets/images/products/produto_30.jpg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 31,
        specifications: "ITEM 031",
        name: "Armário de Porta de Correr",
        description: "",
        image: "assets/images/products/produto_31.jpg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 32,
        specifications: "ITEM 032",
        name: "Armário de Porta de Vidro",
        description: "",
        image: "assets/images/products/produto_32.jpg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 33,
        specifications: "ITEM 033",
        name: "Armário de Limpeza",
        description: "",
        image: "assets/images/products/produto_33.jpg",
        fullDescription: "",
        category: "armarios",
    },
    {
        id: 34,
        specifications: "ITEM 034",
        name: "Arquivo de 4 gavetas",
        description: "",
        image: "assets/images/products/produto_34.jpg",
        fullDescription: "",
        category: "arquivos",
    },
    {
        id: 35,
        specifications: "ITEM 035",
        name: "Arquivo Misto Ofício 5 gavetas",
        description: "",
        image: "assets/images/products/produto_35.jpg",
        fullDescription: "",
        category: "arquivos",
    },
    {
        id: 36,
        specifications: "ITEM 036",
        name: "Arquivo Misto Ofício 6 Gavetas",
        description: "",
        image: "assets/images/products/produto_36.jpg",
        fullDescription: "",
        category: "arquivos",
    },
    {
        id: 37,
        specifications: "ITEM 037",
        name: "Estante Biblioteca Face Dupla",
        description: "",
        image: "assets/images/products/produto_37.jpg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 38,
        specifications: "ITEM 038",
        name: "Estante Biblioteca Face Simples",
        description: "",
        image: "assets/images/products/produto_38.jpg",
        fullDescription: "",
        category: "bibliotecas",
    },
    {
        id: 39,
        specifications: "ITEM 039",
        name: "Estante de Aço com Painéis de Fechamento",
        description: "",
        image: "assets/images/products/produto_39.jpg",
        fullDescription: "",
        category: "estantes",
    },
    {
        id: 40,
        specifications: "ITEM 040",
        name: "Roupeiro de 3 Portas Inteiriças",
        description: "",
        image: "assets/images/products/produto_40.jpg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 41,
        specifications: "ITEM 041",
        name: "Roupeiro de 12 Portas",
        description: "",
        image: "assets/images/products/produto_41.jpg",
        fullDescription: "",
        category: "roupeiros",
    },
    {
        id: 42,
        specifications: "ITEM 042",
        name: "Roupeiro de 16 Portas",
        description: "",
        image: "assets/images/products/produto_42.jpg",
        fullDescription: "",
        category: "roupeiros"
    }
];

// Variável para controlar o filtro ativo
let currentFilter = 'all';

// Configurações de paginação
const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;

// Array para armazenar produtos favoritos
let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

// Função para obter produtos filtrados
function getFilteredProducts() {
    if (currentFilter === 'all') {
        return products;
    }
    return products.filter(product => product.category === currentFilter);
}

// Função para obter produtos da página atual
function getCurrentPageProducts() {
    const filteredProducts = getFilteredProducts();
    const startIndex = 0;
    const endIndex = currentPage * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
}

// Função para criar um card de produto
function createProductCard(product) {
    const isFavorite = favoriteProducts.includes(product.id);
    const favoriteClass = isFavorite ? 'active' : '';
    const favoriteIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
            </div>
            <div class="product-actions">
                <button class="btn-details" data-product-id="${product.id}">Ver Detalhes</button>
                <button class="btn-contact" data-product-id="${product.id}" title="Entrar em Contato">
                    <i class="fas fa-info-circle"></i>
                </button>
                <button class="btn-favorite ${favoriteClass}" data-product-id="${product.id}" title="Adicionar aos Favoritos">
                    <i class="${favoriteIcon}"></i>
                </button>
            </div>
        </div>
    `;
}

// Função para renderizar produtos da página atual
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    // Filtrar produtos baseado no filtro ativo
    let filteredProducts = getFilteredProducts();
    
    // Se for a primeira página, limpar o grid
    if (currentPage === 1) {
        productsGrid.innerHTML = '';
    }
    
    // Obter produtos da página atual
    const currentProducts = getCurrentPageProducts();
    
    // Criar cards apenas para os novos produtos
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const newProducts = filteredProducts.slice(startIndex, currentPage * PRODUCTS_PER_PAGE);
    
    // Se for primeira página, renderizar todos
    if (currentPage === 1) {
        productsGrid.innerHTML = currentProducts.map(product => createProductCard(product)).join('');
    } else {
        // Se não for primeira página, apenas adicionar os novos
        const newCardsHTML = newProducts.map(product => createProductCard(product)).join('');
        productsGrid.insertAdjacentHTML('beforeend', newCardsHTML);
    }
    
    // Adicionar event listeners para os cards (abrir modal)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Não abrir modal se clicou em botões
            if (e.target.closest('.btn-details') || e.target.closest('.btn-contact') || 
                e.target.closest('.btn-favorite')) {
                return;
            }
            const productId = parseInt(this.dataset.productId);
            openModal(productId);
        });
    });
    
    // Adicionar event listeners para os botões "Ver Detalhes"
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            openModal(productId);
        });
    });
    
    // Adicionar event listeners para os botões "Entrar em Contato"
    document.querySelectorAll('.btn-contact').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            openContactModal(productId);
        });
    });
    
    // Adicionar event listeners para os botões "Favoritos"
    document.querySelectorAll('.btn-favorite').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.dataset.productId);
            toggleFavorite(productId);
        });
    });
    
    // Atualizar visibilidade do botão "Carregar Mais"
    updateLoadMoreButton();
    
    // Atualizar contador de produtos
    updateProductsCount();
}

// Função para atualizar contador de produtos
function updateProductsCount() {
    const filteredProducts = getFilteredProducts();
    const totalProducts = filteredProducts.length;
    const productsCountElement = document.getElementById('products-count');
    
    if (productsCountElement) {
        productsCountElement.textContent = totalProducts;
    }
}

// Função para atualizar visibilidade do botão "Carregar Mais"
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!loadMoreBtn) return;
    
    const filteredProducts = getFilteredProducts();
    const totalProducts = filteredProducts.length;
    const showingProducts = currentPage * PRODUCTS_PER_PAGE;
    
    if (showingProducts >= totalProducts) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Função para carregar mais produtos
function loadMoreProducts() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // Mostrar loading
    loadMoreBtn.classList.add('loading');
    loadMoreBtn.disabled = true;
    
    // Simular delay de carregamento de 3 segundos
    setTimeout(() => {
        currentPage++;
        renderProducts();
        
        // Remover loading
        loadMoreBtn.classList.remove('loading');
        loadMoreBtn.disabled = false;
    }, 3000); // 3 segundos de delay
}

// Função para atualizar informações de paginação
// Removido: updatePaginationInfo

// Função para ir para a página anterior
// Removido: goToPreviousPage

// Função para ir para a próxima página
// Removido: goToNextPage

// Função de teste para debug
window.testContactFormModal = function() {
    openContactFormModal();
};

// Função de teste direto
window.openFormModal = function() {
    const modal = document.getElementById('contact-form-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Aguardar os modais serem carregados antes de registrar os event listeners
    document.addEventListener('modalsLoaded', function(event) {
        
        initializeEventListeners();
    });
    
    // Renderizar produtos iniciais
    renderProducts();
    
    // Atualizar contador de favoritos na inicialização
    updateFavoritesCount();
});

// Função para inicializar todos os event listeners
function initializeEventListeners() {
    
    // Mobile Menu Event Listeners
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (hamburgerBtn && mobileMenuOverlay) {
        hamburgerBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            hamburgerBtn.classList.add('hidden'); // Ocultar o botão hamburger com transição suave
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileMenuClose && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
            document.body.style.overflow = 'auto';
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Mobile menu navigation items
    const mobileAboutBtn = document.getElementById('mobile-about-btn');
    const mobileAtaInfoBtn = document.getElementById('mobile-ata-info-btn');
    const mobileContactBtn = document.getElementById('mobile-contact-btn');
    
    if (mobileAboutBtn) {
        mobileAboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
            document.body.style.overflow = 'auto';
            setTimeout(() => openAboutModal(), 100);
        });
    }
    
    if (mobileAtaInfoBtn) {
        mobileAtaInfoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
            document.body.style.overflow = 'auto';
            setTimeout(() => openContactFormModal(), 100);
        });
    }
    
    if (mobileContactBtn) {
        mobileContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
            document.body.style.overflow = 'auto';
            setTimeout(() => openContactModal(), 100);
        });
    }
    
    // Mobile Favorites Button
    const mobileFavoritesBtn = document.getElementById('mobile-favorites-btn');
    if (mobileFavoritesBtn) {
        mobileFavoritesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenuOverlay.classList.remove('active');
            hamburgerBtn.classList.remove('hidden'); // Mostrar o botão hamburger novamente
            document.body.style.overflow = 'auto';
            setTimeout(() => openFavoritesModal(), 100);
        });
    }
    
    // Header Favorites Button - removido para evitar duplicação com event delegation
    // O botão agora é tratado via event delegation no document click
    
    // Verificar novamente se os elementos dos modais existem após carregamento

    // Event listeners para os botões de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os botões
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Atualizar filtro ativo
            currentFilter = this.dataset.category;
            
            // Resetar página para 1 quando mudar filtro
            currentPage = 1;
            
            // Re-renderizar produtos
            renderProducts();
        });
    });

    // Mobile Categories Dropdown Event Listeners
    const mobileDropdownBtn = document.getElementById('mobile-dropdown-btn');
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    
    if (mobileDropdownBtn && mobileDropdownMenu) {
        // Toggle dropdown
        mobileDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = mobileDropdownMenu.classList.contains('open');
            
            if (isOpen) {
                mobileDropdownMenu.classList.remove('open');
                mobileDropdownBtn.classList.remove('open');
            } else {
                mobileDropdownMenu.classList.add('open');
                mobileDropdownBtn.classList.add('open');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileDropdownBtn.contains(e.target) && !mobileDropdownMenu.contains(e.target)) {
                mobileDropdownMenu.classList.remove('open');
                mobileDropdownBtn.classList.remove('open');
            }
        });
    }
    
    // Mobile dropdown items event listeners
    document.querySelectorAll('.mobile-dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe active de todos os itens
            document.querySelectorAll('.mobile-dropdown-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao item clicado
            this.classList.add('active');
            
            // Atualizar texto do botão dropdown
            const selectedText = this.textContent;
            const selectedCategory = document.querySelector('.selected-category');
            if (selectedCategory) {
                selectedCategory.textContent = selectedText;
            }
            
            // Atualizar categoria ativa correspondente no desktop
            const correspondingBtn = document.querySelector(`.category-btn[data-category="${this.dataset.category}"]`);
            if (correspondingBtn) {
                correspondingBtn.classList.add('active');
            }
            
            // Atualizar filtro ativo
            currentFilter = this.dataset.category;
            
            // Resetar página para 1 quando mudar filtro
            currentPage = 1;
            
            // Re-renderizar produtos
            renderProducts();
            
            // Fechar dropdown
            mobileDropdownMenu.classList.remove('open');
            mobileDropdownBtn.classList.remove('open');
        });
    });

    // Event listener para o botão "Carregar Mais"
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loadMoreProducts();
        });
    }

    // Event delegation simplificado - apenas um listener
    document.addEventListener('click', function(e) {
        
        // INFORMAÇÕES DA ATA - Botão principal
        if (e.target.id === 'ata-info-btn') {
            e.preventDefault();
            e.stopPropagation();
            openContactFormModal();
            return;
        }
        
        // SOBRE
        if (e.target.id === 'about-btn') {
            e.preventDefault();
            e.stopPropagation();
            openAboutModal();
            return;
        }
        
        // HEADER CONTACT
        if (e.target.id === 'header-contact-btn') {
            e.preventDefault();
            e.stopPropagation();
            openContactModal();
            return;
        }
        
        // FAVORITES BUTTON
        if (e.target.id === 'favorites-btn') {
            e.preventDefault();
            e.stopPropagation();
            openFavoritesModal();
            return;
        }
        
        // EMAIL BUTTONS nos modais
        if (e.target.id === 'contact-email' || 
            e.target.id === 'about-contact-btn') {
            e.preventDefault();
            e.stopPropagation();
            
            // Fechar modal atual
            closeModal();
            closeContactModal();
            closeAboutModal();
            
            // Abrir formulário de contato
            setTimeout(() => openContactFormModal(), 100);
            return;
        }
    });

    // Event listeners para os botões do header
    document.querySelectorAll('.icon-btn').forEach(btn => {
        btn.addEventListener('click', function() {
        });
    });

    // Event listeners para os itens do menu (exceto o botão de informações da ata)
    document.querySelectorAll('.nav-item:not(#ata-info-btn)').forEach(item => {
        item.addEventListener('click', function(e) {
            // Apenas aplica o preventDefault se não for um botão específico
            if (!this.id || (this.id !== 'ata-info-btn' && this.id !== 'about-btn')) {
                e.preventDefault();
            }
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Event listeners gerenciados via event delegation no início do script
    
    // Event listeners para produtos
    // Event listeners para os modais (apenas os que não estão na delegação)
    const modalClose = document.getElementById('modal-close');
    if (modalClose) modalClose.addEventListener('click', closeModal);

    const contactModalClose = document.getElementById('contact-modal-close');
    if (contactModalClose) contactModalClose.addEventListener('click', closeContactModal);

    const contactFormModalClose = document.getElementById('contact-form-modal-close');
    if (contactFormModalClose) contactFormModalClose.addEventListener('click', closeContactFormModal);

    const aboutModalClose = document.getElementById('about-modal-close');
    if (aboutModalClose) aboutModalClose.addEventListener('click', closeAboutModal);

    const colorsModalClose = document.getElementById('colors-modal-close');
    if (colorsModalClose) colorsModalClose.addEventListener('click', closeColorsModal);

    const productModal = document.getElementById('product-modal');
    if (productModal) productModal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    const contactModal = document.getElementById('contact-modal');
    if (contactModal) contactModal.addEventListener('click', function(e) {
        if (e.target === this) closeContactModal();
    });

    const contactFormModal = document.getElementById('contact-form-modal');
    if (contactFormModal) contactFormModal.addEventListener('click', function(e) {
        if (e.target === this) closeContactFormModal();
    });

    const aboutModal = document.getElementById('about-modal');
    if (aboutModal) aboutModal.addEventListener('click', function(e) {
        if (e.target === this) closeAboutModal();
    });

    const colorsModal = document.getElementById('colors-modal');
    if (colorsModal) colorsModal.addEventListener('click', function(e) {
        if (e.target === this) closeColorsModal();
    });
    // Novo: Unificado - Botão de informações de contato
    const modalContactBtn = document.getElementById('modal-contact-btn');
    if (modalContactBtn) modalContactBtn.addEventListener('click', function() {
        // Fecha o modal do produto e abre o modal de contato principal
        closeModal();
        setTimeout(() => openContactModal(productModal?.dataset.currentProductId), 100);
    });

    // Botão de baixar catálogo (PDF)
    const modalPdfBtn = document.getElementById('modal-pdf-btn');
    if (modalPdfBtn) modalPdfBtn.addEventListener('click', function() {
        const productId = parseInt(productModal?.dataset.currentProductId || '1');
        handlePdfDownload(productId);
    });

    const modalColorsBtn = document.getElementById('modal-colors-btn');
    if (modalColorsBtn) modalColorsBtn.addEventListener('click', function() {
        openColorsModal();
    });

    const contactWhatsapp = document.getElementById('contact-whatsapp');
    if (contactWhatsapp) contactWhatsapp.addEventListener('click', function() {
        const productId = contactModal?.dataset.currentProductId || '';
        handleContactAction('whatsapp', productId);
    });

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) {
        contactEmail.addEventListener('click', function() {
            closeContactModal();
            setTimeout(() => openContactFormModal(), 100);
        });
    } else {
    }

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) contactPhone.addEventListener('click', function() {
        const productId = contactModal?.dataset.currentProductId || '';
        handleContactAction('phone', productId);
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeContactModal();
            closeAboutModal();
            closeContactFormModal();
            closeColorsModal();
            closeFavoritesModal();
            closeFavoritesContactModal();
        }
    });

    // Event listeners para o formulário de contato já definidos acima

    // Event listener para o envio do formulário
    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });

    // Event listeners não relacionados aos botões principais (evitar duplicações)
}

// Função para redimensionar a grid baseado no tamanho da tela
function adjustGridLayout() {
    const width = window.innerWidth;
    const productsGrid = document.getElementById('products-grid');
    
    if (width <= 768) {
        productsGrid.style.gridTemplateColumns = '1fr';
    } else if (width <= 1024) {
        productsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (width <= 1400) {
        productsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
        productsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
}

// Event listener para redimensionamento da janela
window.addEventListener('resize', adjustGridLayout);

// Ajustar layout inicial
adjustGridLayout();

// Funções para gerenciar favoritos
function toggleFavorite(productId) {
    const index = favoriteProducts.indexOf(productId);
    
    if (index === -1) {
        // Adicionar aos favoritos
        favoriteProducts.push(productId);
        showFavoriteNotification('Produto adicionado aos favoritos!', 'success');
    } else {
        // Remover dos favoritos
        favoriteProducts.splice(index, 1);
        showFavoriteNotification('Produto removido dos favoritos!', 'info');
    }
    
    // Salvar no localStorage
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
    
    // Atualizar a visualização do botão
    updateFavoriteButton(productId);
    
    // Atualizar contador de favoritos na header (se existir)
    updateFavoritesCount();
}

function updateFavoriteButton(productId) {
    const btn = document.querySelector(`.btn-favorite[data-product-id="${productId}"]`);
    if (!btn) return;
    
    const isFavorite = favoriteProducts.includes(productId);
    const icon = btn.querySelector('i');
    
    if (isFavorite) {
        btn.classList.add('active');
        icon.className = 'fas fa-heart';
        btn.title = 'Remover dos Favoritos';
    } else {
        btn.classList.remove('active');
        icon.className = 'far fa-heart';
        btn.title = 'Adicionar aos Favoritos';
    }
}

function updateFavoritesCount() {
    const favoritesBtn = document.querySelector('.favorites-btn');
    if (favoritesBtn) {
        // Adicionar badge com contagem se houver favoritos
        let badge = favoritesBtn.querySelector('.favorites-badge');
        
        if (favoriteProducts.length > 0) {
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'favorites-badge';
                favoritesBtn.appendChild(badge);
            }
            badge.textContent = favoriteProducts.length;
            badge.style.cssText = `
                position: absolute;
                top: -5px;
                right: -5px;
                background: #A1356E;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            `;
            favoritesBtn.style.position = 'relative';
        } else if (badge) {
            badge.remove();
        }
    }
}

function showFavoriteNotification(message, type = 'info') {
    // Criar notificação temporária
    const notification = document.createElement('div');
    notification.className = `favorite-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#A1356E' : '#FBA719'};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        z-index: 2000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificação
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function openFavoritesModal() {
    
    if (favoriteProducts.length === 0) {
        showFavoriteNotification('Você ainda não tem produtos favoritos!', 'info');
        return;
    }
    
    
    // Verificar se o modal existe
    const favoritesModal = document.getElementById('favorites-modal');
    
    if (!favoritesModal) {
        
        // Carregar modal diretamente se não estiver disponível
        if (window.modalLoader) {
            window.modalLoader.loadModal('favorites-modal.html').then(success => {
                if (success) {
                    setTimeout(() => openFavoritesModalInternal(), 100);
                } else {
                    showFavoriteNotification('Erro ao carregar modal de favoritos. Recarregue a página.', 'info');
                }
            }).catch(error => {
                showFavoriteNotification('Erro ao carregar modal de favoritos. Recarregue a página.', 'info');
            });
        } else {
            showFavoriteNotification('Sistema de modais não disponível. Recarregue a página.', 'info');
        }
        return;
    }
    
    openFavoritesModalInternal();
}

function openFavoritesModalInternal() {
    
    // Filtrar produtos favoritos
    const favoriteProductsList = products.filter(product => 
        favoriteProducts.includes(product.id)
    );
    
    // Obter o modal já carregado
    const favoritesModal = document.getElementById('favorites-modal');
    
    if (!favoritesModal) {
        return;
    }
    
    // Atualizar título com contagem
    const modalTitle = document.getElementById('favorites-modal-title');
    if (modalTitle) {
        modalTitle.textContent = `Meus Favoritos (${favoriteProducts.length})`;
    }
    
    // Preencher lista de favoritos
    const favoritesList = document.getElementById('favorites-list');
    if (favoritesList) {
        favoritesList.innerHTML = favoriteProductsList.map((product, index) => `
            <div class="favorite-item">
                <div class="favorite-item-content">
                    <h4 class="favorite-item-title">${product.name}</h4>
                    <p class="favorite-item-spec">${product.specifications}</p>
                </div>
                <div class="favorite-item-actions">
                    <button class="btn-remove-favorite favorite-item-remove-btn" data-product-id="${product.id}" title="Remover dos Favoritos">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Configurar event listeners (remove listeners antigos primeiro)
    setupFavoritesModalEvents();
    
    
    // Mostrar modal APÓS configurar os event listeners
    const modalToShow = document.getElementById('favorites-modal'); // Obter novamente após setup
    if (modalToShow) {
        modalToShow.classList.add('active');
        document.body.style.overflow = 'hidden';
        
    } else {
    }
}

function setupFavoritesModalEvents() {
    const favoritesModal = document.getElementById('favorites-modal');
    if (!favoritesModal) return;
    
    
    // Event listener para fechar modal
    const closeBtn = favoritesModal.querySelector('#favorites-modal-close');
    if (closeBtn) {
        // Remover listeners antigos
        closeBtn.removeEventListener('click', closeFavoritesModal);
        closeBtn.addEventListener('click', closeFavoritesModal);
    }
    
    // Event listener para clique no overlay
    favoritesModal.removeEventListener('click', modalOverlayClick);
    favoritesModal.addEventListener('click', modalOverlayClick);
    
    // Event listeners para botões de detalhes
    favoritesModal.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            closeFavoritesModal();
            setTimeout(() => openModal(productId), 100);
        });
    });
    
    // Event listeners para botões de remover favorito
    favoritesModal.querySelectorAll('.btn-remove-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            toggleFavorite(productId);
            setTimeout(() => {
                closeFavoritesModal();
                if (favoriteProducts.length > 0) {
                    setTimeout(() => openFavoritesModal(), 100);
                }
            }, 100);
        });
    });
    
    // Event listener para o botão de contato dos favoritos
    const contactFavoritesBtn = favoritesModal.querySelector('#contact-favorites-btn');
    
    if (contactFavoritesBtn) {
        // Remover listener antigo se existir
        contactFavoritesBtn.removeEventListener('click', handleContactFavoritesClick);
        // Adicionar novo listener
        contactFavoritesBtn.addEventListener('click', handleContactFavoritesClick);
    } else {
    }
}

// Função separada para o clique no botão de contato dos favoritos
function handleContactFavoritesClick() {
    openFavoritesContactModal();
}

// Função separada para o clique no overlay
function modalOverlayClick(e) {
    if (e.target === this) closeFavoritesModal();
}

function closeFavoritesModal() {
    const modal = document.getElementById('favorites-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openFavoritesContactModal() {
    
    if (favoriteProducts.length === 0) {
        showFavoriteNotification('Você não tem produtos favoritos para consultar!', 'info');
        return;
    }
    
    // Filtrar produtos favoritos
    const favoriteProductsList = products.filter(product => 
        favoriteProducts.includes(product.id)
    );
    
    // Obter o modal já carregado
    const favoritesContactModal = document.getElementById('favorites-contact-modal');
    
    if (!favoritesContactModal) {
        
        // Verificar se já tentamos carregar este modal antes (evitar loop infinito)
        if (window.favoritesContactModalLoadAttempts > 3) {
            showFavoriteNotification('Erro: Modal de contato não pôde ser carregado.', 'error');
            return;
        }
        
        // Incrementar contador de tentativas
        window.favoritesContactModalLoadAttempts = (window.favoritesContactModalLoadAttempts || 0) + 1;
        
        // Tentar carregar o modal se não estiver disponível
        if (window.modalLoader) {
            window.modalLoader.loadModal('favorites-modal.html').then(success => {
                if (success) {
                    setTimeout(() => openFavoritesContactModal(), 100);
                } else {
                    showFavoriteNotification('Erro ao carregar modal de contato.', 'info');
                }
            });
        } else {
            showFavoriteNotification('Sistema de modais não disponível.', 'info');
        }
        return;
    }
    
    // Reset contador de tentativas quando modal é encontrado com sucesso
    window.favoritesContactModalLoadAttempts = 0;
    
    // Atualizar título com contagem
    const contactTitle = document.getElementById('favorites-contact-title');
    if (contactTitle) {
        contactTitle.textContent = `Produtos Selecionados (${favoriteProducts.length}):`;
    }
    
    // Preencher lista de produtos
    const contactList = document.getElementById('favorites-contact-list');
    if (contactList) {
        contactList.innerHTML = favoriteProductsList.map((product, index) => `
            <div class="favorites-contact-item">
                <div class="favorites-contact-item-content">
                    <h4 class="favorites-contact-item-title">${product.name}</h4>
                    <p class="favorites-contact-item-spec">${product.specifications}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Configurar event listeners
    setupFavoritesContactModalEvents();
    
    
    // Mostrar modal
    const modalToShow = document.getElementById('favorites-contact-modal'); // Obter novamente após setup
    if (modalToShow) {
        modalToShow.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
    }
}

function setupFavoritesContactModalEvents() {
    const favoritesContactModal = document.getElementById('favorites-contact-modal');
    if (!favoritesContactModal) return;
    
    
    // Event listener para fechar modal
    const closeBtn = favoritesContactModal.querySelector('#favorites-contact-modal-close');
    if (closeBtn) {
        closeBtn.removeEventListener('click', closeFavoritesContactModal);
        closeBtn.addEventListener('click', closeFavoritesContactModal);
    }
    
    // Event listener para clique no overlay
    favoritesContactModal.removeEventListener('click', contactModalOverlayClick);
    favoritesContactModal.addEventListener('click', contactModalOverlayClick);
    
    // Event listeners para os botões de contato
    const whatsappBtn = favoritesContactModal.querySelector('#favorites-whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            handleFavoritesContactAction('whatsapp');
        });
    }
    
    const emailBtn = favoritesContactModal.querySelector('#favorites-email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            handleFavoritesContactAction('email');
        });
    }
    
    const phoneBtn = favoritesContactModal.querySelector('#favorites-phone-btn');
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function() {
            handleFavoritesContactAction('phone');
        });
    }
}

// Função separada para o clique no overlay do modal de contato
function contactModalOverlayClick(e) {
    if (e.target === this) closeFavoritesContactModal();
}

function closeFavoritesContactModal() {
    const modal = document.getElementById('favorites-contact-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function handleFavoritesContactAction(type) {
    if (favoriteProducts.length === 0) {
        showFavoriteNotification('Você não tem produtos favoritos para consultar!', 'info');
        return;
    }
    
    // Filtrar produtos favoritos
    const favoriteProductsList = products.filter(product => 
        favoriteProducts.includes(product.id)
    );
    
    // Criar lista de produtos formatada
    const productsList = favoriteProductsList.map((product, index) => 
        `${index + 1}. ${product.name} (${product.specifications})`
    ).join('\n');
    
    switch (type) {
        case 'whatsapp':
            const whatsappMessage = encodeURIComponent(
                `Olá! Tenho interesse nos seguintes produtos da EDE MÓVEIS:\n\n${productsList}\n\nPoderia me fornecer mais informações sobre estes produtos?\n\nObrigado!`
            );
            window.open(`https://wa.me/5519989701690?text=${whatsappMessage}`, '_blank');
            break;
            
        case 'email':
            const emailSubject = encodeURIComponent(`Consulta sobre ${favoriteProducts.length} produtos favoritos - EDE MÓVEIS`);
            const emailBody = encodeURIComponent(
                `Olá!\n\nTenho interesse nos seguintes produtos da EDE MÓVEIS:\n\n${productsList}\n\nPoderia me fornecer mais informações sobre estes produtos, incluindo:\n- Especificações técnicas detalhadas\n- Preços e condições de pagamento\n- Prazo de entrega\n- Disponibilidade de cores\n\nAguardo retorno.\n\nObrigado!`
            );
            window.open(`mailto:licitacao@edemoveis.com.br?subject=${emailSubject}&body=${emailBody}`, '_blank');
            break;
            
        case 'phone':
            // Mostrar lista de produtos antes de ligar
            alert(`Você será direcionado para ligar sobre os seguintes produtos:\n\n${productsList}\n\nAnote estas informações para facilitar o atendimento.`);
            window.open('tel:+5519989701690', '_blank');
            break;
    }
    
    // Fechar modais após ação
    closeFavoritesContactModal();
    closeFavoritesModal();
    
    // Mostrar confirmação
    showFavoriteNotification('Contato realizado com sucesso!', 'success');
}
// Funções do Modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    if (!modal) return;

    // Armazenar o produto atual
    modal.dataset.currentProductId = productId;

    // Preencher dados do modal (defensivo)
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = product.name;

    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
        modalImage.src = product.image;
        modalImage.alt = product.name;
    }

    const modalDescription = document.getElementById('modal-description');
    if (modalDescription) modalDescription.textContent = '*********';

    const modalFullDescription = document.getElementById('modal-full-description');
    if (modalFullDescription) modalFullDescription.textContent = '*********';

    const modalSpecifications = document.getElementById('modal-specifications');
    if (modalSpecifications) modalSpecifications.textContent = '*********';

    // Preencher o badge do ITEM
    const modalItemCode = document.getElementById('modal-item-code');
    if (modalItemCode) modalItemCode.textContent = product.specifications;

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openContactModal(productId = null) {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Armazenar o produto atual para uso nos botões de contato (se fornecido)
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        modal.dataset.currentProductId = productId;
    } else {
        // Quando chamado do header, não há produto específico
        modal.dataset.currentProductId = '';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleContactAction(type, productId) {
    let product = null;
    let productName = '';
    
    // Se há um productId válido, buscar o produto
    if (productId && productId !== '') {
        product = products.find(p => p.id === parseInt(productId));
        if (product) {
            productName = product.name;
        }
    }
    
    switch (type) {
        case 'whatsapp':
            let whatsappMessage;
            if (product) {
                whatsappMessage = encodeURIComponent(
                    `Olá! Tenho interesse no produto: ${productName}\n\nPoderia me fornecer mais informações?`
                );
            } else {
                whatsappMessage = encodeURIComponent(
                    `Olá! Gostaria de conhecer mais sobre os produtos da EDE MÓVEIS.\n\nPoderia me fornecer um catálogo ou informações?`
                );
            }
            window.open(`https://wa.me/5519989701690?text=${whatsappMessage}`, '_blank');
            break;
            
        case 'email':
            let emailSubject, emailBody;
            if (product) {
                emailSubject = encodeURIComponent(`Interesse no produto: ${productName}`);
                emailBody = encodeURIComponent(
                    `Olá!\n\nTenho interesse no produto: ${productName}\n\nPoderia me fornecer mais informações?\n\nObrigado!`
                );
            } else {
                emailSubject = encodeURIComponent(`Interesse nos produtos EDE MÓVEIS`);
                emailBody = encodeURIComponent(
                    `Olá!\n\nGostaria de conhecer mais sobre os produtos da EDE MÓVEIS.\n\nPoderia me fornecer um catálogo ou orçamento?\n\nObrigado!`
                );
            }
            window.open(`mailto:licitacao@edemoveis.com.br?subject=${emailSubject}&body=${emailBody}`, '_blank');
            break;
            
        case 'phone':
            window.open('tel:+5519989701690', '_blank');
            break;
    }
    
    // Fechar modal após ação
    closeContactModal();
}

// Função para download do PDF do produto
function handlePdfDownload(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Por enquanto, vamos simular o download abrindo uma mensagem
    // Em uma implementação real, você substituiria por um link direto para o PDF
    alert(`Download do PDF do produto: ${product.name}\n\nEm breve disponibilizaremos os catálogos em PDF para download.`);
    
    // Exemplo de como seria com PDF real:
    // const pdfUrl = `assets/pdfs/produto_${productId.toString().padStart(2, '0')}.pdf`;
    // window.open(pdfUrl, '_blank');
}

// Funções do Modal de Cores
function openColorsModal() {
    const modal = document.getElementById('colors-modal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeColorsModal() {
    const modal = document.getElementById('colors-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Funções do Modal Sobre
function openAboutModal() {
    const modal = document.getElementById('about-modal');
    if (!modal) return;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Funções do Modal Formulário de Contato
function openContactFormModal() {
    const modal = document.getElementById('contact-form-modal');
    if (!modal) {
        return;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Limpar formulário
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }
}

function closeContactFormModal() {
    const modal = document.getElementById('contact-form-modal');
    if (!modal) {
        return;
    }
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleGeneralContactAction(type) {
    switch (type) {
        case 'whatsapp':
            const whatsappMessage = encodeURIComponent(
                `Olá! Gostaria de conhecer mais sobre os produtos e serviços da EDE MÓVEIS.\n\nPoderia me fornecer mais informações?`
            );
            window.open(`https://wa.me/5519989701690?text=${whatsappMessage}`, '_blank');
            break;
            
        case 'email':
            const emailSubject = encodeURIComponent(`Interesse nos produtos EDE MÓVEIS`);
            const emailBody = encodeURIComponent(
                `Olá!\n\nGostaria de conhecer mais sobre os produtos e serviços da EDE MÓVEIS.\n\nPoderia me fornecer um catálogo ou orçamento?\n\nObrigado!`
            );
            window.open(`mailto:licitacao@edemoveis.com.br?subject=${emailSubject}&body=${emailBody}`, '_blank');
            break;
            
        case 'phone':
            window.open('tel:+5511999999999', '_blank');
            break;
    }
    
    // Fechar modal após ação
    closeAboutModal();
}

// Função para lidar com o envio do formulário
function handleFormSubmit() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company') || 'Não informado';
    const message = formData.get('message');
    
    // Validar campos obrigatórios
    if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Preparar dados para envio
    const emailSubject = encodeURIComponent(`Contato via Site - ${name}`);
    const emailBody = encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nEmpresa: ${company}\n\nMensagem:\n${message}`
    );
    const whatsappMessage = encodeURIComponent(
        `Olá! Meu nome é ${name}, da empresa ${company}.\n\nTelefone: ${phone}\nE-mail: ${email}\n\nMensagem: ${message}`
    );
    
    // Criar opções de envio
    const sendOptions = [
        {
            title: 'Enviar por E-mail',
            action: () => window.open(`mailto:licitacao@edemoveis.com.br?subject=${emailSubject}&body=${emailBody}`, '_blank')
        },
        {
            title: 'Enviar por WhatsApp',
            action: () => window.open(`https://wa.me/5519989701690?text=${whatsappMessage}`, '_blank')
        }
    ];
    
    // Simular envio - em um ambiente real, você enviaria para um servidor
    const choice = confirm('Formulário preenchido com sucesso!\n\nEscolha:\nOK - Enviar por E-mail\nCancelar - Enviar por WhatsApp');
    
    if (choice) {
        sendOptions[0].action(); // E-mail
    } else {
        sendOptions[1].action(); // WhatsApp
    }
    
    // Fechar modal após envio
    closeContactFormModal();
}

