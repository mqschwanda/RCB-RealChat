import handleChannelSwitch from '../../modules/handle-channel-switch';
import sortMessages from '../../modules/sort-messages';
import handleMessageInsert from '../../modules/handle-message-insert';

// set up reactive variables when a template is created
Template.channel.onCreated( () => {
  let template = Template.instance();
  template.subscribe('users');
  handleChannelSwitch(template);
});

// Template.channel.onRendered( () => {
//   let usersTyping = () => {
//     // an array to hold users
//     let users = [];
//
    // Presences.find({
    //   userId: {$exists: true},
    //   state: {typingInChannel: FlowRouter.getParam('channel')}
    // }).forEach(function(presence) {
    //   // check the user is not the same as the client user
    //   if (presence.userId !== Meteor.userId()) {
    //     // push each user that is typing into an array
    //     users.push(Meteor.users.findOne(presence.userId).username);
    //   }
    // });
  //   // build a string if only one user is typing
  //   if (users.length === 1) return `${users[0]} is typing`;
  //     // handle multiple users typing at once
  //     else if (users.length > 1) {
  //       // slice last object in array
  //       let initial = users.slice(0, users.length - 1);
  //       // return the last user in the array
  //       let lastUser = users[users.length - 1];
  //       //
  //       return `${initial.join(', ')} and ${lastUser} are typing`;
  //     }
  //   } else return 'crickets....';
  // });


Template.channel.helpers({
  // check if template is loading
  isLoading() {
    return Template.instance().loading.get();
  },
  // check if channel or chatroom
  isDirect() {
    return Template.instance().isDirect.get();
  },
  // get the name of the channel or username the messages are being sent to
  channel() {
    return FlowRouter.getParam('channel');
  },
  // messages object
  messages() {
    // get messages from database
    let messages = Messages.find({}, {sort: {timestamp: 1}});
    // return the display properties of the messages
    if (messages) return sortMessages(messages);
  },
  // // handle users typing
  usersTyping() {
    // an array to hold users
    let users = [];
    // Presences.find({
    //   userId: {$exists: true},
    //   state: {typingInChannel: FlowRouter.getParam('channel')}
    // }).forEach(function(presence) {
    //   // check the user is not the same as the client user
    //   if (presence.userId !== Meteor.userId()) {
    //     // push each user that is typing into an array
    //     users.push(Meteor.users.findOne(presence.userId).username);
    //   }
    // });
    // build a string if only one user is typing
    if (users.length === 1) return `${users[0]} is typing`;
      // handle multiple users typing at once
      else if (users.length > 1) {
        // slice last object in array
        let initial = users.slice(0, users.length - 1);
        // return the last user in the array
        let lastUser = users[users.length - 1];
        //
        return `${initial.join(', ')} and ${lastUser} are typing`;
      } else return 'crickets... no one is typing...';
    }
  });
// });

Template.channel.events({
  // keyup handler inside message input
  'keyup [name="message"]' (event, template) {
    // run validation and insertion on event from template
    handleMessageInsert(event, template);
  }
});
