let currentFruitTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for(let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);

        document.getElementById("board").appendChild(tile);
    }

    setInterval(setFruit, 2000); // 1000 milliseconds = 2 seconds
    setInterval(setPlant, 3000);
}

function getRandomTile() {
    // Math.random() return number between 0 and 1
    // (0-1)* 9 = (0-9) --> round down to (0-8) integers

    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setFruit() {

    if(gameOver) {
        return;
    }
    if(currentFruitTile) {
        currentFruitTile.innerHTML = "";
    }
    let fruitImg = document.createElement("img");
    fruitImg.src = "./images/fruit.png";

    let num = getRandomTile();
    if(currentPlantTile && currentFruitTile.id == num) {
        return;
    }
    currentFruitTile = document.getElementById(num);
    currentFruitTile.appendChild(fruitImg);
}

function setPlant() {
    if(gameOver) {
        return;
    }

    if(currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plantImg = document.createElement("img");
    plantImg.src = "./images/piranha-plant.png";
    let num = getRandomTile();

    if(currentFruitTile && currentFruitTile.id == num) {
        return;
    }

    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plantImg);
}

function selectTile() {
    if(gameOver) {
        return;
    }
    
    if(this == currentFruitTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); // update the score
    }
    else if(this == currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

