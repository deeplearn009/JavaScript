const inp = document.getElementById("input");
const btn = document.querySelector(".btn");
const todolist = document.querySelector(".todolist");

btn.addEventListener("click", function () {
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  if (inp.value != "") {
    todo.push(inp.value);
    localStorage.setItem("todo", JSON.stringify(todo));
    inp.value = "";
  }
  getItems();
});

function getItems() {
  todolist.innerHTML = "";
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  todo.forEach((item, index) => {
    let div = document.createElement("div");
    div.innerHTML = `<p>${item}</p> <button  onclick="deleteItem(${index})">DEL</button>`;
    todolist.appendChild(div);
  });
}

function deleteItem(productIndex) {
  let todo = JSON.parse(localStorage.getItem("todo")) || [];
  todo.splice(productIndex, 1);
  localStorage.setItem("todo", JSON.stringify(todo));
  getItems();
}

window.onload = () => {
  getItems();
};
