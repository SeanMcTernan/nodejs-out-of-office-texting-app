const moment = require("moment");

const supportHours = now => {
  //Set Variables
  // Current day & time formatted correctly
  const day = moment(now).format("ddd");
  const currentTime = moment(now).format("HH:mm:ss");
  // It weekend?
  const isWeekend = day == "Sat" || day == "Sun";
  // Format variable
  const format = "hh:mm:ss";
  const time = moment(currentTime, format);

  //Set Support hours
  midweekBeforeTime = moment("08:00:00", format);
  midweekAfterTime = moment("21:00:00", format);
  weekendBeforeTime = moment("09:00:00", format);
  weekendAfterTime = moment("17:00:00", format);
  amHoursBefore = moment("00:00:00", format);
  amHoursAfter = moment("08:59:59", format);
  // Is midweek support hours?
  const midweekSupport = time.isBetween(midweekBeforeTime, midweekAfterTime);
  // Is weekend support?
  const weekendSupport = time.isBetween(weekendBeforeTime, weekendAfterTime);
  //Is early hours of the morning?
  const amHours = time.isBetween(amHoursBefore, amHoursAfter);

  //Midweek Responses

  if (!isWeekend) {
    if (midweekSupport) {
      return "Hi there, how can we help you today?";
    } else if (day != "Fri" && !amHours) {
      return "Sorry we missed you! We'll be back tomorrow at 9am ET. We'll reach out then! - SimpleTexting Team";
    } else if (day != "Fri") {
      return "Sorry we missed you! We'll be back later at 9am ET. We'll reach out then! - SimpleTexting Team";
    } else if (day == "Fri" && amHours) {
      return "Sorry we missed you! We'll be back later at 9am ET. We'll reach out then! - SimpleTexting Team";
    } else {
      return "Sorry we missed you! We'll be back tomorrow at 10am ET. We'll reach out then! - SimpleTexting Team";
    }
  }

  //Weekend Responses
  else {
    if (weekendSupport) {
      return "Hi there, how can we help you today?";
    } else if (day != "Sun" && !amHours) {
      return "Sorry we missed you! We'll be back tomorrow at 10am ET. We'll reach out then! - SimpleTexting Team";
    } else if (day != "Sun") {
      return "Sorry we missed you! We'll be back later at 10am ET. We'll reach out then! - SimpleTexting Team";
    } else if (day == "Sun" && amHours) {
      return "Sorry we missed you! We'll be back later at 10am ET. We'll reach out then! - SimpleTexting Team";
    } else {
      return "Sorry we missed you! We'll be back tomorrow at 9am ET. We'll reach out then! - SimpleTexting Team";
    }
  }
};

module.exports = supportHours;
