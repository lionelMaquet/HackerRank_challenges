function permutationEquation(p) {

    let arr = [];

    for (let i = 1; i <= p.length; i++){

        arr.push(p.indexOf(p.indexOf(i)+1)+1)

    }

    return arr
}

console.log(permutationEquation([4,3,5,1,2]))