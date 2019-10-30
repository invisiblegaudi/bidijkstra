const { getChildren } = require('./traverse-graph')

const depthFirst = (node={}, stack=[]) => [
  ...stack,
  ...getChildren(node),
]

module.exports = depthFirst
