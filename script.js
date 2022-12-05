let container= document.getElementById("gridContainer");



for(var i = 0; i < 16; i++) {
    var row = document.createElement("div");
    let curHeight=500/16;
    for(var j = 0; j< 16; j++) {
        var cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColor);
        cell.style.width = curHeight + "px";
        cell.style.height = curHeight + "px";
        cell.style.background = "white";
        cell.style.border="1px solid black";
        cell.style.marginLeft="-1px";
        cell.style.marginBottom="-1px";
        row.appendChild(cell);
       
    }
    container.appendChild(row);
}


function changeColor(e){
e.target.style.background="black";
}

function changeGrid(){
    let gridSize = prompt("Please enter the size of the grid", "16");
    document.querySelectorAll("div").forEach((e) => e.container.removeChild(e));
}