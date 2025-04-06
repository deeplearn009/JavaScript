document.addEventListener("DOMContentLoaded", () => {
  showBasketItems();
});

function showBasketItems() {
  const container = document.getElementById("basket-container");
  const totalElement = document.getElementById("basket-total-price");

  let basket = localStorage.getItem("basket");
  if (basket) {
    basket = JSON.parse(basket);
  } else {
    basket = [];
  }

  container.innerHTML = "";

  let totalPrice = 0;

  basket.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "basket-item";

    itemDiv.innerHTML = `
            <div class="basket-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="basket-item-details">
                <h3>${item.title}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${itemTotal}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;

    container.appendChild(itemDiv);
  });

  totalElement.textContent = totalPrice;
}

function removeItem(productId) {
  let basket = localStorage.getItem("basket");
  if (basket) {
    basket = JSON.parse(basket);
  } else {
    return;
  }

  const newBasket = basket.filter((item) => item.id != productId);

  localStorage.setItem("basket", JSON.stringify(newBasket));

  showBasketItems();

  alert("Mehsul sebetden silindi");
}
