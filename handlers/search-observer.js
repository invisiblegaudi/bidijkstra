const search = require('../algorithms/search')
const generatorObserver = require('../handlers/generator-observer')

const searchObserver = (processObserver, ...args) => {

  generatorObserver(processObserver, search(...args))

}

module.exports = searchObserver
