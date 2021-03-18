const { decks } = require('./index.js');


// Create a standard 108 card Uno deck 
const deck = new decks.UnoDeck(8);

// Shuffle the deck
deck.shuffleAll();

// Draw a hand of seven cards from the deck
const hand = deck.draw(7);



console.log(hand);

hand.forEach((c) => console.log(c.toString()));