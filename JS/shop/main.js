document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((products) => {
      showProducts(products);
    });
}

function showProducts(products) {
  const container = document.getElementById("products-container");

  container.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";

    productDiv.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <h3>${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="buy-now-btn" onclick="addToBasket(${
                  product.id
                })">BUY NOW</button>
            </div>
        `;

    container.appendChild(productDiv);
  });
}

function addToBasket(productId) {
  let basket = localStorage.getItem("basket");
  if (basket) {
    basket = JSON.parse(basket);
  } else {
    basket = [];
  }

  let found = false;
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].id == productId) {
      basket[i].quantity += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((response) => response.json())
      .then((product) => {
        const newItem = {
          id: productId,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        basket.push(newItem);

        localStorage.setItem("basket", JSON.stringify(basket));
        alert("Mehsul sebete elave edildi");
      });
  } else {
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}
