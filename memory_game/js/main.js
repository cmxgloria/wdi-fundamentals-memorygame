var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = ["queen"];
cardsInPlay.push("queen");
console.log("User flipped queen");
var cardTwo = ["king"];
cardsInPlay.push("king");
console.log("User flipped king");
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
}
if (cardsInPlay[0] != cardsInPlay[1]) {
  alert("Sorry, try again.");
}
