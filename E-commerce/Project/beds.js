const beds = [
    { id: 11, name: "Bed", price: 20000, image: "/Images/t11.jpg",rating:5 },
    { id: 12, name: "Bed", price: 15000, image: "/Images/t12.jpg",rating:4 },
    { id: 13, name: "Bed", price: 25000, image: "/Images/t13.jpg" ,rating:5},
    { id: 14, name: "Bed", price: 20500, image: "/Images/t14.jpg",rating:4 },
    { id: 15, name: "Bed", price: 30000, image: "/Images/t10.jpg",rating:4 },
    { id: 16, name: "Bed", price: 18000, image: "/Images/t3.jpg",rating:3 },
    { id: 17, name: "Bed", price: 10000, image: "/Images/t4.jpg",rating:4 },
    { id: 18, name: "Bed", price: 16000, image: "/Images/t5.webp",rating:4 },
    { id: 19, name: "Bed", price: 22000, image: "/Images/t15.webp",rating:5 },
    { id: 20, name: "Bed", price: 27000, image: "/Images/t17.jpg",rating:4 },
    { id: 21, name: "Bed", price: 17000, image: "/Images/t2.webp",rating:5 },
    { id: 22, name: "Bed", price: 20000, image: "/Images/t21.jpg",rating:4 },
    { id: 23, name: "Bed", price: 13000, image: "/Images/t20.webp" ,rating:4},
    { id: 24, name: "Bed", price: 14000, image: "/Images/t7.jpg" ,rating:4},
    { id: 24, name: "Bed", price: 25000, image: "/Images/t6.jpg",rating:4 }
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
    const bedList = document.getElementById("Beds-list");

   beds.forEach(item => {
       const bedcard=document.createElement("div");
       bedcard.classList.add("col-md-4")
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

       
       bedList.innerHTML += productHTML;
   });
}

// Function to Add to Cart
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

// Render Products on Page Load
renderProducts();