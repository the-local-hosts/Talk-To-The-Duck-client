'use strict'

const events = require('./auth/authEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.setLogIn()
  $('#auth-container').on('click', '#new-user', events.setSignUp)
  $('#auth-container').on('click', '#returning-user', events.setSignIn)

  $('#myDropdown').on('hide.bs.dropdown', function () {
    return false
  })
})
