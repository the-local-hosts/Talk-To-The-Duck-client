'use strict'

const events = require('./auth/authEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.setLogIn()
  $('#log-in-container').on('click', '#returning-user', events.setSignIn)
  $('#log-in-container').on('click', '#new-user', events.setSignUp)
  $('#auth-container').on('submit', '#sign-in-form-group', events.onSignIn)
  $('#auth-container').on('submit', '#sign-up-form-group', events.onSignUp)
  $('#auth-container').on('submit', '#change-password', events.onChangePassword)

  $('#myDropdown #log-in-container').on({
    'click': function (e) {
      e.stopPropagation()
    }
  })
})
