module.exports = (graph=[],target='',getAdjacentNodes=async()=>[]) => {  //TODO get/set reverse flag via method
  let found = false

  let stack = graph instanceof Array ? graph.slice().reverse() : [],  //TODO stack as Set?
      visited = []

  while(stack.length && !found) {

    const pop = stack => {return {next:stack.slice(-1)[0],stack:stack.slice(0,-1)}}
    const getNode = (items,obj) => obj instanceof Object ? Object[items](obj)[0] : null // TODO node as Weakmap?

    let next
    ({next,stack} = pop(stack))

    let node = getNode('keys',next),
        adjacentNodes = getAdjacentNodes(stack.slice(),visited.slice()) //TODO heuristic, async by default?

    visited = [...visited,...(node?node:[])]

    found = node && node===target

    stack = [
      ...(adjacentNodes && adjacentNodes.length ? getNode(adjacentNodes,'values') : []),
      ...stack
    ]

  }
  return visited
}
