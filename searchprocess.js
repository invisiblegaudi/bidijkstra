const algorithms = require('./algorithm.js')
const heuristics = require('./heuristic.js')
const bfs = require('./bfs.mock.json.js')
const bfs_rev = require('./bfs_rev.mock.json.js')
const dfs = require('./dfs.mock.json.js')
const {subscribeToJob} = require('./job.js')

const searchProcess = async (...args) => {

  const [target,graph,algorithm,heuristic] = process && process.argv ? process.argv.slice(2) : [...args]
  const graphs = {bfs,bfs_rev,dfs}

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
