const { search } = require('./algorithms/search')
const { depthFirst } = require('./algorithms/depth-first')
const { breadthFirst } = require('./algorithms/breadth-first')
const { dijkstra } = require('./algorithms/dijkstra')

const depthFirstSearch = (...args) => search(depthFirst, ...args)
const breadthFirstSearch = (...args) => search(breadthFirst, ...args)
const dijkstraSearch = (...args) => search(dijkstra, ...args)

module.exports = {
  depthFirstSearch,
  breadthFirstSearch,
  dijkstraSearch,
}

