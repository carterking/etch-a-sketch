const mainContainer = document.getElementById("main-container");
const mainContainerWidth = mainContainer.offsetWidth;
let i;

//create grid
createGrid();

function createGrid() {
    let squaresPerSide = prompt("How many squares per side do you want in the grid?");
    let totalSquares = Math.pow(squaresPerSide, 2);
    let squaresWidth = mainContainerWidth / squaresPerSide
    document.getElementById("number-of-squares").textContent = totalSquares;
    for (i = 0; i < totalSquares; i++) {
        let x = document.createElement("div")
        mainContainer.appendChild(x);
    }

    //style grid
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.classList.add("original-color");
        div.style.width = `${squaresWidth}px`;
        div.style.height = `${squaresWidth}px`;
        //change background color on mouseover
        div.addEventListener("mouseover", function () {
            changeBackground(this);
        });
    });

}

function changeBackground(mousedOverDiv) {
    //generate random background color
        mousedOverDiv.style.background = `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

//reset grid when button is clicked
document.getElementById("reset-btn").addEventListener("click", resetGrid);

function resetGrid() {
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    createGrid();
}