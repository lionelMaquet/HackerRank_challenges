/*

queensAttack has the following parameters:
- n: an integer, the number of rows and columns in the board
- k: an integer, the number of obstacles on the board
- r_q: integer, the row number of the queen's position
- c_q: integer, the column number of the queen's position
- obstacles: a two dimensional array of integers where each element is an array of integers, the row and column of an obstacle

*/


function queensAttack(n, k, r_q, c_q, obstacles) {

  let size = n;
  let queenPos = [r_q, c_q];
  let attacks = 0;

  let obstaclesOnRow = [];
  let obstaclesOnCol = [];
  let obstaclesDiagOne = []; // diagonal from up left to down right
  let obstaclesDiagTwo = [];


  // Sorts obstacles in respective arrays

  for (let obstacle of obstacles) {


    if (obstacle[0] == queenPos[0]) {
      obstaclesOnRow.push(obstacle)
    } else if (obstacle[1] == queenPos[1]) {
      obstaclesOnCol.push(obstacle)
    }

    if ((obstacle[1] - obstacle[0]) == (queenPos[1] - queenPos[0])) {
      obstaclesDiagOne.push(obstacle)
    } else if ((obstacle[0] + obstacle[1]) == (queenPos[0] + queenPos[1])) {
      obstaclesDiagTwo.push(obstacle)
    }
  }

  // counts attacks on row

  let farAwayLeft = 0;
  let farAwayRight = size + 1;

  for (let obstacle of obstaclesOnRow) {
    if (obstacle[1] > farAwayLeft && obstacle[1] < c_q) {
      farAwayLeft = obstacle[1]
    } else if (obstacle[1] < farAwayRight && obstacle[1] > c_q) {
      farAwayRight = obstacle[1]
    }
  }


  attacks += ((farAwayRight - c_q) + (c_q - farAwayLeft)) -2

  // counts attacks on col

  let farAwayUp = 0;
  let farAwayDown = size + 1;

  for (let obstacle of obstaclesOnCol) {
    if (obstacle[0] > farAwayUp && obstacle[0] < r_q) {
      farAwayUp = obstacle[0]
    } else if (obstacle[0] < farAwayDown && obstacle[0] > r_q) {
      farAwayDown = obstacle[0]
    }
  }

  attacks += ((farAwayDown - r_q) + (r_q - farAwayUp)) -2

  // counts attacks on diagonal one

  let farLeftRowDiagOne;

  if (r_q <= c_q) {
    farLeftRowDiagOne = 0
  } else {
    farLeftRowDiagOne = r_q - c_q
  }

  let farRightRowDiagOne;

  if (r_q >= c_q) {
    farRightRowDiagOne = size +1
  } else {
    farRightRowDiagOne = (size +1) - (c_q - r_q)
  }


  for (let obstacle of obstaclesDiagOne) {
    if (obstacle[0] > farLeftRowDiagOne && obstacle[0] < r_q) {
      farLeftRowDiagOne = obstacle[0]
    } else if (obstacle[0] < farRightRowDiagOne && obstacle[0] > r_q) {
      farRightRowDiagOne = obstacle[0]
    }
  }

  attacks += ((farRightRowDiagOne - r_q) + (r_q - farLeftRowDiagOne)) -2


    // counts attacks on diagonal obstaclesDiagTwo

    let farLeftRowDiagTwo;

    if (r_q + c_q > size) {
      farLeftRowDiagTwo = size +1
    } else {
      farLeftRowDiagTwo = r_q + c_q
    }

    let farRightRowDiagTwo;

    if ((r_q + c_q) <= size +1) {
      farRightRowDiagTwo = 0
    } else {
      farRightRowDiagTwo = (r_q + c_q) - (size +1)
    }


    for (let obstacle of obstaclesDiagTwo) {
      if (obstacle[0] < farLeftRowDiagTwo && obstacle[0] > r_q) {
        farLeftRowDiagTwo = obstacle[0]
      } else if (obstacle[0] > farRightRowDiagTwo && obstacle[0] < r_q) {
        farRightRowDiagTwo = obstacle[0]
      }
    }

    attacks += ((farLeftRowDiagTwo - r_q) + ( r_q - farRightRowDiagTwo)) -2




  return attacks


}
