import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  let a = date
  let winter = 'winter';
  let spring = 'spring';
  let summer = 'summer';
  let autumn = 'autumn';
  if (a === undefined) return `Unable to determine the time of year!`
  try {
    date.toUTCString()
  }
  catch {
    throw new Error('Invalid date!')
  }
  if (a.getMonth() === 0 || a.getMonth() === 1 || a.getMonth() === 11) {
    return winter;
  } else if (a.getMonth() === 2 || a.getMonth() === 3 || a.getMonth() === 4) {
    return spring;
  } else if (a.getMonth() === 5 || a.getMonth() === 6 || a.getMonth() === 7) {
    return summer;
  } else if (a.getMonth() === 8 || a.getMonth() === 9 || a.getMonth() === 10) {
    return autumn;
  }


}
