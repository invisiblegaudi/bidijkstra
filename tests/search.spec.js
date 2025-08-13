const { test, describe } = require('node:test')
const assert = require('node:assert')
const {getPath} = require('../coroutines/search')
const {dfs,bfs,dijkstra} = require('../algorithm')
const {inputRange,arrAtoZ,singleNodeGraph,disconnectedGraph,cyclicGraph,linearGraph,denseGraph,largeGraph} = require('./mocks/ranges')
const {charDist} = require('../heuristic')
const {graphDFS,graphBFS,graphTypesDepth1} = require('./mocks/graphs')

describe('Shallow / Algorithmless search', ()=>{

  test('default params dont throw error and return array',()=>{
    assert.deepStrictEqual(getPath(), [])
  })

  test('visits all top nodes in order',()=>{
    assert.deepStrictEqual(getPath('j',graphBFS), arrAtoZ.slice(0,7))
    assert.notDeepStrictEqual(getPath('j',graphBFS), arrAtoZ.slice(0,3))
    assert.deepStrictEqual(getPath('z',graphTypesDepth1), 'falsenullNaNInfinity01z'.split(''))
  })

  test('returns empty array for bad inputs',()=>{
    assert.deepStrictEqual(getPath(inputRange,'z'), [])
    inputRange.forEach(i=>assert.deepStrictEqual(getPath(i), []))
    inputRange.forEach(i=>assert.deepStrictEqual(getPath(null,i), []))
    inputRange.forEach(i=>assert.deepStrictEqual(getPath(null,null,i), []))
  })
})

describe('Depth-first search',()=>{
  test('searches all nodes in dfs order',()=>{
    assert.deepStrictEqual(getPath('z',graphDFS,dfs), arrAtoZ)
  })
})

describe('Breadth-first search',()=>{
  test('visits all node in dfs order',()=>{
    assert.deepStrictEqual(getPath('z',graphBFS,bfs), arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  test('visits all nodes in alphabetical order in breadth-first ordered graph',()=>{
    assert.deepStrictEqual(getPath('z',graphBFS,dijkstra,charDist), arrAtoZ)
  })
  test('visits all nodes in alphabetical order in depth-first ordered graph',()=>{
    assert.deepStrictEqual(getPath('z',graphDFS,dijkstra,charDist), arrAtoZ)
  })
})

describe('Edge case scenarios', () => {
  test('handles empty graph', () => {
    assert.deepStrictEqual(getPath('a', []), [])
  })
  
  test('handles single node graph', () => {
    assert.deepStrictEqual(getPath('a', singleNodeGraph), ['a'])
  })
  
  test('handles target not in graph', () => {
    assert.deepStrictEqual(getPath('z', singleNodeGraph), [])
  })
  
  test('handles disconnected graph components', () => {
    const result = getPath('d', disconnectedGraph)
    assert.ok(Array.isArray(result))
  })
})

describe('Graph topology tests', () => {
  test('linear graph traversal', () => {
    const result = getPath('e', linearGraph, bfs)
    assert.deepStrictEqual(result, ['a', 'b', 'c', 'd', 'e'])
  })
  
  test('cyclic graph handling', () => {
    const result = getPath('c', cyclicGraph, dfs)
    assert.ok(result.includes('a') && result.includes('b') && result.includes('c'))
    assert.ok(result.length <= 3) // Should not repeat nodes
  })
  
  test('dense graph exploration', () => {
    const result = getPath('d', denseGraph, bfs)
    assert.ok(result.includes('a') && result.includes('d'))
  })
})

describe('Algorithm comparison tests', () => {
  test('all algorithms find same target in simple graph', () => {
    const target = 'c'
    const graph = linearGraph
    
    const dfsResult = getPath(target, graph, dfs)
    const bfsResult = getPath(target, graph, bfs)
    const dijkstraResult = getPath(target, graph, dijkstra, charDist)
    
    // All should find the target
    assert.ok(dfsResult.includes(target))
    assert.ok(bfsResult.includes(target))
    assert.ok(dijkstraResult.includes(target))
  })
  
  test('algorithms may find different paths in complex graph', () => {
    const target = 'd'
    const graph = denseGraph
    
    const dfsResult = getPath(target, graph, dfs)
    const bfsResult = getPath(target, graph, bfs)
    
    // Both should find target but paths may differ
    assert.ok(dfsResult.includes(target))
    assert.ok(bfsResult.includes(target))
  })
})

describe('Performance tests', () => {
  test('handles large graph without timeout', { timeout: 5000 }, () => {
    const result = getPath('z', largeGraph, bfs)
    assert.ok(Array.isArray(result))
  })
  
  test('algorithms complete in reasonable time', { timeout: 1000 }, () => {
    const algorithms = [dfs, bfs, dijkstra]
    
    algorithms.forEach(algo => {
      const start = Date.now()
      getPath('g', graphBFS, algo, charDist)
      const duration = Date.now() - start
      assert.ok(duration < 500, `${algo.name} took too long: ${duration}ms`)
    })
  })
})
