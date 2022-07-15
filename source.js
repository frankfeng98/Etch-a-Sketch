const container = document.querySelector('.container');

function initialize(size){
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
}

function color(cells){
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('color');
        });
    });
}

initialize(16);

let cells = document.querySelectorAll('.grid-item');
color(cells);

function restart(){
    let size = prompt("What sizes do you want the grid to be?");
    size = Number(size);
    if (size > 100){
        alert("Sorry, the size is too big. Please select a number smaller than 100.")
        let size = prompt("What sizes do you want the grid to be?");
    }
    remove(cells);
    initialize(size);
    cells = document.querySelectorAll('.grid-item');
    color(cells);
}

function remove(cells){
    let num = 0;
    cells.forEach(cell => {
        num++;
        console.log(cell);
        container.removeChild(cell);
    })
    console.log(`removed ${num} cells`);
}

const popup = document.querySelector('#popup');
popup.addEventListener('click', restart);


