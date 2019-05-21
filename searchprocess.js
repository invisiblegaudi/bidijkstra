const algorithms = require('./algorithm.js')
const heuristics = require('./heuristic.js')
const bfs = require('./bfs.mock.json.js')
const bfs_rev = require('./bfs_rev.mock.json.js')
const dfs = require('./dfs.mock.json.js')

const searchProcess = async job => {
  
  const [graph,algorithm,heuristic] = [...process.argv.split(2)]

  const graphs = {bfs,bfs_rev,dfs}

  try {
    await job(
      process,
      (algorithm ? algorithms[algorithm] : () => null),
      (graph ? graphs[graph] : () => null),
      (heuristic ? heuristics[heuristic] : () => null),
    )
  } catch(e) {
    throw new Error(e)
  }
}

module.exports = searchProcess
