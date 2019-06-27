'use strict'

const logInTemplate = require('../templates/log-in-template.handlebars')
const signInTemplate = require('../templates/sign-in-template.handlebars')
const signUpTemplate = require('../templates/sign-up-template.handlebars')
const profileTemplate = require('../templates/profile-template.handlebars')

const setLogin = function () {
  const logIn = logInTemplate()
  $('#auth-container').html(logIn)
}
const setProfile = function () {
  const profile = profileTemplate()
  $('#auth-container').html(profile)
}

const setSignIn = function () {
  const signIn = signInTemplate()
  $('#log-in-container').html(signIn)
}

const setSignUp = function () {
  const signUp = signUpTemplate()
  $('#log-in-container').html(signUp)
}

const removeLogIn = function () {
  $('#log-in').remove()
  $('#create-new-post').removeClass('hidden')
  $('form').trigger('reset')
}

const removeProfile = function () {
  $('#profile').remove()
}

const setUserNameInNavBar = function (name) {
  $('#username').text(`Hello ${name}!`)
}

const changePasswordSuccess = function () {
  $('#message').text('Password changed successfully!')
  setTimeout(() => $('#message').text(''), 4000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out - Come back soon!')
  setTimeout(() => $('#message').text(''), 4000)
}

const welcomeMessage = function () {
  $('#message').text('Signed in and ready to go!')
  setTimeout(() => $('#message').text(''), 4000)
}

module.exports = {
  setLogin,
  setSignIn,
  setSignUp,
  setProfile,
  setUserNameInNavBar,
  removeLogIn,
  removeProfile,
  changePasswordSuccess,
  signOutSuccess,
  welcomeMessage
}
