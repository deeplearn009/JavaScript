const inp = document.getElementById("inp")
const btn = document.getElementById("btn")
const ul = document.getElementById("ul")



btn.addEventListener("click", function() {
    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")
    if (inp.value === '') {
        alert("Bos buraxma!");
      } else {
        ul.appendChild(li);
      }
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.classList.add('delete')
    deleteBtn.addEventListener("click", function() {
        ul.removeChild(li)
    })
    li.textContent = inp.value
    li.append(deleteBtn)
    inp.value = ""
})


