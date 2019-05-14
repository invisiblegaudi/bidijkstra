const search = require('./search.js')

const dfsGraph = require('./dfs.stub.json.js')
const hlessGraph = require('./hless.stub.json.js')
const chai = require('chai');

chai.should()
chai.use(require('chai-fuzzy'));
describe('Heuristicless search', function(){

  it('default params dont throw error and return array',()=>{
    search().should.be.like([])
  })
  it('visits all top nodes in order',()=>{
    let arr2j = [...Array(10)].map(_=>(++i).toString(36),i=9) // array of chars a to j in alphabetical order
    search(hlessGraph,'j').should.be.like(arr2j)
    search(hlessGraph,'k').should.not.be.like(arr2j)
    search([{false:false},{null:null},{NaN:NaN},{Infinity:Infinity},{0:0}],'z')
      .should.be.like('falsenullNaNInfinity0'.split(''))
  })
  it('returns empty array for bad inputs',()=>{
    search([false,null,NaN,Infinity,0,1,'a'],'z').should.be.like([])
    search(null).should.be.like([])
    search(false).should.be.like([])
    search(NaN).should.be.like([])
    search(Infinity).should.be.like([])
    search(0).should.be.like([])
    search([]).should.be.like([])
    search({}).should.be.like([])
    search('a').should.be.like([])
    search(1).should.be.like([])
    search(new Map()).should.be.like([])
    search(new Set()).should.be.like([])
  })
})

