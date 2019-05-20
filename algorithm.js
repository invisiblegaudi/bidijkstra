// here are some preset heuristics ready for use with the search

const {getChildren,getNode} = require('./graph.js')

const dfs = (node={},stack=[]) => [
  ...getChildren(node),
  ...stack,
]

const bfs = (node={},stack=[]) => [
  ...stack,
  ...getChildren(node),
]

const dijkstra = (node={},stack=[],visited=[],heuristic=()=>Infinity)=> {
  console.log(heuristic)

  const getAdjacent = n => "adjacent" in getChildren(n) ? getChildren(n).adjacent : getChildren(n) //TODO move out...pass in adjnodesj and make async (get from init params)
  const calcDist = (d,j) => heuristic(getNode(d),getNode(j))
  const getDistance = n => Object.values(n)[0].distance
  const dijkNode = n => Object.assign(
    {},
    {[getNode(n)]:{
      adjacent:getAdjacent(n), //TODO get from param
      distance:calcDist(node,n)
    }})

  const dijkStack = [
    ...getAdjacent(node), //TODO get from param
    ...stack
  ]
        .filter(n=>!visited.includes(getNode(n)))
        .map(dijkNode)
        .sort((d,j)=>getDistance(d)-getDistance(j))

  return dijkStack

}

module.exports = {dfs,bfs,dijkstra}
