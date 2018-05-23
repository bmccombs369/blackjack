const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
let cards = [];


const GameLogic = {
  playersHand: [],
  dealersHand: [],
  playerHandValue: 0,
  dealerHandValue: 0,
  isRunning: true,
  // cards: [],

  //**creates a 52 card deck
  createDeck: function () {
    console.log(cards.length);
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

  getPlayerHandValue: function () {
    this.playerHandValue = 0;
    for (i = 0; i < this.playersHand.length; i++) {
      this.playerHandValue += this.playersHand[i].value;
    }
    console.log(this.playersHand);
    console.log('playerHandValue = ' + this.playerHandValue)
  },

  getDealerHandValue: function () {
    this.dealerHandValue = 0;
    for (i = 0; i < this.dealersHand.length; i++) {
      this.dealerHandValue += this.dealersHand[i].value;
    }
    console.log(this.dealersHand);
    console.log('dealerHandValue = ' + this.dealerHandValue);
  },

  //**deals 2 cards to player and dealer
  deal: function () {
    if (!this.isRunning) {
      this.isRunning = true
      this.createDeck();
      for (i = 0; i < 2; i++) {
        this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
        this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      }
      this.getPlayerHandValue();
      this.getDealerHandValue();
      if (this.playerHandValue == 21) {
        if (this.playerHandValue > this.dealerHandValue) {
          alert('You have blackjack!');//SWITCH TO SWEET ALERT
          this.isRunning = false;
        }
        if (this.playerHandValue == this.dealerHandValue) {
          alert('You pushed with the dealer.');//SWITCH TO SWEET ALERT
        }
      }
    }
  },

  //
  // checkForBlackjack: function () {
  // },

  //**hits player with one card
  hitPlayer: function () {
    if (!this.isRunning) {
      this.isRunning = true
      this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      this.getPlayerHandValue();
      if (this.playerHandValue > 21) {
        alert('You busted!');//SWITH TO SWEET ALERT
        this.isRunning = false;
        // turn off buttons
      }
    }
  },



  //**player stays and passes turn to the dealer
  stay: function () {
    this.getDealerHandValue();
    this.getPlayerHandValue();
    while (this.dealerHandValue < this.playerHandValue) {
      this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      this.getDealerHandValue();
      if (this.dealerHandValue > 21) {
        alert('Dealer busted. You win!')
        //stop game
      }
    }
    if (this.dealerHandValue > this.playerHandValue) {
      alert('Dealer wins.');
    }
    if (this.dealerHandValue = this.playerHandValue) {
      alert('You push.')
    }
  },

  //**reset the game
  reset: function () {
    cards = [];
    this.playersHand = [];
    this.dealersHand = [];
  },

  redeal: function () {
    this.reset();
    console.log('the number of cards is', cards.length);
    this.deal();
    console.log('the number of cards is', cards.length);
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

