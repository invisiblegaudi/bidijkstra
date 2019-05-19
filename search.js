const {getNode,getChildren} = require('./graph.js')

const search = (
  graph=[], //TODO get from getAdjacentNodes
  target='',getAdjacentNodes=async(next,stack,visited,heuristic)=>[],heuristic) => {

  let found = false,
      stack = graph instanceof Array ? graph.slice() : [], //TODO get from getAdjacentNodes
      visited = []

  const pop = stack => Object.assign({}, { next:stack.slice(0,1)[0],stack:stack.slice(1) })

  while(stack.length && !found) {

    let next; ({next,stack} = pop(stack))

    let node = getNode(next),
        adjacentNodes = getAdjacentNodes(next,stack.slice(),visited.slice(),heuristic)  //

    //TODO send adjacentnodes to algorthim (dijkstra) and add result to stack

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

  }

  return visited  //TODO yield from inside loop

}

module.exports = search
