// [1,1,2,3]

const migratoryBirds = (arr) => {

    //étape 1 : compter chaque élément 

    let repOfEach = [];
    let numsDone = [];

    for (let i = 0; i < arr.length; i ++) {

        if (!numsDone.includes(arr[i])){
        numsDone.push(arr[i])
        let repsOfI = 0;
        for (let y = 0; y < arr.length; y++) {
            if (arr[y] === arr[i]) {
                repsOfI++
            }
        };
        repOfEach.push([arr[i],repsOfI])}

    }

    //étape 2 : choisir le/les meilleurs scores


    let highestRep = {
        best : 1,
        birds : []
    }


    for (let u = 0; u < repOfEach.length; u++){
        if (repOfEach[u][1] > highestRep.best) {
            highestRep.best = repOfEach[u][1];
            highestRep.birds = [repOfEach[u]]
        } else if (repOfEach[u][1] == highestRep.best) {
            highestRep.birds.push(repOfEach[u])
        }
    }

    //étape 3 : Si égalité, choisir le nombre le plus petit 


    if (highestRep.birds.length === 1) {
        return highestRep.birds[0][0]
    } else if (highestRep.birds.length > 1) {
        let smallest = highestRep.birds[0][0];
        for (let x = 0; x < highestRep.birds.length ; x++) {
            if (highestRep.birds[x][0] < smallest) {
                smallest = highestRep.birds[x][0]
            }
        }
        return smallest
    }


}

console.log(migratoryBirds([1,2,2,2,3,4,4,4]))