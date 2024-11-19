
//board
let board;
let boardWidth = 1280;
let boardHeight = 525;
let context;

//sprite
let spriteWidth = 96;
let spriteHeight = 96;
let spriteX = 50;
let spriteY = boardHeight - spriteHeight;
let spriteImg;

//obstacle
let obstacleArray = [];
let obstacle1Width = 34;
let obstacle2Width = 69;
let obstacle3Width = 102;

let obstacleHeight = 70;
let obstacleX = 700
let obstacleY = boardHeight - obstacleHeight;

let obstacle1Img;
let obstacle2Img;
let obstacle3Img;

//sprite objects
let sprite = {
    x : spriteX,
    y : spriteY,
    width : spriteWidth,
    height: spriteHeight
}

//physics
let velocityX = -8; // object moving left speed
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board")
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    // draw inital sprite
    /*context.fillStyle = "green";
    context.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
    */
    // insert real sprite
    spriteImg = new Image()
    spriteImg.src = "1.png"
    spriteImg.onload = function() {
    context.drawImage(spriteImg, sprite.x, sprite.y, sprite.width, sprite.height)
    }

    // insert real obstacle (repeat for all obstacle)
    /*
    obstacle1Img = new Image()
    obstacle1.src = "(relative path of obstacle)" 
    }*/ 

    requestAnimationFrame(update);
    setInterval(placeObstacle, 1000); //1000 milliseconds = 1 second
    document.addEventListener("keydown", moveSprite);
}

function update() {

    requestAnimationFrame(update);
    context.clearRect(0, 0, boardWidth, boardHeight);

    // sprite
    velocityY += gravity;
    sprite.y = Math.min(sprite.y + velocityY, spriteY); // apply gravity to current sprite.y, to ensure that it does not exceed ground level.
    context.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);

    // obstacle
    for (let i = 0 ; i < obstacleArray.Length; i++)
    {
        let obstacle = obstacleArray[i];
        obstacle.x += velocityX;
        context.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if (detectCollision(sprite, obstacle)){
            gameOver = true;
        }
    }

    //score
    context.fillStyle = "black";
    context.font = "20px courier";
    score++;
    context.fillText(score, 5, 20); // 5 from left & 20 from top
    
}

function moveSprite(event) {
    if (gameOver) {
        return;
    }

    if (event.code == "Space" || event.code == "ArrowUp" && sprite.y == spriteY) {
        //jump 
        velocityY = -10
    }
}

// Initialising chance % and placement of objects
function placeObstacle() {
    if (gameOver) {
        return;
    }

    //place obstacle
    let obstacle = {
        img : null,
        x : obstacleX,
        y : obstacleY,
        width : null,
        height : obstacleHeight
    }

    //randomiser
    let placeObstacleChance = Math.random() //gives number between 0 - 0.9999..
    if (placeObstacleChance > 0.90) // 10% chance of receiving obstacle num 3
    {
        // obstacle.img = obstancle3Img;
        // obstacle.width = obstacle3Width;
        // obstacleArray.push(obstacle);
    }
    else if (placeObstacleChance > 0.70) // 30% chance of receiving obstacle num 2
    {
        // obstacle.img = obstancle2Img;
        // obstacle.width = obstacle2Width;
        // obstacleArray.push(obstacle);
    }
    else if (placeObstacleChance > 0.50) // 50% chance of receiving obstacle num 1
    {
        // obstacle.img = obstancle1Img;
        // obstacle.width = obstacle1Width;
        // obstacleArray.push(obstacle);
    }

    if (obstacleArray.Length < 5)
    {
        obstacleArray.shift(); // removes first element of array so that array does not accumulate obstacles that hv passed over.


    }
}

// Creating hitbox
function detectCollision(a, b) {
    return a.x < b.x + b.width && // a's top left corner doesn't reach b's top right corner 
           a.x + a.width > b.x && // a's top right corner passes b's top left corner
           a.y < b.y + b.height && // a's top left corner doesn't reach b's bottom right corner
           a.y + a.height > b.y; // a's bottom left corner passes b's bottom left corner
}