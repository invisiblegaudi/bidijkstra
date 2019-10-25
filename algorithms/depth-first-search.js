const { search } = require('./handlers/run-search')
const { getChildren } = require('./traverse-graph')

const depthFirst = (node={}, stack=[]) => [
    ...stack,
    ...getChildren(node),
]

const depthFirstSearch = (...args) => search(depthFirst, ...args)

module.exports = depthFirstSearch
