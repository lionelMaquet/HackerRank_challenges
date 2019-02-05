
/**********SECOND TRY***********/
function biggerIsGreater(w) {

  var permArr = [], usedChars = [];
  function permute(input) {
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      ch = chars.splice(i, 1);
      usedChars.push(ch);
      if (chars.length == 0)
        permArr[permArr.length] = usedChars.join("");
      permute(chars.join(""));
      chars.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr
  };

  // Translates a string into a lexicological number
  function lexicologicalTranslater(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lexNum = [];
    for (let letter of string) {
      lexNum.push(alphabet.indexOf(letter))
    }

    return lexNum

  }

  function compareLex(number_one,number_two) {
    for (let i = 0; i < number_one.length; i++) {
      if (number_one[i] > number_two[i]) {
        return "greater"
      } else if (number_one[i] < number_two[i]) {
        return "smaller"
      }
    }

    return "same"
  }

  function quick_Sort(origArray) {
  	if (origArray.length <= 1) {
  		return origArray;
  	} else {

  		var left = [];
  		var right = [];
  		var newArray = [];
  		var pivot = origArray.pop();
  		var length = origArray.length;

  		for (var i = 0; i < length; i++) {
  			if (compareLex(lexicologicalTranslater(origArray[i]),lexicologicalTranslater(pivot)) == "smaller" || compareLex(lexicologicalTranslater(origArray[i]),lexicologicalTranslater(pivot)) == "same") {
  				left.push(origArray[i]);
  			} else {
  				right.push(origArray[i]);
  			}
  		}

  		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  	}
  }

  let sortedArray = quick_Sort(permute(w));

  // At this step, we have an array of all permutations sorted by lexicographical value

  for (let i = 0; i < sortedArray.length; i++) {
    if (compareLex(lexicologicalTranslater(sortedArray[i]),lexicologicalTranslater(w)) == "greater") {
      return sortedArray[i];
    }
  }

  return "no answer"

}

console.log(biggerIsGreater("dcbabbbb"))
