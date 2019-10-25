const heuristics = require('../heuristics')
const searchObserver = require('./search-observer')
const graphs = require('../stubs/graphs')

const doSearch = search => {

  const nodeJSParentProcess = process

  const [target, graph, heuristic] = nodeJSParentProcess.argv.slice(2)

  searchObserver(
      nodeJSParentProcess,
      target,
      graphs[graph],
      search,
      heuristics[heuristic],
    )

 }

module.exports = doSearch
