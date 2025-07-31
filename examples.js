const bidijkstra = require('./bidijkstra')

const findAtoZ = async () => {
    const path = await bidijkstra('z','graphBFS','charDist','a','graphBFSreverse','charDistRev')
  console.log('The paths have converged! Here is the combined path:', path)
    return path
}

findAtoZ()

module.exports = {
    findAtoZ
}
