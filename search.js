const {getNode,getChildren} = require('./graph.js')

const search = (graph=[],target='',getAdjacentNodes=async(next,stack,visited)=>[]) => {

  let found = false,
      stack = graph instanceof Array ? graph.slice() : [],
      visited = [] 

  const pop = stack => Object.assign({}, { next:stack.slice(0,1)[0],stack:stack.slice(1) })

  while(stack.length && !found) {

    let next; ({next,stack} = pop(stack))

    let node = getNode(next),
        adjacentNodes = getAdjacentNodes(next,stack.slice(),visited.slice())

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

  }

  return visited

}

module.exports = search
