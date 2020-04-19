function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

var  upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

document.write("<p> The random number was: " + randomNumber + "<p>");
document.write("<p> It took the computer " + attempts + " attempts to guess correctly");