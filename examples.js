const bidijkstra = require('./bidijkstra')

const findAtoZ = async () => {
    const path = await bidijkstra('z','graphBFS','charDist','a','graphBFSreverse','charDistRev')
    console.log('Match found! Result of both paths convererging:', path)

    return path
}

findAtoZ()

module.exports = {
    findAtoZ
}
