const bidijkstra = require('./bidijkstra')
let path
getPath = async () => {
  let path
  try {
    path = await bidijkstra('z','graphBFS','charDist','a','graphBFSreverse','charDistRev')
    console.log(path)
  } catch(e) {
    console.error(e)
  }
  return path
}
