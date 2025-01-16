const wallSets = [
    { id: 1, name: "wall Painting", price: 1599, image: "/Images/w1.jpg",rating:5 },
    { id: 2, name: "wall Painting", price: 1620, image: "/Images/w2.jpg",rating:4 },
    { id: 3, name: "wall Painting", price: 2610, image: "/Images/w3.jpg" ,rating:5},
    { id: 4, name: "wall Painting", price: 1630, image: "/Images/w4.jpg",rating:5 },
    { id: 5, name: "wall Painting", price: 1300, image: "/Images/w5.jpg",rating:4 },
    { id: 6, name: "wall Painting", price: 7300, image: "/Images/w6.jpg",rating:4 },
    { id: 7, name: "wall Painting", price: 1630, image: "/Images/w7.jpg",rating:5 },
    { id: 8, name: "wall Painting", price: 3430, image: "/Images/w8.jpg",rating:4 },
    { id: 9, name: "wall Painting", price: 5300, image: "/Images/w9.jpg",rating:4.5 },
    { id: 10, name: "wall Painting", price: 1430, image: "/Images/w10.jpg",rating:4 },
    { id: 11, name: "wall Painting", price: 1400, image: "/Images/w11.jpg",rating:4 },
    { id: 12, name: "wall Painting", price: 2300, image: "/Images/w12.jpg",rating:3},
    { id: 13, name: "wall Painting", price: 1400, image: "/Images/w13.jpg" ,rating:4},
    { id: 14, name: "Wall Painting", price: 1600, image: "/Images/w14.jpg" ,rating:4},
    { id: 15, name: "wall Painting", price: 2300, image: "/Images/w15.jpg",rating:45}
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
     const wallSetList = document.getElementById("wallart-list");

    wallSets.forEach(item => {
        const wallCard=document.createElement("div");
        wallCard.classList.add("col-md-4")
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