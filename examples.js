const bidijkstra = require('./bidijkstra')

const search = require('./search')

const shallow = search(()=>{},'j','bfs','charDist')

let i = 0
while (!shallow.next().done) console.log(shallow.next().value)

bidijkstra('z','bfs','charDist','a','bfs_rev','charDistRev',console.log)

