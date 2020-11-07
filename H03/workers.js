const _ = require('lodash')

function main(params) {

  const N = params.N
  const k = params.k

  const workers = Math.pow(N / 3, k)

  let placements_from = []
  let placements_per_function = Math.pow(N,N)/workers

  for (var i of _.range(0, workers)) {

    const placement_from = i * Math.pow(N, N) / workers
    placements_from.push(placement_from)
  }

  return {
    "workers": workers,
    "placements_from": placements_from,
    "placements_per_function": placements_per_function
  }

}
