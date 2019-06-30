
'use strict'

const moment = require('moment')

const formatDate = (date) => {
  return moment(date).format('dddd, MMMM Do YYYY')
}

module.exports = formatDate
