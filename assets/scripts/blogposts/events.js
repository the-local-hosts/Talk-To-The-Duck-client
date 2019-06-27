'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = function () {
  api.index()
    .then(ui.onIndexSuccess)
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

module.exports = {
  onGetPosts,
  onCreatePost
}
