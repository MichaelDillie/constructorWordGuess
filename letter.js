var inquirer = require('inquirer');




function Letter(letter) {
    this.isGuessed = false;
    this.letter = letter;

    // This will check if the letter guessed
    // has already been guessed
    // If it has not been guessed that letter will
    // be set to true
    this.checkLetter = function(letter) {

    }

    // This will display each letter
    this.display = function() {
        if(!this.isGuessed) {
            console.log(this.letter);
        } else {
            console.log("_");
        }
    }
}