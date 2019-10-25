const search = require('../algorithms/search')
const generatorObserver = require('../handlers/generator-observer')

const searchObserver = (processObserver, ...args) => {

    const searchGenerator = search(...args)

    generatorObserver(searchGenerator, processObserver)

}

module.exports = searchObserver
