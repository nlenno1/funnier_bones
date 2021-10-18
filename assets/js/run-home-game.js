document.querySelector('#run-game-start-button').addEventListener("click", function () {

    const player = document.querySelector('#run-home-player');
    const obstacle = document.querySelector('#run-home-obstacle');
    let score = 0;

    function jump() {
        if (player.classList != "jump") {
            player.classList.add("jump");

            setTimeout(function () {
                player.classList.remove("jump")
            }, 200)
        }
    }

    let isAlive = setInterval(function () {
        // get current player Y position
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    
        // get current obstacle X position
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        
        // detect collision
        if (obstacleLeft < 50 && obstacleLeft > 0 && playerTop >= 100) {
        // collision
        console.log("collision")
        gameOver()
        }
    }, 10);

    function gameOver() {
        document.querySelector('#running-message-board').innerHTML = "Game Over! You did really well. If you think you can do better then have another go or move on in the story"
        obstacle.classList.remove("run-home-obstacle")
        player.classList.remove("run-home-player")
        document.removeEventListener("keydown", function (event) {
            jump();
        }) 
    }

    function start () {
        obstacle.classList.add("run-home-obstacle")
        player.classList.add("run-home-player")
        document.querySelector('#running-message-board').innerHTML = "&nbsp"
        document.addEventListener("keydown", function (event) {
            jump();
        }) 
    }

    start()
})
