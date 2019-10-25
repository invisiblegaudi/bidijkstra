const process = require('child_process')

describe('Dijkstra running in child process', () => {

  it('runs error free', () => {
    const dijkstra = process.fork('./processes/do-dijkstra-search')
    dijkstra.on('message',console.log)
  })
})
