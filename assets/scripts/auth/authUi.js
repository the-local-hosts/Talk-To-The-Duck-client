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
}

const removeProfile = function () {
  $('#profile').remove()
}

module.exports = {
  setLogin,
  setSignIn,
  setSignUp,
  setProfile,
  removeLogIn,
  removeProfile
}
