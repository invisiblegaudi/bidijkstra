const dfsTree = require('./dfs.stub.json.js')
// const Dijkstra = require('../dijkstra.js')
// const BFS = require('../bfs_p.js')
// TODO test stub, convert to MAP

class GraphNode {
  constructor(graph={}) {
    this.adjacentNodes = []
    this.root = graph || {}
    this.adjacentNodes = graph || {}
  }
  set root(graph={}) {
    this.root = Object.keys(graph)[0]
  }
  set adjacentNodes(graph={}){
    this.adjacentNodes = Object.values(graph)[0]
  }
  get adjacentNodes() {
    return this.adjacentNodes.apply(node=> new Map(node))
  }

}

class DFSNode {
  
}

const search = (graph=[],target='',getAdjacentNodes=async()=>[]) => {  //TODO get/set reverse flag via method
  let found = false

  // TODO queue accepts an array of objects
 //  const queue = sort? branch : branch.reverse() // TODO this is the heuristic, enqueue method should convert to WeakMap and add to the queue
  let queue = graph.slice().reverse(),
      visited = []

  while(queue.length && !found) {
    let next = queue.pop()
    const getNode = (items,obj) => Object[items](obj)[0] // gets the first value from array returned by object method

    console.log(next)
    let node = getNode('keys',next),
        adjacentNodes = getAdjacentNodes(queue.slice(),visited.slice())

    visited = [...visited,...(node?node:[])],

    found = node && node===target

    queue = [
      ...(adjacentNodes && adjacentNodes.length ? getNode(adjacentNodes,'values') : []),
      ...queue
    ]

  }
  return visited
}

const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.should()
chai.use(assertArrays);

describe('Depth first search', function(){
  it('default params dont throw error and return array',()=>{
    search().should.equal([])
  })
  it('searches traverses nodes in expected order',()=>{
    let arrToz = [...Array(26)].map(_=>(++i).toString(36),i=9)
    search(dfsTree,'z').should.equal(arrToz)
  })
})

