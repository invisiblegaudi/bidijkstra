// graph structure defined by these fns

const getNode = (items='',obj={}) => obj instanceof Object ? Object[items](obj)[0] : []
const getChildren = (node={}) => getNode('values',node) ? getNode('values',node) : []

module.exports = {getNode,getChildren}
