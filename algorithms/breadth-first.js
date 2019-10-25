const { getChildren } = require('./traverse-graph')

const breadthFirst = (node={}, stack=[]) => [
  ...stack,
  ...getChildren(node),
]

module.exports = breadthFirst
