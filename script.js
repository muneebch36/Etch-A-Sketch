const grid = document.querySelector(".sketch");
const input = document.querySelector(".etch");
const resetButton = document.querySelector(".reset");

createSketch = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener('mouseover', function(event){
            event.target.classList.replace("square", "color");
        })
        grid.appendChild(div); 
    }
    };

    resetButton.addEventListener("click", function() {
        grid.innerHTML = "";
        // userInput.value = "";
        grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
        grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
        createSketch();
      });
      

    createSketch();