const generatorObserver = (observer, generator) => {

  let state,
      iterator = generator.next()

  while(!iterator.done) {

    state = iterator.value
    observer.send({ state })
    iterator = generator.next()

  }

  return state
}

module.exports = generatorObserver