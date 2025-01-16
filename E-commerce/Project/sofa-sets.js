// Sample data for sofa set variants
const sofa = [
    { id: 1, name: "Sofa Set - Green", price: 599, image: "/Images/c2.webp",rating:4 },
    { id: 2, name: "Sofa Set - Gray", price: 15000, image: "/Images/c4.jpg",rating:5 },
    { id: 3, name: "Sofa Set - Blue", price: 12000, image: "/Images/c7.jpg" ,rating:3},
    { id: 4, name: "Sofa Set - Beige", price: 10000, image: "/Images/c8.jpg",rating:4 },
    { id: 5, name: "Italian style sofa set", price: 12000, image: "/Images/c9.jpg",rating:5 },
    { id: 6, name: "Design pattern sofa set", price: 8000, image: "/Images/c11.jpg",rating:4 },
    { id: 7, name: "infi living room luxury sofa set", price: 10500, image: "/Images/c12.jpg",rating:5 },
    { id: 8, name: "Westido Cyrus", price: 70000, image: "/Images/c13.jpg",rating:5 },
    { id: 9, name: "Wooden corner sofa set", price: 20000, image: "/Images/c14.jpg",rating:4 },
    { id: 10, name: "Casaliving Corso", price: 11500, image: "/Images/c15.jpg",rating:3 },
    { id: 11, name: "Homeify Carlo Sofa set", price: 9000, image: "/Images/c25.jpg",rating:4 },
    { id: 12, name: "Fabric Sofa Set", price: 13000, image: "/Images/c26.jpg",rating:4 },
    { id: 13, name: "furny marbo Sofa Set", price: 14000, image: "/Images/c27.jpg" ,rating:4},
    { id: 14, name: "Foster ChaiseSofa Set", price: 16000, image: "/Images/c28.jpg" ,rating:5},
    { id: 15, name: "Halimaz-5 Sofa Set", price: 18000, image: "/Images/c29.jpg",rating:4 }
];

//  const sofaSetList = document.getElementById("sofa-set-list");
let cart = [];

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="fa fa-star${i <= rating ? ' checked' : ''}"></span>`;
    }
    return stars;
}


function renderProducts() {
     const sofaSetList = document.getElementById("sofa-set-list");

    sofa.forEach(item => {
        const sofaCard=document.createElement("div");
        sofaCard.classList.add("col-md-4")
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

        
        sofaSetList.innerHTML += productHTML;
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