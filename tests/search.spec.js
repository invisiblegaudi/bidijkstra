const chai = require('chai')
const fuzzy = require('chai-fuzzy')
const {getPath} = require('../coroutines/search')
const {dfs,bfs,dijkstra} = require('../algorithm')
const {inputRange,arrAtoZ} = require('./mocks/ranges')
const {charDist} = require('../heuristic')
const {graphDFS,graphBFS,graphTypesDepth1} = require('./mocks/graphs')

const should = chai.should()
chai.use(fuzzy)
should.should.have.property('fail')

describe('Shallow / Algorithmless search', ()=>{

  it('default params dont throw error and return array',()=>{
    getPath().should.be.like([])
  })

  it('visits all top nodes in order',()=>{
    getPath('j',graphBFS).should.be.like(arrAtoZ.slice(0,7))
    getPath('j',graphBFS).should.not.be.like(arrAtoZ.slice(0,3))
    getPath('z',graphTypesDepth1).should.be.like('falsenullNaNInfinity01z'.split(''))
  })

  it('returns empty array for bad inputs',()=>{
    getPath(inputRange,'z').should.be.like([])
    inputRange.forEach(i=>getPath(i).should.be.like([]))
    inputRange.forEach(i=>getPath(null,i).should.be.like([]))
    inputRange.forEach(i=>getPath(null,null,i).should.be.like([]))
  })
})

describe('Depth-first search',()=>{
  it('searches all nodes in dfs order',()=>{
    getPath('z',graphDFS,dfs).should.be.like(arrAtoZ)
  })
})

describe('Breadth-first search',()=>{
  it('visits all node in dfs order',()=>{
    getPath('z',graphBFS,bfs).should.be.like(arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  it('visits all nodes in alphabetical order in breadth-first ordered graph',()=>{
    getPath('z',graphBFS,dijkstra,charDist).should.be.like(arrAtoZ)
  })
  it('visits all nodes in alphabetical order in depth-first ordered graph',()=>{
    getPath('z',graphDFS,dijkstra,charDist).should.be.like(arrAtoZ)
  })
})
