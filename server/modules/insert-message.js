/***
  This file contains an export function that will take in a message object and,
  through a series of functions, prepare and insert the message object into our
  database.
***/

// assign owner and timestamp to message object
let _assignOwnerAndTimestamp = (message) => {
  // use the user id from metoer client to identify owner of message
  message.owner = Meteor.userId();
  // create new date as timestamp for message
  message.timestamp = new Date();
};

// reutrn a boolean statement that determins if the user is trying to send a message to themselves
let _checkIfSelf = ({destination, owner}) => { // passing in the message object to this function will work because it contains both arguments as attributes
  return destination === owner;
};

// returns the channel's id from a channel's name
let _getChannelId = (channelName) => {
  // finds the channel object from the database
  let channel = Channels.findOne({name: channelName});
  // if channel exists in database
  if (channel) {
    return channel._id;
  }
};
// returns the user's id from a user's name
let _getUserId = (username) => {
  // finds the user object from the database
  let user = Meteor.users.findOne({username: username});
  // if user exists in database
  if (user) {
    return user._id;
  }
};
// assign the destination to the message object depending on if it is a channel or direct message
let _assignDestination = (message) => {
  if (message.isDirect) { // check if message is to a single user
    // .to is defined for direct message in database
    message.to = _getUserId(message.destination);
  } else { // not direct message means to is a channel message
    // .channel is defined for channel message in database
    message.channel = _getChannelId(message.destination);
  }
};

// replace all aplha charecters with a poop emoji
let _talkShit = (message) => {
  return message.replace(/([a-zA-Z])/g, '💩 ');
};
// add `Meow!` to end of the message
let _catChat = (message) => {
  return message.concat(' MEOW! 🐱');
};
// customize the message content if a channel has a custom function
let _customizeMessage = (message) => {
  // switch the message based on destination
  switch (message.destination) {
    // Talk Shit channel
    // replace all aplha charecters with a poop emoji
    case 'Talk Shit': message.message = _talkShit(message.message);
      break;
    // Cat Chat channel
    // replace all aplha charecters with a poop emoji
    case 'Cat Chat': message.message = _catChat(message.message);
      break;
    // default
    // make no changes to message
    default: return;
  }
};

// escape message with replace function
let _escapeUnwantedMarkdown = (message) => {
  return message.replace(/#/g, '&#35;') // escape header (h1-h6) tags and inline images ![]() in markdown.
                .replace( /(!\[.*?\]\()(.*?)(\))+/g, '&#33;&#91;&#93;&#40;&#41;'); // escape inline images ![]() in markdown.
};
// prune message object of unwanted attributes and escape the message of unwanted markdown
let _cleanUpMessageBeforeInsert = (message) => {
  message.message = _escapeUnwantedMarkdown(message.message); // escape message with replace function
  // delete attributes that are not in database schema
  delete message.destination; // attribute was assigned to the model previously with `_assignDestination(message);` and can now be deleted
  delete message.isDirect; // attribute was used to assign the destination to the model in `_assignDestination(message);` and can now be deleted
};

// insert message into the database
let _insertMessage = (message) => {
  return Messages.insert(message);
};

export default function(message) {
  _assignOwnerAndTimestamp(message); // assign owner and timestamp to message object
  if (!_checkIfSelf(message)) { // reutrn a boolean statement that determins if the user is trying to send a message to themselves
    _assignDestination(message); // assign the destination to the message object depending on if it is a channel or direct message
    _customizeMessage(message); // customize the message content if a channel has a custom function
    _cleanUpMessageBeforeInsert(message); // prune message object of unwanted attributes and escape the message of unwanted markdown
    _insertMessage(message); // insert message into the database
  } else {
    // generate error if message is not to another user (the user is trying to send a message to themselves)
    throw new Meteor.Error( '500', 'Can\'t send messages to yourself.' );
  }
}
