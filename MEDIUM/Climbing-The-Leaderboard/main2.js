function climbingLeaderboard(scores, alice) {


    let ldb = [];
    let ranks = [];

    scores.forEach((e) => {
        if (!ldb.includes(e)) {
            ldb.push(e)
        }
    });


    let origLDB = ldb.slice()


    function binarySearch(arr, val, originalArray) {

        let currArr = arr;
        let orig = originalArray;
        let pointer = Math.round((currArr.length -1)/2)
        

        if (val >= currArr[pointer] )  {
    
            if (val < currArr[pointer-1]) {
                ldb = ldb.splice(0,orig.indexOf(currArr[pointer])+1)
                ranks.push(orig.indexOf(currArr[pointer])+1)

            } else { 
                binarySearch(currArr.slice(0,pointer), val, orig)
            }
    
        } else {
            binarySearch(currArr.slice(pointer), val, orig)
        }
    
    }

   
    if ()
    

    for (let i = 0; i < alice.length; i++){

        if (alice[i] >= ldb[0]) {
            ranks.push(1)
        } else if (alice[i] < ldb[ldb.length-1]) {
            ranks.push(ldb.length+1)
        } else {

            binarySearch(ldb,alice[i], origLDB)

        }

    }
    return ranks;
}



console.log(climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]))


