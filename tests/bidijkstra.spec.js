const { test, describe } = require('node:test')
const assert = require('node:assert')
const {arrAtoZ} = require('./mocks/ranges')
const {findAtoZ} = require('../examples')

describe('Bi-directional Dijkstra search', () => {

    test('returns a path equal to the alphabet', async () => {
        const path = await findAtoZ()
        assert.deepStrictEqual(path, arrAtoZ)
    })
})
