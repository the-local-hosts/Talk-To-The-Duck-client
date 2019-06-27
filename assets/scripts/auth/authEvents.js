'use strict'
const ui = require('./authUi.js')
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
      console.log(response)
      store.user = response.user
      ui.removeLogIn()
      ui.setProfile()
      ui.setUserNameInNavBar(store.user.name)
    })
    .then(ui.welcomeMessage)
    .catch(console.error)
}

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then((response) => {
      onSignIn(event) //  automatically sign-in the user
    })
    .catch(console.error)
}

const onSignOut = function (event) {
  api.signOut()
    .then((response) => {
      store.user = {}
      onSetLogIn()
    })
    .then(ui.signOutSuccess)
    .catch(console.error)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(console.error)
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
