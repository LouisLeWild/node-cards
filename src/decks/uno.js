const { Deck } = require('../deck');
const { Card } = require('../card');
const { red, blue, green, yellow, wild } = require ('../suits');
const { zero, one, two, three, four, five, six, seven, eight, nine, skip, reverse, draw2 } = require('../ranks');

/**
 * @class UnoDeck
 * @extends Deck
 * @param options {Object?}
 * @param [options.jokers=0] {number|JokerCard[]} - Either a number of jokers to generate, or an array of jokers to add to the deck
 */
class UnoDeck extends Deck {
	constructor(wilds) {
		super(generateDeck(wilds));
	}
}

exports.UnoDeck = UnoDeck;

const suits = [ red, blue, green, yellow ];
const ranks = [ zero, one, two, three, four, five, six, seven, eight, nine, skip, reverse, draw2 ];

const generateDeck = (wilds) => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
            cards.push(new Card(suit, rank));
		});
    });

    suits.forEach((suit) => {
		ranks.forEach((rank) => {
            if(rank != zero){
                cards.push(new Card(suit, rank));
            }
		});
    });

    for(var i=0;i<wilds;i++){
        cards.push(new Card(wild, zero));
    }

	return cards;
};