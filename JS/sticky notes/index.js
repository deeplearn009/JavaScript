const addNoteBtn = document.getElementById("note")
const colorBtns = document.querySelectorAll(".colors")
const btn = document.getElementById("first")
const noteList = document.getElementById("note-list")

let currentColor = 'yellow'

addNoteBtn.addEventListener("click", createNewNote)

// colorBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         currentColor = btn.style.backgroundColor;
//         console.log(colorBtns);
        
//     })
// })

function createNewNote(content = '', bgColor = currentColor) {
    const newList = document.createElement('li')
    const newNote = document.createElement('textarea')
    
    newNote.style.backgroundColor = bgColor;

    

    newList.appendChild(newNote)
    noteList.appendChild(newList)
}

btn.addEventListener("click", () => {
      console.log(typeof currentColor);
    currentColor = btn.style.backgroundColor;
  
    
})

