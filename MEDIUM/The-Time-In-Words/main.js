



function timeInWords(h, m) {

  // every other functions

  let hours = "one two three four five six seven eight nine ten eleven twelve"
  hours = hours.split(' ')

  let minutes = `one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,quarter,sixteen,seventeen,eighteen,nineteen,twenty,twenty one,twenty two,twenty three,twenty four,twenty five,twenty six,twenty seven,twenty eight,twenty nine,half`

  minutes = minutes.split(',')

  function get_hours(hour) {
    return hours[hour-1]
  }

  function get_minutes(mins) {
    if (mins == 0) {
      return "o' clock"
    } else if (mins == 15 || mins == 45) {
      return "quarter"
    } else if (mins <= 30) {

      if (mins == 1) {
        return `${minutes[mins-1]} minute`
      } else if (mins == 30) {
        return minutes[mins-1]
      } else {
        return `${minutes[mins-1]} minutes`
      }

    } else if (mins > 30) {

      if (mins == 59) {
        return `${minutes[60-mins-1]} minute`
      } else {
        return `${minutes[60-mins-1]} minutes`
      }

    }
  }


  // main function


  if (m == 0) {
    return `${get_hours(h)} ${get_minutes(m)}`
  } else if (h == 12 && m > 30) {
    return `${get_minutes(m)} to ${get_hours((h+1)%12)}`
  }

  else if (m > 30) {
    return `${get_minutes(m)} to ${get_hours(h+1)}`
  } else {
    return `${get_minutes(m)} past ${get_hours(h)}`
  }

}

console.log(timeInWords(7,29))
