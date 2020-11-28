function drag_handler(ev) {
    console.log("Drag");
}

function dragstart_handler(ev) {
    console.log("dragStart");
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev) {
    console.log("dragOver");
    ev.preventDefault();
}

function drop_handler(ev) {
    console.log("Drop");
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    ev.dataTransfer.setData("text/plain", ev.target.("text/plain"))
    ev.target.setData("text/plain", data);
}

window.addEventListener('DOMContentLoaded', () => {
    const draggable = document.getElementsByClassName('draggable')
    for (const key in draggable) {
        if (draggable.hasOwnProperty(key)) {
            draggable[key].addEventListener("dragstart", dragstart_handler);
            draggable[key].addEventListener("drag", drag_handler);
        }
    }
    const dropZones = document.getElementsByClassName('dropzone')
    for (const key in dropZones) {
        if (draggable.hasOwnProperty(key)) {
            draggable[key].addEventListener("drop", drop_handler);
            draggable[key].addEventListener("dragover", dragover_handler);
        }
    }
});
