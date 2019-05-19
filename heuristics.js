// here are some preset heuristics ready for use with the search

const {getChildren,getNode} = require('./graph.js')

const dfs = (node={},stack=[]) => [
  ...getChildren(node),
  ...stack,
]

const bfs = (node={},stack=[],visited=[]) => [
  ...stack,
  ...getChildren(node),
]

const charDist = (d,j) => Math.abs(d.charCodeAt() - j.charCodeAt())

const dijkstra = (node={},stack=[],visited=[]) => {

  const getAdjacent = n => "adjacent" in getChildren(n) ? getChildren(n).adjacent : getChildren(n)
  const calcDist = (d,j) => charDist(getNode(d),getNode(j))
  const getDistance = n => Object.values(n)[0].distance

  const dijkNode = n => Object.assign(
    {},
    {[getNode(n)]:{
      adjacent:getAdjacent(n),
      distance:calcDist(node,n)
    }})

  const dijkStack = [...getAdjacent(node),...stack]
        .filter(n=>!visited.includes(getNode(n)))
        .map(dijkNode)
        .sort((d,j)=>getDistance(d)-getDistance(j))

  return dijkStack

}

module.exports = {dfs,bfs,dijkstra,charDist}
