const temples = [
    { id: 1, name: "temple- Brown", price: 599, image: "/Images/l1.webp",rating:4 },
    { id: 2, name: "temple", price: 620, image: "/Images/l15.jpg",rating:4 },
    { id: 3, name: "temple", price: 610, image: "/Images/l3.webp" ,rating:3},
    { id: 4, name: "temple", price: 630, image: "/Images/l16.jpg",rating:5 },
    { id: 5, name: "temple ", price: 730, image: "/Images/l5.webp",rating:4 },
    { id: 6, name: "temple", price: 1130, image: "/Images/l6.jpg",rating:4 },
    { id: 7, name: "temple ", price: 800, image: "/Images/l7.jpg",rating:4 },
    { id: 8, name: "temple", price: 900, image: "/Images/l8.jpg",rating:5 },
    { id: 9, name: "temple", price: 1000, image: "/Images/l9.jpg",rating:4 },
    { id: 10, name: "temple", price: 2000, image: "/Images/l13.jpg",rating:43},
    { id: 11, name: "temple", price: 4000, image: "/Images/l11.jpg",rating:5 },
    { id: 12, name: "temple", price: 1000, image: "/Images/l12.jpg",rating:4 },
    { id: 13, name: "temple", price: 1530, image: "/Images/l10.jpg" ,rating:5},
    { id: 14, name: "temple", price: 1630, image: "/Images/l14.jpg" ,rating:4},
    { id: 15, name: "temple", price: 1500, image: "/Images/l4.webp",rating:5 },
    { id: 16, name: "temple", price: 1600, image: "/Images/l2.webp",rating:4 }
];

let cart = [];

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="fa fa-star${i <= rating ? ' checked' : ''}"></span>`;
    }
    return stars;
}


function renderProducts() {
     const templeList = document.getElementById("temple-list");

    temples.forEach(item => {
        const templeCard=document.createElement("div");
        templeCard.classList.add("col-md-4")
        const productHTML = `
        
<div class="card mb-3">
             <img src="${item.image}" class="card-img-top" alt="${item.name}">
             <div class="card-body">
               <h5 class="card-title">${item.name}</h5>

                 <p class="card-text">$${item.price.toFixed(2)}</p>
                 <div class="rating">${generateStarRating(item.rating)}</div>
                 <button class="btn btn-primary add-to-cart" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
             </div>
        </div>

        
            
        `;

        
        templeList.innerHTML += productHTML;
    });
}


function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.Item("cart", JSON.stringify(cart));
    alert(`${name} has been added to the cart.`);
}

renderProducts();