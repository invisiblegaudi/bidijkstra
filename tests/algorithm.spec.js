const {dfs} = require('../search-types')
const {inputRange} = require('../stubs/ranges')

describe('Depth first search',()=>{
  it('returns empty array for bad inputs',()=>{
    inputRange.forEach(i=>dfs(i).should.be.like([]))
  })
})
