// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const splitTextSecondHalf = (text) => {
  const wordArray = text.split(' ')
  const secondHalf = wordArray.slice(101).join(' ')
  return secondHalf
}

module.exports = splitTextSecondHalf
