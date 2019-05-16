// here are some preset heuristics readyxs for use with the search

const {getChildren} = require('./graph.js')

const dfs = (node={},stack=[]) => [
    ...getChildren(node),
    ...stack,
  ]

const bfs = (node={},stack=[],visited=[]) => [
      ...stack,
      ...getChildren(node),
    ]

module.exports = {dfs,bfs}
