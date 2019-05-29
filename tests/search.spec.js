const search = require('../search.js')
// const {dfs,bfs,dijkstra} = require('../algorithm')
const {inputRange,arrAtoZ,arrTypes} = require('./mocks/ranges')


// const dfsGraph = require('../dfs.mock.json.js')
const bfsGraph = require('../bfs.mock.json.js')
const chai = require('chai')

const graphAdjacent = adj => n => ({[n] : adj})
const graphTypeNodes = graphAdjacent(arrTypes)
const graphTypesDepth1= arrTypes.map(graphTypeNodes)

// const addTypeNodesToGraph = graphAdjacent(graphTypesDepth1)

// const graphTypesDepth2 = arrTypes.map(addTypeNodesToGraph)

const getPath = (graph,target) => {
  let path,
      job = {},
      searching = search(graph,target)

  while(!job.done) {
    job = searching.next()
    path = job.value ? job.value : path
  }

  return path
}


const should = chai.should()
should.should.have.property('fail')

chai.use(require('chai-fuzzy'))
describe('Shallow / Algorithmless search', ()=>{

  it('default params dont throw error and return array',()=>{
    getPath().should.be.like([])
  })
  it('visits all top nodes in order',()=>{

    getPath('j',bfsGraph).should.be.like(arrAtoZ.slice(0,7))
    getPath('j',bfsGraph).should.not.be.like(arrAtoZ.slice(0,3))
    getPath('z',graphTypesDepth1).should.be.like('falsenullNaNInfinity01z'.split(''))

  })
  it('returns empty array for bad inputs',()=>{
    getPath(inputRange,'z').should.be.like([])

    inputRange.forEach(i=>getPath(i).should.be.like([]))
    inputRange.forEach(i=>getPath(null,i).should.be.like([]))
    inputRange.forEach(i=>getPath(null,null,i).should.be.like([]))
  })
})

describe('Depth first search',()=>{
  it('searches all nodes in dfs order',()=>{
   //getPath(dfsGraph,'z',dfs).should.be.like(arrAtoZ)
  })
})

describe('Breadth first search',()=>{
  it('visits all node in dfs order',()=>{
  //getPath(bfsGraph,'z',bfs).should.be.like(arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  it('visits all nodes in alphabetical order',()=>{
    // getPath(bfsGraph,'z',dijkstra).should.be.like(arrAtoZ)

    // getPath(dfsGraph,'z',dijkstra).should.be.like(arrAtoZ)
  })
})
