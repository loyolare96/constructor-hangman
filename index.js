var inquirer = require('inquirer');
var word = require("./word.js");
var letter = require("./letter.js");

var wordArray = ['space', 'anger', 'rocket', 'extra', 'frosty'];
var randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
var rngLength = randomWord.length;
var guessesRemaining = 8;


function selectWord() {
    var wordjs = new word();
    console.log("The selected word is: " + randomWord + ", which contains " + rngLength + " characters.");
    if (randomWord == 'space'){
        var selectedArray = wordjs.spaceLetters;
    }
    else if (randomWord == 'anger'){
        var selectedArray = wordjs.angerLetters;
    }
    else if (randomWord == 'rocket'){
        var selectedArray = wordjs.rocketLetters;
    }
    else if (randomWord == 'extra'){
        var selectedArray = wordjs.extraLetters;
    }
    else if (randomWord == 'frosty'){
        var selectedArray = wordjs.frostyLetters;
    };
    console.log(selectedArray);
    initiateHangMan();
}

function initiateHangMan() {
    var thisisaPlaceholder = new letter();
    thisisaPlaceholder.browseGuessArray();
    var wordjs = new word();
    wordjs.returnWord();
    inquirer.prompt([

    ])

        .then(answers => {
            // Use user feedback for... whatever!!
        });
}

selectWord();


//The game starts and it selects a random word, shrouding the letters behind underscores.
//The player is given 8 chances to guess letters to fill in the underscores to spell the whole word.
//The game ends when the 8 chances are all used up.