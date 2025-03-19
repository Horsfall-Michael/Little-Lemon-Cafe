document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const orderButtons = document.querySelectorAll("button.order");
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");
  const cartTax = document.getElementById("tax");
  const cartSubTotal = document.getElementById("subtotal");
  const closeModalBtn = document.getElementById("close-modal");
  const checkoutBtn = document.getElementById("checkout");
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");

  const TAX_RATE = 0.10; // 10% tax

  function updateCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>No items in the cart.</p>";
      cartCount.style.display = "none"; // Hide count when empty
      return;
    }

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <div class="cart-item-details">
          <p class="item-name">${item.name} - $${item.price.toFixed(2)}</p>
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
    const tax = totalPrice * TAX_RATE;
    const subTotal = totalPrice + tax;

    cartTotalContainer.innerHTML = `$${totalPrice.toFixed(2)}`;
    cartTax.innerHTML = `$${tax.toFixed(2)}`;
    cartSubTotal.innerHTML = `$${subTotal.toFixed(2)}`;

    cartCount.textContent = cart.length;
    cartCount.style.display = "block"; // Show count when items exist
  }

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuCard = button.closest(".menu-card");
      const itemName = menuCard.querySelector("h3").textContent;
      const priceText = menuCard.querySelector(".price").textContent;
      const price = parseFloat(priceText.replace("$", ""));

      const existingItem = cart.find((item) => item.name === itemName);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
      }
      updateCart();
    });
  });

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

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      alert("Thank you for your order!");
      cart.length = 0;
      updateCart();
      cartModal.style.display = "none"; 
    }
  });

  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
});
