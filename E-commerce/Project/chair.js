const chairSets = [
    { id: 1, name: "Chair", price: 599, image: "/Images/a1.jpg",rating:4 },
    { id: 2, name: "Chair", price: 620, image: "/Images/s8.jpg",rating:4 },
    { id: 3, name: "Chair", price: 610, image: "/Images/a2.jpg" ,rating:5},
    { id: 4, name: "Chair", price: 1100, image: "/Images/b9.jpg",rating:4 },
    { id: 5, name: "Chair", price: 430, image: "/Images/b8.jpg",rating:3},
    { id: 6, name: "Chair", price: 330, image: "/Images/s4.jpg",rating:4 },
    { id: 7, name: "Chair", price: 830, image: "/Images/a3.jpg",rating:5 },
    { id: 8, name: "Chair", price: 800, image: "/Images/t1.jpg",rating:4 },
    { id: 9, name: "Chair", price: 900, image: "/Images/s13.jpg",rating:4 },
    { id: 10, name: "Chair", price: 3000, image: "/Images/s9.jpg",rating:5 },
    { id: 11, name: "Chair", price: 4000, image: "/Images/s1.jpg",rating:4 },
    { id: 12, name: "Chair", price: 2000, image: "/Images/b3.jpg",rating:4 },
    { id: 13, name: "Chair", price: 2600, image: "/Images/s11.jpg" ,rating:5},
    { id: 14, name: "Chair", price: 3500, image: "/Images/s6.jpg" ,rating:4},
    { id: 15, name: "Chair", price: 2900, image: "/Images/s5.jpg",rating:4 }
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
     const chairSetList = document.getElementById("chair-set-list");

    chairSets.forEach(item => {
        const chairCard=document.createElement("div");
        chairCard.classList.add("col-md-4")
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