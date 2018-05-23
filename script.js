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
      if (this.playersHand.length < 2) {
        this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
        this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);


      }
    }
    const playerHandValue = this.playersHand[0].value + this.playersHand[1].value;
    const dealerHandValue = this.dealersHand[0].value + this.dealersHand[1].value;
    console.log(this.playersHand);
    console.log(this.dealersHand);
    console.log(playerHandValue);
    console.log(dealerHandValue);
    if (playerHandValue == 21) {
      if (playerHandValue > dealerHandValue) {
        alert('You have blackjack!');
      }
      if (playerHandValue == dealerHandValue) {
        alert('You pushed with the dealer.');
      }
    }
    //check if playerTotal = 21
    //if it does equal 21 compare with dealerTotal
    //if dealerTotal is not 21 then player wins
    //else it is a push
    // const playerHandValue = this.playersHand[0].value + this.playersHand[1].value;
    // console.log(playerHandValue);
  },

  // checkForBlackjack: function () {

  // },

  //**hits player with one card
  hitPlayer: function () {
    this.playersHand.push(cards.splice(this.randomNumber(), 1)[0]);
    console.log(this.playersHand);
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

  //**reset the game
  redeal: function () {
    this.cards = [];
    this.createDeck();
    this.playersHand = [];
    this.clickdealersHand = [];
    this.deal();
    //add deal function call to turn into a redeal button
  }
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

