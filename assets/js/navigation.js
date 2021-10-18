var next_button = $("#next");
var prev_button = $("#prev");
var sections = [
    $('#title_sequence'),
    $('#story_link_1'),
    $('#game-1'),
    $('#story_link_2'),
    $('#story_link_2_append'),
    $('#game_2'),
    $('#story_link_3'),
    $('#game_3'),
    $('#story_link_4'),
    $('#game_4'),
    $('#ending_sequence')
];

$(next_button).click(function () {
    let current_page = parseInt(document.getElementById('current-page').innerText);
    for (let i = 0; i < 10; i++) {
        if (i + 1 === current_page + 1) {
            sections[i].removeClass("hidden");
        } else {
            sections[i].addClass("hidden");
        }
    }
    current_page++;
    if (current_page === 10) {
        next_button.addClass("disabled");
        next_button.removeClass("next");
    } else {
        prev_button.removeClass("disabled");
        prev_button.addClass("previous");
    }
    document.getElementById('current-page').innerText = current_page;
});

$(prev_button).click(function () {
    let current_page = parseInt(document.getElementById('current-page').innerText);
    for (let i = 0; i < 10; i++) {
        if (i + 1 === current_page - 1) {
            sections[i].removeClass("hidden");
        } else {
            sections[i].addClass("hidden");
        }
    }
    current_page--;
    if (current_page === 1) {
        prev_button.addClass("disabled");
        prev_button.removeClass("previous");
    } else {
        next_button.removeClass("disabled");
        next_button.addClass("next");
    }
    document.getElementById('current-page').innerText = current_page;
});