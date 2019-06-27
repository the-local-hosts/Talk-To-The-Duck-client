// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const moment = require('moment')

const formatDate = (date) => {
  return moment(date).format('dddd, MMMM Do YYYY')
}

module.exports = formatDate
