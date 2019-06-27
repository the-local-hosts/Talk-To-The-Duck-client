'use strict'

const authEventsHandler = require('./auth/authEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#auth-container').on('click', '#returning-user', authEventsHandler.onSetSignIn)
  $('#auth-container').on('click', '#new-user', authEventsHandler.onSetSignUp)
  $('#auth-container').on('submit', '#sign-in-form-group', authEventsHandler.onSignIn)
  $('#auth-container').on('submit', '#sign-up-form-group', authEventsHandler.onSignUp)
  $('#auth-container').on('submit', '#change-password', authEventsHandler.onChangePassword)
  $('#auth-container').on('click', '#sign-out', authEventsHandler.onSignOut)
  $('#auth-container').on('click', '#log-in-container', function (e) {
    e.stopPropagation()
  })

  authEventsHandler.onSetLogIn() // Important run this method last
})
