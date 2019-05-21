const {searchJob} = require('./job.js')
const {dijkstra} = require('./algorithm.js')

const dijkJob = (...args) => searchJob(dijkstra,...args)

module.exports = {dijkJob}
