const {dijkSearch} = require('./dijkstra')

const dijkProcess = async() => {

  [_,__,graph,target,heuristic] = process && process.argv && process.argv.length ? process.argv : [null,null,null,null]

  try {
    await dijkSearch(process,graph,target,heuristic)
  } catch(e) {
    throw new Error(e)
  }
}
dijkProcess()
