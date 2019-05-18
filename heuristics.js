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
  const adjacent = "adjacent" in childNodes ? childNodes.adjacent : childNodes

  const alphaDist = (d,j) => Math.abs(d.charCodeAt() - j.charCodeAt())
  
  const dijkNode = n => Object.assign({},
                                      {[getNode(n)]:{
                                        adjacent,
                                        distance:alphaDist(name,getNode(n))
                                      }})

  const stackDistance = [...adjacent, ...stack]
        .filter(n=>!visited.includes(getNode(n)))
        .map(dijkNode)
        .sort((d,j)=>d.distance-j.distance)

  return stackDistance

}

module.exports = {dfs,bfs,dijkstra}
