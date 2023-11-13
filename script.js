const movable = document.getElementById("movable");


let posX = 0;
let posY = 0;
const moveAmount = 10;

let currentSize = 50;
const sizeIncrement = 10;

function updateElement() {
    movable.style.transform = `translate(${posX}px, ${posY}px)`
movable.style.width =`${currentSize}px`;
movable.style.height =`${currentSize}px`;
}

document.addEventListener("keydown", function(e) {
    if  (e.key === "ArrowUp") {
    posY -= moveAmount; 
    } else if (e.key === "ArrowDown") {
        posY += moveAmount;
    } else if (e.key === "ArrowLeft") {
        posX -= moveAmount;
    } else if (e.key === "ArrowRight") {
        posX += moveAmount;
    } 
    // else if (e.key === "Enter") {
    //     currentSize += sizeIncrement;
    // } else if (e.key === "Backspace") {
    //     currentSize -= sizeIncrement;
    // } 
    updateElement();
    console.log(e.key);
    })