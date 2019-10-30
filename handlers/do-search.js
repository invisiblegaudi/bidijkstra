const heuristics = require('../heuristics')
const searchObserver = require('./search-observer')
const graphs = require('../stubs/graphs')
const searches = require('../algorithms/searches')

const doSearch = _algorithm => {

  const nodeJSParentProcess = process

  const [target, graph, algorithm,  heuristic] = nodeJSParentProcess.argv.slice(2)

  const searchAlgorithm = algorithm ? algorithm : _algorithm

  searchObserver(
      nodeJSParentProcess,
      target,
      graphs[graph],
      searches[searchAlgorithm],
      heuristics[heuristic],
    )

 }

module.exports = doSearch
