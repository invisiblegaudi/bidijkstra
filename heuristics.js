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
  const childNodes = getChildren(node)
  const getAdjacent = n => "adjacent" in getChildren(n) ? getChildren(n).adjacent : getChildren(n)
  const alphaDist = (d,j) => Math.abs(d.charCodeAt() - j.charCodeAt())

  const dijkNode = n => Object.assign(
    {},
    {[getNode(n)]:{
      adjacent:getAdjacent(n),
      distance:alphaDist(name,getNode(n))
    }})

  const getDistance = n => Object.values(n)[0].distance

  const stackDistance = [...getAdjacent(node),...stack]
        .filter(n=>!visited.includes(getNode(n)))
        .map(dijkNode)
//        .sort((d,j)=>d.distance-j.distance)
        .sort((d,j)=>getDistance(d)-getDistance(j))

  return stackDistance

}

module.exports = {dfs,bfs,dijkstra}
