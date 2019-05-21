const p = require('child_process')

const bidijkstra = (node1,graph1,heuristic1,node2,graph2,heuristic2,cb=()=>false) => {

  const search1 = p.fork('./searchprocess',[node1,graph1,'dijkstra',heuristic1])
  const search2 = p.fork('./searchprocess.js',[node2,graph2,'dijkstra',heuristic2])

  console.log(search1)

  let path1 = [],
      path2 = []

  const finish = () => {
    search1.kill()
    search2.kill()

    return cb([...path1,...path2.reverse()])
  }

  const status1 = search => {
    path1 = search.visited

//    return path1.reduce((m,n)=>path2.includes(n),false) ? finish() : null
  }

  const status2 = search => {
     path2 = search.visited

//    return path2.reduce((m,n)=>path1.includes(n),false) ? finish() : null
  }

  search1.on('message',status1)
  search2.on('message',status2)
}

module.exports = bidijkstra
