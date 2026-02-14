

// Cart state
let cart = [];

// Elements
const buttons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");
const miniCart = document.getElementById("mini-cart");
const miniItems = document.getElementById("mini-items");
const miniTotal = document.getElementById("mini-total");

// Add click event to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        addToCart(name, price);
    });
});

// Add to cart function
function addToCart(name, price) {

    // Check if item already exists
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCartUI();
}

// Update UI
function updateCartUI() {

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    // Update cart icon count
    cartCount.textContent = totalItems;

    // Update mini cart
    miniItems.textContent = totalItems;
    miniTotal.textContent = totalPrice.toFixed(2);

    // Show mini cart
    miniCart.classList.remove("hidden");
}
