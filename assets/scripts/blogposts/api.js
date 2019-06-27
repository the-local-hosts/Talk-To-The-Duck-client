'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/blogposts',
    method: 'GET'
  })
}

module.exports = {
  index
}
