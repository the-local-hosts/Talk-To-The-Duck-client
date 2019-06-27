'use strict'

const indexTemplate = require('../templates/index.handlebars')

const onIndexSuccess = function (responseData) {
  const indexHTML = indexTemplate({ posts: responseData.posts })
  $('.main-content').html(indexHTML)
}

module.exports = {
  onIndexSuccess
}
