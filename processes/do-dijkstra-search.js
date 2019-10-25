const { doSearch } = require('./handler/do-search')
const { dijkstra } = require('./algorithms/searches')

const doDijkstraSearch = doSearch(dijkstra)

doDijkstraSearch()
