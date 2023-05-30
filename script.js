'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);
let highScore = 0;
let score = 20;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener(
    'click', function () {
        number = Math.trunc(Math.random() * 20) + 1;
        // console.log(number)
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent =
            score;
        document.querySelector('.number').textContent =
            '?';
        document.querySelector('body').style.backgroundColor =
            '#222';
        document.querySelector('.guess').value =
            '';
        document.querySelector('.number').style.width =
            '15rem';
    }
)

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector(
            '.guess').value);

        if (!guess) {
            displayMessage('No number was entered! 🚫');
        }

        else if (guess === number) {
            displayMessage('Yay! You guessed correctly!');
            document.querySelector('body').style.backgroundColor =
                '#60b347';
            document.querySelector('.number').textContent =
                number;
            document.querySelector('.number').style.width =
                '30rem';

            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent =
                    highScore;
            }
        }

        else if (guess !== number) {
            if (score > 1) {
                displayMessage(guess>number?'Too high!':'Too low!');
                score--;
                document.querySelector('.score').textContent =
                    score;
            }
            else {
                    displayMessage('You lost the game!');
                document.querySelector('.score').textContent =
                    0;
            }
        }
    })