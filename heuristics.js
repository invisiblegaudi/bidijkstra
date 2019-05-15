// these are various heuristics available for use with the search

const dfs = node => node instanceof Object ? Object.values(node)[0] : []  //depth first search

module.exports = {dfs}
