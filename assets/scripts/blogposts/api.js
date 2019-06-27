'use strict'

const config = require('../config.js')
const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/blogposts',
    method: 'GET'
  })
}

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/blogposts',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  create
}
