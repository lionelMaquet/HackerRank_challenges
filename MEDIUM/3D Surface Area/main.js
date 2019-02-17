// A = [[1,2,3][4,2,1],[5,3,4]] ...

function surfaceArea(A) {

  let sum = 0;
  let rows = A.length;
  let cols = A[0].length;
  let sides = [[0,1],[0,-1],[1,0],[-1,0]];

  for (let i = 0; i < rows ; i++) {

    for (let j = 0; j < cols ; j++) {

      for (let side of sides) {

        let checkedSide = A[(i + side[0])][j + (side[1])];
        let currentSide = A[i][j]

        // uniquement ajouter si ce n'est ni le premier ou le dernier (array ou chiffre dans array)

        if (checkedSide) {
          if (checkedSide < currentSide) {
            sum++
          }
        } else {
          sum++
        }

      }

    }

  }

  return sum


}

console.log(surfaceArea([[1,2],[1,1]]))
