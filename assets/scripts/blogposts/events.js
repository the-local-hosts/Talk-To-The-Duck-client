'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPosts = function () {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(console.error)
}

module.exports = {
  onGetPosts
}
