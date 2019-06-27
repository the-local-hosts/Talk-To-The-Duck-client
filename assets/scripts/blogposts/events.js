'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSetAllPosts = function () {
  ui.setAllPosts(store.posts)
}

const onGetPosts = function () {
  api.index()
    .then((response) => {
      store.posts = response.posts
      onSetAllPosts()
    })
    .catch(ui.onFailure)
}

const onCreatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(onGetPosts)
    .catch(ui.onFailure)
}

const onUpdateModal = function (event) {
  ui.updateModal(event)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData) // need to make the update call to api but first I need to fix the string
}

const onDeletePost = function (event) {
  const id = $(event.target).data('delete')
  api.destroy(id)
    .then(ui.onDeleteSuccess)
    .then(onGetPosts)
    .catch(ui.onFailure)
}

module.exports = {
  onGetPosts,
  onCreatePost,
  onUpdateModal,
  onDeletePost,
  onSetAllPosts,
  onUpdatePost
}
