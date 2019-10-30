const { getNode } = require('./traverse-graph.js')

const pop = (stack=[]) => Object.assign({}, { next:stack.slice(0,1)[0],stack:stack.slice(1) })

const search = function *search (target='', graph=[], algorithm=()=>[], heuristic) {
  let found = false,
      stack = graph instanceof Array ? graph.slice() : [],
      visited = []

  while(stack.length && !found) {

    let adjacentNodes, next; ({next,stack} = pop(stack))

    let node = getNode(next)

    try {

      adjacentNodes = algorithm(next,stack.slice(),visited.slice(),heuristic)


    } catch(e){console.error('ALG>>',typeof algorithm,e)}
    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

    yield visited

  }

  yield visited

}

module.exports = search
