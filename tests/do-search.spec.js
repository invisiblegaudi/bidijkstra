const process = require('child_process')
const chai = require('chai')
const {arrAtoZ} = require('../stubs/ranges')
const {findAtoZ} = require('../handlers/do-search')
const should = chai.should()

should.should.have.property('fail')

describe('Do search process', () => {

  const search = process.fork('../handlers/do-search',[])

  search.on('message', result => {
    it('no errors parameterless search', () => {
      result.path.should.be.like([])
    })
  })
})
