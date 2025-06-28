import {products} from "./Products.js";


let coffeeProductsHTML = '';
let teaProductsHTML = '';
let foodProductsHTML = '';
let desertProductsHTML = '';

products.forEach(product => {

  let price = (product.priceCents/100).toFixed(2);

  if (product.category === 'Coffee'){
 coffeeProductsHTML += `<div class="menu-card">
        <img src="${product.image}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${price}</p>
        <button class="order js-order-button" data-product-name = "${product.name}"  data-price=${price}>Order</button>
      </div>`
  }else if (product.category === 'Tea' ){
    teaProductsHTML += `<div class="menu-card">
        <img src="${product.image}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${price}</p>
        <button class="order js-order-button"
        data-product-name = "${product.name}"  data-price=${price}>Order</button>
      </div>`
  }  else if (product.category === 'Desert' ){
    desertProductsHTML += `<div class="menu-card">
        <img src="${product.image}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${price}</p>
        <button class="order js-order-button" data-product-name ="${product.name}"  data-price=${price}>Order</button>
      </div>`
  }else if (product.category === 'Food' ){
    foodProductsHTML += `<div class="menu-card">
        <img src="${product.image}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${price}</p>
        <button class="order js-order-button" data-product-name = "${product.name}" data-price=${price}>Order</button>
      </div>`
  }; 
});

document.querySelector('.js-coffee-section')
 .innerHTML = coffeeProductsHTML;

document.querySelector('.js-tea-section')
 .innerHTML = teaProductsHTML;

document.querySelector('.js-food-section')
 .innerHTML = foodProductsHTML;

document.querySelector('.js-deserts-section')
 .innerHTML = desertProductsHTML;


const orderButtons = document.querySelectorAll('.js-order-button');

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;
    const price = parseFloat(button.dataset.price).toFixed(2); 

  
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name: productName, price: price, quantity: 1 });
    };

    let cartQuantity = 0;

    cart.forEach((item)=>{
      cartQuantity += item.quantity;
    })
    cartCount.textContent = cartQuantity;
    updateCart(); 
  });
});


