'use strict'
const ui = require('./authUi')

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

module.exports = {
  setLogIn,
  setSignUp,
  setSignIn
}
