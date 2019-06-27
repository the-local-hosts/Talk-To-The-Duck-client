'use strict'

const indexTemplate = require('../templates/index.handlebars')
const newBlogpostTemplate = require('../templates/new-blogpost.handlebars')
const updateTemplate = require('./../templates/update-modal.handlebars')

const onSetAllPosts = function (posts) {
  const indexHTML = indexTemplate({ posts: posts })
  $('.container').html(indexHTML)
}

const showCreateForm = function () {
  const newBlogpostHtml = newBlogpostTemplate
  $('.container').html(newBlogpostHtml())
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

const updateModal = function () {
  const updateModal = updateTemplate()
  $('.modals').html(updateModal)
  $('#update-post').modal('toggle')
}

const onDeleteSuccess = function () {
  $('#message').text('Post deleted!')
  setTimeout(() => $('#message').text(''), 4000)
}

module.exports = {
  onSetAllPosts,
  showCreateForm,
  onFailure,
  onCreateSuccess,
  onClickMore,
  onClickLess,
  updateModal,
  onDeleteSuccess
}
