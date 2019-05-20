const {getNode} = require('./graph.js')
const heuristics = require('./heuristic.js')
const bfs = require('./bfs.mock.json.js')
const dfs = require('./dfs.mock.json.js')
const graphs = {bfs,dfs}

function* search (
  algorithm=()=>[],
  target='',
  graphName=[], //TODO get from algorithm
  heuristic,
) {

  let found = false, graph = graphs[graphName],
      stack = graph instanceof Array ? graph.slice() : [], //TODO get from algorithm
      visited = []

  const pop = stack => Object.assign({}, { next:stack.slice(0,1)[0],stack:stack.slice(1) })

  while(stack.length && !found) { //TODO: while loop goes outside

    let next; ({next,stack} = pop(stack))

    let node = getNode(next),
        adjacentNodes = algorithm(next,stack.slice(),visited.slice(),heuristics[heuristic])  //

    //Todo send adjacentnodes to algorthim (dijkstra) and add result to stack

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

    yield visited

  }

}

module.exports = search
