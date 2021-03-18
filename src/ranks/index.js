
const standard    = require('./standard');
const nonStandard = require('./non-standard');
const trump       = require('./trump');
const majorArcana = require('./major-arcana');
const unoRanks = require('./uno-ranks');

/**
 * @module ranks
 * @description
 *
 * Provides represesntations for the ranks of cards (eg. "ace" or "king").
 *
 * ```javascript
 * const { ranks } = require('cards');
 * ```
 */

Object.assign(exports, standard);
Object.assign(exports, nonStandard);
Object.assign(exports, trump);
Object.assign(exports, majorArcana);
Object.assign(exports, unoRanks);