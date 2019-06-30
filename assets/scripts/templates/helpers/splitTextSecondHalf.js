
'use strict'

const splitTextSecondHalf = (text) => {
  const wordArray = text.split(' ')
  const secondHalf = wordArray.slice(100).join(' ')
  return secondHalf
}

module.exports = splitTextSecondHalf
