const chai = require('chai')
const fuzzy = require('chai-fuzzy')
const search = require('../algorithms/search')
const {dfs,bfs,dijkstra} = require('../search-types')
const {inputRange,arrAtoZ} = require('../stubs/ranges')
const {charDist} = require('../heuristics')
const {graphDFS,graphBFS,graphTypesDepth1} = require('../stubs/graphs')
const { generatorResultIteration, generatorResultInitial, generatorResultFinal } = require('../handlers/generator-helpers')


const should = chai.should()
chai.use(fuzzy)
should.should.have.property('fail')

describe('Shallow / Algorithmless search', ()=>{

  it('default params dont throw error and return array',()=>{
    generatorResultInitial(search()).should.be.like([])
    generatorResultFinal(search()).should.be.like([])
  })

  it('visits all top nodes in order',()=>{
    generatorResultFinal(search('j', graphBFS)).should.be.like(arrAtoZ.slice(0,7));

    [...graphBFS.keys()].slice(1).forEach(
      i=>generatorResultIteration(i)(search('z', graphBFS))
        .should.be.like(arrAtoZ.slice(0,i)))

    generatorResultFinal(search('z', graphTypesDepth1)).should.be.like('falsenullNaNInfinity01z'.split(''))
  })

  it('returns empty array for bad inputs',()=>{
    generatorResultFinal(search(inputRange,'z')).should.be.like([])
    inputRange.forEach(i=>generatorResultFinal(search(i)).should.be.like([]))
    inputRange.forEach(i=>generatorResultFinal(search(null,i)).should.be.like([]))
    inputRange.forEach(i=>generatorResultFinal(search(null,null,i)).should.be.like([]))
  })
})

describe('Depth-first search',()=>{
  it('searches all nodes in dfs order',()=>{
    generatorResultFinal(search('z',graphDFS,dfs)).should.be.like(arrAtoZ)
  })
})

describe('Breadth-first search',()=>{
  it('visits all node in dfs order',()=>{
    generatorResultFinal(search('z',graphBFS,bfs)).should.be.like(arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  it('visits all nodes in alphabetical order in breadth-first ordered graph',()=>{
    generatorResultFinal(search('z',graphBFS,dijkstra,charDist)).should.be.like(arrAtoZ)
  })
  it('visits all nodes in alphabetical order in depth-first ordered graph',()=>{
    generatorResultFinal(search('z',graphDFS,dijkstra,charDist)).should.be.like(arrAtoZ)
  })
})

