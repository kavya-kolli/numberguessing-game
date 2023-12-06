let randomNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultPress');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');

    }else if (guess < 1){
       alert('please enter a number greater than 1!');
    }else if(guess > 100){
        alert('please enter a number less than 500!')
    }else{
        previousGuesses.push(guess);

        if(numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game over! number was ${randomNumber}`);
            endGame();
        }else{
            displayGuesses(guess);
          
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        lowOrHi.innerHTML='you guesses correctly!';
        endGame();
    }else if(guess < randomNumber){
        lowOrHi.innerHTML='Too low! Try again!';
    }else if (guess > randomNumber){
        lowOrHi.innerHTML='Too High! Try again!';
    }
}
function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML +=` ${guess} `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
    checkGuess(guess);
}
