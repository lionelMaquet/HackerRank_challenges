/* Challenge is available here : https://www.hackerrank.com/challenges/encryption/problem */

// Step 1 : Remove spaces
// Step 2 : Display string in rows
// Step 3 : Return string displayed like : every element of row 1, space, every element of row 2

function encryption(s) {
  let trimmedS = removeSpaces(s);

  return encryptGrid(displayInGrid(trimmedS, getDimensions(trimmedS)));

}

//Functions for step 1

function removeSpaces(s) {
  let arrayWithoutSpaces = [];
  for (let i = 0; i < s.length ; i++) {
    if (s[i] != " ") {
      arrayWithoutSpaces.push(s[i]);
    }
  }

  return arrayWithoutSpaces.join("")
}


//Functions for step 2

function getDimensions(string) {
  let squareRootOfLength = Math.sqrt((string.length));
  let squareFloor = Math.floor(squareRootOfLength);
  let squareCeil = Math.ceil(squareRootOfLength);

  if (squareFloor * squareCeil >= string.length ) {
    console.log([squareFloor, squareCeil])
    return ([squareFloor, squareCeil]);
  } else {

    return ([squareFloor + 1 , squareCeil])
  }


}

function displayInGrid(s, dimensions) {
  let rows = dimensions[0];
  let cols = dimensions[1];
  // each array in grid is a row
  let grid = [];

  for (let i = 0 ; i < rows ; i++) {
    grid.push([]);
  }

  let currentPos = 0;


  for (let y = 0; y < rows * cols ; y++) {
    let currentLetter = s[currentPos]
    console.log( currentLetter)

    if (currentLetter) {
      grid[Math.floor(currentPos / cols)].push(currentLetter)
    } else {
      grid[Math.floor(currentPos / cols)].push("")
    }

    console.log(grid)
    currentPos++
  }

  console.log("grid: ", grid)

  return grid;

}

//Functions for step 3

function encryptGrid(grid) {

  let encryptedArray = [];
  let rowLength = grid[0].length;
  let colLength = grid.length;

  for (let i = 0; i < rowLength ; i++) {

    for (let y = 0; y < colLength ; y++) {

      encryptedArray.push(grid[y][i])

    }

    encryptedArray.push(' ')

  }

  return encryptedArray.join('');


}

console.log(encryption("feedthedog"))
console.log("expected : fto ehg ee dd")
