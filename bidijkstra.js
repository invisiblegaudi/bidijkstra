const p = require('child_process')

const bidijkstra = (node1,graph1,heuristic1,node2,graph2,heuristic2) => {

  const search1 = p.fork('./searchprocess.js',[node1,graph1,'dijkstra',heuristic1])
  const search2 = p.fork('./searchprocess.js',[node2,graph2,'dijkstra',heuristic2])

  let path1 = [],
      path2 = [],
      done

  const result = new Promise(resolve => {
    done = resolve;
  })

   // console.log(search1)
    // TODO:
    // const start = () => {
    //   const search1.send('start',[node1,graph1,'dijkstra',heuristic1])
    //   const search2.send('start',[node2,graph2,'dijkstra',heuristic2])
    // }

    const finish = () => {

      search1.kill()
      search2.kill()
      const combinedPath = new Set([...path1, ...path2.reverse()])

      return done([...combinedPath])
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
