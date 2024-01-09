// Project 05: Number Guessing Game:

function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessed = false;

    while(!guessed) {
        const guess = parseInt(prompt("Guess the number (between 1 and 100):"));
        alert('Secret number is: ${secretNumber}');
        if (isNaN(guess)){
            alert('Invalid input! please enter a valid number:');
        } else {
            attempts++;
            if (guess === secretNumber){
                guessed = true;
                alert('Congratulations! You guessed the number in ${attempts}');
            } else if (guess < secretNumber) {
                alert('Try a higher number');
            } else {
                alert('Try a lower number');
            }
        }
    }
}

console.log(numberGuessingGame(20))