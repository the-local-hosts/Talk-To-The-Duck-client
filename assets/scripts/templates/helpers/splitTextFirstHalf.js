// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const splitTextFirstHalf = (text) => {
  const wordArray = text.split(' ')
  const firstHalf = wordArray.slice(0, 100).join(' ')
  return firstHalf
}

module.exports = splitTextFirstHalf
