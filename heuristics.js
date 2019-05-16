// here are some preset heuristics readyxs for use with the search
const getNode = (items='',obj={}) => obj instanceof Object ? Object[items](obj)[0] : []
const getChildren = (node={}) => getNode('values',node) ? getNode('values',node) : []

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
