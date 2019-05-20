const search = require('./search.js')
const {dfs,bfs,dijkstra} = require('./heuristic.js')
const dfsGraph = require('./dfs.mock.json.js')
const bfsGraph = require('./bfs.mock.json.js')
const hlessGraph = require('./hless.mock.json.js')
const chai = require('chai')

const input = [false,null,NaN,Infinity,0,1,'a']
const  arrAtoZ = [...Array(26)].map(_=>(++i).toString(36),i=9) // array of chars a to z in alphabetical orde

chai.should()
chai.use(require('chai-fuzzy'))
describe('Heuristicless search', ()=>{

  it('default params dont throw error and return array',()=>{
    search().should.be.like([])
  })
  it('visits all top nodes in order',()=>{
    let arrAtoJ = [...Array(10)].map(_=>(++i).toString(36),i=9) // array of chars a to j in alphabetical order
    search(hlessGraph,'j').should.be.like(arrAtoJ)
    search(hlessGraph,'k').should.not.be.like(arrAtoJ)
    search([{false:false},{null:null},{NaN:NaN},{Infinity:Infinity},{0:0}],'z')
      .should.be.like('falsenullNaNInfinity0'.split(''))
  })
  it('returns empty array for bad inputs',()=>{
    search(input,'z').should.be.like([])
    input.forEach(i=>search(i).should.be.like([]))
    input.forEach(i=>search(null,i).should.be.like([]))
    input.forEach(i=>search(null,null,i).should.be.like([]))
  })
})

describe('Depth first search',()=>{
  it('returns empty array for bad inputs',()=>{
    input.forEach(i=>dfs(i).should.be.like([]))
  })
  it('searches all nodes in dfs order',()=>{
    search(dfsGraph,'z',dfs).should.be.like(arrAtoZ)
  })
})

describe('Breadth first search',()=>{
  it('visits all node in dfs order',()=>{
    search(bfsGraph,'z',bfs).should.be.like(arrAtoZ)
  })
})

describe('Dijkstra search',()=>{
  it('visits all nodes in alphabetical order',()=>{
    search(bfsGraph,'z',dijkstra).should.be.like(arrAtoZ)
    search(dfsGraph,'z',dijkstra).should.be.like(arrAtoZ)
  })
})
