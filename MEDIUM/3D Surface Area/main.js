// input is A
// structure of A = [[1,2,3][4,2,1],[5,3,4]] ...

function surfaceArea(A) {

  let area = 0;
  let rows = A.length;
  let cols = A[0].length;
  let sides = [[0,1],[0,-1],[1,0],[-1,0]]; // adds these numbers to i and j to check the numbers on each cell aside from the current one

  for (let i = 0; i < rows ; i++) {

    for (let j = 0; j < cols ; j++) {

      for (let side of sides) {

        let currentSide = A[i][j];
        let checkedSide;

        if (i + side[0] < 0 || i + side[0] >= A.length || j + side[1] < 0 || j + side[1] >= A[0].length ) { // if the side checked is an edge

          area += currentSide

        } else {

          checkedSide = A[(i + side[0])][j + (side[1])];

            if (checkedSide < currentSide) {

              area += (currentSide - checkedSide);

            }

          }

        }

      area += 2// for the top and bottom sides

      }

    }

    return area

  }


// Example
// console.log(surfaceArea([ [ 1, 3, 4 ], [ 2, 2, 3 ], [ 1, 2, 4 ] ]))
// Output area must be 60
