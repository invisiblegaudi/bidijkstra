const searchTypes = require('../search-types')
const heuristics = require('../heuristics')
const searchObserver = require('./search-observer')
const graphs = require('../stubs/graphs')

const searchProcess = async () => {

  const [target,graph,searchType,heuristic] = process.argv.slice(2)

  try {
    await searchObserver(
      process,
      target,
      graph ? graphs[graph] : [],
      searchType ? searchTypes[searchType] : () => null,
      heuristic ? heuristics[heuristic] : () => null,
    )
  } catch(e) {
    process.send(e)
  }
}

searchProcess()
