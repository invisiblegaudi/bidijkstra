const { test, describe } = require('node:test')
const assert = require('node:assert')
const {dfs, bfs, dijkstra} = require('../algorithm.js')
const {inputRange, singleNodeGraph, disconnectedGraph, cyclicGraph, linearGraph, denseGraph} = require('./mocks/ranges')
const {charDist} = require('../heuristic')

describe('Depth first search',()=>{
  test('returns empty array for bad inputs',()=>{
    inputRange.forEach(i=>assert.deepStrictEqual(dfs(i), []))
  })
})

describe('Breadth first search', () => {
  test('returns empty array for bad inputs', () => {
    inputRange.forEach(i => assert.deepStrictEqual(bfs(i), []))
  })
  
  test('handles single node graph', () => {
    assert.deepStrictEqual(bfs({a: []}), [])
  })
  
  test('handles cyclic graphs without infinite loops', () => {
    const result = bfs({a: [{b: [{c: [{a: []}]}]}]})
    assert.ok(Array.isArray(result))
    assert.ok(result.length < 10) // Should not loop infinitely
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
    const result = dijkstra({a: [{b: []}]}, [], [], constantHeuristic)
    assert.ok(Array.isArray(result))
  })
})
