var css = require('sheetify')
var choo = require('choo')
var chooSlides = require('@geut/choo-slides')
var slides = require('./slides')

css('tachyons')
css('@geut/choo-slides')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  // Enable once you want service workers support. At the moment you'll
  // need to insert the file names yourself & bump the dep version by hand.
  // app.use(require('choo-service-worker')())
}

app.use(chooSlides({ slides }))

if (!module.parent) app.mount('body')
else module.exports = app
