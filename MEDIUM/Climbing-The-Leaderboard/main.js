function climbingLeaderboard(scores, alice) {

    let leaderboard = scores;
    let aliceScores = alice; 
    let aliceRankings = [];
    let filteredScores = [];
    
    

    leaderboard.forEach((e) => {

        if (!filteredScores.includes(e)) {
            filteredScores.push(e)
        }

    })

    

    for (let i = 0; i < aliceScores.length; i++) {

        let currRank = 1;

        if (aliceScores[i] < filteredScores[filteredScores.length-1]) {
            
            aliceRankings.push(filteredScores.length+1)
            
        } else {
            
            for (let j = 0; j < filteredScores.length; j++) {

                if (aliceScores[i] >= filteredScores[j]) {
                    aliceRankings.push(currRank);
                    break
                } else {
                    currRank++
                }
            }


        }

    }

    return aliceRankings

}

console.log(climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]))
console.log(6,5,4,2,1)
