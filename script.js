const grid = document.querySelector(".sketch");
const input = document.querySelector(".etch");
const div = document.createElement("div");

createSketch = () => {
    for (let i = 0; i < 256; i++) {
        div.classList.add("square");
        grid.appendChild(div);
        }
};

createSketch();