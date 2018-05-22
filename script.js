const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const cards = [];

// creates a 52 card deck on page loading
function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < faces.length; j++) {
      var card = { suit: suits[i], face: faces[j], value: values[j] }
      cards.push(card);
    }
  }
  console.log(cards);
}
createDeck();


let playersHand = [];
let dealersHand = [];
const randomNumber = function () {
  return Math.floor(Math.random() * cards.length);
}
// deals 2 cards to player and dealer
function deal() {
  for (i = 0; i < 2; i++) {
    if (playersHand.length < 2) {
      playersHand.push(cards.splice(randomNumber(), 1)[0]);
      dealersHand.push(cards.splice(randomNumber(), 1)[0]);
    }
  }
  console.log(playersHand);
  console.log(dealersHand);
}

// hits player with one card
function hitPlayer() {
  playersHand.push(cards.splice(randomNumber(), 1)[0]);
  console.log(playersHand);
}

// jquery for buttons
$('.deal').click(function () {
  deal()
} 
);
$('.hit').click(function () {
  hitPlayer()
}
);
let playerCard1 = playersHand[0];
let playerCard2 = playersHand[1];
