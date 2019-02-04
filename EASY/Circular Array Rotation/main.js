function circularArrayRotation(a, k, queries) {

    let arr = a;
    let rot = k; 
    let ind = queries;
    let newArr = [];
    let indArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        newArr.splice((i + rot) % arr.length,0, arr[i])

    }

    for (let y = 0; y < ind.length; y++ ) {
        indArr.push(newArr[ind[y]])
    }

    return indArr

}

console.log(circularArrayRotation([0,1,2], 2,[2]))
