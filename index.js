const search = require('./search.js')
const {dfs,bfs,dijkstra} = require('./algorithm.js')
const {charDist} = require('./heuristics.js')
const bfsGraph = require('./bfs.mock.json.js')
const dfsGraph = require('./dfs.mock.json.js')

search(
  dfsGraph, //TODO getAdjacentNodes function
  'z',dijkstra,charDist)

//TODO wrap sarch function in async call to wikipedia, pass in adjacent nodes and call search.next() and send output to parent process
