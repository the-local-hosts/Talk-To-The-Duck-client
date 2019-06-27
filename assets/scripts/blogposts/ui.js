'use strict'

const indexTemplate = require('../templates/index.handlebars')
const newBlogpostTemplate = require('../templates/new-blogpost.handlebars')

const onIndexSuccess = function (responseData) {
  const indexHTML = indexTemplate({ posts: responseData.posts })
  $('.main-content').html(indexHTML)
}

const showCreateForm = function () {
  const newBlogpostHtml = newBlogpostTemplate
  $('.main-content').html(newBlogpostHtml())
}

const onFailure = function () {
  $('#message').text('Something went wrong, please try again')
}

const onCreateSuccess = function () {
  $('#message').text('Successfully added!')
}

module.exports = {
  onIndexSuccess,
  showCreateForm,
  onFailure,
  onCreateSuccess
}
