// Get DOM elements
let sqGrid = document.querySelector(".container");
let userValue = document.getElementById("user-num");
let userSubmit = document.getElementById("user-sub");
let promptText = document.getElementById("prompt");
let copyInput = document.getElementById("copy-input");
let clearButton = document.getElementById("clear-btn");

// Event listeners
userValue.addEventListener('focus', entryHint);
userValue.addEventListener('keyup', duplicateGrid);
userSubmit.addEventListener('click', makeGrid);
clearButton.addEventListener('click', clearGrid);

// Run functions on page load
makeGrid();
draw();

// Show sq grid of S by S
function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
  }

  