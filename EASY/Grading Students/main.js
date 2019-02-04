function gradingStudents(grades) {
    
    let roundedGrades = [];

    grades.forEach((n) => {

        if (n >= 38) {   

            if (n % 5 > 2) {
                roundedGrades.push(n + (5 - n%5))
            } else {
                roundedGrades.push(n)
            }

        } else {
            roundedGrades.push(n)
        }

    })

    return roundedGrades
    

}

console.log(gradingStudents([73,67,38,33]))
console.log('75,67,40,33')