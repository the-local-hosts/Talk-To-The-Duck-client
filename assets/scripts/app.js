'use strict'

const authEventsHandler = require('./auth/authEvents')
const blogpostsEventsHandler = require('./blogposts/events.js')
const blogpostsUi = require('./blogposts/ui.js')

$(() => {
  // User authentication listeners
  $('#auth-container').on('click', '#returning-user', authEventsHandler.onSetSignIn)
  $('#auth-container').on('click', '#new-user', authEventsHandler.onSetSignUp)
  $('#auth-container').on('submit', '#sign-in-form-group', authEventsHandler.onSignIn)
  $('#auth-container').on('submit', '#sign-up-form-group', authEventsHandler.onSignUp)
  $('#auth-container').on('submit', '#change-password', authEventsHandler.onChangePassword)
  $('#auth-container').on('click', '#sign-out', authEventsHandler.onSignOut)
  $('#auth-container').on('click', '#edit-profile-picture', authEventsHandler.onEditPicture)
  $('.modals').on('submit', '#image-upload', authEventsHandler.onSetPicture)
  $('#auth-container').on('click', '#log-in-container', function (e) {
    e.stopPropagation()
  })

  // User interaction with post listeners
  $('#auth-container').on('click', '#create-new-post', blogpostsUi.showCreateForm)
  $('#auth-container').on('click', '#go-back', blogpostsEventsHandler.onSetAllPosts)
  $('.container').on('submit', '#new-blogpost', blogpostsEventsHandler.onCreatePost)
  $('.container').on('click', '.more-btn', blogpostsUi.onClickMore)
  $('.container').on('click', '.less-btn', blogpostsUi.onClickLess)
  $('.container').on('click', '.delete-post', blogpostsEventsHandler.onDeletePost)
  $('.container').on('click', '.update-post', blogpostsEventsHandler.onUpdateModal)
  $('.modals').on('submit', '#update-post-form', blogpostsEventsHandler.onUpdatePost)
  $('.container').on('submit', '.add-comment', blogpostsEventsHandler.onAddComment)
  $('.container').on('click', '.delete-comment', blogpostsEventsHandler.onDeleteComment)
  $('.container').on('click', '.show-update-comment', blogpostsUi.onShowUpdate)
  $('.container').on('submit', '.update-comment', blogpostsEventsHandler.onUpdateComment)
  $('.container').on('click', '.follow-user', blogpostsEventsHandler.onFollowUser)
  $('.container').on('click', '.like-post', blogpostsEventsHandler.onLikePost)

  blogpostsEventsHandler.onGetPosts() // get all posts before user sign-in
  authEventsHandler.onSetLogIn() // Important run this method last
})
