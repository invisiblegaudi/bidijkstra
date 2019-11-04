const search = require('./search');
const depthFirst = require('./depth-first')
const breadthFirst = require('./breadth-first')
const dijkstra = require('./dijkstra')
const graphJSON = require('./graph-json')
const { charDist, charDistRev } = require('../heuristics')

const depthFirstSearch = (...args) => search(depthFirst, ...args)
const breadthFirstSearch = (...args) => search(breadthFirst, ...args)
const dijkstraSearch = (...args) => search(dijkstra, ...args)

const dfsJSON = (...args) => depthFirstSearch(graphJSON, ...args)
const bfsJSON = (...args) => breadthFirstSearch(graphJSON, ...args)
const dijkJSON = (...args) => dijkstraSearch(graphJSON, ...args)

const dfsJSONcharDist = (...args) => dfsJSON(charDist, ...args)
const dfsJSONcharDistRev = (...args) => dfsJSON(charDistRev, ...args)

const bfsJSONcharDist = (...args) => bfsJSON(charDist, ...args)
const bfsJSONcharDistRev = (...args) => bfsJSON(charDistRev, ...args)

const dijkJSONcharDist = (...args) => dijkJSON(charDist, ...args)
const dijkJSONcharDistRev = (...args) => dijkJSON(charDistRev, ...args)

module.exports = {
  depthFirstSearch,
  breadthFirstSearch,
  dijkstraSearch,
  dfsJSONcharDist,
  dfsJSONcharDistRev,
  bfsJSONcharDist,
  bfsJSONcharDistRev,
  dijkJSONcharDist,
  dijkJSONcharDistRev,
}
