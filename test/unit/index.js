// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', false, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require only vuex store.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src/store')
srcContext.keys().forEach(srcContext)
