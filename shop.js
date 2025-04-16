let cart = [];

function addToCart(itemName, price) {
  cart.push({ itemName, price });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("cart-btn").addEventListener("click", function () {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.itemName} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-popup").style.display = "block";
});

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}
function searchProducts() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".product");
  
    products.forEach(product => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      if (title.includes(input)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }
  function buyNow(itemName, price) {
    alert(`Thanks for buying ${itemName} for ₹${price}! Your order has been placed.`);
  }
  
  
