const search = require('./search');
const depthFirst = require('./depth-first')
const breadthFirst = require('./breadth-first')
const dijkstra = require('./dijkstra')

const depthFirstSearch = (...args) => search(depthFirst, ...args)
const breadthFirstSearch = (...args) => search(breadthFirst, ...args)
const dijkstraSearch = (...args) => search(dijkstra, ...args)

module.exports = {
  depthFirstSearch,
  breadthFirstSearch,
  dijkstraSearch,
}
