const search = require('../search.ts')

const getPath = (...args) => {
  let path,
      job = {},
      searching = search(...args)

  while(!job.done) {
    job = searching.next()
    path = job.value ? job.value : path
  }

  return path
}

module.exports = {getPath}
