const moment = require('moment')

const supportHours = (now) => {

    // Current time formatted correctly
    const currentTime = moment(now).format('HH:mm:ss')
    // The current day of the week.
    const day = moment(now).format('ddd')
    // It weekend?
    const isWeekend = day == 'Sat'|| day == 'Sun'

    // Format variable 
    var format = 'hh:mm:ss'
    var time = moment(currentTime,format)
    
    //Set Support hours
    midweekBeforeTime = moment('07:00:00', format)
    midweekAfterTime = moment('21:07:00', format)
    weekendBeforeTime = moment('08:00:00', format)
    weekendAfterTime = moment('17:00:00', format)
    

    // Is midweek support hours?

    const midweekSupport = time.isBetween(midweekBeforeTime, midweekAfterTime)

    // Is weekend support?

    const weekendSupport = time.isBetween(weekendBeforeTime, weekendAfterTime)

    if (!isWeekend && midweekSupport) {
        return `Hi there how can we help you?`
    } else {
        return `Sorry we missed.`
    }

}


module.exports = supportHours


