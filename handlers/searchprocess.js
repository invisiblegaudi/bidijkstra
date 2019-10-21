const algorithms = require('../algorithm.js')
const heuristics = require('../heuristic.js')
const {subscribeToJob} = require('../job.js')
const graphs = require('../tests/mocks/graphs')

const searchProcess = async (...args) => {

  const [target,graph,algorithm,heuristic] = process && process.argv ? process.argv.slice(2) : [...args]

  try {
    await subscribeToJob(
      process,
      target,
      (graph ? graphs[graph] : () => null),
      (algorithm ? algorithms[algorithm] : () => null),
      (heuristic ? heuristics[heuristic] : () => null),
    )
  } catch(e) {
    throw new Error(e)
  }
}

searchProcess()
