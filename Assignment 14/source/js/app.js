const inputElem = document.querySelector("#input-field");
const btnSaveElem = document.querySelector("#btn-save");
const btnDeleteElem = document.querySelector("#btn-delete");
const colorsBox = document.querySelectorAll(".color-box");
const notesContainer = document.querySelector("#listed");

colorsBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});

function generateNewNote() {
  let newNoteDivElem = document.createElement("div");
  newNoteDivElem.className = "card shadow-sm rounded";

  let inputBg = inputElem.style.backgroundColor;
  newNoteDivElem.style.backgroundColor = inputBg;

  newNoteDivElem.addEventListener("click", removeNote);

  let newNotePElem = document.createElement("p");
  newNotePElem.className = "card-text p-3";
  newNotePElem.innerHTML = inputElem.value;

  newNoteDivElem.append(newNotePElem);
  notesContainer.append(newNoteDivElem);
  inputElem.value = "";
  inputElem.style.backgroundColor = "#FFF";
}

function removeNote(event) {
  event.target.parentElement.remove();
}

btnDeleteElem.addEventListener("click", function () {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#FFF";
});

inputElem.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputElem.value) generateNewNote();
  }
});

btnSaveElem.addEventListener("click", generateNewNote);
