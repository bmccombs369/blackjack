const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
let cards = [];
const images = ['https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_2.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_3.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_4.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_5.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_6.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_7.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_8.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_9.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_10.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_jack.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_jbqueen.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_king.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/clubs_race.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_2.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_3.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_4.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_5.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_6.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_7.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_8.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_9.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_10.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_jack.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_jbqueen.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_king.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/diamonds_race.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_2.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_3.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_4.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_5.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_6.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_7.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_8.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_9.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_10.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_jack.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_jbqueen.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_king.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/hearts_race.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_2.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_3.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_4.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_5.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_6.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_7.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_8.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_9.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_10.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_jack.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_jbqueen.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_king.png',
  'https://raw.githubusercontent.com/bmccombs369/blackjackimages/master/spades_race.png',]

const GameLogic = {
  playersHand: [],
  dealersHand: [],
  playerHandValue: 0,
  dealerHandValue: 0,
  isRunning: true,

  //**creates a 52 card deck
  createDeck: function () {
    console.log(cards.length);
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < faces.length; j++) {
        var card = { suit: suits[i], face: faces[j], value: values[j]/*, imageURL: images[]*/ }
        cards.push(card);
      }
    }
    for (var k = 0; k < images.length; k++) {
      cards[k].imageURL = images[k];
    }
    console.log(cards);
  },

  // addImages: function () {
  //   for (var i = 0; i < cards.length; i++) {
  //     cards.image
  //   }
  // },

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
      }
      if (this.playerHandValue == this.dealerHandValue) {
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
    this.getPlayerHandValue();
    if (this.playerHandValue > 21) {
      alert('You busted!');//SWITH TO SWEET ALERT        // turn off buttons
    }
  },



  //**player stays and passes turn to the dealer
  stay: function () {
    this.getDealerHandValue();
    this.getPlayerHandValue();
    if (this.dealerHandValue === 21) {
      alert('Dealer has blackjack. You lose.')
    }
    while (this.dealerHandValue < this.playerHandValue) {
      this.dealersHand.push(cards.splice(this.randomNumber(), 1)[0]);
      this.getDealerHandValue();
      if (this.dealerHandValue > 21) {
        alert('Dealer busted. You win!')
        //stop game
      }
      if (this.dealerHandValue === 21) {
        if (this.dealerHandValue > this.playerHandValue) {
          alert('Dealer wins.')
        }
        if (this.dealerHandValue === this.playerHandValue) {
          alert('You push.')
        }
      }
    }
    if (this.dealerHandValue < 21) {
      if (this.dealerHandValue > this.playerHandValue) {
        alert('Dealer wins.');
      }
      if (this.dealerHandValue === this.playerHandValue) {
        alert('You push.');
      }
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

const UserInterface = {

}


//**event handlers for buttons
$('.deal').click(function () {
  GameLogic.deal();
  $('.deal').toggle();
  $('.hit').toggle();
  $('.stay').toggle();
  $('.redeal').toggle();
});
$('.hit').click(function () {
  GameLogic.hitPlayer();
});
$('.hit').toggle();
$('.stay').click(function () {
  GameLogic.stay();
});
$('.stay').toggle();
$('.redeal').click(function () {
  GameLogic.redeal();
});
$('.redeal').toggle();

