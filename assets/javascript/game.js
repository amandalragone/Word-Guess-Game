var theme = ["the killers", "mumford and sons", "blink 182", "good charlotte", "coldplay", "audioslave", "linkin park", "simple plan", "eminem", "britney spears", "avril lavigne", "nickelback", "evanescence", "new found glory", "yellowcard", "interpol", "weezer", "the all-american rejects", "jonas brothers", "jimmy eat world", "nsync", "backstreet boys", "spice girls"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = theme.indexOf("");
var wins = 0;
var lettersGuessed = [];


var computerChoiceText = document.getElementById("computerChoice");
var winsText = document.getElementById("wins");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");


var computerChoice = theme[Math.floor(Math.random() * theme.length)];
var guessesRemaining = computerChoice.length;
computerChoiceText.textContent = computerChoice;
guessesRemainingText.textContent = guessesRemaining+3;
winsText.textContent = wins;






