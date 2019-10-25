// here are some preset heuristics ready for use with the search

const charDist = (d,j) => Math.abs(d.charCodeAt() - j.charCodeAt())
const charDistRev = (d,j) => Math.abs(j.charCodeAt() - d.charCodeAt())


module.exports = {charDist,charDistRev}

