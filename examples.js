const bidijkstra = require('./bidijkstra')

bidijkstra('z','bfs','charDist','a','bfs_rev','charDistRev',console.log)

const search = require('./search')

const shallow = search(()=>{},'j','bfs','charDist')

let i = 0
while (!shallow.next().done) console.log(shallow.next().value)
