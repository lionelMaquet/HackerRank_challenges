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
    } else if ((obstacle[0] - obstacle[1]) == (queenPos[0] - queenPos[1])) {
      obstaclesDiagTwo.push(obstacle)
    }
  }

  // counts attacks on row

  let farAwayLeft = 0;
  let farAwayRight = size;

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
  let farAwayDown = size;

  for (let obstacle of obstaclesOnRow) {
    if (obstacle[0] > farAwayUp && obstacle[0] < r_q) {
      farAwayUp = obstacle[0]
    } else if (obstacle[0] < farAwayDown && obstacle[0] > r_q) {
      farAwayDown = obstacle[0]
    }
  }

  attacks += ((farAwayRight - c_q) + (c_q - farAwayLeft)) -2

  // counts attacks on diagonal one

  let farUpLeft = 

  return attacks





}


console.log(queensAttack(5, 1, 1 , 3, [[1,5],[1,1]]))
