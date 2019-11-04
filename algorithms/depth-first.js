const { getChildren } = require('./graph-json')

const depthFirst = (node={}, stack=[]) => [
  ...stack,
  ...getChildren(node),
]

module.exports = depthFirst
