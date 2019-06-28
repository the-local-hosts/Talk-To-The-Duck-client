'use strict'

const store = require('./../../store.js')

const isLoggedIn = function () {
  if (store.user) {
    return true
  }
}

module.exports = isLoggedIn
