var level = 1;
var rndNum = Math.floor(Math.random() * (10*level)) + 1; //+1 min sayý=1
var guess = 5;
const btnSubmit = document.getElementById("btnSubmit");

function GameInformation() {
    const ulGame = `<li><strong>Level: ${level}</strong></li>
                <li><strong>Guess Chance: ${guess}</strong></li>
                <li><strong>Time: </strong></li>` 

    document.getElementById("ulGame").innerHTML = ulGame;
}

//Ne zaman? Submit butonuna basýldýðýnda --input deðer=guessNum
//Ne olacak? rndNum ve kullanýcýdan alýnan guessNum(input id) kýyaslanacak

console.log(rndNum);

GameInformation();

//Kullanýcý'nýn tahmin ettiði sayýnýn kontrolü
btnSubmit.onclick = function () {
    const guessNum = parseInt(document.getElementById("guessNum").value);
    console.log(guessNum);
    //NaN: Not a Number
    if (isNaN(guessNum)) {
        alert("Please enter a valid number");
        return;
    }   

    GuessNumber(guessNum);
}

function GuessNumber(guessNum) {
    document.getElementById("cardType").style.display = "block"; //card görüntülenmesi saðlanýr

    document.getElementById("cardType").innerHTML = ""; //Önceki cardlarý temizlemek için
    
    if (guessNum === rndNum) {
        //Submit Button'ý Gizle
        document.getElementById("btnSubmit").style.display = "none";
        //Correct Answer
        const successCard =` <div class="card-header bg-success text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Congratulations!</h5>
                    <p class="card-text">You have successfully completed the level!</p> 
                    <button id="btnNext" class="btn btn-primary">Next Level</button>
                </div>`

        document.getElementById("cardType").innerHTML += successCard;
        //BÝR SONRAKÝ SEVÝYE (bir sonraki seviyeye geçerken submit butonu display:none)
        const btnNext = document.getElementById("btnNext");
        btnNext.onclick = function () {
            guess = 5;
            level++;
            rndNum = Math.floor(Math.random() * ((10 * level) + 1)) + 1;
            document.getElementById("cardType").innerHTML = "";
            document.getElementById("cardType").style.display = "none";
            document.getElementById("btnSubmit").style.display = "block";
            GameInformation();
            console.log("NewLevel rndNum: " + rndNum);
        }
    }
    else if (guessNum > rndNum) {
        guess--;
        //Wrong Answer Danger
        const warningCard = `<div class="card-header bg-warning text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Warning!</h5>
                    <p class="card-text"><strong>Try a smaller number.<strong/></p> 
                </div>`

        document.getElementById("cardType").innerHTML += warningCard;
    }
    else if (guessNum < rndNum) {
        guess--;
        const warningCard = `<div class="card-header bg-warning text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Warning!</h5>
                    <p class="card-text"><strong>Try a larger number.<strong/></p> 
                </div>`

        document.getElementById("cardType").innerHTML += warningCard;
    }

    if (guess === 0) {
        GameOver();
    }
    GameInformation();
}

function GameOver() {
    document.getElementById("cardType").innerHTML = "";
    console.log("Game Over...");
    const dangerCard = `<div class="card text-center">
                <div class="card-header bg-danger text-dark">
                    Correct Number: <strong>${rndNum}<strong/>
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Game Over</h5>
                    <p class="card-text">You have no guess change</p>
                    <button id="btnAgain" class="btn btn-primary">Play Again</button>
                </div>
            </div>`

    document.getElementById("cardType").innerHTML += dangerCard;

    //Oyunu Yeniden Baþlatma
    const btnAgain = document.getElementById("btnAgain");
    btnAgain.onclick = function () {
        document.getElementById("cardType").style.display = "none";
        guess = 5;
        level = 1;
        rndNum = Math.floor(Math.random() * ((10 * level) + 1)) + 1;
        document.getElementById("cardType").innerHTML = "";
        console.log("New rndNum: " + rndNum);
        GameInformation();
    }
}

//Time
