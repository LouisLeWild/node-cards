
const { StandardDeck } = require('./standard');
const { MajorArcanaDeck } = require('./major-arcana');
const { EuchreDeck } = require('./euchre');
const { PinochelDeck } = require('./pinochel');
const { BarajaDeck } = require('./baraja');
const { TarotDeck } = require('./tarot');
const { PiquetDeck } = require('./piquet');
const { UnoDeck } = require('./uno');

/**
 * @module decks
 * @description
 *
 * Provides all of the built-in classes for various types of standardized decks.
 *
 * ```javascript
 * const { decks } = require('cards');
 * ```
 */

module.exports = {
	/**
	 * @member MajorArcanaDeck
	 * @see MajorArcanaDeck
	 */
	MajorArcanaDeck,
	/**
	 * @member StandardDeck
	 * @see StandardDeck
	 */
	StandardDeck,

	/**
	 * @member EuchreDeck
	 * @see EuchreDeck
	 */
	EuchreDeck,
	/**
	 * @member PinochelDeck
	 * @see PinochelDeck
	 */
	PinochelDeck,
	/**
	 * @member BarajaDeck
	 * @see BarajaDeck
	 */
	BarajaDeck,
	/**
	 * @member TarotDeck
	 * @see TarotDeck
	 */
	TarotDeck,
	/**
	 * @member PiquetDeck
	 * @see PiquetDeck
	 */
	PiquetDeck,
	/**
	 * @member UnoDeck
	 * @see UnoDeck
	 */
	UnoDeck
};
