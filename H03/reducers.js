function main(params) {

  const results = params.results
  const solutions = results.reduce((acc, curr) => acc + curr)
  return { "solutions": solutions}

}