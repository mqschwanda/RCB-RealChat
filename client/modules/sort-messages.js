// get the time difference in minutes between two times
let _getTimeDifference = (previousTime, currentTime) => {
  // use moment to format both times
  let previous = moment(previousTime),
      current = moment(currentTime);
  // get difference between two dates in minutes
  return moment(current).diff(previous, 'minutes');
}

// check if two messages have the same owner
let _checkIfOwner = (previousMessage, message) => {
  return typeof previousMessage !== 'undefined' && previousMessage.owner === message.owner;
};

// determines if a new message should have a header
let _decideIfShowHeader = (previousMessage, message) => {
  // check if the new message has the same sender as the previous message
  if (_checkIfOwner(previousMessage, message)) {
    // set show header based on difference in timestamp between new message and previous message
    message.showHeader = _getTimeDifference(previousMessage.timestamp, message.timestamp) >= 5;
  } else {
    // show header
    message.showHeader = true;
  }
};

// setup each message and its display properties
let _mapMessages = (messages) => {
  let previousMessage;
  // map function calls the provided function once for each element in an array, in order
  return messages.map((message) => {
    // determines if a new message should have a header
    _decideIfShowHeader(previousMessage, message);
    // write message to previous message to prepare for next message post
    previousMessage = message;
    return message;
  });
};

export default function( messages ) {
  return _mapMessages( messages );
}
