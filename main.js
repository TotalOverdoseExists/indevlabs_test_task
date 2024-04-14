function missingNumber(arr) {
  const sorted = arr.sort((n, m) => { // sort an array to simplify iterating (need a function to sort numbers correctly)
    return n - m
  })

  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] === sorted[i + 1] - 1) { // if current element equals next element - 1 go to next iteration
      continue
    }
    else if(sorted[i + 1] === undefined) { // there is no missing number if an array ended
      return 'No missing number!'
    }
    else { // return a number because we need only first occurence
      return sorted[i] + 1
    }
  }
}

module.exports = missingNumber