import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  let match = members.sort().reduce((acc, item) => {
    if (typeof item === 'string' && item !== '') {
      acc.push(item.trim())
    }
    return acc;
  }, [])
  let arr = match.reduce((acc, item) => {
    if (item[0] !== item[0].toUpperCase()) {
      acc.push(item[0].toUpperCase())
    } else {
      acc.push(item[0])
    }
    return acc
  }, [])
  return arr.sort().join('')
}


