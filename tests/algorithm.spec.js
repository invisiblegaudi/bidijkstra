L    assert.ok(Array.isArray(result))
    assert.ok(result.length < 10) // Should not loop infinitely
  })

  test('handles disconnected graph', () => {
    const result = bfs(disconnectedGraph)
    assert.ok(Array.isArray(result))
  })

  test('handles linear graph', () => {
    const result = bfs(linearGraph)
    assert.ok(Array.isArray(result))
  })

  test('handles dense graph', () => {
    const result = bfs(denseGraph)
    assert.ok(Array.isArray(result))
  })
})

describe('Dijkstra search', () => {
  test('returns empty array for bad inputs', () => {
    inputRange.forEach(i => assert.deepStrictEqual(dijkstra(i), []))
  })

  test('handles missing heuristic function', () => {
    assert.doesNotThrow(() => dijkstra({a: []}))
  })

  test('works with different heuristic functions', () => {
    const constantHeuristic = () => 1
    const testNode = {a: [{b: []}]}
    const result = dijkstra(testNode, [], [], constantHeuristic)
    assert.ok(Array.isArray(result))
  })

  test('handles single node graph', () => {
    const result = dijkstra(singleNodeGraph, [], [], charDist)
    assert.ok(Array.isArray(result))
  })

  test('handles disconnected graph', () => {
    const result = dijkstra(disconnectedGraph, [], [], charDist)
    assert.ok(Array.isArray(result))
  })

  test('handles cyclic graph', () => {
    const result = dijkstra(cyclicGraph, [], [], charDist)
    assert.ok(Array.isArray(result))
  })

  test('handles linear graph', () => {
    const result = dijkstra(linearGraph, [], [], charDist)
    assert.ok(Array.isArray(result))
  })

  test('handles dense graph', () => {
    const result = dijkstra(denseGraph, [], [], charDist)
    assert.ok(Array.isArray(result))
  })
})
