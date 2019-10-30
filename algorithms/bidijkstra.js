const process = require('child_process')

const bidijkstra = (node1,graph1,heuristic1,node2,graph2,heuristic2) => {

  let path1 = [],
      path2 = [],
      resolvePromise

  const result = new Promise(resolve => {
    resolvePromise = resolve
  })

  const search1 = process.fork('./processes/do-dijkstra-search',[node1,graph1,'dijkstraSearch',heuristic1])
  const search2 = process.fork('./processes/do-dijkstra-search',[node2,graph2,'dijkstraSearch',heuristic2])

    // TODO:
    // const start = () => {
  //   const search1.send('start',[node1,graph1,'dijkstra',heuristic1])
    //   const search2.send('start',[node2,graph2,'dijkstra',heuristic2])
    // }

  const finish = () => {

    search1.kill()
    search2.kill()
    const combinedPath = new Set([...path1, ...path2.reverse()])

    return resolvePromise([...combinedPath])
  }

    const status1 = search => {

        path1 = search.path

        return path1.reduce((m,n)=>path2.includes(n),false) ? finish() : null
    }

    const status2 = search => {

        path2 = search.path

        return path2.reduce((m,n)=>path1.includes(n),false) ? finish() : null
    }

  search1.on('message',status1)
  search2.on('message',status2)

  return result
}

module.exports = bidijkstra
