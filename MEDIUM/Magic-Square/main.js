

function formingMagicSquare(s) {

  let possibleSquares = [

  [
    [4,9,2],
    [3,5,7],
    [8,1,6]
  ],

  [
    [2,9,4],
    [7,5,3],
    [6,1,8],
  ],

  [
    [6,1,8],
    [7,5,3],
    [2,9,4],
  ],

  [
    [8,1,6],
    [3,5,7],
    [4,9,2],
  ],

  [
    [8,3,4],
    [1,5,9],
    [6,7,2],
  ],

  [
    [4,3,8],
    [9,5,1],
    [2,7,6],
  ],

  [
    [2,7,6],
    [9,5,1],
    [4,3,8],
  ],

  [
    [6,7,2],
    [1,5,9],
    [8,3,4],
  ],

  ];

  let smallestSolution = 100000;

  for (let solution of possibleSquares) {

    let currentSolution = 0;

    for (let rowNumber = 0; rowNumber < 3; rowNumber++) {

      for (let numberPos = 0; numberPos < 3 ; numberPos++) {

        currentSolution += Math.abs(solution[rowNumber][numberPos] - s[rowNumber][numberPos])


      }


    }

    // checks if current solution is smaller
    // resets current solution to infinity

    console.log(currentSolution)

    if (currentSolution < smallestSolution) {
      smallestSolution = currentSolution;
    }

    currentSolution = 0;




  }

console.log(smallestSolution)
return smallestSolution

}

formingMagicSquare([[4,1,5],[7,6,4],[7,2,2]])
