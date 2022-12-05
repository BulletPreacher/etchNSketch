let container = document.getElementById("gridContainer");
let curColor = document.getElementById("bg-color-select");

let gridSize = 16;
let childDivs = document.querySelectorAll(".grid > div");
let firstTime = true;



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.background = curColor.value;
}

function changeGrid() {

    if(firstTime==false){
        gridSize = prompt("Please enter the size of the grid", "16");
        console.log(gridSize);
        while (gridSize > 100) {
            gridSize = prompt("Please enter a valid size ", "");
            
        }
    
        let childDivs = document.querySelectorAll(".grid > div");
        for (var i = 0; i < childDivs.length; i++) {
            childDivs[i].remove();
        }
    }
   
    firstTime = false;
    console.log(gridSize);
    for (var i = 0; i < gridSize; i++) {
        var row = document.createElement("div");
        let curHeight = (500 / gridSize) - 1;
        console.log(curHeight);
        for (var j = 0; j < gridSize; j++) {
            var cell = document.createElement("div");
            cell.addEventListener("mouseover", changeColor);
            cell.addEventListener("mousedown", changeColor);
            cell.style.width = curHeight + "px";
            cell.style.height = curHeight + "px";
            cell.style.background = "white";
            cell.style.border = "1px solid black";
            cell.style.marginLeft = "-1px";
            cell.style.marginBottom = "-1px";
            cell.classList.add("block");
            cell.classList.add("noselect");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function resetGrid() {
    console.log("x");
    let children = document.getElementsByClassName("block");
    for (let i = 0; i < children.length; i++) {
        children[i].style.background = "white";
    } 
}

changeGrid();

