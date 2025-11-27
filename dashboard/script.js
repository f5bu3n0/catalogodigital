// Initial categories data loaded from products-data.js

// Initialize categories from localStorage or use initial data
let categories = [];
try {
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
        categories = JSON.parse(storedCategories);
    }
} catch (e) {
    console.error('Error parsing categories from localStorage:', e);
    localStorage.removeItem('categories');
}

// Ensure categories is an array
if (!Array.isArray(categories)) {
    categories = [];
}

if (typeof appCategoriesData !== 'undefined') {
    if (categories.length === 0) {
        categories = appCategoriesData;
        localStorage.setItem('categories', JSON.stringify(categories));
    }
} else {
    console.error('appCategoriesData is not defined. Check products-data.js loading.');
}

// Initial Products Data loaded from products-data.js

// Initialize products from localStorage
let products = [];
try {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    }
} catch (e) {
    console.error('Error parsing products from localStorage:', e);
    localStorage.removeItem('products');
}

// Ensure products is an array
if (!Array.isArray(products)) {
    products = [];
}

if (typeof appProductsData !== 'undefined') {
    if (products.length === 0) {
        products = appProductsData;
        localStorage.setItem('products', JSON.stringify(products));
    }
} else {
    console.error('appProductsData is not defined. Check products-data.js loading.');
}

// DOM Elements
const productsTableBody = document.getElementById('products-table-body');
const categoriesTableBody = document.getElementById('categories-table-body');
const searchInput = document.getElementById('search-input');
const addProductBtn = document.getElementById('add-product-btn');
const addCategoryBtn = document.getElementById('add-category-btn');
const productFormModal = document.getElementById('product-form-modal');
const categoryFormModal = document.getElementById('category-form-modal');
const modalFormClose = document.getElementById('modal-form-close');
const modalCategoryClose = document.getElementById('modal-category-close');
const cancelBtn = document.getElementById('cancel-btn');
const categoryCancelBtn = document.getElementById('category-cancel-btn');
const productForm = document.getElementById('product-form');
const categoryForm = document.getElementById('category-form');
const modalFormTitle = document.getElementById('modal-form-title');
const modalCategoryTitle = document.getElementById('modal-category-title');
const productCategorySelect = document.getElementById('product-category');
const productImageUpload = document.getElementById('product-image-upload');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');
let uploadedImage = null;

// Image Upload Listener
if (productImageUpload) {
    productImageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedImage = e.target.result;
                imagePreview.src = uploadedImage;
                imagePreviewContainer.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
}

// View Switcher Elements
const viewProductsBtn = document.getElementById('view-products');
const viewCategoriesBtn = document.getElementById('view-categories');
const productsSection = document.getElementById('products-section');
const categoriesSection = document.getElementById('categories-section');

let currentView = 'products'; // 'products' or 'categories'

// View Switcher Logic
viewProductsBtn.addEventListener('click', () => switchView('products'));
viewCategoriesBtn.addEventListener('click', () => switchView('categories'));

function switchView(view) {
    currentView = view;
    if (view === 'products') {
        viewProductsBtn.classList.add('active');
        viewCategoriesBtn.classList.remove('active');
        productsSection.style.display = 'block';
        categoriesSection.style.display = 'none';
        addProductBtn.style.display = 'flex';
        addCategoryBtn.style.display = 'none';
        renderTable();
    } else {
        viewProductsBtn.classList.remove('active');
        viewCategoriesBtn.classList.add('active');
        productsSection.style.display = 'none';
        categoriesSection.style.display = 'block';
        addProductBtn.style.display = 'none';
        addCategoryBtn.style.display = 'flex';
        renderCategoriesTable();
    }
}

// Populate Category Select in Product Form
function populateCategorySelect() {
    productCategorySelect.innerHTML = '';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.slug;
        option.textContent = category.name;
        productCategorySelect.appendChild(option);
    });
}

// Render Categories Table
function renderCategoriesTable(categoriesToRender = categories) {
    categoriesTableBody.innerHTML = '';
    
    categoriesToRender.forEach(category => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="id-align"><span class="id-badge">${category.id}</span></td>
            <td>${category.name}</td>
            <td>${category.slug}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon btn-edit" onclick="editCategory(${category.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteCategory(${category.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        categoriesTableBody.appendChild(row);
    });
}

// Render Table (Products)
function renderTable(productsToRender = products) {
    productsTableBody.innerHTML = '';
    
    productsToRender.forEach(product => {
        // Handle image path for dashboard (needs ../ if relative to root)
        let imagePath = product.image;
        if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('/') && !imagePath.startsWith('../')) {
            imagePath = '../' + imagePath;
        }

        // Find category name
        const categoryObj = categories.find(c => c.slug === product.category);
        const categoryName = categoryObj ? categoryObj.name : product.category;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="id-align"><span class="id-badge">${product.id}</span></td>
            <td><img src="${imagePath}" alt="${product.name}"></td>
            <td>${product.name}</td>
            <td>${categoryName}</td>
            <td>${product.specifications}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon btn-edit" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        productsTableBody.appendChild(row);
    });
}

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (currentView === 'products') {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.specifications.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredProducts);
    } else {
        const filteredCategories = categories.filter(category => 
            category.name.toLowerCase().includes(searchTerm) || 
            category.slug.toLowerCase().includes(searchTerm)
        );
        renderCategoriesTable(filteredCategories);
    }
});

// Modal Functions (Product)
function openModal(isEdit = false) {
    populateCategorySelect(); // Refresh categories
    productFormModal.classList.add('active');
    modalFormTitle.textContent = isEdit ? 'EDITAR PRODUTO' : 'NOVO PRODUTO';
    
    // Reset upload state if not editing (or even if editing, until data is loaded)
    // Actually, editProduct calls openModal(true) AFTER setting values.
    // But openModal clears values if !isEdit.
    
    if (!isEdit) {
        productForm.reset();
        document.getElementById('product-id').value = '';
        uploadedImage = null;
        imagePreviewContainer.style.display = 'none';
        imagePreview.src = '';
        
        // Clear new fields explicitly (though reset() should handle it if they are part of the form)
        document.getElementById('product-description').value = '';
        document.getElementById('product-full-description').value = '';
        document.getElementById('product-technical-specs').value = '';
        document.getElementById('product-colors').value = '';
    }
}

function closeModal() {
    productFormModal.classList.remove('active');
}

// Modal Functions (Category)
function openCategoryModal(isEdit = false) {
    categoryFormModal.classList.add('active');
    modalCategoryTitle.textContent = isEdit ? 'EDITAR CATEGORIA' : 'NOVA CATEGORIA';
    if (!isEdit) {
        categoryForm.reset();
        document.getElementById('category-id').value = '';
    }
}

function closeCategoryModal() {
    categoryFormModal.classList.remove('active');
}

addProductBtn.addEventListener('click', () => openModal(false));
addCategoryBtn.addEventListener('click', () => openCategoryModal(false));

modalFormClose.addEventListener('click', closeModal);
modalCategoryClose.addEventListener('click', closeCategoryModal);

cancelBtn.addEventListener('click', closeModal);
categoryCancelBtn.addEventListener('click', closeCategoryModal);

// Form Submit (Product)
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const spec = document.getElementById('product-spec').value;
    
    const description = document.getElementById('product-description').value;
    const fullDescription = document.getElementById('product-full-description').value;
    const technicalSpecs = document.getElementById('product-technical-specs').value;
    const colors = document.getElementById('product-colors').value;
    
    const urlImage = document.getElementById('product-image').value;
    const image = uploadedImage || urlImage;

    if (id) {
        // Edit
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            products[index] = { 
                ...products[index], 
                name, 
                category, 
                specifications: spec, 
                image,
                description,
                fullDescription,
                technicalSpecs,
                colors
            };
        }
    } else {
        // Add
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = {
            id: newId,
            name,
            category,
            specifications: spec,
            image,
            description: description || "",
            fullDescription: fullDescription || "",
            technicalSpecs: technicalSpecs || "",
            colors: colors || ""
        };
        products.push(newProduct);
    }

    localStorage.setItem('products', JSON.stringify(products));
    renderTable();
    closeModal();
});

// Form Submit (Category)
categoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('category-id').value;
    const name = document.getElementById('category-name').value;
    const slug = document.getElementById('category-slug').value;

    if (id) {
        // Edit
        const index = categories.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            categories[index] = { ...categories[index], name, slug };
        }
    } else {
        // Add
        const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
        const newCategory = {
            id: newId,
            name,
            slug
        };
        categories.push(newCategory);
    }

    localStorage.setItem('categories', JSON.stringify(categories));
    renderCategoriesTable();
    closeCategoryModal();
});

// Edit Product
window.editProduct = function(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Reset upload state
        uploadedImage = null;
        if (productImageUpload) productImageUpload.value = '';

        document.getElementById('product-id').value = product.id;
        document.getElementById('product-name').value = product.name;
        populateCategorySelect(); // Ensure categories are loaded
        document.getElementById('product-category').value = product.category;
        document.getElementById('product-spec').value = product.specifications;
        document.getElementById('product-image').value = product.image;
        
        // New fields
        document.getElementById('product-description').value = product.description || '';
        document.getElementById('product-full-description').value = product.fullDescription || '';
        document.getElementById('product-technical-specs').value = product.technicalSpecs || '';
        document.getElementById('product-colors').value = product.colors || '';
        
        // Show current image preview
        if (product.image) {
             let imgPath = product.image;
             // Adjust path for preview if it's a relative path from root
             if (!imgPath.startsWith('data:') && !imgPath.startsWith('http') && !imgPath.startsWith('/') && !imgPath.startsWith('../')) {
                 imgPath = '../' + imgPath;
             }
             imagePreview.src = imgPath;
             imagePreviewContainer.style.display = 'block';
        } else {
             imagePreviewContainer.style.display = 'none';
        }

        openModal(true);
    }
};

// Edit Category
window.editCategory = function(id) {
    const category = categories.find(c => c.id === id);
    if (category) {
        document.getElementById('category-id').value = category.id;
        document.getElementById('category-name').value = category.name;
        document.getElementById('category-slug').value = category.slug;
        openCategoryModal(true);
    }
};

// Delete Product
window.deleteProduct = function(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        renderTable();
    }
};

// Delete Category
window.deleteCategory = function(id) {
    if (confirm('Tem certeza que deseja excluir esta categoria? Produtos nesta categoria podem ficar sem categoria.')) {
        categories = categories.filter(c => c.id !== id);
        localStorage.setItem('categories', JSON.stringify(categories));
        renderCategoriesTable();
    }
};

// Initial Render
renderTable();

// Logout Functionality
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja sair?')) {
            sessionStorage.removeItem('dashboardAuth');
            window.location.href = 'login.html';
        }
    });
}

