const searchTypes = require('../search-types')
const heuristics = require('../heuristics')
const searchObserver = require('./search-observer')
const graphs = require('../stubs/graphs')

const searchInit = async (...args) => {

  const params = process && process.argv ? process.argv.slice(2) : [...args]

  const [target,graph,searchType,heuristic] = params

  try {
    await searchObserver(
      process,
      target,
      graph ? graphs[graph] : [],
      searchType ? searchTypes[searchType] : () => null,
      heuristic ? heuristics[heuristic] : () => null,
    )
  } catch(e) {
    throw new Error(e)
  }
}

searchInit()
