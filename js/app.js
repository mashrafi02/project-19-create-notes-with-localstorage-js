const createBtn = document.querySelector('.noteBtn')
const notesContainer = document.querySelector('.notes-container')
let notes;

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}

createBtn.onclick = () => {
    notesContainer.innerHTML += `<div class="note">
                                        <p contenteditable="true" class="notes"></p>
                                        <img src="./images/trash.png" class="trash" alt="delete-button">
                                 </div>`;
}

notesContainer.addEventListener('click', e => {
    if(e.target.className == 'trash'){
        e.target.parentNode.remove()
        updateStorage()
    }
    else if(e.target.className == 'notes'){
        const actualNote = document.querySelectorAll('.notes')
        actualNote.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage()
            }
        })
    }
})