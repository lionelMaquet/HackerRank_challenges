// s = position left of house 
// t = position right of house 
// a = position of apple tree (left)
// b = position of orange tree (right)
// apples = array with distances of apples from their tree 
// oranges = array with distances of oranges from their tree




function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInRange = 0;
        for (let i = 0; i < apples.length; i++){
            if (apples[i] + a <= t && apples[i] + a >= s) {
                applesInRange++
            }
        }

    let orangesInRange = 0;
        for (let u = 0; u < oranges.length; u++){
            if (oranges[u] + b <= t && oranges[u] + b >= s) {
                orangesInRange++
            }
        }

        console.log(applesInRange)
        console.log(orangesInRange)

        return [applesInRange,orangesInRange]

}
