const generatorResultIteration = n => generator => [...generator].slice(n-1,n)[0],
      generatorResultFinal = generator => [...generator].slice(-1)[0]

const generatorResultInitial = generatorResultIteration(1)

module.exports = {
  generatorResultIteration,
  generatorResultInitial,
  generatorResultFinal,
}
