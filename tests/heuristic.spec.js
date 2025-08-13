const { test, describe } = require('node:test')
const assert = require('node:assert')
const {charDist, charDistRev} = require('../heuristic')

describe('Heuristic functions', () => {
  test('charDist calculates correct distance', () => {
    assert.strictEqual(charDist('a', 'b'), 1)
    assert.strictEqual(charDist('a', 'z'), 25)
    assert.strictEqual(charDist('z', 'a'), 25)
  })
  
  test('charDistRev calculates reverse distance', () => {
    assert.strictEqual(charDistRev('a', 'b'), 1)
    assert.strictEqual(charDistRev('b', 'a'), 1)
  })
  
  test('heuristics handle edge cases', () => {
    assert.doesNotThrow(() => charDist('', ''))
    assert.doesNotThrow(() => charDist('a', ''))
  })
})
