// c = array of clouds (0 is nice, 1 is bad and -2 points)
// k = length of the jump

function jumpingOnClouds(c, k) {

    let energyLevel = 100;
    let pointerPos = 0;

    do {
        pointerPos = (pointerPos + k) % c.length;
        energyLevel -= (1 + c[pointerPos] * 2) ;
    } while ( pointerPos != 0)

    return energyLevel
}

