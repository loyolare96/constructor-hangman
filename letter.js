var letter = function (guess, isGuessed) {
    var guessArray = [];
    this.guess = guess;
    this.isGuessed = false;
    this.getDisplay = function () {
        if (guessArray.includes(guess)) {
            guessArray.push(guess);
            console.log("Letters guessed so far: " + guessArray);
            return ("_");
        }
        else {
            guessArray.push(guess);
            console.log("Letters guessed so far: " + guessArray);
            return (guess);
        }
    };
    this.checkGuess = function (userGuess) {
        if (userGuess == guess) {
            this.isGuessed = true;
        }
    };
    this.browseGuessArray = function(){
        console.log(guessArray);
    }
}



module.exports = letter;
//var blah = new letter("b");

//blah.getDisplay();