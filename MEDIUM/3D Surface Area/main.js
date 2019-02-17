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

        if (i + side[0] < 0 || i + side[0] >= A.length || j + side[1] < 0 || j + side[1] >= A[0].length ) {
          // if the side is an edge
          console.log(currentSide)
          sum+= currentSide
        } else {
          checkedSide = A[(i + side[0])][j + (side[1])];
            if (checkedSide < currentSide) {
              console.log(currentSide - checkedSide)
              sum += (currentSide - checkedSide)
            }
          }

        }

      sum+= 2// for the top and bottom sides
      }



    }


    return sum
  }






console.log(surfaceArea([ [ 1, 3, 4 ], [ 2, 2, 3 ], [ 1, 2, 4 ] ]))
