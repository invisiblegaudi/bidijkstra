const search = require('./search');
const depthFirst = require('./depth-first')
const breadthFirst = require('./breadth-first')
const dijkstra = require('./dijkstra')
const graphJSON = require('./graph-json')

const depthFirstSearch = (...args) => search(depthFirst, ...args)
const breadthFirstSearch = (...args) => search(breadthFirst, ...args)
const dijkstraSearch = (...args) => search(dijkstra, ...args)

const dfsJSON = (...args) => depthFirstSearch(graphJSON, ...args)
const bfsJSON = (...args) => breadthFirstSearch(graphJSON, ...args)
const dijkJSON = (...args) => dijkstraSearch(graphJSON, ...args)

module.exports = {
  depthFirstSearch,
  breadthFirstSearch,
  dijkstraSearch,
  dfsJSON,
  bfsJSON,
  dijkJSON,
}
