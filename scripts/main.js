console.log("we are ready!");
const mainContainer = document.getElementById("main-container");
const mainContainerWidth = mainContainer.offsetWidth;
let squaresPerSide = 16;
let totalSquares = Math.pow(squaresPerSide, 2);
let squaresWidth = mainContainerWidth / squaresPerSide
console.log(squaresWidth);
let i;
let somethings;


for (i = 1; i <= totalSquares; i++) {
    let x = document.createElement("div")
    mainContainer.appendChild(x);
}

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
    div.classList.add("border");
})

divs.forEach((div) => {
    div.style.width = `${squaresWidth}px`;
    div.style.height = `${squaresWidth}px`;
    //div.style.background = green;
    div.addEventListener("mouseover", function () {
        changeBackground(this);
    });
});


function changeBackground(elementColor) {
    console.log(elementColor);
    elementColor.classList.add("moused-over");
}
