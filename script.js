const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const cards = [];


const GameData = {
  playersHand: [],
  dealersHand: [],

  //**creates a 52 card deck on page loading
  createDeck: function () {
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < faces.length; j++) {
        var card = { suit: suits[i], face: faces[j], value: values[j] }
        cards.push(card);
      }
    }
    console.log(cards);
  },

  randomNumber: function () {
    return Math.floor(Math.random() * cards.length);
  },

  //**deals 2 cards to player and dealer
  deal: function () {
    for (i = 0; i < 2; i++) {
      this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
    }
    const playerHandValue = this.playersHand[0].value + this.playersHand[1].value;
    const dealerHandValue = this.dealersHand[0].value + this.dealersHand[1].value;
    console.log(this.playersHand);
    console.log(this.dealersHand);
    console.log(playerHandValue);
    console.log(dealerHandValue);
    if (playerHandValue == 21) {
      if (playerHandValue > dealerHandValue) {
        alert('You have blackjack!');//SWITCH TO SWEET ALERT
      }
      if (playerHandValue == dealerHandValue) {
        alert('You pushed with the dealer.');//SWITCH TO SWEET ALERT
      }
    }
  },

  // checkForBlackjack: function () {

  // },

  //**hits player with one card
  hitPlayer: function () {
    this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
    console.log(this.playersHand);
    let playerHandValue = 0;
    for (i = 0; i < this.playersHand.length; i++) {
      playerHandValue += this.playersHand[i].value
    }
    console.log(playerHandValue)
    // if (/*playerTotal*/ > 21) {
    //   alert('You busted!');
    // }
    // turn off buttons
  },

  //**player stays and passes turn to the dealer
  stay: function () {
    // if (/*dealersTotal*/ <= 16) {
    //   dealersHand.push(cards.splice(randomNumber(), 1)[0]);
    // }
    // if (/*dealersTotal*/ >= 17 && /*dealersTotal*/ <= 20) {
    //   //compare dealerTotal and playerTotal
    // }
  },

  //**reset the game */
  reset: function () {
    this.cards = [];
    this.playersHand = [];
    this.dealersHand = [];

    //add deal function call to turn into a redeal button
  },

  redeal: function () {
    this.createDeck();
    this.deal();
  }

//**disables the buttons other than redeal */
  // win: function () {

  // }
}


window.onload = GameData.createDeck();
//**jquery for buttons
$('.deal').click(function () {
  GameData.deal();
}
);
$('.hit').click(function () {
  GameData.hitPlayer();
}
);
$('.stay').click(function () {
  GameData.stay();
})

