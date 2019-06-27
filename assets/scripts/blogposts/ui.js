'use strict'

const indexTemplate = require('../templates/index.handlebars')
const newBlogpostTemplate = require('../templates/new-blogpost.handlebars')
require('readmore-js/dist/readmore.js')

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
  setTimeout(() => $('#message').text(''), 4000)
}

const onCreateSuccess = function () {
  $('#message').text('Successfully added!')
  setTimeout(() => $('#message').text(''), 4000)
  $('form').trigger('reset')
}

const onClickMore = function () {
  const id = $(this).data('num')
  $(`#${id}`).find('.dots').addClass('hidden')
  $(`#${id}`).find('.expand').removeClass('hidden')
  $(this).addClass('hidden')
  $(`#${id}`).find('.less-btn').removeClass('hidden')
}

const onClickLess = function () {
  const id = $(this).data('val')
  $(`#${id}`).find('.dots').removeClass('hidden')
  $(`#${id}`).find('.expand').addClass('hidden')
  $(this).addClass('hidden')
  $(`#${id}`).find('.more-btn').removeClass('hidden')
}

module.exports = {
  onIndexSuccess,
  showCreateForm,
  onFailure,
  onCreateSuccess,
  onClickMore,
  onClickLess
}
