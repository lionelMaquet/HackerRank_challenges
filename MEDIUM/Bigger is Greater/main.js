

// CURRENTLY TERMINATED DUE TO TIMETOUT


function biggerIsGreater(w) {

  // Input is a string, output is an array with all possible permutations of string

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
    for (letter of string) {
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


  /**********************/

  let originalLex = lexicologicalTranslater(w);
  let bestPermLex = [];
  let bestPerm = "no answer";

  for (number of originalLex) {
    bestPermLex.push(Infinity)
  }

  for (let permutation of permute(w)) {

    let permLex = lexicologicalTranslater(permutation)
    if (compareLex(permLex,originalLex) == "greater" && compareLex(permLex, bestPermLex) == "smaller" ) {
      bestPermLex = lexicologicalTranslater(permutation);
      bestPerm = permutation;
    }
  }

  return bestPerm;

}
