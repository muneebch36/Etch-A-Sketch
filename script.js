const grid = document.querySelector(".sketch");
const etchButton = document.querySelector(".etch");
const resetButton = document.querySelector(".reset");
const square = document.querySelector("div");

function create(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let div = document.createElement("div");
    grid.appendChild(div).className = "square";
  };
};

etchButton.addEventListener("click", function() {
    userInput = prompt("Squares per side?","16");
      if (!+userInput) {;
          return;
      } else if (+userInput < 100) {
          grid.innerHTML = "";
          create(+userInput, +userInput);          
      } else {
          alert("please enter a value below 100");
      }
});

square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

resetButton.addEventListener("click", function() {
    userInput = "";
    grid.innerHTML = "";
    create(16,16);
});

create(16,16);

/* etchSketch = () => {
    for (let i = 0; i < 256; i++) {
        create();
    }
    }; */

