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

const update = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createComment = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + formData.post_id + '/comments',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const commentDestroy = function (commentId, blogId) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + blogId + '/comments/' + commentId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const commentUpdate = function (formData, postId, commentId) {
  return $.ajax({
    url: config.apiUrl + '/blogposts/' + postId + '/comments/' + commentId,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const followUser = function (userToFollowID) {
  return $.ajax({
    url: config.apiUrl + '/follow/' + userToFollowID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const likePost = function (postID) {
  return $.ajax({
    url: config.apiUrl + '/blogpost/' + postID + '/likes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  index,
  create,
  update,
  destroy,
  createComment,
  commentDestroy,
  commentUpdate,
  followUser,
  likePost
}
