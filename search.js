const search = (graph=[],target='',getAdjacentNodes=async(next,stack,visited)=>[]) => {  //TODO get/set reverse flag via method

  const getNode = (items,obj) => obj instanceof Object ? Object[items](obj)[0] : null

  let found = false

  let stack = graph instanceof Array ? graph.slice() : [],  //TODO stack as Set?
      visited = []

  while(stack.length && !found) {

    const pop = stack => {return {next:stack.slice(0,1)[0],stack:stack.slice(1)}}
    // TODO node as Weakmap?

    let next
    ({next,stack} = pop(stack))

    let node = getNode('keys',next),
        adjacentNodes = getAdjacentNodes(next,stack.slice(),visited.slice()) //TODO heuristic, async by default?

    visited = [...visited,...(node ? node : [])]

    found = node && node===target

    stack = [
      ...(adjacentNodes && adjacentNodes.length ? adjacentNodes : []),
      ...stack,
    ]

  }
  return visited
}

module.exports = search
