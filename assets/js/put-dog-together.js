/* from https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API */
var score = 0;

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    let head = document.getElementById("game-2-part-head");
    let front_paw_1 = document.getElementById("game-2-part-front-paw-1");
    let front_paw_2 = document.getElementById("game-2-part-front-paw-2");
    let torso_1 = document.getElementById("game-2-part-torso-1");
    let torso_2 = document.getElementById("game-2-part-torso-2");
    let torso_3 = document.getElementById("game-2-part-torso-3");
    let back_paw_1 = document.getElementById("game-2-part-back-paw-1");
    let back_paws_2 = document.getElementById("game-2-part-back-paw-2");
    let tail_1 = document.getElementById("game-2-part-tail-1");
    let tail_2 = document.getElementById("game-2-part-tail-2");
    // Add the ondragstart event listener
    head.addEventListener("dragstart", dragstart_handler);
    front_paw_1.addEventListener("dragstart", dragstart_handler);
    front_paw_2.addEventListener("dragstart", dragstart_handler);
    torso_1.addEventListener("dragstart", dragstart_handler);
    torso_2.addEventListener("dragstart", dragstart_handler);
    torso_3.addEventListener("dragstart", dragstart_handler);
    back_paw_1.addEventListener("dragstart", dragstart_handler);
    back_paws_2.addEventListener("dragstart", dragstart_handler);
    tail_1.addEventListener("dragstart", dragstart_handler);
    tail_2.addEventListener("dragstart", dragstart_handler);
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
        score++;
        if (score === 10) {
            let next_button = $("#next");
            let congratulations = $("#game-2-congratulations");
            next_button.removeClass("disabled");
            next_button.addClass("next");
            congratulations.removeClass("hidden");
        }
    }
}