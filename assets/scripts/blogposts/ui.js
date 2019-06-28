'use strict'

const indexTemplate = require('../templates/index.handlebars')
const newBlogpostTemplate = require('../templates/new-blogpost.handlebars')
const updateTemplate = require('./../templates/update-modal.handlebars')
const showAllPosts = require('./../templates/show-posts-button.handlebars')
const createPostButton = require('./../templates/create-post-button.handlebars')
const store = require('./../store.js')

const setAllPosts = function (responseData) {
  const createPost = createPostButton()
  for (let i = 0; i < responseData.length; i++) {
    if (responseData[i].postBody.length > 700) {
      responseData[i]['longPost'] = true
    } else {
      responseData[i]['longPost'] = false
    }
  }
  const indexHTML = indexTemplate({ posts: responseData })
  $('.container').html(indexHTML)
  $('.navigate-between-post-creation').html(createPost)
}

// const onIndexSuccess = function (responseData) {
//   for (let i = 0; i < responseData.posts.length; i++) {
//     if (responseData.posts[i].postBody.length > 700) {
//       responseData.posts[i]['longPost'] = true
//     } else {
//       responseData.posts[i]['longPost'] = false
//     }
//   }
//   const indexHTML = indexTemplate({ posts: responseData.posts })
//   $('.main-content').html(indexHTML)
// }

const showCreateForm = function () {
  const postsButton = showAllPosts()
  const newBlogpostHtml = newBlogpostTemplate
  $('.container').html(newBlogpostHtml())
  $('.navigate-between-post-creation').html(postsButton)
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

const updateModal = function (event) {
  const updateModal = updateTemplate()
  $('.modals').html(updateModal) // adds modal to it's container
  const postId = $(event.target).data('update') // grab the post ID
  const title = $(`[data-title=${postId}]`).text() // get content from post title
  const content = $(`[data-body=${postId}]`).text() // get content from post body
  $('#title-update').val(title) // set the title in modal
  $('#content-update').val(content) // set the content in modal
  $('#update-post').modal('toggle') // show modal
}

const onDeleteSuccess = function () {
  $('html,body').scrollTop(0)
  $('#message').text('Post deleted!')
  setTimeout(() => $('#message').text(''), 4000)
}

const onAddCommentSuccess = function () {
  $(`#${store.post_id}`).find('.comment-message').text('Successfully added!')
  setTimeout(() => $(`#${store.post_id}`).find('.comment-message').text(''), 4000)
  $('form').trigger('reset')
  let num = $(`#${store.post_id}`).find('.number-comments').text()
  num = Number(num) + 1
  $(`#${store.post_id}`).find('.number-comments').html(num)
  $(`#${store.post_id}`).find('.comments').append(`<p><strong>You said:</strong> ${store.addedComment}</p>`)
}

module.exports = {
  setAllPosts,
  showCreateForm,
  onFailure,
  onCreateSuccess,
  onClickMore,
  onClickLess,
  updateModal,
  onDeleteSuccess,
  onAddCommentSuccess
}
