//* DEFAULT SETTING
const defaultMode = "color";
const defaultColor = "black";
const defaultSize = 16;

//* CURRENT SETTING
var curMode = defaultMode;
var curColor = defaultColor;
var curSize = defaultSize;

//* INSTANTIATE OBJECTS FROM DOCUMENT
var colorBtn = document.querySelector("#colorBtn");
var randomBtn = document.querySelector("#randomBtn");
var eraserBtn = document.querySelector("#eraserBtn");
var resetBtn = document.querySelector("#resetBtn");
var board = document.querySelector(".board");
var sizeSlider = document.querySelector(".slider");
var sizeDisplay = document.querySelector(".gridSize");
var colorPicker = document.querySelector("#colorPicker");
var isMouseDown = false;

//* MODE EVENT LISTENER
colorBtn.addEventListener("click", function(e) {
    curMode = "color";
});

randomBtn.addEventListener("click", function(e) {
    curMode = "random";
});

eraserBtn.addEventListener("click", function(e) {
    curMode = "eraser";
});

//* COLOR PICKER EVENT LISTENER
colorPicker.addEventListener("click", function(e) {
    curColor = colorPicker.value;
});

//* GRID SIZE CHANGER EVENT LISTENER
sizeSlider.addEventListener("input", function(e){
    curSize = sizeSlider.value;
    sizeDisplay.innerHTML = `${curSize} x ${curSize}`;
    setBoard(curSize);
})

document.body.addEventListener("mousedown", function(){
    isMouseDown = true;
});

document.body.addEventListener("mouseup", function(){
    isMouseDown = false;
});

resetBtn.addEventListener("click", function(e){
    setBoard(curSize)
})

//* SET BOARD 
function setBoard(n) {
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    board.innerHTML = "";

    for (var i=0;i<n*n;i++){
        const square = document.createElement("div");
        square.style.backgroundColor = 'white';
        square.style.border = "1px white";
        square.addEventListener('mouseover', function(e) {
            if (isMouseDown) setMode(e);
        });
        square.addEventListener('mousedown', setMode);
        board.insertAdjacentElement("beforeend", square);
    }
}

//* SET CURRENT MODE
function setMode(e){
    if (curMode === "color"){
        e.target.style.backgroundColor = curColor;
    }
    if (curMode === "random"){
        e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    if (curMode === "eraser"){
        e.target.style.backgroundColor = '#ffffff';
    }
    
}

//* GET RANDOM COLORS
function randomColor() {
    return Math.floor(Math.random() * 256);
}

//* DEFAULT SETTING WHEN LOADED
setBoard(defaultSize);