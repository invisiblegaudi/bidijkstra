// here are some preset heuristics readyxs for use with the search

const dfs = node => node instanceof Object ? Object.values(node)[0] : []  //depth first search

// const bfs = node => {
//   return node instanceof Object && Object.values(node)[0].length ? [] : node  //breadth first search
// }

const bfs = (node,stack,visited) => {
  console.log('n>',node,'s>',stack,'v>',visited)
  return node instanceof Object && Object.values(node)[0] && Object.values(node)[0].length ?
    [stack[1], ...Object.values(node)[0]] : []
    //Object.keys(node)[0]
}
module.exports = {dfs,bfs}
