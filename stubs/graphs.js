const {arrTypes} = require('./ranges')
const graphAdjacent = adj => n => ({[n] : adj})
const graphTypeNodes = graphAdjacent(arrTypes)
const graphTypesDepth1= arrTypes.map(graphTypeNodes)
const addTypeNodesToGraph = graphAdjacent(graphTypesDepth1)
const graphTypesDepth2 = arrTypes.map(addTypeNodesToGraph)

const graphBFS = [
  {a:[
    {h:[]},
    {i:[
      {n:[]},
      {o:null},
      {p:false},
      {q:NaN},
      {r:0}
    ]},
    {j:[{s:[{v:[]}]}]}
  ]},
  {b:[{k:[]}]},
  {c:[]},
  {d:[{l:[{t:[{w:[{y:[]}]}]}]}]},
  {e:[{m:[{u:[{x:[{z:[]}]}]}]}]},
  {f:[]},
  {g:[]}
]
const graphBFSreverse = [
    {z:[
        {s:[]},
        {r:[
            {m:[]},
            {l:null},
            {k:false},
            {j:NaN},
            {i:0}
        ]},
        {q:[{h:[{e:[]}]}]}
    ]},
    {y:[{p:[]}]},
    {x:[]},
    {w:[{o:[{g:[{d:[{b:[]}]}]}]}]},
    {v:[{n:[{f:[{c:[{a:[]}]}]}]}]},
    {u:[]},
    {t:[]}
]

const graphDFS = [
  {a:[
    {b:[]},
    {c:[
      {d:[]},
      {e:null},
      {f:false},
      {g:NaN},
      {h:0}
    ]},
    {i:[{j:[{k:[]}]}]}
  ]},
  {l:[{m:[]}]},
  {n:[]},
  {o:[{p:[{q:[{r:[{s:[]}]}]}]}]},
  {t:[{u:[{v:[{w:[{x:[]}]}]}]}]},
  {y:[]},
  {z:[]}
]

module.exports = {graphTypeNodes,graphTypesDepth1,graphTypesDepth2,graphBFS,graphBFSreverse,graphDFS}
