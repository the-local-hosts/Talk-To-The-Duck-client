'use strict'
const ui = require('./authUi')
const api = require('./authApi')
const getFormFields = require('../../../lib/get-form-fields')

const setLogIn = function () {
  ui.setLogin()
  ui.setSignIn()
}

const setSignUp = function (event) {
  event.preventDefault()
  ui.setSignUp()
}

const setSignIn = function (event) {
  event.preventDefault()
  ui.setSignIn()
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  api.signUp(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
}

module.exports = {
  setLogIn,
  setSignUp,
  setSignIn,
  onSignIn,
  onSignUp,
  onChangePassword
}
