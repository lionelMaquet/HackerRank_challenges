/*

queensAttack has the following parameters:
- n: an integer, the number of rows and columns in the board
- k: an integer, the number of obstacles on the board
- r_q: integer, the row number of the queen's position
- c_q: integer, the column number of the queen's position
- obstacles: a two dimensional array of integers where each element is an array of integers, the row and column of an obstacle

*/


function queensAttack(n, k, r_q, c_q, obstacles) {

  function isInGrid([x,y]) {
    if (x >= 1 && x <= size && y >= 1 && y <= size) {
      return true
    } else {
      return false;
    }
  }

  function isObstacle(pos) {

    for (let obstacle of obstacles) {
      if (JSON.stringify(obstacle) == JSON.stringify(pos)) { // simply comparing the arrays return false, even if values inside are the same
        return true
      }
    }

    return false
  }


  function directionCheck(arr) {

    let currentQP = queenPos.slice();

    while (isInGrid(currentQP) ) {

      let nextPos = [currentQP[0] += arr[0], currentQP[1] += arr[1]]

      if (!isObstacle(nextPos) && isInGrid(nextPos)) {
        currentQP = nextPos;
        attacks++;
      } else {
        break;
      }

    }
  }


  /**********/

  let size = n;
  let origQueenPos = [r_q, c_q];
  let queenPos = [r_q, c_q];
  let attacks = 0;

  directionCheck([1,0]) // down
  directionCheck([-1,0]) // up
  directionCheck([0,1]) // right
  directionCheck([0,-1]) // left
  directionCheck([1,1]) // down right
  directionCheck([-1,-1]) // up left
  directionCheck([1,-1]) // down left
  directionCheck([-1,1]) // up right

  return attacks

}

console.log(queensAttack(5, 1, 1 , 3, [[4,4]]))
