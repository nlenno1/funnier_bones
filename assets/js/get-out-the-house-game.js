document.querySelector("#jump_game_start_button").addEventListener("click", function(){  
    const grid = document.querySelector("#jump-game")
    const jumper = document.createElement('div')
    let jumperLeftSpace = 50
    let startPoint = 150
    let jumperBottomSpace = startPoint
    let platformCount = 4
    let isGameOver = false
    let platforms = []
    let upTimerId
    let downTimerId
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId
    let score = 0
    let messageBoard = document.querySelector("#message-board")
    let highestScore = 30


    function createJumper () {
        grid.appendChild(jumper)
        jumper.classList.add('jump-game-player')
        jumperLeftSpace = platforms[0].left
        jumper.style.left = jumperLeftSpace + "px"
        jumper.style.bottom = jumperBottomSpace + "px"
    }

    class Platform {
        constructor(newPlatBottom) {
            this.left = Math.random() * 315
            this.bottom = newPlatBottom
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('jump-game-platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        for(let i =0; i < platformCount; i++) {
            let platGap = 550 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms)
        }
    }

    function movePlatforms() {
        if (jumperBottomSpace > 150) {
            platforms.forEach(platform => {
              platform.bottom -= 4
              let visual = platform.visual
              visual.style.bottom = platform.bottom + 'px'
    
            if(platform.bottom < 10) {
                let firstPlatform = platforms[0].visual
                firstPlatform.classList.remove('jump-game-platform')
                platforms.shift()
                console.log(platforms)
                score++
                var newPlatform = new Platform(550)
                platforms.push(newPlatform)
                }
            }) 
        }
    }

    function jump() {
        clearInterval(downTimerId)
        isJumping = true
        upTimerId = setInterval(function () {
            jumperBottomSpace += 20
            jumper.style.bottom = jumperBottomSpace + "px"
            if (jumperBottomSpace > startPoint + 200) {
                fall()
            }
            if (score == highestScore) {
                winGameOver()
            }
        }, 30)
    }

    function fall() {
        clearInterval(upTimerId)
        isJumping = false
        downTimerId = setInterval(function () {
            jumperBottomSpace -= 5
            jumper.style.bottom = jumperBottomSpace + "px"
            if (jumperBottomSpace <= 0) {
                gameOver()
            }
            platforms.forEach(platform => {
                if (
                  (jumperBottomSpace >= platform.bottom) &&
                  (jumperBottomSpace <= (platform.bottom + 15)) &&
                  ((jumperLeftSpace + 60) >= platform.left) && 
                  (jumperLeftSpace <= (platform.left + 65)) &&
                  !isJumping
                  ) {
                    console.log('landed')
                    startPoint = jumperBottomSpace
                    jump()
                  }
            })
        },20)
    }

    function winGameOver() {
        console.log('winner')
        isGameOver = true
        jumperBottomSpace = 0
        while (grid.firstChild) {
            console.log('remove')
            grid.removeChild(grid.firstChild)
        }
        grid.innerHTML = "Game Completed!"
        messageBoard.innerHTML = "We have a winner! Carry on with the story!"
        clearInterval(upTimerId)
        clearInterval(downTimerId)
        clearInterval(leftTimerId)
        clearInterval(rightTimerId)
    }

    function gameOver() {
        console.log('game over')
        isGameOver = true
        while (grid.firstChild) {
            console.log('remove')
            grid.removeChild(grid.firstChild)
        }
        grid.innerHTML = "Score:  " + score 
        messageBoard.innerHTML = "Try again and see if you can get all the way to " + highestScore + "!"
        clearInterval(upTimerId)
        clearInterval(downTimerId)
        clearInterval(leftTimerId)
        clearInterval(rightTimerId)
    }

    function control(e) {
        if (e.key === "ArrowLeft") {
            moveLeft()
        } else if (e.key === "ArrowRight") {
            moveRight()
        } else if (e.key === "ArrowUp") {
            moveStraight()
        }
    }

    function moveLeft() {
        if (isGoingRight) { 
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(function() {
            if (jumperLeftSpace >= 0) {
                jumperLeftSpace -= 5
                jumper.style.left = jumperLeftSpace + 'px'
            } else moveRight()
        }, 20)
    }

    function moveRight() {
        if (isGoingLeft) { 
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval(function() {
            if (jumperLeftSpace <= 340) {
                jumperLeftSpace += 5
                jumper.style.left = jumperLeftSpace + 'px'
            } else moveLeft()
        }, 20)
    }

    function moveStraight() {
        isGoingLeft = false
        isGoingRight = false
        clearInterval(rightTimerId)
        clearInterval(leftTimerId)
    }
 
    function start() {
        if (!isGameOver) {
            messageBoard.innerHTML = "&nbsp"
            grid.innerHTML = ""
            createPlatforms()
            createJumper()
            setInterval(movePlatforms, 30)
            jump()
            document.addEventListener('keydown', control)
        }
    }
    start()

});
