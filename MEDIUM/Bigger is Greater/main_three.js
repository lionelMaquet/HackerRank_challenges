// Third try, following this explanation : https://www.nayuki.io/page/next-lexicographical-permutation-algorithm


function biggerIsGreater(w) {

  let origWord = w;

  //step 1 : translate word into numbers

  function lexTranslater(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lexNum = [];
    for (let letter of string) {
      lexNum.push(alphabet.indexOf(letter))
    }

    return lexNum

  }

  let lexWord = lexTranslater(w)


  //step 2 : find position of the pivot point

  function findPivot(array) {

    for (let i = lexWord.length -2; i >=0 ; i--) {
      if (w[i] < w[i+1]) {
        return i;
      }
    }

    return "no answer"

  }

  let pivotPos = findPivot(lexWord);


  // If there's no pivot, return "no answer"

  if (pivotPos == "no answer") {
    return "no answer"
  }

  //step 3 : find position of the element to swap with



  function swapWith(lexNums, valOfPivot) {

    for (let i = lexNums.length -1; i >= 0; i--) {
      if (lexNums[i] > valOfPivot) {
        return i
      }
    }

  }

  let elmtSwapWith = swapWith(lexWord, lexWord[pivotPos])


  // step 4 : swap the pivot with the other element

  origWord = origWord.split("")
  let temp = origWord[pivotPos];
  origWord[pivotPos] = origWord[elmtSwapWith];
  origWord[elmtSwapWith] = temp



  // step 5 : reverse letters after pivot pos

  function reverseLetters(pivotPos, string) {

    let newString = string.split('')
    let goingUp = pivotPos +1

    for (let i = string.length -1 ; i > goingUp ; i--) {
      let temp = string[goingUp];
      newString[goingUp] = newString[i]
      newString[i] = temp
      goingUp++
    }

    return newString.join('')

  }

  origWord = reverseLetters(pivotPos, origWord.join(''))

  return origWord

}

console.log(biggerIsGreater("dkhc"))
