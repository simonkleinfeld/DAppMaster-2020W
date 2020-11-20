const _ = require('lodash')

function main(params) {

  const N = params.N
  const k = params.k
  const regions = params.R

  const workers = Math.round(Math.pow(N / 3, k))

  let placements_from = []
  const placements=Math.pow(N,N)
  const placements_per_function = Math.round(placements/workers)

  for (let i = 0; i <placements; i += placements_per_function) {
    placements_from.push(i);
  }
  const workers_per_loop = Math.round(workers / regions);
  let result = {
    "workers_per_loop": workers_per_loop,
    "placements_per_function": placements_per_function
  };

 //https://stackoverflow.com/questions/43288206/how-can-you-dynamically-slice-an-array-in-javascript-jquery
  const chunk = placements_from.length / regions;
  for (let i = 0; i < placements_from.length; i += chunk) {
    result['placements_'+(i / chunk)] = placements_from.slice(i, i + chunk);
  }

  return result

}

