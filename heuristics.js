// here are some preset heuristics readyxs for use with the search

const {getChildren} = require('./graph.js')

const dfs = (node,stack) => {
  return  [
    ...getChildren(node),
    ...stack
  ]
}

const bfs = (node,stack,visited) => {

  const result =
    [
      ...stack,
      ...getChildren(node),
    ]

  return result
}
module.exports = {dfs,bfs}
