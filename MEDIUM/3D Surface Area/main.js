// A = [[1,2,3][4,2,1],[5,3,4]] ...

function surfaceArea(A) {


  let sum = 0;
  let rows = A.length;
  let cols = A[0].length;
  let sides = [[0,1],[0,-1],[1,0],[-1,0]];
  console.log(rows,cols)
  for (let i = 0; i < rows ; i++) {

    for (let j = 0; j < cols ; j++) {

      for (let side of sides) {

        let currentSide = A[i][j];
        let checkedSide;



          for (let k = 1; k <= currentSide; k++) {
            if (i + side[0] < 0 || i + side[0] >= A.length || j + side[1] < 0 || j + side[1] >= A[0].length ) {
              sum++
              console.log(currentSide)
            } else {
              console.log(currentSide)


              checkedSide = A[(i + side[0])][j + (side[1])];
              if (checkedSide < k) {
                sum++
              }

          }

        }


      }

       sum+= 2// for the upper side

    }



  }

  return sum


}

console.log(surfaceArea([[1]]))
