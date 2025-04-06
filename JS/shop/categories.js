document.addEventListener("DOMContentLoaded", () => {
  getCategories();

  document.getElementById("add-category-btn").addEventListener("click", () => {
    addCategory();
  });
});

function getCategories() {
  fetch("https://northwind.vercel.app/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      showCategories(categories);
    });
}

function showCategories(categories) {
  const container = document.getElementById("categories-container");

  container.innerHTML = "";

  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-card";

    categoryDiv.innerHTML = `
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            <button onclick="deleteCategory(${category.id})">Delete</button>
        `;

    container.appendChild(categoryDiv);
  });
}

function addCategory() {
  const titleInput = document.getElementById("category-title");
  const descriptionInput = document.getElementById("category-description");

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  const newCategory = {
    name: title,
    description: description,
  };

  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  }).then((response) => {
    if (response.ok) {
      titleInput.value = "";
      descriptionInput.value = "";

      getCategories();

      alert("Yeni kateqoriya elave edildi");
    } else {
      alert("Yeni kateqoriya elave etmek mumkun deyil");
    }
  });
}

function deleteCategory(categoryId) {
  if (confirm("Silmek isteyirsiz?")) {
    fetch("https://northwind.vercel.app/api/categories/" + categoryId, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        getCategories();

        alert("Ugurla silindi");
      } else {
        alert("Silmek mumkun deyil");
      }
    });
  }
}
