const generatorObserver = require('../handlers/generator-observer')
const generator = require('../stubs/generator')
const nodeJSParentProcess = require('../stubs/process')

describe('generator observer', () => {

  it('accepts a generator and observer', () => {
    generatorObserver(generator, nodeJSParentProcess)
  })

})
