const chai = require('chai')
const {arrAtoZ} = require('./mocks/ranges')
const {findAtoZ} = require('../examples')
const should = chai.should()

should.should.have.property('fail')

describe('Bi-directional Dijkstra search', () => {

    it('returns a path equal to the alphabet', async () => {
        const path = await findAtoZ()
        path.should.be.like(arrAtoZ)
    })
})
