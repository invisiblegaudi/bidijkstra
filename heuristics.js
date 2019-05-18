// here are some preset heuristics readyxs for use with the search

const {getChildren,getNode} = require('./graph.js')

const dfs = (node={},stack=[]) => [
    ...getChildren(node),
    ...stack,
  ]

const bfs = (node={},stack=[],visited=[]) => [
      ...stack,
      ...getChildren(node),
    ]

const dijkstra = (node={},stack=[],visited=[]) => {

  const name = getNode(node)

  const current = !node.distance ?
        new Object(
          {[name] : {adjacent:getChildren(node),distance:Infinity}}
        ) : node

  const nodeAttrs = n => n[getNode(n)]
  const alphaDist = (d,j) => Math.abs(d.charCodeAt() - j.charCodeAt())

  const stackDistance = [
    ...stack,
    ...(current[name].adjacent.length
        ? current[name].adjacent
        : [])
  ]  // bfs, dfs insertion here?
        // .map(n=>new Object({[getNode(n)]:{adjacent:getChildren(n),distance:alphaDist(name,getNode(n))}}))
        // .map(console.log)
        // .map(n=>
        //      new Object(
        //        {[getNode(n)]:{adjacent:getChildren(n),distance:alphaDist(name,getNode(n))}}
        //      ))

  console.log(stackDistance)
  return stackDistance

}

module.exports = {dfs,bfs,dijkstra}
