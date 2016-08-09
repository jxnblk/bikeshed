
const assert = require('assert')
const bikeshed = require('./index')

const hex = bikeshed()

assert(typeof hex === 'string')
assert(hex.length === 7)
assert(/^#[0-9a-f]{6}/.test(hex))

console.log('OK', hex)

