// format timestamp with moment's format function
Template.registerHelper('formatDateTime', (timestamp, format) => {
  if (timestamp && format) return moment(timestamp).format(format);
});
// format timestamp with moment's timezone and format function
Template.registerHelper('formatDateTimeLocal', (timestamp, timezone, format) => {
  if (timestamp && timezone && format) return moment(timestamp).tz(timezone).format(format);
});

Template.registerHelper('messageTimestamp', (timestamp) => {
  if (timestamp) {
    // date format
    let formatDate = 'YYYY-MM-DD',
    // get todays date from moment
        today = moment().format(formatDate),
    // format timestamp with moment
        timestamp = moment(timestamp).format(formatDate),
    // check if timestamp is a day old
        isBeforeToday = moment(today).isAfter(timestamp),
    // format date based on differance in day
        format = isBeforeToday ? 'MMMM Do, YYYY hh:mm a' : 'hh:mm a';
    // return formated timestamp
    return moment(timestamp).format(format);
  }
});
