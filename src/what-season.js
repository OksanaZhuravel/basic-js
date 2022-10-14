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
    month >= 0 && month <= 1
      ? 'winter'
      : month == 11
      ? 'winter'
      : month >= 2 && month <= 4
      ? 'spring'
      : month >= 5 && month <= 7
      ? 'summer'
      : month >= 8 && month <= 10
      ? 'autumn'
      : 'Unable to determine the time of year!';
  // console.log(season);
  return season;
}

module.exports = {
  getSeason,
};
