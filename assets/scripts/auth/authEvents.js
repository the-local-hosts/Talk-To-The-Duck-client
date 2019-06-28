'use strict'
const ui = require('./authUi.js')
const postsEvents = require('./../blogposts/events.js')
const api = require('./authApi.js')
const store = require('./../store.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSetLogIn = function () {
  ui.setLogin()
  ui.setSignIn()
}

const onSetSignUp = function (event) {
  ui.setSignUp()
}

const onSetSignIn = function (event) {
  ui.setSignIn()
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then((response) => {
      store.user = response.user
      ui.removeLogIn()
      ui.setProfile()
      ui.setUserNameInNavBar(store.user.name)
      postsEvents.onSetAllPosts()
    })
    .then(ui.welcomeMessage)
    .catch(ui.onAuthFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then((response) => {
      onSignIn(event) //  automatically sign-in the user
    })
    .catch(ui.onAuthFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then((response) => {
      store.user = false
      // store.user = {}
      postsEvents.onSetAllPosts(store.posts)
      onSetLogIn()
    })
    .then(ui.signOutSuccess)
    .catch(ui.onAuthFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.onAuthFailure)
}

module.exports = {
  onSetLogIn,
  onSetSignUp,
  onSetSignIn,
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
