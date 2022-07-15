const container = document.querySelector('.container');

function initialize(size){
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.textContent = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
}

initialize(16);

function color(e){
    this.classList.add('.color');
}

const cells = document.querySelectorAll('.grid-item');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('color');
    });
});



