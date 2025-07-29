const { test, describe } = require('node:test')
const assert = require('node:assert')
const {getPath} = require('../coroutines/search')
const {dfs,bfs,dijkstra} = require('../algorithm')
const {inputRange,arrAtoZ} = require('./mocks/ranges')
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
