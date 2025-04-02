// const addNoteBtn = document.getElementById("note")
// const colorBtns = document.querySelectorAll(".colors")
// const btn = document.getElementById("first")
// const noteList = document.getElementById("note-list")

// let currentColor = 'yellow'

// addNoteBtn.addEventListener("click", createNewNote)

// colorBtns.forEach(btn => {
//      btn.addEventListener("click", () => {
//          currentColor = btn.style.backgroundColor;
//         console.log(colorBtns);
        
//      })
// })

// function createNewNote(content = '', bgColor = currentColor) {
//     const newList = document.createElement('li')
//     const newNote = document.createElement('textarea')
    
//     newNote.style.backgroundColor = bgColor;

    

//     newList.appendChild(newNote)
//     noteList.appendChild(newList)
// }


const addNoteBtn = document.getElementById("note");
const colorButtons = document.querySelectorAll(".colors button");
const noteList = document.getElementById("note-list");

let currentColor = 'yellow';

addNoteBtn.addEventListener("click", createNewNote);

colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentColor = window.getComputedStyle(btn).backgroundColor;
        // console.log(currentColor);
    });
});

function createNewNote(content = '', bgColor = currentColor) {
    const newList = document.createElement('li');
    const newNote = document.createElement('textarea');
    
    newNote.style.backgroundColor = bgColor;
    
    newList.appendChild(newNote);
    noteList.appendChild(newList);
}