const { test, describe } = require('node:test')
const assert = require('node:assert')
const {arrAtoZ} = require('./mocks/ranges')
const {findAtoZ} = require('../examples')

describe('Bi-directional Dijkstra search', () => {

    test('returns a path equal to the alphabet', async () => {
        const path = await findAtoZ()
        assert.deepStrictEqual(path, arrAtoZ)
    })

    test('handles disconnected graphs gracefully', async () => {
        // This should test what happens when no path exists
        // You may need to create mock graphs that are disconnected
        // and verify the algorithm handles this case properly
    })

    test('finds optimal path in complex graph', async () => {
        // Test with a more complex graph structure
        // to verify bidirectional search efficiency
    })
})
