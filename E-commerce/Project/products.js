// Function to add an item to the cart
function addToCart(id, name, price) {
    // Retrieve the cart from localStorage or create an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item is already in cart
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        // If item exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // Otherwise, add a new item to the cart
        cart.push({ id: id, name: name, price: price, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} has been added to the cart.`);
}
