
const migratoryBirds = (a,b,c,d) => {
    const race = {

        currA: 0, //initially the start value
        jumpA : 3, 
        currB: 4,
        jumpB : 2,

        nextJump : function() {
            this.currA += this.jumpA; 
            this.currB += this.jumpB;
        },

        samePos : function() {
            if (this.currA == this.currB) {
                return true
            } else {
                return false
            }
        },

        isPossible : function(startA = race.currA,jumpA = race.jumpA,currB = race.currB,jumpB = race.jumpB) { //optional arguments

            race.currA = startA;
            race.jumpA = jumpA;
            race.currB = currB;
            race.jumpB = jumpB;
            console.log(race.currA,race.jumpA,race.currB,race.jumpB)


            if (race.jumpA > race.jumpB) {
                race.bigJump = race.currA;
                race.smallJump = race.currB;
            } else {
                race.bigJump = race.currB;
                race.smallJump = race.currA;
            }

            while (race.bigJump < race.smallJump) {
                race.bigJump = race.currA; // keep it up to date
                race.smallJump = race.currB;
                race.nextJump()
                if (race.samePos() === true) {
                    console.log(race.currA)
                    console.log(race.currB)
                    return true
                }
            }
            console.log(false)
            return false


            // Algorithm goes here
        }

    }

    console.log(race.isPossible(a,b,c,d))
}

migratoryBirds(0,3,4,2)

