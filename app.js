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

  // User instruction
function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99."; 
  }

// Create Sq Grid
function makeGrid() {
    let number = userValue.value;
    if (number < 0 || number > 99 || isNaN(number)) {
      promptText.textContent = "Make sure it's a number between 2 and 99!";
    } else {
      promptText.textContent = "";
      copyInput.textContent = "";
      userValue.value = "";
      sqGrid.innerHTML = "";

      if (number == 0 || number > 99 || number == "") {
        number = 16; // Default to 16 if invalid input
      }
  
      for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        sqGrid.appendChild(row);
        for (let k = 0; k < number; k++) {
          let column = document.createElement('div');
          column.classList.add('column')
          row.appendChild(column);
        }
      }
    }
        // Drawing of the Sq Grid
        draw();
    }

