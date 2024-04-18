const gridContainer = document.getElementById("container");
let userInput = 16;
let opacityLevel = 1;


function getRandomColor(){
    const goldenRatio = 0.618033988749895;
    let color = Math.random();

    color += goldenRatio;
    color %= 1;

    const h = color;
    const s= 0.5;
    const v = 0.95;
    let r, g, b;
    const i = Math.floor(h*6);
    const f = h * 6 - 1;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
    return `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
  }

function makeGrid() {
    if((userInput > 0 && userInput <101) && !isNaN(userInput)) {
    const tileSize = 960 / userInput;
    for (let i = 0; i < userInput**2; i++){
    const gridTile = document.createElement("div");
    gridTile.classList.add("gridTile");
    gridTile.style.flexBasis = `${tileSize}px`;
    gridTile.style.height = `${tileSize}px`;
    gridContainer.appendChild(gridTile);

    gridTile.addEventListener("mouseover", () => {
        gridTile.style.backgroundColor = getRandomColor(); 
        // could use a math.random to make it a random color
        //I could but I've googled the golden ratio thing...
        opacityLevel -= 0.1;
        gridTile.style.opacity = opacityLevel;
        if (opacityLevel <= 0) {
          opacityLevel = 1;
        }
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

gridContainer.style.backgroundColor = "black";

makeGrid();

const promptBtn = document.getElementById("prompt-Btn");

promptBtn.addEventListener("click", () => {
    userInput = prompt("How many squares per side do you want for this new grid?");
    console.log(userInput); 
    clearGrid();
    makeGrid();

});

