Meteor.publish('channel', function(isDirect, channel) {
  // run verification on inputs of function
  check(isDirect, Boolean); check(channel, String);
  // check if direct message between users
  if (isDirect) {
    // find user name of direct message destination
    let user = Meteor.users.findOne({username: channel.replace('@', '')});
    // find all messages between both users in channel
    return Messages.find({
      $or: [{owner: this.userId, to: user._id}, {owner: user._id, to: this.userId}]
    });
  } else {
    // find all messages with channel id from channel name
    return Messages.find({channel: Channels.findOne({name: channel})._id});
  }
});
