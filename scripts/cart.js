let cart = [];
const taxRate = 0.10;

const cartCount = document.getElementById("cart-count");
const cartDisplayElement = document.querySelector('.js-cart-icon');
const cartModal = document.getElementById("cart-modal");
const cartSummarySection = document.querySelector('.js-cart-summary');
const cartItemsContainer = document.querySelector(".js-cart-html");
const closeModalBtn = document.getElementById("close-modal");
const checkoutBtn = document.getElementById("checkout");
const cartTotalContainer = document.getElementById("cart-total");
const cartTax = document.getElementById("tax");
const cartSubTotal = document.getElementById("subtotal");

function updateCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='modal-display-message'>You haven't placed an order yet</p>";
    document.querySelector('button.checkout-btn').style.display = 'none';
    cartCount.style.display = 'none';
    cartSummarySection.style.display = 'none';
  } else {
    document.querySelector('button.checkout-btn').style.display = 'block';
    cartCount.style.display = "inline-block";
    cartSummarySection.style.display = 'block';

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <div class="cart-item-details">
          <p class="item-name">${item.name} - $${item.price*item.quantity}</p>
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

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = totalPrice * taxRate;
    const subTotal = totalPrice + tax;

    cartTotalContainer.innerHTML = `$${totalPrice.toFixed(2)}`;
    cartTax.innerHTML = `$${tax.toFixed(2)}`;
    cartSubTotal.innerHTML = `$${subTotal.toFixed(2)}`;
    cartCount.textContent = cart.reduce((qty, item) => qty + item.quantity, 0);
  }
}

function setupCartUI() {
  cartDisplayElement.addEventListener('click', () => {
    cartModal.style.display = "flex";
    document.body.classList.add("modal-open");
  });

  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });

  closeModalBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  checkoutBtn.addEventListener("click", () => {
  
    cartItemsContainer.innerHTML = "<p class='modal-display-message'> Thank you for your order! </p>";

    setTimeout(()=>{
      cartModal.style.display = 'none';

     cart.length = 0; 

     cartCount.style.display = 'none';

     checkoutBtn.style.display = 'none';

     updateCart();

    }, 2000);
    
  });
 updateCart();
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

  updateCart();
}

export { cart, cartCount, updateCart, setupCartUI };
