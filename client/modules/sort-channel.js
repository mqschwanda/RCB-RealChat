// check if two messages have the same owner
let _isChannelInRange = (user, channel) => {
  return Math.abs(user.lat - channel.lat) < 10 && Math.abs(user.long - channel.long) < 10;
};

// determines if a new message should have a header
let _decideIfShowChannel = (user, channel) => {
  // check if the new message has the same sender as the previous message
  if (_isChannelInRange(user, channel)) {
    // set show header based on difference in timestamp between new message and previous message
    channel.inRange = true;
  } else {
    // show header
    channel.inRange = false;
  }
};

// setup each message and its display properties
let _mapMessages = (messages) => {
  let previousMessage;
  // map function calls the provided function once for each element in an array, in order
  return messages.map((message) => {
    // determines if a new message should have a header
    _decideIfShowChannel(previousMessage, message);
    // write message to previous message to prepare for next message post
    previousMessage = message;
    return message;
  });
};

export default function( messages ) {
  return _mapMessages( messages );
}
