// 07:05:45PM

function timeConversion(s) {
    let time = s;
    let hours = parseInt(time.substr(0,2));
    

    if (time.includes('PM')) {

        if (hours >= 0 && hours <= 11) {
            hours += 12
        } 


    } else if (time.includes('AM')) {

        if (hours >= 12 && hours <= 24) {
            hours -= 12
        }

    }

    
    if (hours === 24) {
        hours = '00'
        return time = hours + time.substr(2,6)
    } else if (String(hours).length === 1) {
        return time = '0' + String(hours) + time.substr(2,6)
    }

    return String(hours) + time.substr(2,6)



    



    
}

console.log(timeConversion('07:05:45PM'))