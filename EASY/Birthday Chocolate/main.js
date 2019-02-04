function birthday(s, d, m) {

    let sum = d;
    let len = m;
    let possibilities = 0;

    for (let i = 0; i < s.length-(len-1); i++){
        let temp = [];

        for (let y = 0; y < len; y++) {
            temp.push(s[i+y])
        }
        if (temp.reduce((a, b) => a + b, 0) == sum){
            possibilities++
        }
    }

    return possibilities


}