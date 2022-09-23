const ghpages = require('gh-pages')

ghpages.publish('build', {
    remote: 'github'
}, function (err) {
    // eslint-disable-next-line no-console
    err && console.error(err)
})