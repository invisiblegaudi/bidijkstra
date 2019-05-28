const search = require('./search.js')
// const {dfs,bfs,dijkstra} = require('./heuristic.js')

// const dfsGraph = require('./dfs.mock.json.js')
const bfsGraph = require('./bfs.mock.json.js')
// const hlessGraph = require('./hless.mock.json.js')
const chai = require('chai')

// const input = [false,null,NaN,Infinity,0,1,'a']
const arrAtoZ = [...Array(26)].map(_=>(++i).toString(36),i=9) // array of chars a to z in alphabetical orde
const arrTypes = [false,null,NaN,Infinity,0,1,'z',{},'',[]]

const graphAdjacent = adj => n => ({[n] : adj})
const graphTypeNodes = graphAdjacent(arrTypes)
const graphTypesDepth1= arrTypes.map(graphTypeNodes)

// const addTypeNodesToGraph = graphAdjacent(graphTypesDepth1)

// const graphTypesDepth2 = arrTypes.map(addTypeNodesToGraph)

const getPath = (graph,target) => {
  let path,
      searching = search(graph,target)

  while(!searching.next().done) {
    path = searching.next().value
  }

  return path
}


const should = chai.should()
should.should.have.property('fail')

chai.use(require('chai-fuzzy'))
describe('Shallow / Algorithmless search', ()=>{

  it('default params dont throw error and return array',()=>{
//    getPath().value.should.be.like([])
  })
  it('visits all top nodes in order',()=>{

    getPath('j',bfsGraph).should.be.like(arrAtoZ.slice(0,7))
    getPath('j',bfsGraph).should.not.be.like(arrAtoZ.slice(0,3))
    getPath('z',graphTypesDepth1).should.be.like('falsenullNaNInfinity01z'.split(''))

  })
  it('returns empty array for bad inputs',()=>{
    // getPath(input,'z').should.be.like([])

    // input.forEach(i=>getPath(i).should.be.like([]))

    // input.forEach(i=>getPath(null,i).should.be.like([]))

    // input.forEach(i=>getPath(null,null,i).should.be.like([]))
  })
})

describe('Depth first search',()=>{
  it('returns empty array for bad inputs',()=>{
//    input.forEach(i=>dfs(i).should.be.like([]))
  })
  it('searches all nodes in dfs order',()=>{
  //  search(dfsGraph,'z',dfs).should.be.like(arrAtoZ)
  })
})

describe('Breadth first search',()=>{
  it('visits all node in dfs order',()=>{
  //  search(bfsGraph,'z',bfs).should.be.like(arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  it('visits all nodes in alphabetical order',()=>{
    // search(bfsGraph,'z',dijkstra).should.be.like(arrAtoZ)

    // search(dfsGraph,'z',dijkstra).should.be.like(arrAtoZ)
  })
})
