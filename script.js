const gridContainer = document.getElementById("container");
let userInput = 16;
// I could replace the 16 by a user define number in a input box, so the user can define grid size

function makeGrid() {
    if((userInput > 0 && userInput <101) && !isNaN(userInput)) {
    const tileSize = 960 / userInput;
    for (let i = 0; i < userInput**2; i++){
    const gridTile = document.createElement("div");
    gridTile.classList.add("gridTile");
    gridTile.style.width = `${tileSize}px`;
    gridTile.style.height = `${tileSize}px`;
    gridContainer.appendChild(gridTile);

    gridTile.addEventListener("mouseover", () => {
        gridTile.style.backgroundColor = 'blue'; // could use a math.random to make it a random color
        });
    }
    } else {
        alert("Use a number!");
    }
}

function clearGrid() {
        const gridTile = document.createElement("div");

    gridContainer.innerHTML = "";
}

makeGrid();

const promptBtn = document.getElementById("prompt-Btn");

promptBtn.addEventListener("click", () => {
    userInput = prompt("How many squares per side do you want for this new grid?");
    console.log(userInput); 
    clearGrid();
    makeGrid();

});

