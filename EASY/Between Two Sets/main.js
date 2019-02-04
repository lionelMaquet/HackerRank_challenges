function getTotalX(a, b) {


    let numb = 0;
    for (let i = a[a.length-1]; i <= b[0]; i++) {
        
        
             if(a.every(function(curr) {
                return i%curr === 0;
             }) === true && b.every(function(curr) {
                 return curr%i === 0
             }) === true){
                 numb++
             }

    }

    return numb;
    


}

console.log(getTotalX([2,4],[16,32,96]))