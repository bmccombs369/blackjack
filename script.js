const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const cards = [];


const GameLogic = {
  playersHand: [],
  dealersHand: [],
  playerHandValue: 0,
  dealerHandValue: 0,

  //**creates a 52 card deck
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
    this.createDeck();
    for (i = 0; i < 2; i++) {
      this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
    }
    const playerHandValue = this.playersHand[0].value + this.playersHand[1].value;
    const dealerHandValue = this.dealersHand[0].value + this.dealersHand[1].value;
    console.log(this.playersHand);
    console.log('playerHandValue ' + playerHandValue);
    console.log(this.dealersHand);
    console.log('dealerHandValue ' + dealerHandValue);
    if (playerHandValue == 21) {
      if (playerHandValue > dealerHandValue) {
        alert('You have blackjack!');//SWITCH TO SWEET ALERT
      }
      if (playerHandValue == dealerHandValue) {
        alert('You pushed with the dealer.');//SWITCH TO SWEET ALERT
      }
    }
  },

  //
  // checkForBlackjack: function () {
  // },

  //**hits player with one card
  hitPlayer: function () {
    this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
    console.log(this.playersHand);
    this.playerHandValue = 0;
    for (i = 0; i < this.playersHand.length; i++) {
      this.playerHandValue += this.playersHand[i].value
    }
    console.log('playerHandValue ' + this.playerHandValue);
    if (this.playerHandValue > 21) {
      alert('You busted!');//SWITH TO SWEET ALERT
      // turn off buttons
    }
  },

  //**player stays and passes turn to the dealer
  stay: function () {
    while (this.deal.dealerHandValue < this.playerHandValue) {
      this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      // this.dealerHandValue = 0;
      for (i = 0; i < this.dealersHand.length; i++) {
        this.dealerHandValue += this.dealersHand[i].value;
      }
    }
    console.log(this.dealersHand);
    console.log('dealerHandValue ' + this.dealerHandValue);
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
    this.reset();
    this.createDeck();
    this.deal();
  }

  //**disables the buttons other than redeal */
  // win: function () {

  // }
}


//**jquery for buttons
$('.deal').click(function () {
  GameLogic.deal();
});
$('.hit').click(function () {
  GameLogic.hitPlayer();
});
$('.stay').click(function () {
  GameLogic.stay();
});
$('.redeal').click(function () {
  GameLogic.redeal();
});

