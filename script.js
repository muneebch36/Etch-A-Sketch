const grid = document.querySelector(".sketch");
const etchButton = document.querySelector(".etch");
const resetchButton = document.querySelector(".reset");
const rainbowButton = document.querySelector(".rainbow");

function create(rows, cols) {
  grid.innerHTML = "";
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let div = document.createElement("div");
    grid.appendChild(div).className = "square";
  };
  grid.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "hsl(238, 100%, 50%)";
  });
};

create(16,16);

etchButton.addEventListener("click", function() {
    userInput = +prompt("Squares per side?","16");
      if (!userInput) {;
          return;
      } else if (userInput < 100) {
          create(userInput, userInput);          
      } else {
          alert("please enter a value below 100");
      }
});

/* grid.addEventListener("mouseover", function(event) {
  event.target.css("filter: brightness(90%)");
  }); 
  
  come back and add 10% darkening on each pass through. need to track individual color
  of each square for that to be possible. 
  */

resetchButton.addEventListener("click", function() {
    create(16,16);
});

rainbowButton.addEventListener("click", function() {
    let square = grid.querySelectorAll("div");
    square.forEach(square => square.style.backgroundColor = '#333333');
    grid.addEventListener("mouseover", function(event) {
    let random = '#'+Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = random;
  });
});






