'use strict'
const ui = require('./authUi.js')
const postsEvents = require('./../blogposts/events.js')
const api = require('./authApi.js')
const store = require('./../store.js')
const getFormFields = require('../../../lib/get-form-fields')
const config = require('../config.js')

const onSetLogIn = function () {
  ui.setLogin()
  ui.setSignIn()
}

const onEditPicture = function () {
  ui.setPictureModal(event)
}

const onSetSignUp = function (event) {
  ui.setSignUp()
}

const onSetSignIn = function (event) {
  ui.setSignIn()
}

const onSetPicture = function (event) {
  event.preventDefault()
  const formData = new FormData(event.target)

  $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    contentType: false,
    processData: false,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
    .then(ui.changeProfilePicture)
    .catch(ui.changeProfilePictureFailure)
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
      ui.setProfilePicture()
      postsEvents.onGetPosts()
    })
    .then(ui.welcomeMessage)
    .then(postsEvents.onGetPosts)
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
      postsEvents.onSetAllPosts(store.posts)
      onSetLogIn()
    })
    .then(ui.signOutSuccess)
    .then(postsEvents.onGetPosts)
    .catch(ui.onAuthFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
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
  onEditPicture,
  onSetPicture,
  onSignOut
}
