const { getChildren } = require('./graph-json')

const breadthFirst = (node={}, stack=[]) => [
  ...stack,
  ...getChildren(node),
]

module.exports = breadthFirst
