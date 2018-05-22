function createDeck() {
  const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  const deck = [];
  for (var i = 0; i < this.suits.length; i++) {
    for (var j = 0; j < this.faces.length; j++) {
      this.deck.push(this.suits[i], this.faces[j], this.values[j]);
    }
  }
  console.log(this.deck);
};
createDeck();
console.log(deck.length);