const bidijkstra = require('./bidijkstra')
let result
const getPath = async () => {
   try {
    result = await bidijkstra('z','bfs','charDist','a','bfs_rev','charDistRev')
    console.log(result)
   } catch(e) {
     console.error(e)
  }
}
//getPath()

const testy = function* testy() {
  let i = 0
  while(i<3) {
    yield ++i
  }
}


const test = testy()

const testGen = (gen) => {
  while(!test.next().done) console.log(test.next().value)
}

teest(test)
// while(!test.next().done) console.log(test.next().value)
