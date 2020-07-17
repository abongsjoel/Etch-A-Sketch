const container = document.querySelector('#container');

function createGrid(side){
    for(let i=0; i<6000; i++){
        const square = document.createElement('div');
        square.style.cssText = `width: ${side}px; height: ${side}px; box-sizing: border-box; border: 1px solid #ccc;`;
        
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}


function changeColor() {
    this.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
}

const button = document.querySelector('button');

button.addEventListener('click', clearGrid);

function clearGrid() {
    container.innerHTML = '';
    const gridSize = prompt('How many squares per side to make the new grid?', 0);
    createGrid(gridSize);
    console.log("you want to clear the grid");
}

createGrid(16)