const generatorObserver = require('./generator-observer')
const subscriber = require('./subscriber')
const generator = require('./generator')

describe('generator observer', () => {

  it('accepts a generator and observer', () => {
    generatorObserver(generator, subscriber)
  })

})
