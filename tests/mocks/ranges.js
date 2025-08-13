const inputRange = [false,null,NaN,Infinity,0,1,'a']
const arrAtoZ = [...Array(26)].map((_,i)=>(i+10).toString(36)) // array of chars a to z in alphabetical order
const arrTypes = [false,null,NaN,Infinity,0,1,'z',{},'',[]]

// Add after existing exports
const singleNodeGraph = [{a: []}]
const disconnectedGraph = [
  {a: [{b: []}]},
  {c: [{d: []}]}, // disconnected from a-b
  {e: []} // isolated node
]
const cyclicGraph = [
  {a: [{b: [{c: [{a: []}]}]}]} // creates a cycle a->b->c->a
]
const linearGraph = [
  {a: [{b: [{c: [{d: [{e: []}]}]}]}]}
]
const denseGraph = [
  {a: [{b: []}, {c: []}, {d: []}]},
  {b: [{a: []}, {c: []}, {d: []}]},
  {c: [{a: []}, {b: []}, {d: []}]},
  {d: [{a: []}, {b: []}, {c: []}]}
]
const largeGraph = [...Array(100)].map((_, i) => ({
  [String.fromCharCode(97 + (i % 26))]: i < 99 ? [{[String.fromCharCode(97 + ((i + 1) % 26))]: []}] : []
}))

module.exports = {
  inputRange, arrAtoZ, arrTypes,
  singleNodeGraph, disconnectedGraph, cyclicGraph, linearGraph, denseGraph, largeGraph
}
