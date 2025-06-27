const cart = [];
const cartCount = document.getElementById("cart-count");

const cartDisplayElement = document.querySelector('.js-cart-icon');

const cartModal = document.getElementById("cart-modal");

cartDisplayElement.addEventListener('click', () => {
  cartModal.style.display = "flex";
})

window.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  };
});

const cartSummarySection = document.querySelector('.js-cart-summary')
const cartItemsContainer = document.querySelector(".js-cart-html");

updateCart();

function updateCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>You haven't placed an order yet</p>";
    document.querySelector('button.checkout-btn').style.display = 'none';
    cartCount.style.display = 'none'; 
    cartSummarySection.style.display = 'none';
  } else {
    document.querySelector('button.checkout-btn').style.display = 'block';
    cartCount.style.display = "inline-block";
    cartSummarySection.style.display = 'block'
    cartCount.textContent = cart.length; 

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <div class="cart-item-details">
          <p class="item-name">${item.name} - $${item.price}</p>
          <div class="quantity-controls">
            <button class="quantity-btn" data-id="${index}" data-change="-1">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" data-id="${index}" data-change="1">+</button>
          </div>
        </div>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });
  };
 
  
  const taxRate = 0.10; 
  const cartTotalContainer = document.getElementById("cart-total");
  const cartTax = document.getElementById("tax");
  const cartSubTotal = document.getElementById("subtotal");

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = totalPrice * taxRate;
  const subTotal = totalPrice + tax;
  cartTotalContainer.innerHTML = `$${totalPrice.toFixed(2)}`;
  cartTax.innerHTML = `$${tax.toFixed(2)}`;
  cartSubTotal.innerHTML = `$${subTotal.toFixed(2)}`;
};

cartItemsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("quantity-btn")) {
    const index = event.target.getAttribute("data-id");
    const change = parseInt(event.target.getAttribute("data-change"));
    if (cart[index].quantity + change > 0) {
          cart[index].quantity += change;
          }
      updateCart();
  }

  if (event.target.classList.contains("remove-item")) {
    const index = event.target.getAttribute("data-index");
    cart.splice(index, 1);
    updateCart();
  }
});

const closeModalBtn = document.getElementById("close-modal");
const checkoutBtn = document.getElementById("checkout");

closeModalBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

checkoutBtn.addEventListener("click", () => {
  cartItemsContainer.innerHTML="Thank you for your order!"; 
});

