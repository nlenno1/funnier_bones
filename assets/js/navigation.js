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
    } else if (current_page === 6) {
        console.log(current_page)
        /* https://stackoverflow.com/questions/1227286/get-class-list-for-element-with-jquery */
        let classList = document.getElementById('game-2-congratulations').className.split(/\s+/);
        console.log(classList)
        for (let i = 0; i < classList.length; i++) {
            if (classList[i] === 'hidden') {
                console.log("im here")
                next_button.addClass("disabled");
                next_button.removeClass("next");
            }
        }
    }
    else {
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