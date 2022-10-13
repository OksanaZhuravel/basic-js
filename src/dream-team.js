const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let nameTeam = [];
  for (let i = 0; i < members.length; i++) {
    let str = members[i];
    let type = typeof str;
    if (type === 'string') {
      // console.log(str.split(''));
      let leter = str[0];
      // console.log(leter);
      nameTeam.push(leter);
    }
  }
  nameTeam.sort();
  // console.log(nameTeam.join('').toUpperCase());
  return nameTeam.join('').toUpperCase();
}

module.exports = {
  createDreamTeam,
};
