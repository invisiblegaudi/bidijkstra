const {dfs} = require('../algorithm.js')
const {inputRange} = require('./mocks/ranges')

describe('Depth first search',()=>{
  it('returns empty array for bad inputs',()=>{
    inputRange.forEach(i=>dfs(i).should.be.like([]))
  })
})
