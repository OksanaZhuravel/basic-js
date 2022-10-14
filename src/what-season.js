const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

  let month = date.getMonth();
  // console.log(month);
  // console.log(typeof month);
  let season =
    month >= 0 && month <= 2
      ? 'winter'
      : month >= 3 && month <= 5
      ? 'spring'
      : month >= 6 && month <= 8
      ? 'summer'
      : month >= 9 && month <= 11
      ? 'autumn'
      : 'Unable to determine the time of year!';
  // console.log(season);
  return season;
}

module.exports = {
  getSeason,
};
