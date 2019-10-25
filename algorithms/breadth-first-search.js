const { search } = require('./handlers/run-search')
const { getChildren } = require('./traverse-graph')

const breadthFirst = (node={}, stack=[]) => [
    ...stack,
    ...getChildren(node),
]

const breadthFirstSearch = (...args) => search(breadthFirst, ...args)

module.exports = breadthFirstSearch
