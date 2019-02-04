function findDigits(n) {

    let strn = n.toString()
    let numberOfDivs = 0; 
    
    for (let i = 0; i < strn.length; i++) {
        if (n % parseInt(strn[i]) === 0) {
            numberOfDivs++
        }
    }


    return numberOfDivs

}

console.log(findDigits(12345))