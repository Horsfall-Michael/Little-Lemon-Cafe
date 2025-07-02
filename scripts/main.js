import { products } from "./Products.js";
import { cart, cartCount, updateCart, setupCartUI } from './cart.js';
setupCartUI();

let coffeeProductsHTML = '';
let teaProductsHTML = '';
let foodProductsHTML = '';
let dessertProductsHTML = '';

products.forEach(product => {
  let price = (product.priceCents / 100).toFixed(2);

  const productHTML = `
    <div class="menu-card">
      <img src="${product.image}" class="product-image">
      <h3>${product.name}</h3>
      <p class="description">${product.description}</p>
      <p class="price">$${price}</p>
      <button class="order js-order-button"
        data-product-name="${product.name}"
        data-price="${price}">Order</button>
    </div>`;

  switch (product.category) {
    case 'Coffee':
      coffeeProductsHTML += productHTML;
    break;
    case 'Tea':
      teaProductsHTML += productHTML;
    break;
    case 'Food':
      foodProductsHTML += productHTML;
    break;
    case 'Dessert':
      dessertProductsHTML += productHTML;
    break;
  }
});

document.querySelector('.js-coffee-section')
 .innerHTML = coffeeProductsHTML;

document.querySelector('.js-tea-section')
 .innerHTML = teaProductsHTML;

document.querySelector('.js-food-section')
 .innerHTML = foodProductsHTML;

document.querySelector('.js-desserts-section')
 .innerHTML = dessertProductsHTML;


const orderButtons = document.querySelectorAll('.js-order-button');

function isTextClamped(el) {
  return el.scrollHeight > el.clientHeight;
}


function enableExpandableDescriptions() {
  const descriptions = document.querySelectorAll('.description');

  descriptions.forEach(desc => {
    if (isTextClamped(desc)) {
      desc.addEventListener('click', () => {
        desc.classList.toggle('expanded');
      });
    }
  });
}


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
    
    localStorage.setItem('cart', JSON.stringify(cart)) 
  });
});


enableExpandableDescriptions();