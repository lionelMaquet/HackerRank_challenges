// n = length of the array
// k = number to divide the sum by 
// ar = the array of numbers of length n


function divisibleSumPairs(n, k, ar) {

    let numberOfPairs = 0;
    for (let i = 0; i < n ; i ++){

        for (let j = i+1; j < n ; j++) {
            
    
            if ((ar[i] + ar[j]) % k == 0) {
                    
                numberOfPairs++
            }

        }

    }

    return numberOfPairs
}

console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))