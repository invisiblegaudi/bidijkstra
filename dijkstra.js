const search = require('./search.js')
const {dijkstra} = require('./algorithm.js')

const dijkInit = (...args) => search(dijkstra,...args)

const dijkSearch = (subscriber=()=>null,...args) => {

  const dijkSearching = dijkInit(...args)

  let path, search = dijkSearching.next()

  while(!search.done) {
    path = search.value
    subscriber.send({path})
    search = dijkSearching.next()
  }

  return path

}

module.exports = {dijkSearch,dijkInit}
