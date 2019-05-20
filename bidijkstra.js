const bidijkstra = (node1,graph1,heuristic1,node2,graph2,heuristic2,cb) => {

  const search1 = require('child_process').fork('./dijkprocess.js',[node1,graph1,heuristic1])
  const search2 = require('child_process').fork('./dijkprocess.js',[node2,graph2,heuristic2])

  let path1 = [],
      path2 = [],
      isMatch

  const matchFound = (d=[],j=[]) => {

    search1.kill()
    search2.kill()

    return [...d,...j.reverse()]
  }

  const match = (d=[],j=[]) => d.filter(j.includes).length ? matchFound(d,j) : null

  const comparePath1 = path => {
    path1 = path
    isMatch = match(path1,path2).length

    return isMatch? cb(isMatch) : null
    }
  const comparePath2 = path => {
    path2 = path
    isMatch = match(path1,path2).length

    return isMatch? cb(isMatch) : null
 }

  search1.on('message',comparePath1)
  search2.on('message',comparePath2)

}

module.exports = bidijkstra
