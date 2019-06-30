'use strict'

const store = require('./../../store.js')

const alreadyLikes = function (postID) {
  const post = store.posts.find(post => post.id === postID) // find the post
  return post.likes.find(like => like.likedBy === store.user._id) // checks if the user already liked the post
}

module.exports = alreadyLikes
