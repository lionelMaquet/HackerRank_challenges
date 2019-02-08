// First try -- Terminated due to timeout


/*
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
*/




// Second try -- Terminated due to timeout

/*
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
*/


// Third try -- Works !

function absolutePermutation(n, k) {

  if (k != 0) {
    if (!(n%(k*2) == 0)) {
      return [-1]
    }
  }


  let addK = true;
  let kCounter = 0;
  let answer = [];

  for (let i = 1; i <= n; i ++) {
    if (addK == true) {
      answer.push(i + k);
      kCounter++

      if (kCounter == k) {
        addK = false;
        kCounter = 0;
      }
    } else if (addK == false) {
      answer.push(i - k);
      kCounter++

      if (kCounter == k) {
        addK = true;
        kCounter = 0;
      }
    }
  }

  return answer;


}

console.log(tabsolutePermutation(12,3))
