const heuristics = require('../heuristics')
const searchObserver = require('./search-observer')

const runAsProcess = routine => {

  if(process && typeof process.send === 'function') {
    throw new Error('not a valid process')
  }

  const [...args] = process.argv.slice(2)

  routine(process, ...args)

}

module.exports = runAsProcess(searchObserver)
