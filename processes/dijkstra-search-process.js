const { runSearch } = require('./handlers/run-search')
const { dijkstra } = require('./algorithms/searches')

const runDijkstraSearch = runSearch(dijkstra)

runDijkstraSearch()
