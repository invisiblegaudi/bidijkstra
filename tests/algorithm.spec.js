const { test, describe } = require('node:test')
const assert = require('node:assert')
const {dfs} = require('../algorithm.js')
const {inputRange} = require('./mocks/ranges')

describe('Depth first search',()=>{
  test('returns empty array for bad inputs',()=>{
    inputRange.forEach(i=>assert.deepStrictEqual(dfs(i), []))
  })
})
