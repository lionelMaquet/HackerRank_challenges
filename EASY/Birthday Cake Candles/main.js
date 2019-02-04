function birthdayCakeCandles(ar) {

    let tallest = 0;
    let numbersOfCandles = 0; 

    for (let i = 0; i < ar.length; i++){
        if (ar[i] > tallest){
            tallest = ar[i]
        }
    }

    for (let i = 0; i < ar.length; i++){
        if (ar[i] === tallest) {
            numbersOfCandles++
        }
    }

    return numbersOfCandles


}