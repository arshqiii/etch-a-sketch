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

colorBtn.addEventListener("click", function(e) {
    curMode = "color";
});

randomBtn.addEventListener("click", function(e) {
    curMode = "random";
});

eraserBtn.addEventListener("click", function(e) {
    curMode = "eraser";
});

colorPicker.addEventListener("click", function(e) {
    curColor = colorPicker.value;
});

sizeSlider.addEventListener("input", function(e){
    curSize = sizeSlider.value;
    sizeDisplay.innerHTML = `${curSize} x ${curSize}`;
    setBoard(curSize);
})


function setBoard(n) {
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    board.innerHTML = "";

    for (var i=0;i<n*n;i++){
        const square = document.createElement("div");
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

function setMode(){

}









setBoard(defaultSize);

