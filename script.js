const grid = document.querySelector(".sketch");
const etchButton = document.querySelector(".etch");
const resetButton = document.querySelector(".reset");
let userInput;

function create() {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div); 
  }

etchSketch = () => {
    for (let i = 0; i < 256; i++) {
        create();
    }
    };

      etchButton.addEventListener("click", function() {
        userInput = +prompt("Squares per side?","16");
        grid.innerHTML = "";
        grid.style.setProperty("grid-template-columns", `repeat(${+userInput}, 2fr)`);
        grid.style.setProperty("grid-template-rows",`repeat(${+userInput}, 2fr)`);
        for (let i = 0; i < (+userInput * +userInput); i++) {
            create();
        }
    });

    const square = document.querySelector("div");
            square.addEventListener("mouseover", function(event) {
            event.target.classList.replace("square", "color");
            });

    resetButton.addEventListener("click", function() {
            grid.innerHTML = "";
            userInput = "";
            grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
            grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
            etchSketch();
            });

etchSketch();