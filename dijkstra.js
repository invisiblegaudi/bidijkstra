const search = require('./search.js')
const {dijkstra} = require('./algorithm.js')

const dijkInit = (...args) => search(dijkstra,...args)

const dijkSearch = (subscriber=()=>null,...args) => {

  const dijkSearching = dijkInit(...args)

  let visited, path = dijkSearching.next()

  while(!path.done) {
    visited = path.value
    subscriber.send({visited})
    path = dijkSearching.next()
  }

  return visited

}

module.exports = {dijkSearch,dijkInit}
