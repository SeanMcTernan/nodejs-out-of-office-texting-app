const moment = require('moment')

const testing = (now) => {
const currentTime = moment(now).format('HH:mm:ss')
console.log(currentTime)
var format = 'hh:mm:ss'


var time = moment(currentTime,format)
  beforeTime = moment('07:00:00', format)
  afterTime = moment('21:52:00', format)

if (time.isBetween(beforeTime, afterTime)) {

  console.log(`${time} is between ${beforeTime} and ${afterTime}`)

} else {

  console.log(`${time} is not between ${beforeTime} and ${afterTime}`)

}

}
const now = moment().utcOffset("-05:00")
testing(now)