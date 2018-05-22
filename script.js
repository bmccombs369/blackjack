
// creates a 52 card deck
function createDeck() {
  const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  const cards = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < faces.length; j++) {
      var card = { suit: suits[i], face: faces[j], value: values[j] }
      cards.push(card);
    }
  }
  console.log(cards);
}

const deal = {
  //creates a random number for dealing
  randomNumber: function () {
    const random = Math.floor(Math.random() * 53);
    return random;
  },
  dealCards: function () {
    const card1 = deck.createDeck().cards[this.randomNumber()];
    return card1;
  },
};