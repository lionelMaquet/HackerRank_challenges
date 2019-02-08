// First try

function absolutePermutation(n, k) {

  let origArray = [];
  for (let i = 1; i <= n; i++) {
    origArray.push(i)
  }



  let used = [];
  let newArray = [];

  for (let number of origArray) {
    if (origArray.includes(number - k) && !used.includes(number-k)) {
      newArray.push(number-k);
      used.push(number-k)
    } else if (origArray.includes(number +k) && !used.includes(number+k)) {
      newArray.push(number+k);
      used.push(number+k)
    } else {
      return [-1]
    }
  }

  return newArray

}

console.log(absolutePermutation(100,2))


// Second try


function absolutePermutation(n, k) {

  let answer = []
  for (let i = 1; i <= n; i++) {
    if (i - k > 0 && !answer.includes(i - k)) {
      answer.push(i - k)
    } else if (i + k <= n && !answer.includes(i + k)) {
      answer.push(i + k)
    } else {
      return [-1]
    }
  }

  return answer

}
