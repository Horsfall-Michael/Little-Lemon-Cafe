// IIFE to avoid polluting global scope
(function () {
  // ========== Products ==========
  const products = [
    {
      image: 'images/espresso.webp',
      name: 'Espresso',
      priceCents: 250,
      description: 'A strong and rich shot of coffee.',
      category: 'Coffee'
    },
    {
      image: 'images/Latte.webp',
      name: 'Latte',
      priceCents: 400,
      description: 'Espresso with steamed milk and a light foam.',
      category: 'Coffee'
    },{
    image:'images/caramel_macchiato.webp',
    name:"Caramel Macchiato",
    priceCents: 450,
    description:'Espresso with steamed milk and caramel drizzle.',
    category:'Coffee'
  },{
    image:'images/cappuccino.webp',
    name: 'Cappuccino',
    priceCents: 350,
    description: 'Espresso topped with steamed milk and foam.',
    category: 'Coffee',
  },{
    image:'images/cold brew.webp',
    name: 'Cold Brew',
    priceCents: 420,
    description: 'Slow-brewed coffee served cold over ice.',
    category: 'Coffee',
  },{
    image:'images/americano_2.webp',
    name: 'Americano',
    priceCents: 300,
    description: 'Espresso diluted with hot water.',
    category: 'Coffee',
  },{
    image:'images/chai latte.webp',
    name:'Chai Latte',
    priceCents: 475,
    description:'Spiced tea blend with milk.',
    category:'Tea'
  },{
    image:'images/english breakfast tea.webp',
    name: 'English Tea',
    priceCents: 250,
    description: 'Classic black tea, strong and full-bodied.',
    category: 'Tea',
  },{
    image:'images/herbal_infusion.webp',
    name: 'Tisanes',
    priceCents: 270,
    description: 'Caffeine-free blend of herbs and flowers.',
    category: 'Tea',
  },{
    image:'images/matcha_latte.webp',
    name:'Matcha Latte',
    priceCents: 450,
    description:'Whisked Japanese green tea with milk.',
    category:'Tea'
  },{
    image:'images/hot_chocolate.webp',
    name:'Hot Chocolate',
    priceCents: 475,
    description:'Reach and creamy chocolate drink',
    category:'Tea'
  },{
    image:'images/iced_green_tea_4.webp',
    name: 'Iced Green Tea',
    priceCents: 300,
    description: 'Light and refreshing cold brewed green tea.',
    category: 'Tea',
  },{
    image:'images/avocado toast.webp',
    name:'Avocado Toast',
    priceCents: 850,
    description:'Toasts topped with avocado and a poached egg.',
    category:'Food'
  },{
    image:'images/granola bowl.webp',
    name:'Granola Bowl',
    priceCents: 700,
    description:'Yogurt with granola, honey, and fresh fruits.',
    category:'Food'
  },{
    image:'images/Vegan Buddha Bowl.webp',
    name: 'Vegan Buddha Bowl',
    priceCents: 800,
    description: 'Quinoa, veggies, chickpeas, and tahini dressing.',
    category: 'Food',
  },{
    image:'images/classic breakfast.webp',
    name:'Classic Breakfast',
    priceCents: 1000,
    description:'Eggs, toasts, bacon, and sausage.',
    category:'Food'
  },{
    image:'images/tomato_basil_soup.webp',
    name: 'Tomato Basil Soup',
    priceCents: 480,
    description: 'Creamy tomato soup with fresh basil.',
    category: 'Food',
  },
  {
    image:'images/Southern_Baked_Macaroni__Cheese_Recipe.webp',
    name: 'Mac & Cheese',
    priceCents: 550,
    description: 'Creamy cheddar macaroni baked with a crunchy topping.',
    category: 'Food',
  },{
    image:'images/Ceasar Salad.webp',
    name: 'Caesar Salad',
    priceCents: 600,
    description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing, with bits of grilled chicken.',
    category: 'Food',
  },{
    image:'images/Grilled_chicken_sandwich_1.webp',
    name: 'Grilled Chicken Sandwich',
    priceCents: 750,
    description: 'Chicken breast, lettuce, and tomato on ciabatta.',
    category: 'Food',
  },{
    image:'images/Scrambled_Egg_Grilled_Cheese_Sandwich.webp',
    name: 'Egg & Cheese Sandwich',
    priceCents: 450,
    description: 'Scrambled eggs and cheese on a toasted bun.',
    category: 'Food',
  },
  {
    image:'images/Pancakes.webp',
    name: 'Pancakes',
    priceCents: 520,
    description: 'Stack of fluffy pancakes with maple syrup.',
    category: 'Food',
  },{
    image:'images/Omlette.webp',
    name: 'Omelette',
    priceCents: 480,
    description: 'Three-egg omelette with veggies and cheese.',
    category: 'Food',
  },{
    image:'images/Breakfast burritos.webp',
    name: 'Breakfast Burrito',
    priceCents: 600,
    description: 'Eggs, cheese, beans, and salsa wrapped in a tortilla.',
    category: 'Food',
  },{
    image: 'images/Fruit_cups_4.webp',
    name: 'Fruit Cup',
    priceCents: 320,
    description: 'Seasonal fresh fruit served chilled.',
    category: 'Desert',
  },{
    image:'images/brownie.webp',
    name:'Brownie',
    priceCents: 450,
    description:'A decadent and chocolate treat.',
    category:'Desert'
  },{
    image:'images/cookie.webp',
    name:'Cookie',
    priceCents: 450,
    description:'Chocolate and otmeal treat.',
    category:'Desert'
  },{
    image: 'images/Lemon_Tartlets.webp',
    name: 'Lemon Tart',
    priceCents: 400,
    description: 'Tangy lemon curd in a buttery pastry shell.',
    category: 'Desert',
  },{
    image: 'images/Cinnamon Rolls.webp',
    name: 'Cinnamon Roll',
    priceCents: 350,
    description: 'Warm, soft roll with cinnamon sugar and icing.',
    category: 'Desert',
  },{
    image:'images/cheese cake.webp',
    name:'Cheesecake',
    priceCents: 550,
    description:'A slice of some creamy and smooth cheese cake.',
    category:'Desert'
  }
  ];


  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  const taxRate = 0.10;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const saveCart = debounce(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, 300);

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
    saveCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p class='modal-display-message'>You haven't placed an order yet</p>";
      checkoutBtn.style.display = 'none';
      cartCount.style.display = 'none';
      cartSummarySection.style.display = 'none';
    } else {
      checkoutBtn.style.display = 'block';
      cartCount.style.display = "inline-block";
      cartSummarySection.style.display = 'block';
      const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

      cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
          <div class="cart-item-details">
            <p class="item-name">${item.name} - ${formatter.format(item.price * item.quantity)}</p>
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
      document.querySelector('.modal').style.display = "flex";
      document.body.classList.add("modal-open");
    });

    window.addEventListener("click", (event) => {
      if (event.target === cartModal) {
        cartModal.style.display = "none";
        document.querySelector('.modal').style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });

    closeModalBtn.addEventListener("click", () => {
      cartModal.style.display = "none";
      document.querySelector('.modal').style.display = "none";
      document.body.classList.remove("modal-open");
    });

    checkoutBtn.addEventListener("click", () => {
      cartItemsContainer.innerHTML = "<p class='modal-display-message'> Thank you for your order! </p>";
      cartCount.style.display = 'none';
      checkoutBtn.style.display = 'none';
      cartSummarySection.style.display = 'none';

      setTimeout(() => {
        cartModal.style.display = 'none';
        document.querySelector('.modal').style.display = "none";
        document.body.classList.remove("modal-open");
        cart.length = 0;
        localStorage.removeItem('cart');
        updateCart();
      }, 2000);
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

      saveCart();
    });

    updateCart();
  }

  setupCartUI();

  const categoryMap = {
    Coffee: '',
    Tea: '',
    Food: '',
    Desert: ''
  };

  products.forEach(product => {
    const price = (product.priceCents / 100).toFixed(2);
    const productHTML = `
      <div class="menu-card">
        <img src="${product.image}" class="product-image" loading="lazy" alt="Product image">
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

  Object.entries(categoryMap).forEach(([category, html]) => {
    const section = document.querySelector(`.js-${category.toLowerCase()}-section`);
    if (section) section.innerHTML = html;
  });

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

  document.addEventListener('click', (e) => {
    if (e.target.matches('.js-order-button')) {
      const button = e.target;
      const productName = button.dataset.productName;
      const price = parseFloat(button.dataset.price).toFixed(2);

      const existingItem = cart.find(item => item.name === productName);
      existingItem ? existingItem.quantity++ : cart.push({ name: productName, price, quantity: 1 });

      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
      updateCart();
      saveCart();
    }
  });

  enableExpandableDescriptions();

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

  searchInput.addEventListener('input', debounce(() => {
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
  }, 300));

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.style.display = 'none';
    resetMenuVisibility();
    noResultMsg.style.display = 'none';
  });

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.querySelector(".nav-list");
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      const footer = document.querySelector('footer');
      const icon = document.querySelector('#cart-icon');
      const iconHeight = icon.offsetHeight;
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const iconBottomInViewport = windowHeight - 20;
      const footerTopInViewport = footerRect.top;

      if (footerTopInViewport < iconBottomInViewport) {
        const scrollTop = window.scrollY;
        const footerTop = footer.offsetTop;
        const newTop = footerTop - iconHeight - 20;

        icon.classList.add('static');
        icon.style.top = `${newTop}px`;
        icon.style.right = '20px';
        icon.style.bottom = 'auto';
      } else {
        icon.classList.remove('static');
        icon.style.top = 'auto';
        icon.style.bottom = '20px';
        icon.style.right = '20px';
      }
    });
  });

})();
