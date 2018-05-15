function Letter(letter) {
    this.isGuessed = false;
    this.letter = letter;

    this.checkLetter = function(letter) {

    }

    this.display = function() {
        if(!this.isGuessed) {
            console.log(this.letter);
        } else {
            console.log("_");
        }
    }
}