import { products } from "./Products.js";
import { cart, cartCount, updateCart, setupCartUI } from './cart.js';

setupCartUI();

// Category HTML map
const categoryMap = {
  Coffee: '',
  Tea: '',
  Food: '',
  Desert: ''
};

// Build HTML for each product
products.forEach(product => {
  const price = (product.priceCents / 100).toFixed(2);
  const productHTML = `
    <div class="menu-card">
      <img src="${product.image}" class="product-image" alt="Product image">
      <h3>${product.name}</h3>
      <p class="description">${product.description}</p>
      <p class="price">$${price}</p>
      <button class="order js-order-button"
        data-product-name="${product.name}"
        data-price="${price}">Order</button>
    </div>`;

  if (categoryMap[product.category] !== undefined) {
    categoryMap[product.category] += productHTML;
  }
});

// Inject HTML into DOM
Object.entries(categoryMap).forEach(([category, html]) => {
  document.querySelector(`.js-${category.toLowerCase()}-section`).innerHTML = html;
});

// Expandable Descriptions
function isTextClamped(el) {
  return el.scrollHeight > el.clientHeight;
}

function enableExpandableDescriptions() {
  document.querySelectorAll('.description').forEach(desc => {
    if (isTextClamped(desc)) {
      desc.addEventListener('click', () => desc.classList.toggle('expanded'));
    }
  });
}

// Order Button Handler
document.addEventListener('click', (e) => {
  if (e.target.matches('.js-order-button')) {
    const button = e.target;
    const productName = button.dataset.productName;
    const price = parseFloat(button.dataset.price).toFixed(2);

    const existingItem = cart.find(item => item.name === productName);
    existingItem ? existingItem.quantity++ : cart.push({ name: productName, price, quantity: 1 });

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = cartQuantity;

    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});

enableExpandableDescriptions();

// Search Filtering
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const noResultMsg = document.querySelector('.no-results');

function resetMenuVisibility() {
  document.querySelectorAll('.category-section').forEach(section => {
    section.querySelector('.category-header').style.display = 'block';
    section.querySelectorAll('.menu-card').forEach(card => {
      card.style.display = 'block';
    });
  });
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  let matchFound = false;

  document.querySelectorAll('.category-section').forEach(section => {
    const cards = section.querySelectorAll('.menu-card');
    let matchCount = 0;

    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('.description').textContent.toLowerCase();
      const match = name.includes(searchTerm) || desc.includes(searchTerm);
      card.style.display = match ? 'block' : 'none';
      if (match) matchCount++;
    });

    section.querySelector('.category-header').style.display = matchCount ? 'block' : 'none';
    if (matchCount > 0) matchFound = true;
  });

  noResultMsg.style.display = (!matchFound && searchTerm.trim()) ? 'block' : 'none';
  clearSearch.style.display = searchTerm ? 'block' : 'none';

  if (!matchFound && searchTerm.trim()) {
    setTimeout(() => {
      searchInput.value = '';
      noResultMsg.style.display = 'none';
      clearSearch.style.display = 'none';
      resetMenuVisibility();
    }, 5000);
  }
});

// Clear Search Button
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  clearSearch.style.display = 'none';
  resetMenuVisibility();
  noResultMsg.style.display = 'none';
});
