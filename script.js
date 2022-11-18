const grid = document.querySelector(".sketch");
const etchButton = document.querySelector(".etch");
const resetchButton = document.querySelector(".reset");
const rainbowButton = document.querySelector(".rainbow");
let rainbow = null;
let currentColor = "";
let userInput = null;

function create(rows, cols) {
  grid.innerHTML = "";
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    newDivs = document.createElement("div");
    grid.appendChild(newDivs).className = "square";
    currentColor = "hsl(238, 100%, 50%)";
  };
};

document.body.addEventListener( 'mouseover', function ( event ) {
  if((event.target.className == 'square') && (rainbow)) {
    event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  } else if (( event.target.className == 'square' ) && (!rainbow)) {
    event.target.style.backgroundColor = currentColor;
  };

  if(event.target.className == 'square')
    if (parseFloat(event.target.style.opacity)) {
      event.target.style.opacity = parseFloat(event.target.style.opacity) - 0.1;
    } else {
      event.target.style.opacity = 1;
    }
});

create(16,16);

etchButton.addEventListener("click", function() {
    userInput = +prompt("Squares per side?","16");
      if (!userInput) {
          return;
      } else if (userInput < 101) {
          create(userInput, userInput);          
      } else {
          alert("please enter a value below 100");
      }
});

resetchButton.addEventListener("click", function() {
    create(16,16);
    rainbow = null;
    userInput = null;
});

rainbowButton.addEventListener("click", function() {
    if (userInput) {
      create(userInput,userInput);
    } else {
      create(16,16);
    }
    rainbow = "yes";
});






