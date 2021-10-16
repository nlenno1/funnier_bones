/* from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API */

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    let head = document.getElementById("game-2-part-head");
    let front_paws = document.getElementById("game-2-part-front-paws");
    let torso = document.getElementById("game-2-part-torso");
    let back_paws = document.getElementById("game-2-part-back-paws");
    let tail = document.getElementById("game-2-part-tail");
    // Add the ondragstart event listener
    head.addEventListener("dragstart", dragstart_handler);
    front_paws.addEventListener("dragstart", dragstart_handler);
    torso.addEventListener("dragstart", dragstart_handler);
    back_paws.addEventListener("dragstart", dragstart_handler);
    tail.addEventListener("dragstart", dragstart_handler);
});

function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
    let part = ev.dataTransfer.getData("text/plain").replace("game-2-part-", "");
    let bg = ev.target.id.replace("game-2-bg-", "");
    if (part === bg) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/plain");
        ev.target.appendChild(document.getElementById(data));
    }
}