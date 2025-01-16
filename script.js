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

function setBoard(n) {
    board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (var i=0;i<n*n;i++){
        const square = document.createElement("div");
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}



setBoard(defaultSize);

