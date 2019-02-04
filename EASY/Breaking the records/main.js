function breakingRecords(scores) {

    let high = scores[0];
    let low = scores[0];
    let numHigh = 0;
    let numLow = 0;

    for (let i = 1; i < scores.length; i ++) {
        if (scores[i] > high) {
            high = scores[i];
            numHigh++
        } else if (scores[i] < low){
            low = scores[i]
            numLow++
        }
    }

    return [numHigh,numLow]


}