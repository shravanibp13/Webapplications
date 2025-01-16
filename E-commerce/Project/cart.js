// Function to render cart items on the cart page
function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.getElementById("cart-table-body");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    cartTableBody.innerHTML = "";

    if (cart.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="5" class="text-center">Your cart is empty.</td></tr>`;
        cartTotal.textContent = "$0.00";
        return;
    }

    cart.forEach((item, index) => {
        const itemPrice = parseFloat(item.price);
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartTableBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" value="${item.quantity}" class="form-control" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout() {
    alert("Checkout successful!");
    localStorage.removeItem("cart");
    renderCart();
}

// Render Cart on Page Load
document.addEventListener("DOMContentLoaded", renderCart);