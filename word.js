var letter = require("./letter.js");


var word = function (entry) {

    this.spaceLetters = [
        {
            letter: 's',
            guessed: false
        },
        {
            letter: 'p',
            guessed: false
        },
        {
            letter: 'a',
            guessed: false
        },
        {
            letter: 'c',
            guessed: false
        },
        {
            letter: 'e',
            guessed: false
        },
    ];
    this.angerLetters = [
        {
            letter: 'a',
            guessed: false
        },
        {
            letter: 'n',
            guessed: false
        },
        {
            letter: 'g',
            guessed: false
        },
        {
            letter: 'e',
            guessed: false
        },
        {
            letter: 'r',
            guessed: false
        },
    ];
    this.rocketLetters = [
        {
            letter: 'r',
            guessed: false
        },
        {
            letter: 'o',
            guessed: false
        },
        {
            letter: 'c',
            guessed: false
        },
        {
            letter: 'k',
            guessed: false
        },
        {
            letter: 'e',
            guessed: false
        },
        {
            letter: 't',
            guessed: false
        },
    ];
    this.extraLetters = [
        {
            letter: 'e',
            guessed: false
        },
        {
            letter: 'x',
            guessed: false
        },
        {
            letter: 't',
            guessed: false
        },
        {
            letter: 'r',
            guessed: false
        },
        {
            letter: 'a',
            guessed: false
        }
    ];
    this.frostyLetters = [
        {
            letter: 'f',
            guessed: false
        },
        {
            letter: 'r',
            guessed: false
        },
        {
            letter: 'o',
            guessed: false
        },
        {
            letter: 's',
            guessed: false
        },
        {
            letter: 't',
            guessed: false
        },
        {
            letter: 'y',
            guessed: false
        },
    ];
    this.returnWord = function (guess, isGuessed) {
        var doingMyBest = new letter(guess, isGuessed);
        doingMyBest.getDisplay();
    };
    this.textgoeshere = function (guess) {
        var doingMyBest = new letter(guess);
        doingMyBest.checkGuess(guess);
    }
}

module.exports = word;