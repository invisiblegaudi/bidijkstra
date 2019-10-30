const { getChildren, getNode } = require('./traverse-graph')
const search = require('./search')

const dijkstra = (node={}, stack=[], visited=[], heuristic=()=>Infinity) => {

    const getAdjacent = n => 'adjacent' in getChildren(n) ? getChildren(n).adjacent : getChildren(n) //TODO move out...pass in adjnodesj and make async (get from init params)

    const calcDist = (d,j) => heuristic(getNode(d),getNode(j))

    const getDistance = n => Object.values(n)[0].distance

    const dijkNode = n => Object.assign({},{[getNode(n)]:{
        adjacent:getAdjacent(n), //TODO get from param
        distance:calcDist(node,n)
    }})

    const dijkStack = [...getAdjacent(node), ...stack]
          .filter(n=>!visited.includes(getNode(n)))
          .map(dijkNode)
          .sort((d,j)=>getDistance(d)-getDistance(j))

    return dijkStack

}

const dijkstraSearch = (...args) => search(dijkstra, ...args)

module.exports = {
  dijkstra,
  dijkstraSearch,
}
