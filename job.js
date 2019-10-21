
const search = require('./search.js')

const searchJob = (subscriber=()=>({send:()=>null}),...args) => {

  const searching = search(...args)

  let path,
      job = searching.next()

  while(!job.done) {

    path = job.value
    subscriber.send({path})
    job = searching.next()

  }

  return path

}

const subscribeToJob = (sub,...args) => sub && sub.send
      ? searchJob(sub,...args) : new Error('Subscriber not a valid process!!')

module.exports = {searchJob,subscribeToJob}
