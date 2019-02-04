function sockMerchant(n, ar) {

    let diffSocks = [];
    let numPairs = 0


    for (let i = 0; i <n; i++){
        if (!diffSocks.includes(ar[i])) {
            diffSocks.push(ar[i])
        }
    }

    diffSocks.forEach((e) => {
        let temp = 0;
        for (let y = 0; y< n; y++){
            if (ar[y] == e) {
                temp++
            }
        }
        numPairs += Math.floor(temp/2)
    })

    return numPairs

}