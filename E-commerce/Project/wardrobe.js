const wardrobeSets = [
    { id: 1, name: "Wardrobe - Brown", price: 15999, image: "/Images/d1.jpg",rating:4 },
    { id: 2, name: "Royalok Zara Wardrobe", price: 2500, image: "/Images/d2.jpg",rating:4 },
    { id: 3, name: "Wardrobe", price: 5000, image: "/Images/d3.jpg" ,rating:4},
    { id: 4, name: "Door-Wardrobe-Beige", price: 2000, image: "/Images/d4.jpg",rating:3 },
    { id: 5, name: "Carlton Wardrobe", price: 15000, image: "/Images/d5.webp",rating:4 },
    { id: 6, name: "Wardrobe-Beige", price: 17000, image: "/Images/d6.jpg",rating:4 },
    { id: 7, name: "Wood Wardrobe", price: 10000, image: "/Images/d7.jpg",rating:4 },
    { id: 8, name: "4 door Wardrobe - Beige", price: 6700, image: "/Images/d8.webp",rating:5 },
    { id: 9, name: "Wardrobe - White", price: 9800, image: "/Images/d9.avif",rating:5 },
    { id: 10, name: "Wardrobe - Beige", price: 5800, image: "/Images/d10.webp",rating:4 },
    { id: 11, name: "Wardrobe - Beige", price: 13000, image: "/Images/d11.jpg",rating:5 },
    { id: 12, name: "Wardrobe - Pink", price: 16000, image: "/Images/d17.avif",rating:4 },
    { id: 13, name: "3 Door Wardrobe - Beige", price: 11000, image: "/Images/d16.jpg" ,rating:4},
    { id: 14, name: "Wardrobe - Beige", price: 11700, image: "/Images/d14.jpg" ,rating:5},
    { id: 15, name: "Wardrobe - Beige", price: 12500, image: "/Images/d15.jpg",rating:4 }
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
     const wardSetList = document.getElementById("ward-set-list");

    wardrobeSets.forEach(item => {
        const wardrobeCard=document.createElement("div");
        wardrobeCard.classList.add("col-md-4")
        const productHTML = `
        
<div class="card mb-3">
             <img src={itm.image}" class="card-img-top" alt={itm.name}">
             <div class="card-body">
               <h5 class="card-title">${item.name}</h5>

                 <p class="card-text">$${item.price.toFixed(2)}</p>
                 <div class="rating">${generateStarRating(item.rating)}</div>
                 <button class="btn btn-primary add-to-cart" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
             </div>
        </div>

        
            
        `;

        
        wallSetList.innerHTML += productHTML;
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

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to the cart.`);
}

renderProducts();