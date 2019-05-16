const {getNode,getChildren} = require('./graph.js')

const search = (graph=[],target='',getAdjacentNodes=async(next,stack,visited)=>[]) => {
  //TODO search direction?

  let found = false,
      stack = graph instanceof Array ? graph.slice() : [],  //TODO stack as Set?
      visited = [] //TODO visited as Set?

  const pop = stack => { return { next:stack.slice(0,1)[0],stack:stack.slice(1) } }  // TODO make generic

  while(stack.length && !found) {

    let next; ({next,stack} = pop(stack))

    let node = getNode(next),
        adjacentNodes = getAdjacentNodes(next,stack.slice(),visited.slice())
    //TODO heuristic, async by default?

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)]

  }

  return visited

}

module.exports = search
