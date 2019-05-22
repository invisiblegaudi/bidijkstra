const bidijkstra = require('./bidijkstra')
let result
getPath = async () => {
   try {
    result = await bidijkstra('z','bfs','charDist','a','bfs_rev','charDistRev')
    console.log(result)
   } catch(e) {
     console.error(e)
  }
}
getPath()
