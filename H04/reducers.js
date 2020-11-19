function main(params) {

  const results = params.results

  let arr = []

  for ( var i in results) {
    console.log(results[i])

    var reduce = results[i].reduce((acc, curr) => acc + curr)

    arr.push(reduce)
  }

  const solutions = arr.reduce((acc, curr) => acc + curr)

  return { "solutions": solutions}

}