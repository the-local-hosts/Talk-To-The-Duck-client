'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('./../store.js')

const onGetPosts = function () {
  api.index()
    .then((response) => {
      store.posts = response.posts
      ui.onSetAllPosts(store.posts)
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
  // const title = store
  ui.updateModal()
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
  onDeletePost
}
