'use strict'

const store = require('./../../store.js')

const userPosts = function (postId) {
  if (store.user) {
    return store.user._id === postId
  }
}

module.exports = userPosts
