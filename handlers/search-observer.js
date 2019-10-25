const search = require('../algorithms/search')

const searchObserver = (processObserver, ...args) => {

    const searchGenerator = search(...args)

    generatorObserver(searchGenerator, processObserver)

}

module.exports = searchObserver
