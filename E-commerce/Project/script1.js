// Sample product data with variants


const productList = document.getElementById("product-list");

// Render products on the page
function loadProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4");
        productCard.innerHTML = `
            <div class="card product-card" data-id="${product.id}">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Show product variants in a modal
function showVariants(productId) {
    const product = products.find(p => p.id == productId);
    const modalBody = document.getElementById("variantModalBody");
    modalBody.innerHTML = "";

    // Populate modal with variants
    product.variants.forEach(variant => {
        const variantCard = document.createElement("div");
        variantCard.classList.add("card", "mb-3");

        variantCard.innerHTML = `
            <img src="${variant.image}" class="card-img-top" alt="${variant.name}">
            <div class="card-body">
                <h5 class="card-title">${variant.name}</h5>
                <p class="card-text">${variant.price}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        modalBody.appendChild(variantCard);
    });

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("variantModal"));
    modal.show();
}

// Initial product load
loadProducts();

// Event listener for product card clicks
document.addEventListener("click", (e) => {
    if (e.target.closest(".product-card")) {
        const productId = e.target.closest(".product-card").getAttribute("data-id");
        showVariants(productId);
    }
});


let cart = [];

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const productId = e.target.getAttribute("data-id");
        const product = products.find(p => p.id == productId);
        cart.push(product);
        alert(`${product.name} has been added to the cart.`);
        console.log(cart);
    }
});
