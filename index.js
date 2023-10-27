const {version} = require('./package.json')

console.warn('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
console.warn('test module loaded', 'version: ', version)
console.warn('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')

module.exports = {
    nav: {buttons: []},
    name: "FB test name",
    tab: "FB test tab",
}
