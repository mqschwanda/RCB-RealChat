/***
  This file contains an export function that will take in a message object and,
  through a series of functions, prepare and insert the message object into our
  database.
***/


// returns the channel's id from a channel's name
let _getChannelId = (channelName) => {
  // finds the channel object from the database
  let channel = Channels.findOne({name: channelName});
  // if channel exists in database
  if (channel) {
    return channel._id;
  }
};

// use the user id from metoer client to identify owner of message
let _assignOwnerAndChannel = (message) => {
  message.owner = Meteor.userId(); // assign owner to message object
  message.channel = _getChannelId(message.destination);
};

// reutrn a boolean statement that determins if the user is trying to send a message to themselves
let _checkIfSelf = ({destination, owner}) => { // passing in the message object to this function will work because it contains both arguments as attributes
  return destination === owner;
};


// assign the destination to the message object depending on if it is a channel or direct message
let _assignTyping = (message) => {
    Meteor.users.update({_id: message.owner}, {$set: {'status.typingInChannel': message.channel}});
};

export default function(message) {
  _assignOwnerAndChannel(message); // use the user id from metoer client to identify owner of message
  _assignTyping(message); // assign the destination to the message object depending on if it is a channel or direct message

  // if (!_checkIfSelf(message)) { // reutrn a boolean statement that determins if the user is trying to send a message to themselves
  // } else {
  //   // generate error if message is not to another user (the user is trying to send a message to themselves)
  //   throw new Meteor.Error( '500', 'Can\'t send messages to yourself.' );
  // }
}
