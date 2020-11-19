const _ = require('lodash')

function main(params) {

  const N = params.N
  const k = params.k

  const workers = Math.round(Math.pow(N / 3, k))

  let placements_from = []
  let placements_per_function = Math.pow(N,N)/workers

  for (var i of _.range(0, workers)) {

    const placement_from = i * Math.pow(N, N) / workers
    placements_from.push(placement_from)
  }

  var chunks = chunk(placements_from, 3)

  return {
    "workers": 3,
    "placements_from_first": chunks[0],
    "placements_from_second": chunks[1],
    "placements_from_third": chunks[2],
    "placements_per_function": placements_per_function
  }

}

const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
