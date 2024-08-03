var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)
// if you prefer something other than '-' as separator
let b = slugify('swdcwser34rf  dfgert34edwa@', '@')  // some_string
console.log(b)