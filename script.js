const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const cards = [];

// creates a 52 card deck
function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < faces.length; j++) {
      var card = { suit: suits[i], face: faces[j], value: values[j] }
      cards.push(card);
    }
  }
  console.log(cards);
}
let playersHand = [];
let dealersHand = [];
var randomNumber = function () {
  return Math.floor(Math.random() * cards.length);
}
function deal() {
  for (i = 0; i < 2; i++) {
    if (playersHand.length < 2) {
      playersHand.push(cards.splice(randomNumber(), 1)[0]);
      dealersHand.push(cards.splice(randomNumber(), 1)[0]);
    }
  }
}
  // function hit() {}


// function randomNumber() {
//   card = Math.floor(Math.random() * 52);
//   return card;
// }
// const card1 = cards[randomNumber()];
// console.log(card1)
// const card2 = cards[randomNumber()];

