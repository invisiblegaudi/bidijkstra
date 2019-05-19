// graph structure defined by these fns

const getObj = (items='',obj={}) => obj instanceof Object ? Object[items](obj)[0] : []

const getNode = (node={}) => getObj('keys',node) ? getObj('keys',node) : []

const getChildren = (node={}) => getObj('values',node) ? getObj('values',node) : []

xmodule.exports = {getNode,getChildren}
