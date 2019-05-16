// here are some preset heuristics readyxs for use with the search
const getNode = (items='',obj={}) => obj instanceof Object ? Object[items](obj)[0] : []
const getChildren = (node={}) => getNode('values',node) ? getNode('values',node) : []

const dfs = (node,stack) => {
  return  [
    ...getChildren(node),
    ...stack
  ]
} //depth first search

// const bfs = node => {
//   return node instanceof Object && Object.values(node)[0].length ? [] : node  //breadth first search
// }

const bfs = (node,stack,visited) => {

  const result =
    [
      ...stack,
      ...getChildren(node),
    ]

  return result
}
module.exports = {dfs,bfs}
