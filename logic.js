var timer = 60;
var score = 0;
var ran;
var count = 0;
var secondCount = 0;
function createBubble() {

    var saver = "";
    for (var m = 0; m <= 160; m++) {//Creating bubbles 
        var value = Math.floor(Math.random() * 10);
        saver += `<div class="bubble">${value}</div>`;
    }
    document.querySelector(".bubble-sec").innerHTML = saver;
}

function setTime() {
    var interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(interval);
            document.querySelector(".bubble-sec").innerHTML =
                `<h1>Game Over</h1>
            <h1>Your score is ${score}</h1>`;
        }
    }, 1000);
}

function hitBubble() {
    ran = Math.floor(Math.random() * 10);
    document.querySelector("#newHit").innerHTML = ran;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function cutScore() {
    score -= 5;
    document.querySelector("#score").textContent = score;
}

function endGame() {
    document.querySelector(".bubble-sec").innerHTML =
        `<h1>Game Over</h1>
    <h1>Your score is ${score}</h1>`;
}
function scoreGame() {
    var getNumber = document.querySelector(".bubble-sec");
    getNumber.addEventListener('click', function (details) {
        var clickedNumber = (Number(details.target.textContent));
        if (clickedNumber === ran) {
            increaseScore();
            createBubble();
            hitBubble();
            count = 0;
        }
        else {
            count++;
            secondCount++;
            if (secondCount == 3) {
                endGame();
                timer = 0;
            } else if (count == 2 && score > 0) {
                cutScore();
            }
            else {
                createBubble();
                hitBubble();
            }
        }

    })
}


setTime();
createBubble();
hitBubble();
scoreGame();