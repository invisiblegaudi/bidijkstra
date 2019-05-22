const {getNode} = require('./graph.js')
const heuristics = require('./heuristic.js')
const bfs = require('./bfs.mock.json.js')
const bfs_rev = require('./bfs_rev.mock.json.js')
const dfs = require('./dfs.mock.json.js')

function* search (target='', graph=[], algorithm=()=>[], heuristic) {

  let found = false,
      stack = graph instanceof Array ? graph.slice() : [],
      visited = []

  const pop = stack => Object.assign({}, { next:stack.slice(0,1)[0],stack:stack.slice(1) })

  while(stack.length && !found) {

    let next; ({next,stack} = pop(stack))

    let node = getNode(next),
        adjacentNodes = algorithm(next,stack.slice(),visited.slice(),heuristic)

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

    yield visited

  }

  return visited

}

module.exports = search
