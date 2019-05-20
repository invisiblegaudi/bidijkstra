const bidijkstra = (node1,graph1,heuristic1,node2,graph2,heuristic2,cb=()=>false) => {

  const search1 = require('child_process').fork('./dijkprocess.js',[node1,graph1,heuristic1])
  const search2 = require('child_process').fork('./dijkprocess.js',[node2,graph2,heuristic2])

  let path1 = [],
      path2 = [],
      match = false

  const status1 = search => {
    path1 = search.visited
    match = path1.filter((n)=>path2.includes(n)).length > 0
    if(match===true) {
      finish()
   }
  }

  const status2 = search => {
    path2 = search.visited
    match = path2.filter((n)=>path1.includes(n)).length > 0
    if(match===true) {
      finish()
    }
  }

  const finish = () => {
    cb([...path1,...path2.reverse()])
    search1.kill()
    search2.kill()
  }

  search1.on('message',status1)
  search2.on('message',status2)
}

module.exports = bidijkstra
