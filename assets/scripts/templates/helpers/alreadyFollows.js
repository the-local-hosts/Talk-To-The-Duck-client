'use strict'

const store = require('./../../store.js')

const alreadyFollows = function (ownerID) {
  return store.user.following.find(user => user === ownerID)
}

module.exports = alreadyFollows
