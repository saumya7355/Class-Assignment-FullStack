const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

// Load saved notes
const notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  const texts = document.querySelectorAll("textarea");
  const data = [];

  texts.forEach(text => data.push(text.value));

  localStorage.setItem("notes", JSON.stringify(data));
}

function createNote(text = "") {

  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <button class="deleteBtn">X</button>
    <textarea placeholder="Write note...">${text}</textarea>
  `;

  const deleteBtn = note.querySelector(".deleteBtn");
  const textarea = note.querySelector("textarea");

  deleteBtn.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  textarea.addEventListener("input", saveNotes);

  notesContainer.appendChild(note);
}

// Add new note
addBtn.addEventListener("click", () => createNote());

// Load notes on refresh
notes.forEach(note => createNote(note));