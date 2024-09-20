let rndNum = Math.floor(Math.random() * 10 + 1) + 1;
let guess = 5;
const btnSubmit = document.getElementById("btnSubmit");
const guessNum = parseInt(document.getElementById("guessNum").value);
//Ne zaman? Submit butonuna basýldýðýnda 
//Ne olacak? rndNum ve kullanýcýdan alýnan guessNum(input id) kýyaslanacak
console.log(guessNum);
console.log(rndNum);

function GuessNumber() { 
    if (guessNum === rndNum) {
     //Correct Answer
        const successCard =` <div class="card-header bg-success text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Congratulations!</h5>
                    <p class="card-text">Enter a larger number.</p> 
                    <button id="btnSubmit" class="btn btn-primary">Next Level</button>
                </div>`

        document.getElementById("cardType").innerHTML += successCard;
    }
    else if (guessNum > rndNum) {
        //Wrong Answer Danger
        const warningCard = `<div class="card-header bg-warning text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Warning!</h5>
                    <p class="card-text">Enter a smaller number.</p> 
                </div>`

        document.getElementById("cardType").innerHTML += warningCard;
    }
    else if (guessNum < rndNum) {
        const warningCard = `<div class="card-header bg-warning text-dark">
                    Message
                </div>
                <div class="card-body">
                    <h5 class="card-title ">Warning!</h5>
                    <p class="card-text">Enter a smaller number.</p> 
                </div>`

        document.getElementById("cardType").innerHTML += warningCard;
    }
}